import commonPage from '../../pages/commonPage';
import quotasSearchPage from '../../pages/quotasSearchPage';
import commonHelpers from '../../helpers/commonHelpers';

describe('🇬🇧 💡 | quotasSearch-UK | QuotasSearch using comm codes and quota orders |', () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.loadData('quotasSearch');
  });
  beforeEach(() => {
    data = commonPage.getTestData();
    commonPage.goToUrl('/quota_search');
    quotasSearchPage.verifySearchForQuotasTxt();
  });

  it('Quotas Search - Commodity Code', () => {
    quotasSearchPage.verifyCommodityCode(data.commodityCode);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
    quotasSearchPage.verifyQuotasSearchResults(data.orderNumberTxt);
  });
  it('Quotas Search - Copy / No Input', () => {
    commonHelpers.verifyData(data.searchData);
    commonPage.textShudNotExist(data.noInputErrTxt);
    quotasSearchPage.verifySearchForQuotasBtn();
    commonPage.verifyContains(data.noInputErrTxt);
  });
  it('Quotas Search - Country list -  Results', () => {
    quotasSearchPage.verifyCommodityCode(data.commodityCode);
    quotasSearchPage.selectCountry(data.country);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
    quotasSearchPage.verifyQuotasSearchResults(data.country);
  });
  it('Quotas Search - 🇨🇭  Reset to all countries', () => {
    quotasSearchPage.selectCountry(data.country);
    quotasSearchPage.verifyResetCountryBtn();
    quotasSearchPage.verifySearchForQuotasBtn();
    commonPage.verifyContains(data.noInputErrTxt);
  });

  it('Quotas Search - Order Number', () => {
    quotasSearchPage.verifyOrderNumber(data.orderNumber);
    quotasSearchPage.selectCountry(data.country);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
    commonHelpers.verifyData(data.searchResults);
  });

  it('Quotas Search - Critical state', () => {
    quotasSearchPage.selectCriticalState(data.criticalStateYes);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
    quotasSearchPage.selectCriticalState(data.criticalStateNo);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
  });

  it('Quotas Search - Status', () => {
    quotasSearchPage.selectSearchForQuotasStatusTxt(data.statusBlocked);
    quotasSearchPage.verifySearchForQuotasBtn();
    commonPage.verifyContains(data.searchForQuotasResult);
    commonHelpers.verifyData(data.searchData);
  });

  it('Quotas Search - by Date', () => {
    quotasSearchPage.verifyOrderNumber(data.orderNumber);
    quotasSearchPage.verifyDate(data.day, data.month, data.year);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
  });

  it('Quotas Search - Order Number - Included EU country  - Italy', () => {
    quotasSearchPage.verifyOrderNumber(data.orderNumber);
    quotasSearchPage.selectCountry(data.country);
    commonHelpers.verifyQuotasSearchBtnClkandRslts();
    commonHelpers.verifyData(data.searchResults);
  });
});
