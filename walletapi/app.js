'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing
var cors = require('cors');
app.use(cors());
const swaggerSecurity = require('./api/helpers/Swagger_security.js');
var config = {
  appRoot: __dirname,
  SwaggerSecurityHandlers: swaggerSecurity.swaggerSecurityHandlers
};


SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
