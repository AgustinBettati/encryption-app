var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cipherSchema = new Schema({
  name: {type:String, unique : true, required : true },
  cipher:String
});

var Cipher = mongoose.model('Cipher', cipherSchema);

module.exports = Cipher;
