const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey.toString('hex'));
 
// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey.toString('hex'));

// address
let address = wallet.getAddressString();
console.log("address:", address);