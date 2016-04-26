var Swagger = require('swagger-client');

var swagger = function(apiKey) {

  var client = new Swagger({
    spec: require('./dist/swagger.json'),
    usePromise: true,
    authorizations: {
      apiKey: new Swagger.ApiKeyAuthorization('Api-Key', apiKey, 'header')
    }
  });

  return client.valueOf();
};

module.exports = function(apiKey) {
  return swagger(apiKey);
};
