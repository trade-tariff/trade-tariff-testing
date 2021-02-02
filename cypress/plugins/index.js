
module.exports = (on, config) => {
  const cucumber = require('cypress-cucumber-preprocessor').default;
  on('file:preprocessor', cucumber())
  const {JsonSchemaValidation} = require('@jc21/cypress-jsonschema-validation');
  on('task', JsonSchemaValidation(config))
  return config

}