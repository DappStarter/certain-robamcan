require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth situate unable gesture help success table'; 
let testAccounts = [
"0xba4af74b9f35e3a5913278b970047886775d2204cb5761511443a611cb7aab26",
"0x7381d990763784b59409830a3db4eb31a18d1ec856eb6a03b09d6e252af44664",
"0xf575bf9d9059d67eedb7359160aecd5c1ab2512b1f0a434a54929b6e443125bc",
"0x7cf93f9cff1533361ee413992089311d31bb225f44f74a4a02f1a5da5c28cb0a",
"0x0d725bee0d317bc84e8d0c8cc49aecee3eb0022e934157a9a96a95a3fcba7466",
"0x0266d730e14bbbc337fd8e36c4abdaf90c17c0f917c3a4887f17c99cc4d8c3f9",
"0xe90d9adca53c99d5bd5592c319f22b2b8ab6d4b033165f0693a4de01340eb335",
"0xf5157d255739ea3ed5cd8c4e227f1065f6706a39d774250d38da00a53cdf1343",
"0xa7e80c456e10d8bf99d8cde12a7e130ba9735a4742d0ee9304d83eb643369b56",
"0x67665be5f77b7cd7b0be785aefdf783a72915e7efcc7d734446e76d784a5fdaf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
