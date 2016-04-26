var Swagger = require('swagger-client');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

var swagger = async (function(apiKey) {
  var client = new Swagger({
    spec: require('./dist/swagger.json'),
    usePromise: true,
    authorizations: {
      apiKey: new Swagger.ApiKeyAuthorization('Api-Key', apiKey, 'header')
    }
  });

  client.catch(function(error) {
    if (typeof error === 'string') {
      error = new Error(error);
    }

    throw error;
  });

  return await (client);
});


module.exports = function(apiKey) {
  return swagger(apiKey);
};
