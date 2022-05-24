require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remind erosion hidden arm bone they'; 
let testAccounts = [
"0xa801ad38fa7de9b400b2d56f19ea096898974b000fee33825c78c014f907abc4",
"0x5a4a2f578970dc0b21a282c90b35180eec949c6208aeea8be1ff98ea52b5be1f",
"0x711cf36b15d8f14a390d791f10eed89ee97c08a6b8f4b8d3574f6653ece93cbf",
"0x597d12e4ed084aad4e4fc307361591c8f3d1f56671124bb4aa1a6cce7f535197",
"0xa81b8d581af2161672d726d61f1e2738d1e1cca18afefeab9faf56f507174c79",
"0x3f63e5e33b108fcb0242112df327b7c83c257c6fb84f522068ff840323c93426",
"0x3b1201a459a5cd286fb6e331607f33119d751a38d2784b75fd6781e9fc5d12fc",
"0x855bb4dad11645ea59ecb47c91a9351db6603a3ae1aa99131cd9c16645d3e073",
"0x81d7553a45d2bf9c8bfb9e7d0daafcc938d270b5a772e08882d636fa76819e12",
"0xcaaeea3ca7117dca36cbe3dfc5097fff6c78ca1b36ec640c6f0fdc7307859a68"
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
            version: '^0.8.0'
        }
    }
};

