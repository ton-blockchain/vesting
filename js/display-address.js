const VestingDisplayAddress = (() => {
    const BATCH_SIZE = 64;
    const MAX_CONCURRENCY = 4;
    const TIMEOUT_MS = 10000;
    const linkRequests = new WeakMap();

    /**
     * @param value {string | TonWeb.Address}
     * @return {string | null} Uppercase raw identity, or null for invalid input.
     */
    const raw = (value) => {
        try {
            const parsed = new TonWeb.Address(value);
            const result = parsed.toString(false).toUpperCase();
            if (typeof value === 'string' && !parsed.isUserFriendly && value.toUpperCase() !== result) return null;
            return result;
        } catch (error) {
            return null;
        }
    };

    const checkedFriendly = (value, account, isTestnet) => {
        if (typeof value !== 'string') return null;
        try {
            const parsed = new TonWeb.Address(value);
            if (!parsed.isUserFriendly || parsed.isTestOnly !== isTestnet || raw(parsed) !== account) return null;
            return parsed.toString(true, true, parsed.isBounceable, isTestnet);
        } catch (error) {
            return null;
        }
    };

    const fallbackFor = (account, isTestnet, previous, original) => account
        ? checkedFriendly(previous, account, isTestnet)
            || checkedFriendly(original, account, isTestnet)
            || new TonWeb.Address(account).toString(true, true, true, isTestnet)
        : '';

    /**
     * @param values {(string | TonWeb.Address)[]}
     * @param isTestnet {boolean} Selected network, independent of input flags.
     * @param apiKey {string}
     * @param previous {(string | undefined)[]} Optional fallback presentation by index.
     * @return {Promise<string[]>} Input order and duplicates preserved; invalid input is ''.
     * Fallback preserves validated previous or input presentation and does not classify the account.
     */
    async function resolve(values, isTestnet, apiKey, previous = []) {
        const accounts = values.map(raw);
        const fallback = accounts.map((account, i) => fallbackFor(account, isTestnet, previous[i], values[i]));
        const unique = [...new Set(accounts.filter(Boolean))];
        if (!unique.length) return fallback;
        const batches = [];
        for (let i = 0; i < unique.length; i += BATCH_SIZE) batches.push(unique.slice(i, i + BATCH_SIZE));
        const controller = new AbortController();
        const entries = new Map();
        const getAddresses = () => accounts.map((account, i) => entries.get(account) || fallback[i]);
        let nextBatch = 0;
        let timeout;
        const worker = async () => {
            while (!controller.signal.aborted && nextBatch < batches.length) {
                const batch = batches[nextBatch++];
                const params = new URLSearchParams();
                batch.forEach(account => params.append('address', account));
                try {
                    const response = await fetch(`https://${isTestnet ? 'testnet.' : ''}toncenter.com/api/v3/addressBook?${params}`, {
                        headers: { 'X-API-Key': apiKey }, signal: controller.signal,
                    });
                    if (controller.signal.aborted) return;
                    if (!response.ok) continue;
                    const book = await response.json();
                    if (controller.signal.aborted) return;
                    if (!book || typeof book !== 'object' || Array.isArray(book)) continue;
                    const requested = new Set(batch);
                    for (const [key, entry] of Object.entries(book)) {
                        const account = raw(key);
                        if (!requested.has(account)) continue;
                        const friendly = checkedFriendly(entry?.user_friendly, account, isTestnet);
                        if (friendly) entries.set(account, friendly);
                    }
                } catch (error) {
                }
            }
        };
        const resolveBatches = async () => {
            await Promise.all(Array.from({ length: Math.min(MAX_CONCURRENCY, batches.length) }, worker));
            return getAddresses();
        };
        try {
            return await Promise.race([
                resolveBatches(),
                new Promise(finish => {
                    timeout = setTimeout(() => {
                        controller.abort();
                        finish(getAddresses());
                    }, TIMEOUT_MS);
                }),
            ]);
        } catch (error) {
            return getAddresses();
        } finally {
            clearTimeout(timeout);
        }
    }

    const write = (node, address, isTestnet) => {
        node.style.display = address ? '' : 'none';
        node.removeAttribute('aria-busy');
        node.removeAttribute('aria-label');
        node.textContent = '';
        if (!address) {
            delete node.dataset.displayAddress;
            node.removeAttribute('href');
            return;
        }
        node.append(address.slice(0, 24), document.createElement('wbr'), address.slice(24));
        node.dataset.displayAddress = address;
        node.href = `https://${isTestnet ? 'testnet.' : ''}tonscan.org/address/${address}`;
    };

    /**
     * @param nodes {HTMLAnchorElement[]} Non-null anchors, aligned with values by index.
     * @param values {(string | TonWeb.Address)[]}
     * @param isTestnet {boolean}
     * @param apiKey {string}
     * @param isCurrent {() => boolean} Whether the initiating screen/load is still current.
     * @return {Promise<void>} Hides links until current API results or a bounded fallback are ready.
     */
    async function setLinks(nodes, values, isTestnet, apiKey, isCurrent = () => true) {
        if (!isCurrent()) return;
        const requestToken = {};
        const previous = nodes.map(node => node.dataset.displayAddress);
        nodes.forEach(node => {
            linkRequests.set(node, requestToken);
            node.textContent = '';
            node.removeAttribute('href');
            node.style.display = 'none';
            node.setAttribute('aria-busy', 'true');
            node.setAttribute('aria-label', 'Loading address');
        });
        const addresses = await resolve(values, isTestnet, apiKey, previous);
        nodes.forEach((node, i) => {
            if (linkRequests.get(node) === requestToken && isCurrent() && node.isConnected) {
                write(node, addresses[i], isTestnet);
            }
        });
    }

    return { raw, resolve, setLinks };
})();
