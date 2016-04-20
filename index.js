var Swagger = require('swagger-client');

module.exports = function(apiKey) {
  var client = new Swagger({
    // url: '',
    spec: require('./dist/swagger.json'),
    usePromise: true,
    authorizations: {
      apiKey: new Swagger.ApiKeyAuthorization('apiKey', apiKey, 'header')
    }
  });

  return client.catch(function(error) {
    if (typeof error === 'string') {
      error = new Error(error);
    }

    throw error;
  });
};
