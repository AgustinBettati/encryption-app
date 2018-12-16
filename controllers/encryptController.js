var bodyParser = require('body-parser');
var cryptography = require('../helpers/cryptography.js');

var Cipher = require('../models/cipher.js');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

  app.get('/encrypt',function(request, response){
    response.render('encrypt');
  } );

  app.post('/encrypt', urlencodedParser, function(request, response){
    var newCipher = cryptography.encrypt(request.body.data, request.body.password);

    var newData = Cipher({name: request.body.name, cipher: newCipher});

    newData.save();

    response.render('encrypt-success', {data: {name: request.body.name,cipher: newCipher}});
  });

}
