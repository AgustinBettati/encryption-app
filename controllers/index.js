var Cipher = require('../models/cipher.js');

module.exports = function(app){

  app.get('/', function(request, response){
    //response.render('index', {data: require('../datos.json')});
    Cipher.find({}, function(err, users) {
      if (err) throw err;
      
      response.render('index', {data: users});
    });
  });

  app.get('/about', function(request, response){
    response.render('about');
  });

  app.get('/contact', function(request, response){
    response.render('contact');
  });

}
