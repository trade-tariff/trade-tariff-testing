
module.exports = (on, config) => {
  const cucumber = require('cypress-cucumber-preprocessor').default;
  on('file:preprocessor', cucumber())
  const {JsonSchemaValidation} = require('@jc21/cypress-jsonschema-validation');
  on('task', JsonSchemaValidation(config))
  const {SwaggerValidation} = require('@jc21/cypress-swagger-validation');
  on('task', SwaggerValidation(config))

  const { lighthouse, prepareAudit } = require('cypress-audit');
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    lighthouse: lighthouse(),
  });

  
  // cypress/plugins/index.js
 // const tagify = require('cypress-tags');
 // on('file:preprocessor', tagify(config));
  return config
}