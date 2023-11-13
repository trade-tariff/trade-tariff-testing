import commonPage from '../../../pages/commonPage';
import exchangeRatesPage from '../../../pages/exchangeRatesPage';

describe('UK - Validate exchange rates functionality', function() {
  before(function() {
    commonPage.loadData('exchangeRates');
  });
  it('verify exchange rates link in tools page', function() {
    const data = Cypress.env('testData')[0];
    cy.visit(data.goToUri);
    commonPage.verifyContains(data.contains);
    commonPage.verifyTxtAndClk(data.clkExchangeRateTxt);
    commonPage.verifyUrlShudInclude(data.include);
  });
  it('returns the latest monthly exchange rates', function() {
    const data = Cypress.env('testData')[1];
    // Visit page
    exchangeRatesPage.goToExchangeRates();
    exchangeRatesPage.verifyUKTariffTxt();
    // Check correct heading for the right year
    exchangeRatesPage.verifyMonthlyHeading();
    // Click through to view online
    exchangeRatesPage.verifyViewOnlineLnkAndClk(data.linkPath, data.type, data.verifyTxtAndClk);
    // Check new title for monthly rates
    exchangeRatesPage.verifyNewTitleForMonthlyRates();
    // Check secondary heading
    exchangeRatesPage.verifySecondaryHeadingInMonthlyRates();
    // Check first column heading
    commonPage.verifyContains(data.containsFirst);
    // Check last column heading
    commonPage.verifyContains(data.containsLast);
    commonPage.verifyContains(data.contains);
    // and can download CSV
    exchangeRatesPage.assertCSVDownload(data.csvLink, true, false, false);
  });

  it('displays exchange rates for previous years', function() {
    const data = Cypress.env('testData')[2];
    // given I am on the exchange rates page
    // Visit page
    exchangeRatesPage.goToExchangeRates();
    exchangeRatesPage.verifyUKTariffTxt();
    // then I expect to see the current year in the title
    exchangeRatesPage.verifyMonthlyHeading();
    // when I click through to the 2022 year
    commonPage.verifyContains(data.contains);
    exchangeRatesPage.clkPreviousYearLnk();
    // and I see links for last year exchange rates
    exchangeRatesPage.verifyPreviousYearHeading();
    // The secondary title is also updated
    exchangeRatesPage.verifySecondaryTitle();
    // Click through to download file for dec 2022
    exchangeRatesPage.assertCSVDownload(data.csvLink, false, true, false);
  });

  it('Verify right hand navigation on the monthly exchange rate', function() {
    const data = Cypress.env('testData')[3];
    commonPage.goToUrl(data.goToUri);
    commonPage.verifyUrlShudInclude(data.include);
    commonPage.verifyContains(data.contains);
    commonPage.verifyContains(data.contains2);
    commonPage.verifyContains(data.contains3);
    exchangeRatesPage.verifyPreviousYearHeading();
    exchangeRatesPage.verifyTheSideLnksTxt();
  });

  it('No exchange rates for year specified other than 2021, 2022 and 2023', function() {
    const data = Cypress.env('testData')[4];
    commonPage.goToSpecificUrlToCheckPageAccess(data.goToUri);
    exchangeRatesPage.verifyUKTariffTxt();
    commonPage.verifyContains(data.contains);
    commonPage.verifyUrlShudInclude(data.include);
  });

  it('Verify average rates link on the right hand navigation', function() {
    const data = Cypress.env('testData')[5];
    commonPage.goToUrl(data.goToUri);
    commonPage.verifyUrlShudInclude(data.include);
    exchangeRatesPage.verifyTheSideLnksTxt(data.contains);
    exchangeRatesPage.verifyAverageHeading();
    exchangeRatesPage.verifyAvgRatesSubHeading();
  });

  it('Verify download CSV file on average rates page', function() {
    const data = Cypress.env('testData')[6];
    commonPage.goToUrl(data.goToUri);
    commonPage.verifyUrlShudInclude(data.include);
    exchangeRatesPage.verifyTheSideLnksTxt(data.contains);
    exchangeRatesPage.verifyAverageHeading(data.contains2);
    exchangeRatesPage.verifyAvgRatesSubHeading();
    exchangeRatesPage.verifySecondaryTitle(data.contains3);
    commonPage.verifyContains(data.contains4);
    exchangeRatesPage.assertCSVDownload(data.csvLink, false, false, true);
  });

  it('Verify spot rates link on the right hand navigation', function() {
    const data = Cypress.env('testData')[7];
    commonPage.goToUrl(data.goToUri);
    commonPage.verifyUrlShudInclude(data.include);
    exchangeRatesPage.verifyTheSideLnksTxt(data.contains);
    commonPage.verifyContains(data.contains2);
    commonPage.verifyContains(data.contains3);
    exchangeRatesPage.verifySecondaryTitle(data.contains4);
  });

  it('Download CSV file in mentioned directory and verify number of records', function() {
    // Visit page
    const data = Cypress.env('testData')[8];
    commonPage.goToUrl(data.goToUri);
    // Check correct heading for the right year
    exchangeRatesPage.verifyMonthlyHeading();
    // Click through to view online
    exchangeRatesPage.verifyViewOnlineLnkAndClk(data.linkPath, data.type, data.verifyTxtAndClk);
    // Check new title for monthly rates
    exchangeRatesPage.verifyNewTitleForMonthlyRates();
    // download csv file and compare the count to match with table count
    exchangeRatesPage.downloadCSVFileAndCompareFileCountWithTableCount();
  });
});
