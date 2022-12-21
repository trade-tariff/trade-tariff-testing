const {defineConfig} = require('cypress');

const cypressGrep = require('cypress-grep/src/plugin');
const dotenvPlugin = require('cypress-dotenv');
const {JsonSchemaValidation} = require('@jc21/cypress-jsonschema-validation');
const {SwaggerValidation} = require('@jc21/cypress-swagger-validation');

module.exports = defineConfig({
  e2e: {
    'baseUrl': 'https://staging.trade-tariff.service.gov.uk',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', JsonSchemaValidation(config));
      on('task', SwaggerValidation(config));
      config = dotenvPlugin(config, {}, true);
      config = cypressGrep(config);

      return config;
    },
    'accessibility': true,
    'fixtures_timestamp': '2021-02-09',
    'chromeWebSecurity': false,
    'firefoxWebSecurity': false,
    'video': false,
    'screenshotOnRunFailure': true,
    'projectId': '7p655m',
    'parseSpecialCharSequences': false,
    'defaultCommandTimeout': 15000,
    'responseTimeout': 60000,
    'reporter': 'cypress-mochawesome-reporter',
    'reporterOptions': {
      'reportDir': 'cypress/reports/mochawesome',
      'charts': true,
      'quiet': true,
    },
    'env': {
      'grepFilterSpecs': true,
    },
  },
});
