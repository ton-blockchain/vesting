const NOMINATOR_POOL_CODE_HASH = 'mj7BS8CY9rRAZMMFIiyuooAPF92oXuaoGYpwle3hDc8=';
const SINGLE_NOMINATOR_1_0_CODE_HASH = 'pCrmnqx2/+DkUtPU8T04ehTkbAGlqtul/B2JPmxx9bo=';
const SINGLE_NOMINATOR_1_1_CODE_HASH = 'zA05WJ6ywM/g/eKEVmV6O909lTlVrj+Y8lZkqzyQT70=';

class PoolContract extends TonWeb.Contract {
    constructor(provider, options) {
        // <{ SETCP0 ACCEPT
        //    "pool.fif" include PUSHREF SETCODE
        // }>c
        const INIT_POOL_CODE_HEX = 'B5EE9C7241023B010009CC00010EFF00F80088FB04010114FF00F4A413F4BCF2C80B0202016203040202CE0506020120141502012007080065421D749AB02705203AA008E23AA0303F00114A002A45301BA8E1323D74AC0019C5B01D430D020D749AB021270DEDE02E46C218047F3E09DBC400B434C0FE900C083E9100DC6C23C88C4CCCC835D2708FE3C5200835C874C7CC2084139CDD12EE80B6CF2C38C02497C0F8B800F4C7F6CF1584B000202209200A004F34C1C069B40830BFFCB852483042B729BE4830BFFCB8524830443729B80830BFC870442C3CB852600330DB3C5610C00193705711DE104C103B4A98DB3C085533DB3C200D13042CE30F5540DB3C105C104B103A497810561045103440330B0C0D0E03A257121110D30721C07922C06EB122C06423C077B121B1F2E04020B39E21D15616C000F2BD56152EBDF2BEDE22C064E30022C077925717E30D11168E1330041115040311140302111302571157115F03E30D0F101103341111D33F56165616DB3CE30F0B11100B10BF10BE10BD10BC10AB2223240028C88101001026CF0113CB0FCB0F01FA0201FA02C90104DB3C1302D8810100561652A2F40E6FA120B3951112A41112DE56122EBBF2E04182103B9ACA0001111B01A120C200F2E042111A8E82DB3C93307020E25613C0009401561AA094561AA001E25301A02CBEF2E0432AD765755614B603AA00B609B9F2E04401DB3C81010012561740BBF44308302603A45611C0008F2156150410391028011118011111DB3C015618A18212540BE400BE8E845613DB3CDE8EA3571781010056155292F40E6FA131F2E045C88101001256164099F4435613DB3C4F0702E24F1F5077062A313102FE5614C0FF56142DBAB0B38E9D1114C000F2E07981010056135272F40E6FA1F2E07ADB3C30C200F2E07B925714E211148020F00201D11113C079561356118307F40E6FA120B38E1982103B9ACA005613D76595800F7AA984E401111801BEF2E07B925717E2561695F404D31F3094306DF823E25614228307F40E6FA131F2D07C3012016CF82303C8CA0013CB1F021114018307F443C8F40001111201CB1F02011112010F8307F44311128E830DDB3C913DE20C11100C10BF10BC31004A0CC8CB071BCB0F5009FA025007FA0215CC13F400F400CB1FCBFFCB07CB1FCB1FF400C9ED5402012016170201201A1B0109BBF19DB3C82002016218190175AF3BED9E2B882F87B6ACC183FA0737D0F97042FA02183FC70FC0808029107A3E37D2904F816900698F98112CB781A802378101C8997100D9F32DC0200109AC8B6D9E403402016E1C1D015DBBD05DB3C57105F0F6D7F8E1F228307F47C6FA5208E1002F40431D31F3052106F0250036F02029132E201B3E630318200201201E1F0117AE3EED9E0837AF8798B759C0200276AA39DB3C5F06509A5F096D7F8EA98101005230F47C6FA5208E9802DB3C810100546380F40E6FA1312355206F0450036F02029132E201B3E6135F0320300244AB59DB3C5F06509A5F098101002359F40E6FA1F2E056DB3C8101004430F40E6FA13120300154ED44D0D307D30FFA00FA00D401D0DB3C05F404F404D31FD3FFD307D31FD31FF4043010BC10AB109A108921001C810100D701D30FD30FFA00FA0030001E01C0FF71F833D0810100D70358BAB001E85B5712571257125712F8008210F96F732452E0BA8EB93B11117009A15380C1019A5088A020C100923727DE8E16305305A8812710A9045301BC923020DE5188A008A107E25077DB3C270A11110A080A925712E22AC0018E198210EE6F454C52D0BA92703BDE8210F374484C1DBA92723ADE913CE22504B85613C2005614C108B0821047657424561501BAB182104E73744B561501BAB1F2E0465613C001305613C0028F24D3071039102856180201111201DB3C5619A18212540BE400BE8E845614DB3CDE11104870DE5613C003E3005613C0062731282903BA707F8E988101005230F47C6FA5208E8702DB3C3013A0029132E201B3E6306D7F8F378101005240F47C6FA5208F2602DB3C25C2009F547715A98412A020C100923070DE01DEA070DB3C8101005412015055F443029132E201B3E6145F04303026000EC858FA0201FA020172707F218EB0810100542270F47C6FA532218E9C3254411348705266DB3C5217BA05A45304BE927F36DE103847634550DE01B322B112E65F04012A0268810100D7018101005462A0F40E6FA131F2E0474930185618011112DB3C015619A18212540BE400BE8E845614DB3CDE11104870122A3104D68F2024C103F2E071DB3C6C21F9005360BD99343503A44413F823039130E25614DB3CDE5613C0078EB7F8237F8E2C56148307F47C6FA5208E1C02F40431D31F305230A18208278D00BC9A2011168307F45B301115DE9132E201B3E65B5614DB3CDE821047657424561401BA3531312B03B2810100546550F40E6FA1F2BCDB3CA08212540BE4005230A15210BC93306C14E0810100544666F45B30810100544655F45B3001A55124A182103B9ACA005250BE8F11705006DB3C6D80101023102670DB3C1023923434E24330303A3904E08F3024C201F2E06F24C202F82325A124A63CBCB1F2E070821047657424C8CB1F5220CB3FC9DB3C708018804010341023DB3CDE5613C0048E235616C0FF56162FBAB0F2E04982103B9ACA0001111901A120C200F2E04A51EEA00E1118DE5613C005925714E30D82104E73744B561301BA38392C2D04A85611C000F2E04A5616C0FF56162FBAB0F2E04BFA0021C200F2E04E29DB3C8212540BE400561A01A101A15220BBF2E04C51F1A120C100923070DE7F2FDB3C6D8010245970DB3C561858A15619A18212540BE400BE2E3A392F014E8E173005111605041115040311140302111302571157115F04E30D0F11100F10EF10DE10CD10BC32013E707F8E988101005230F47C6FA5208E8702DB3CA013A0029132E201B3E6303130011C8E841114DB3C925714E20D11130D31000AFA00FA00300114706D8010804072A0DB3C3904D63E5F050FC0FF51E6BA1EB0F2E04E08C000F2E04F25F2E05082103B9ACA001FBEF2E05609FA0020DB3C82103B9ACA005230A18218746A5288005240BEF2E0518212540BE40001111001A15230BBF2E052535FBEF2E0532EDB3C5260BEF2E0542D6EF2E05571DB3C31F9007033343536001CD3FF31D31FD31F31D3FF31D431D100848028F833206E985B8218178411B200E0D0D30731FA00D31FD30FD30FD30F31D30F31D30FD30F305053A8AB075033A8AB075023A8AB0759A8AB075220A9B41FA0B60800268022F83320D0D30701C012F289D31FD31F3058035CDB3CDB3C1110C8CB1F1CCB3F5006CF16C9801871041110041038DB3C0E11100E1F103E102D10BC107B50990743133738390022800FF833D0D31F31D31F31D31F31D70B1F011A71F833D0810100D7037F01DB3C3A0048226EB32091719170E203C8CB055006CF165004FA02CB6A039358CC019130E201C901FB00001C74C8CB0212CA07810100CF01C9D005B640B8';

        options.wc = -1;
        options.code = TonWeb.boc.Cell.oneFromBoc(INIT_POOL_CODE_HEX);
        super(provider, options);
    }

