import commonHelpers from '../../../helpers/commonHelpers';
import commonPage from '../../../pages/commonPage';
import exchangeRatesPage from '../../../pages/exchangeRatesPage';

describe('UK - Validate exchange rates functionality', () => {
  let data;
  before(() => {
    commonPage.loadData('exchangeRates');
  });
  beforeEach(() => {
    data = commonPage.getTestData();
  });
  it('verify exchange rates link in tools page', () => {
    commonPage.goToUrl(data.goToURL);
    commonPage.verifyContains(data.containTxt);
    commonPage.verifyTxtAndClk(data.clkExchangeRateTxt);
    commonPage.verifyUrlShudInclude(data.shudInclude);
  });
  it('returns the latest monthly exchange rates', () => {
    // Visit page
    exchangeRatesPage.goToExchangeRates();
    exchangeRatesPage.verifyUKTariffBanner();
    // Check correct heading for the right year
    exchangeRatesPage.verifyHeading(data.type);
    // Click through to view online
    exchangeRatesPage.verifyViewOnlineLnkAndClk(data.linkPath, data.type, data.verifyTxtAndClk);
    // Check new title for monthly rates
    exchangeRatesPage.verifyNewTitleForMonthlyRates();
    // Check secondary heading
    exchangeRatesPage.verifySecondaryHeadingInMonthlyRates();
    // verify first, last coulmn names in the table
    commonHelpers.verifyStaticContent(data.staticTxt);
    // and can download CSV
    exchangeRatesPage.assertCSVDownload(data.csvLink, true, false, false);
  });

  it('displays exchange rates for previous years', () => {
    // given I am on the exchange rates page
    // Visit page
    exchangeRatesPage.goToExchangeRates();
    exchangeRatesPage.verifyUKTariffBanner();
    // then I expect to see the current year in the title
    exchangeRatesPage.verifyHeading(data.monthlyTxt);
    // when I click through to the 2022 year
    commonPage.verifyContains(data.sideLnkHeading);
    exchangeRatesPage.clkPreviousYearLnk();
    // and I see links for last year exchange rates
    exchangeRatesPage.verifyPreviousYearHeading();
    // The secondary title is also updated
    exchangeRatesPage.verifySecondaryTitle();
    // Click through to download file for dec 2022
    exchangeRatesPage.assertCSVDownload(data.csvLink, false, true, false);
  });

  it('Verify right hand navigation on the monthly exchange rate', () => {
    commonPage.goToUrl(data.goToURL);
    commonPage.verifyUrlShudInclude(data.shudInclude);
    commonHelpers.verifyStaticContent(data.staticTxt);
    exchangeRatesPage.verifyPreviousYearHeading();
    exchangeRatesPage.verifyTheSideLnksTxt();
  });

  it('No exchange rates for year specified other than 2021, 2022 and 2023', () => {
    commonPage.goToSpecificUrlToCheckPageAccess(data.goToURL);
    exchangeRatesPage.verifyUKTariffBanner();
    commonPage.verifyContains(data.containTxt);
    commonPage.verifyUrlShudInclude(data.shudInclude);
  });

  it('Verify average rates link on the right hand navigation', () => {
    commonPage.goToUrl(data.goToURL);
    commonPage.verifyUrlShudInclude(data.shudInclude);
    exchangeRatesPage.verifyTheSideLnksTxt(data.sideLnkTxt);
    exchangeRatesPage.verifyHeading(data.avgTxt);
    exchangeRatesPage.verifySubHeading(data.avgTxt);
  });

  it('Verify download CSV file on average rates page', () => {
    commonPage.goToUrl(data.goToURL);
    commonPage.verifyUrlShudInclude(data.shudInclude);
    exchangeRatesPage.verifyTheSideLnksTxt(data.sideLnkTxt);
    exchangeRatesPage.verifyHeading(data.secondaryTitle);
    exchangeRatesPage.verifySubHeading(data.secondaryTitle);
    exchangeRatesPage.verifySecondaryTitle(data.secondaryTitle);
    commonPage.verifyContains(data.containsTxt);
    exchangeRatesPage.assertCSVDownload(data.csvLink, false, false, true);
  });

  it('Verify spot rates link on the right hand navigation', () => {
    commonPage.goToUrl(data.goToURL);
    commonPage.verifyUrlShudInclude(data.shudInclude);
    exchangeRatesPage.verifyTheSideLnksTxt(data.sideLnkTxt);
    exchangeRatesPage.verifyHeading(data.spotTxt);
    exchangeRatesPage.verifySubHeading(data.spotTxt);
    exchangeRatesPage.verifySecondaryTitle(data.spotTxt);
  });

  it('Download CSV file in mentioned directory and verify number of records', () => {
    commonPage.goToUrl(data.goToURL);
    // Check correct heading for the right year
    exchangeRatesPage.verifyHeading(data.type);
    // Click through to view online
    exchangeRatesPage.verifyViewOnlineLnkAndClk(data.linkPath, data.type, data.verifyTxtAndClk);
    // Check new title for monthly rates
    exchangeRatesPage.verifyNewTitleForMonthlyRates();
    // download csv file and compare the count to match with table count
    exchangeRatesPage.downloadCSVFileAndCompareFileCountWithTableCount();
  });
});
