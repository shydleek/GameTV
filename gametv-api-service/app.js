'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/news']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/news?date=2021-05-09');
  }
  if (swaggerExpress.runner.swagger.paths['/top']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/top?date=2021-05-09');
  }
  if (swaggerExpress.runner.swagger.paths['/results']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/results?date=2021-05-09');
  }
  if (swaggerExpress.runner.swagger.paths['/matches']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/matches?date=2021-05-09');
  }
});
