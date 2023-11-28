import commonPage from '../../pages/commonPage';
import quotasSearchPage from '../../pages/quotasSearchPage';
import commonHelpers from '../../helpers/commonHelpers';


describe('🇬🇧 💡 | quotasSearch-UK | QuotasSearch using comm codes and quota orders |', function() {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('quotasSearch');
  });
  beforeEach(function() {
    data = commonPage.getTestData();
    commonPage.goToUrl('/quota_search');
    quotasSearchPage.verifySearchForQuotasTxt();
  });

  it('Quotas Search - Commodity Code', function() {
    quotasSearchPage.verifyCommodityCode(data.commodityCode);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
    quotasSearchPage.verifyQuotasSearchResults(data.orderNumberTxt);
  });
  it('Quotas Search - Copy / No Input', function() {
    commonHelpers.verifyData(data, 0, data.length - 1);
    commonPage.textShudNotExist(data.noInputErrTxt);
    quotasSearchPage.verifySearchForQuotasBtn();
    commonPage.verifyContains(data.noInputErrTxt);
  });
  it('Quotas Search - Country list -  Results', function() {
    quotasSearchPage.verifyCommodityCode(data.commodityCode);
    quotasSearchPage.selectCountry(data.country);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
    quotasSearchPage.verifyQuotasSearchResults(data.country);
  });
  it('Quotas Search - 🇨🇭  Reset to all countries', function() {
    quotasSearchPage.selectCountry(data.country);
    quotasSearchPage.verifyResetCountryBtn();
    quotasSearchPage.verifySearchForQuotasBtn();
    commonPage.verifyContains(data.noInputErrTxt);
  });

  it('Quotas Search - Order Number', function() {
    quotasSearchPage.verifyOrderNumber(data.orderNumber);
    quotasSearchPage.selectCountry(data.country);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
    commonHelpers.verifyData(data, 1, data.length);
  });

  it('Quotas Search - Critical state', function() {
    quotasSearchPage.selectCriticalState(data.criticalStateYes);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
    quotasSearchPage.selectCriticalState(data.criticalStateNo);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
  });

  it('Quotas Search - Status', function() {
    quotasSearchPage.selectSearchForQuotasStatusTxt(data.statusBlocked);
    quotasSearchPage.verifySearchForQuotasBtn();
    commonPage.verifyContains(data.searchForQuotasResult);
    commonHelpers.verifyData(data, 2, data.length);
  });

  it('Quotas Search - by Date', function() {
    quotasSearchPage.verifyOrderNumber(data.orderNumber);
    quotasSearchPage.verifyDate(data.day, data.month, data.year);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
  });

  it('Quotas Search - Order Number - Included EU country  - Italy', function() {
    quotasSearchPage.verifyOrderNumber(data.orderNumber);
    quotasSearchPage.selectCountry(data.country);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
    quotasSearchPage.verifyQuotasSearchResults(data.countryResults1);
    quotasSearchPage.verifyQuotasSearchResults(data.countryResults2);
  });
});
