var crypto = require('crypto'); // ya viene con node.js
var algorithm = 'aes-256-ctr';

function encrypt(text, password){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(cipher, password){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(cipher,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
};