    createDataCell() {
        const data = this.options.data;

        const cell = new TonWeb.boc.Cell();
        cell.bits.writeUint(0, 8); // state
        cell.bits.writeUint(0, 16); // nominators_count
        cell.bits.writeCoins(0); // stake_amount_sent
        cell.bits.writeCoins(0); // validator_amount
        const configCell = new TonWeb.boc.Cell();
        configCell.bits.writeUint(data[4], 256); // validator_address
        configCell.bits.writeUint(data[5], 16); // validator_reward_share
        configCell.bits.writeUint(data[6], 16); // max_nominators_count
        configCell.bits.writeCoins(data[7]); // min_validator_stake
        configCell.bits.writeCoins(data[8]); // min_nominator_stake
        cell.refs[0] = configCell;
        cell.bits.writeBit(false); // nominators
        cell.bits.writeBit(false); // withdraw_requests
        cell.bits.writeUint(0, 32); // stake_at
        cell.bits.writeUint(0, 256); // saved_validator_set_hash
        cell.bits.writeUint(0, 8); // validator_set_changes_count
        cell.bits.writeUint(0, 32); // validator_set_change_time
        cell.bits.writeUint(0, 32); // stake_held_for
        cell.bits.writeBit(false); // config_proposal_votings
        return cell;
    }
}

