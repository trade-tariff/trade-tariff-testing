/* eslint-disable new-cap */

module.exports = (on, config) => {
  const dotenvPlugin = require('cypress-dotenv');
  const cucumber = require('cypress-cucumber-preprocessor').default;
  const {JsonSchemaValidation} = require('@jc21/cypress-jsonschema-validation');
  const {SwaggerValidation} = require('@jc21/cypress-swagger-validation');
  const cypressGrep = require('cypress-grep/src/plugin');
  on('file:preprocessor', cucumber());
  on('task', JsonSchemaValidation(config));
  on('task', SwaggerValidation(config));

  config = cypressGrep(config);
  config = dotenvPlugin(config, {}, true);

  return config;
};
