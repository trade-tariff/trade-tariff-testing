
  const cucumber = require('cypress-cucumber-preprocessor').default
  module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
  }
  const {JsonSchemaValidation} = require('@jc21/cypress-jsonschema-validation');
  module.exports = (on, config) => {
    // ...
    on('task', JsonSchemaValidation(config));
    // ...
    return config;

  }
