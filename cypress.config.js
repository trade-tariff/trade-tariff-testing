const {defineConfig} = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trade-tariff.service.gov.uk',

    commcodes: [
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
    termcodes: ['0302910095', '0303541090', '0303919091'],
    newcodes: [
      '7318159511',
      '2921490045',
      '2921290070',
      '2918999043',
      '2918290040',
      '2916399016',
    ],
    accessibility: true,
    fixtures_timestamp: '2021-02-09',

    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mocha',
        quiet: true,
        overwrite: false,
        html: false,
        json: true,
      },
    },
    chromeWebSecurity: false,
    firefoxWebSecurity: false,
    video: false,
    screenshotOnRunFailure: false,
    projectId: '7p655m',
    parseSpecialCharSequences: false,
    defaultCommandTimeout: 15000,
    responseTimeout: 60000,
    e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
      setupNodeEvents(on, config) {
        return require('./cypress/plugins/index.js')(on, config);
      },
      baseUrl: 'https://staging.trade-tariff.service.gov.uk',
      specPattern: '**/**/**/*.spec.js',
    },
  },
});
