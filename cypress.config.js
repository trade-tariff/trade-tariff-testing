const {defineConfig} = require('cypress');
const cypressGrep = require('@cypress/grep/src/plugin');
const dotenvPlugin = require('cypress-dotenv');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = (on) => {
  on('task', {
    generateOTP: require('cypress-otp'),
  });
};

module.exports = defineConfig({
  viewportWidth: 1080,
  viewportHeight: 720,
  e2e: {
    'baseUrl': 'https://staging.trade-tariff.service.gov.uk',
    setupNodeEvents(on, config) {
      on('task', {generateOTP: require('cypress-otp')});
      on('task', {downloadFile});
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
    'defaultCommandTimeout': 20000,
    'responseTimeout': 60000,
    'reporter': 'mochawesome',
    'reporterOptions': {
      'reportDir': 'cypress/reports',
      'overwrite': false,
      'html': false,
      'json': true,
    },
    'env': {
      'baseUrl': 'https://staging.trade-tariff.service.gov.uk',
      'grepFilterSpecs': true,
    },
  },
});
