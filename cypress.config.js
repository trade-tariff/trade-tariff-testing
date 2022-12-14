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
    'commcodes': [
      '7202118000',
      '0201100021',
      '0406103010',
      '8518400010',
      '8708701080',
      '6907220000',
      '1905319100',
      '0702000007',
      '2203001000',
      '8406810000',
      '2402100000',
      '1704903000',
      '1704907100',
      '2206001000',
    ],
    'termcodes': ['0302910095', '0303541090', '0303919091'],
    'newcodes': [
      '7318159511',
      '2921490045',
      '2921290070',
      '2918999043',
      '2918290040',
      '2916399016',
    ],
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
