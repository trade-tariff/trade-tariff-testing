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
    quotasSearchPage.verifyQuotasHeading();
    quotasSearchPage.verifyQuotaSearchCommodityCode(data.commodityCode);
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
    quotasSearchPage.verifyQuotasSearchResColHeading(data.containstxt);
  });
  it('Quotas Search - Copy / No Input', function() {
    const data = Cypress.env('testData')[1];
    quotasSearchPage.verifyQuotasHeading();
    commonPage.verifyContains(data.containstxt);
    commonPage.verifyContains(data.containstxt2);
    commonPage.verifyContains(data.containstxt3);
    commonPage.verifyContains(data.containstxt4);
    commonPage.verifyContains(data.containstxt5);
    commonPage.textShudNotExist(data.containstxt6);
    quotasSearchPage.verifySearchForQuotasBtn();
    commonPage.verifyContains(data.containstxt6);
  });
  it('Quotas Search - Country list -  Results', function() {
    const data = Cypress.env('testData')[2];
    quotasSearchPage.verifyQuotasHeading();
    quotasSearchPage.verifyQuotaSearchCommodityCode(data.commodityCode);
    quotasSearchPage.selectCountryForQuotas(data.containstxt);
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
    quotasSearchPage.verifyQuotasSearchResTableRow(data.containstxt);
  });
  it('Quotas Search - 🇨🇭  Reset to all countries', function() {
    const data = Cypress.env('testData')[3];
    quotasSearchPage.verifyQuotasHeading();
    quotasSearchPage.selectCountryForQuotas(data.containstxt),
    quotasSearchPage.verifyRecetCountryBtn(),
    quotasSearchPage.verifySearchForQuotasBtn();
    commonPage.verifyContains(data.containstxt2);
  });

  it('Quotas Search - Order Number', function() {
    const data = Cypress.env('testData')[4];
    quotasSearchPage.verifyQuotasHeading();
    quotasSearchPage.verifyQuotaSearchOrderNumber(data.containstxt);
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
    quotasSearchPage.verifyQuotasSearchResTableRow(data.containstxt);
    commonPage.verifyContains(data.containstxt2);
    commonPage.verifyContains(data.containstxt3);
    commonPage.verifyContains(data.containstxt4);
    commonPage.verifyContains(data.containstxt5);
  });

  it('Quotas Search - Critical state', function() {
    const data = Cypress.env('testData')[5];
    quotasSearchPage.verifyQuotasHeading();
    quotasSearchPage.selectSearchForQuotasCriticalText(data.containstxt);
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
    quotasSearchPage.selectSearchForQuotasCriticalText(data.containstxt2);
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
  });

  it('Quotas Search - Status', function() {
    const data = Cypress.env('testData')[6];
    quotasSearchPage.verifyQuotasHeading();
    quotasSearchPage.selectSearchForQuotasStatusText(data.containstxt);
    quotasSearchPage.verifySearchForQuotasBtn();
    commonPage.verifyContains(data.containstxt2);
    quotasSearchPage.selectSearchForQuotasStatusText(data.containstxt3);
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
    quotasSearchPage.selectSearchForQuotasStatusText(data.containstxt4);
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
    quotasSearchPage.selectSearchForQuotasStatusText(data.containstxt5);
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
  });

  it('Quotas Search - by Date', function() {
    const data = Cypress.env('testData')[7];
    quotasSearchPage.verifyQuotasHeading();
    quotasSearchPage.verifyQuotaSearchOrderNumber(data.containstxt);
    quotasSearchPage.enterDateValForQuotasSearchResults(data.containstxt2, data.containstxt3, data.containstxt4);
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
  });

  it('Quotas Search - Order Number - Included EU country  - Italy ', function() {
    const data = Cypress.env('testData')[8];
    quotasSearchPage.verifyQuotasHeading();
    quotasSearchPage.verifyQuotaSearchOrderNumber(data.containstxt);
    quotasSearchPage.selectCountryForQuotas(data.containstxt2);
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
    quotasSearchPage.verifyQuotasSearchResTableRow(data.containstxt);
    commonPage.verifyContains(data.containstxt3);
    commonPage.verifyContains(data.containstxt4);
  });
});