const SUCCESS = 'SUCCESS';
const INVALID = 'INVALID';
const NO_RESPONSE = 'NO_RESPONSE';

/**
 * @param tonweb    {TonWeb}
 * @param poolAddress   {string} in raw form
 * @return {Promise<{status: 'SUCCESS' | 'INVALID' | 'NO_RESPONSE', text: string}>}
 */
const checkPool = async (tonweb, poolAddress) => {
    const data = await tonweb.provider.call2(poolAddress, 'get_pool_data');

    const poolContract = new PoolContract(null, {data: data});
    /** @type {string} */
    const address = (await poolContract.getAddress()).toString(false);

    if (poolAddress !== address) {
        return {
            status: INVALID,
            text: 'ADDING NOMINATOR-POOL TO THE WHITELIST IS PROHIBITED! INVALID NOMINATOR POOL: Invalid init state of contract'
        };
    }

    /** @type {number} */
    const rewardShare = data[5];
    /** @type {number} */
    const maxNominatorsCount = data[6];
    /** @type {BN} */
    const minValidatorStake = data[7];
    /** @type {BN} */
    const minNominatorStake = data[8];

    return {
        status: SUCCESS,
        text: `ADDING NOMINATOR-POOL TO THE WHITELIST IS PROHIBITED! Nominator Pool: ${rewardShare / 100}% validator reward, ${maxNominatorsCount} max nominators, ${TonWeb.utils.fromNano(minValidatorStake)} TON min validator stake, ${TonWeb.utils.fromNano(minNominatorStake)} TON min nominator stake.`
    }
}

/**
 * @param tonweb    {TonWeb}
 * @param poolAddress {Address} in raw form
 * @param version {string}
 * @return {Promise<{status: 'SUCCESS' | 'INVALID' | 'NO_RESPONSE', text: string}>}
 */
const checkSingleNominator = async (tonweb, poolAddress, version) => {
    const data = await tonweb.provider.call2(poolAddress, 'get_roles');

    /** @type {Address} */
    const ownerAddress = data[0].beginParse().loadAddress();
    /** @type {Address} */
    const validatorAddress = data[1].beginParse().loadAddress();

    return {
        status: SUCCESS,
        text: 'Single nominator ' + version + ', owner is ' + ownerAddress.toString(true, true, true) + ' (MUST BE EQUAL VESTING-WALLET ADDRESS), validator is ' + validatorAddress.toString(true, true, true)
    };
}

/**
 * @param codeBase64 {string}
 * @param codeHashBase64 {string}
 * @return {Promise<boolean>}
 */
const codeEquals = async (codeBase64, codeHashBase64) => {
    const cell = await TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(codeBase64));
    const hash = await cell.hash();

    return TonWeb.utils.bytesToBase64(hash) === codeHashBase64;
}

/**
 * @param tonweb    {TonWeb}
 * @param address {Address}
 * @return {Promise<{status: 'SUCCESS' | 'INVALID' | 'NO_RESPONSE', text: string}>}
 */
