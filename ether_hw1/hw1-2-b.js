const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey);
 
// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey);

// step 2:  public_key_hash = Keccak-256(public_key)
// step 3:  address = ¡¥0x¡¦ + last 20 bytes of public_key_hash

const address = keccak256(publicKey) 

const buf = Buffer.from(address, 'hex');
console.log("address:"+"0x"+buf.slice(-20).toString('hex')) 

