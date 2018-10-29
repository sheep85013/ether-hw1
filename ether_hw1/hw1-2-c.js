const Wallet = require('ethereumjs-wallet');
var keythereum = require("keythereum");

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey);

let password = "nccu"

let options = {
    kdf: "scrypt",
    cipher: "aes-128-ctr",
    kdfparams: {
      "dklen":32,
      "n":262144,
      "p":1,
      "r":8,
      "salt":"1af9c4a44cf45fe6fb03dcc126fa56cb0f9e81463683dd6493fb4dc76edddd51"
    }
}

var dk = keythereum.create() // creates a sample key

dk.privateKey = new Buffer(privKey)

let keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options)

console.log(keyObject)