const checkSmartContract = async (tonweb, address) => {
    try {
        /** @type {string} */
        const addressString = address.toString(false);
        /** @type {string} */
        const addressFormatted = address.toString(true, true, true);

        if (addressString === '-1:3333333333333333333333333333333333333333333333333333333333333333') {
            return {
                status: SUCCESS,
                text: 'Elector. Note that vesting-wallet NEED TO BE in masterchain.'
            }
        }

        if (addressString === '-1:5555555555555555555555555555555555555555555555555555555555555555') {
            return {
                status: SUCCESS,
                text: 'Config. No need to add it to the whitelist.'
            }
        }

        const info = await tonweb.provider.getAddressInfo(addressString);
        if (info.state === 'uninitialized') {
            return {
                status: SUCCESS,
                text: 'Uninitialized account. There is no way to determine the type.'
            }
        }
        if (info.state === 'frozen') {
            return {
                status: INVALID,
                text: 'Frozen account! UNFREEZE IT BEFORE ADDING TO THE WHITELIST'
            }
        }

        // Check for predefined Bemo v2 addresses
        const bemoV2TreasuryMainnet = 'EQCSxGZPHqa3TtnODgMan8CEM0jf6HpY-uon_NMeFgjKqkEY';
        const bemoV2TreasuryTestnet = 'kQA8BUb8WZ18ZKXikEnGzor2dcd_DW8n-kSbclqUAo0N7iS9';

        if (addressFormatted === bemoV2TreasuryMainnet || addressFormatted === bemoV2TreasuryTestnet) {
            return {
                status: SUCCESS,
                text: 'Bemo v2 Treasury'
            }
        }

        // Check for predefined Bemo v1 addresses
        const bemoV1TreasuryMainnet = 'EQDNhy-nxYFgUqzfUzImBEP67JqsyMIcyk2S5_RwNNEYku0k';
        const bemoV1TreasuryTestnet = 'kQBmnSQ8Bd2ZfeTlgbkPhCPlol8BBeGFtS2tGVtvPwV3wBok';

        if (addressFormatted === bemoV1TreasuryMainnet || addressFormatted === bemoV1TreasuryTestnet) {
            return {
                status: SUCCESS,
                text: 'Bemo v1 Treasury'
            }
        }

        // Check for predefined KTON addresses
        const ktonPoolMainnet = 'EQDsW2P6nuP1zopKoNiCYj2xhqDan0cBuULQ8MH4o7dBt_7a';
        const ktonPoolTestnet = 'kQD2y9eUotYw7VprrD0UJvAigDVXwgCCLWAl-DjaamCHniVr';
        
        if (addressFormatted === ktonPoolMainnet || addressFormatted === ktonPoolTestnet) {
            return {
                status: SUCCESS,
                text: 'KTON Premium'
            }
        }
        
        // Check for predefined Hipo addresses
        const hipoTreasuryMainnet = 'EQCLyZHP4Xe8fpchQz76O-_RmUhaVc_9BAoGyJrwJrcbz2eZ';
        const hipoTreasuryTestnet = 'kQAlDMBKCT8WJ4nwdwNRp0lvKMP4vUnHYspFPhEnyR36cg44';
        
        if (addressFormatted === hipoTreasuryMainnet || addressFormatted === hipoTreasuryTestnet) {
            return {
                status: SUCCESS,
                text: 'Hipo Treasury'
            }
        } else if (await codeEquals(info.code, NOMINATOR_POOL_CODE_HASH)) {

            return checkPool(tonweb, addressString);

        } else if (await codeEquals(info.code, SINGLE_NOMINATOR_1_0_CODE_HASH)) {

           return checkSingleNominator(tonweb, addressString, '1.0');

        } else if (await codeEquals(info.code, SINGLE_NOMINATOR_1_1_CODE_HASH)) {

           return checkSingleNominator(tonweb, addressString, '1.1');

        } else {
            const walletInfo = await tonweb.provider.getWalletInfo(addressString);
            return {
                status: SUCCESS,
                text: walletInfo.wallet === true ? walletInfo.wallet_type : 'Unknown account - not wallet, not nominator pool'
            };

            // todo: whales pools addresses
            // todo: tonstakers-pool
            // todo: tonstakers jetton-wallet
            // todo: bemo-pool
            // todo: bemo jetton-wallet

        }
    } catch (e) {
        return {
            status: NO_RESPONSE,
            text: `Gotta try again. Can't get account info: ` + e.message
        }
    }
}
