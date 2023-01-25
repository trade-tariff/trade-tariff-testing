/* eslint-disable new-cap */
const {defineConfig} = require('cypress');
const dotenvPlugin = require('cypress-dotenv');

module.exports = (on) => {
  on('task', {
    generateOTP: require('cypress-otp'),
  });
};

module.exports = defineConfig({
  e2e: {
    'baseUrl': 'https://staging.trade-tariff.service.gov.uk',
    setupNodeEvents(on, config) {
      on('task', {generateOTP: require('cypress-otp')});
      config = dotenvPlugin(config, {}, true);
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
    'reporter': 'mochawesome',
    'reporterOptions': {
      'reportDir': 'cypress/reports',
      'overwrite': false,
      'html': false,
      'json': true,
    },
    'env': {
      'grepFilterSpecs': true,
    },
  },
});
