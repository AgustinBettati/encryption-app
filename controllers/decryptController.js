var bodyParser = require('body-parser');
var cryptography = require('../helpers/cryptography.js');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var Cipher = require('../models/cipher.js');

module.exports = function(app){

  app.get('/decrypt',function(request, response){
    Cipher.find({}, function(err, users) {
      if (err) throw err;

      response.render('decrypt', {data: users});
    });
  } );

  app.post('/decrypt', urlencodedParser, function(request, response){
    //var cipherToDecrypt = dataStorage.findCipher(request.body.name);

    Cipher.findOne({ name: request.body.name }, function(err, user) {
      if (err) throw err;

      var cipherToDecrypt = user.cipher;

      var text = cryptography.decrypt(cipherToDecrypt, request.body.password);
      if(text){
        response.render('decrypt-success',{data: {name: request.body.name, text: text}});
      }else{
        response.render('decrypt-fail',{data: {name: request.body.name}});
      }

    });

  });

}
