import commonPage from '../../pages/commonPage';
import quotasSearchPage from '../../pages/quotasSearchPage';


describe('🇬🇧 💡 | quotasSearch-UK | QuotasSearch using comm codes and quota orders |', function() {
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('quotasSearch');
  });
  beforeEach(function() {
    commonPage.goToUrl('/quota_search');
  });
  it('Quotas Search - Commodity Code', function() {
    const data = Cypress.env('testData')[0];
    commonPage.verifyContains(data.containstxt);
    quotasSearchPage.verifyCommodityCode(data.commodityCode);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt2);
    quotasSearchPage.verifyColHeadingSearchResult(data.containstxt3);
  });
  it('Quotas Search - Copy / No Input', function() {
    const data = Cypress.env('testData')[1];
    commonPage.verifyContains(data.containstxt);
    commonPage.verifyContains(data.containstxt2);
    commonPage.verifyContains(data.containstxt3);
    commonPage.verifyContains(data.containstxt4);
    commonPage.verifyContains(data.containstxt5);
    commonPage.verifyContains(data.containstxt6);
    commonPage.textShudNotExist(data.containstxt7);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt7);
  });
  it('Quotas Search - Country list -  Results', function() {
    const data = Cypress.env('testData')[2];
    commonPage.verifyContains(data.containstxt);
    quotasSearchPage.verifyCommodityCode(data.commodityCode);
    quotasSearchPage.selectCountry(data.containstxt2);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt3);
    quotasSearchPage.verifyTableRow(data.containstxt2);
  });
  it('Quotas Search - 🇨🇭  Reset to all countries', function() {
    const data = Cypress.env('testData')[3];
    commonPage.verifyContains(data.containstxt);
    quotasSearchPage.selectCountry(data.containstxt2),
    quotasSearchPage.verifyRecetCountryBtn(),
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt3);
  });

  it('Quotas Search - Order Number', function() {
    const data = Cypress.env('testData')[4];
    commonPage.verifyContains(data.containstxt);
    quotasSearchPage.verifyOrderNumber(data.containstxt2);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt3);
    quotasSearchPage.verifyTableRow(data.containstxt2);
    commonPage.verifyContains(data.containstxt4);
    commonPage.verifyContains(data.containstxt5);
    commonPage.verifyContains(data.containstxt6);
    commonPage.verifyContains(data.containstxt7);
  });

  it('Quotas Search - Critical state', function() {
    const data = Cypress.env('testData')[5];
    commonPage.verifyContains(data.containstxt);
    quotasSearchPage.selectCriticalText(data.containstxt2);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt3);
    quotasSearchPage.selectCriticalText(data.containstxt4);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt3);
  });

  it('Quotas Search - Status', function() {
    const data = Cypress.env('testData')[6];
    commonPage.verifyContains(data.containstxt);
    quotasSearchPage.selectStatusText(data.containstxt2);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt3);
    quotasSearchPage.selectStatusText(data.containstxt4);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt5);
    quotasSearchPage.selectStatusText(data.containstxt6);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt5);
    quotasSearchPage.selectStatusText(data.containstxt7);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt5);
  });

  it('Quotas Search - by Date', function() {
    const data = Cypress.env('testData')[7];
    commonPage.verifyContains(data.containstxt);
    quotasSearchPage.verifyOrderNumber(data.containstxt2);
    quotasSearchPage.enterDateVal(data.containstxt3, data.containstxt4, data.containstxt5);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt6);
  });

  it('Quotas Search - Order Number - Included EU country  - Italy ', function() {
    const data = Cypress.env('testData')[8];
    commonPage.verifyContains(data.containstxt);
    quotasSearchPage.verifyOrderNumber(data.containstxt2);
    quotasSearchPage.selectCountry(data.containstxt3);
    quotasSearchPage.verifySearchQuotasBtn();
    commonPage.verifyContains(data.containstxt4);
    quotasSearchPage.verifyTableRow(data.containstxt2);
    commonPage.verifyContains(data.containstxt5);
    commonPage.verifyContains(data.containstxt6);
  });
});
