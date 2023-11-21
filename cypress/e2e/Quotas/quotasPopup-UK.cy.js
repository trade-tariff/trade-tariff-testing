import commonPage from '../../pages/commonPage';
import quotasPopupPage from '../../pages/quotasPopupPage';


describe('🇬🇧 💡 | quotasPopup-UK | Verify quota dialogs |', function() {
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('quotasPopup');
  });
  it('Quota Popup - Verify change the title to quota order number', function() {
    const data = Cypress.env('testData')[0];
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    commonPage.verifyTxtAndClk(data.containstxt);
    quotasPopupPage.verifyQuotasPanelTableColTxt(data.containstxt2);
    quotasPopupPage.verifyQuotasPopupHeadTxt(data.containstxt3);
    quotasPopupPage.verifyQuotasPopupColHeadTxt(data.containstxt4);
    commonPage.verifyPopupCloseBtn();
  });
  it(`Quota Popup - Verify Balance as of ${quotasPopupPage.todDt()}`, function() {
    const data = Cypress.env('testData')[1];
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    commonPage.verifyTxtAndClk(data.containstxt);
    quotasPopupPage.verifyQuotasPopupHeadTxt(data.containstxt2);
    quotasPopupPage.verifyQuotasPopupDateVal();
    commonPage.verifyShdNotContains(data.containstxt3);
  });
  it('Quota Popup - Verify Comma separator in quota balance', function() {
    const data = Cypress.env('testData')[2];
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    quotasPopupPage.verifyQuotasPanelTableColTxt(data.containstxt);
    commonPage.verifyTxtAndClk(data.containstxt2);
    quotasPopupPage.verifyQuotasPopupTableNumVal1();
    quotasPopupPage.verifyQuotasPopupTableNumVal2();
  });
  it('Quota Popup - Verify Footer content', function() {
    const data = Cypress.env('testData')[3];
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    commonPage.verifyTxtAndClk(data.containstxt);
    quotasPopupPage.verifyQuotasPopupContainsTxt(data.containstxt2);
  });
  it(`Quota Popup - Verify balance as of ${quotasPopupPage.prvDt()} and click and view balance for ${quotasPopupPage.todDt()} popup`,
      function() {
        const data = Cypress.env('testData')[4];
        quotasPopupPage.verifyQuotasUrlPreDtLink(data.commodity);
        commonPage.verifyTxtAndClk(data.containstxt);
        quotasPopupPage.verifyQuotasPopupInrTxtHeading(data.containstxt2);
        quotasPopupPage.verifyQuotasPopupViewBalDt();
        quotasPopupPage.verifyQuotasPopupPreDateVal();
        quotasPopupPage.clickQuotasPopupViewBalDt();
        quotasPopupPage.verifyQuotasPopupInrTxtHeading(data.containstxt2);
        quotasPopupPage.verifyQuotasPopupDateVal();
        quotasPopupPage.verifyQuotasPopupTableColVal(data.containstxt3);
        quotasPopupPage.verifyQuotasPopupRowTxt1(data.containstxt4);
        quotasPopupPage.verifyQuotasPopupRowTxt2(data.containstxt5);
        quotasPopupPage.verifyQuotasPopupRowTxt3(data.containstxt6);
        quotasPopupPage.verifyQuotasPopupRowTxt4(data.containstxt7);
        quotasPopupPage.verifyQuotasPopupRowTxt5(data.containstxt8);
        quotasPopupPage.verifyQuotasPopupRowTxt6(data.containstxt9);
        quotasPopupPage.verifyQuotasPopupStaticTxt(data.containstxt10);
      });
  it(`Quota Popup - Verify balance as of ${quotasPopupPage.ftrDt()} and click and view balance for ${quotasPopupPage.todDt()} popup`,
      function() {
        const data = Cypress.env('testData')[5];
        quotasPopupPage.verifyQuotasFutrDtUrlLink(data.commodity);
        commonPage.verifyTxtAndClk(data.containstxt);
        quotasPopupPage.verifyQuotasPopupHeadTxt(data.containstxt2);
        quotasPopupPage.verifyQuotasPopupFutrDateVal();
        quotasPopupPage.verifyQuotasPopupViewBalDt();
        quotasPopupPage.clickQuotasPopupViewBalDt();
        quotasPopupPage.verifyQuotasPopupHeadTxt(data.containstxt2);
        quotasPopupPage.verifyQuotasPopupDateVal();
        quotasPopupPage.verifyQuotasPopupTableColVal(data.containstxt3);
        quotasPopupPage.verifyQuotasPopupRowTxt1(data.containstxt4);
        quotasPopupPage.verifyQuotasPopupRowTxt2(data.containstxt5);
        quotasPopupPage.verifyQuotasPopupRowTxt3(data.containstxt6);
        quotasPopupPage.verifyQuotasPopupRowTxt4(data.containstxt7);
        quotasPopupPage.verifyQuotasPopupRowTxt5(data.containstxt8);
        quotasPopupPage.verifyQuotasPopupRowTxt6(data.containstxt9);
        quotasPopupPage.verifyQuotasPopupStaticTxt(data.containstxt10);
      });
  it('Quota Popup - Verify quota status and no suspension or blocking period', function() {
    const data = Cypress.env('testData')[6];
    quotasPopupPage.verifyQuotasStaticDtLink(data.containstxt, data.commodity);
    commonPage.verifyTxtAndClk(data.containstxt2);
    quotasPopupPage.verifyQuotasPopupHeadTxt(data.containstxt3);
    quotasPopupPage.verifyQuotasPopupStatDateVal(data.containstxt4);
    quotasPopupPage.verifyQuotasPopupContainsTxt(data.containstxt5);
    quotasPopupPage.verifyQuotasPopupViewBalDt();
    quotasPopupPage.verifyQuotasPopupTableColVal(data.containstxt6);
    quotasPopupPage.verifyQuotasPopupStaTxt(data.containstxt7);
    quotasPopupPage.verifyQuotasPopupExhstTxt(data.containstxt8);
    quotasPopupPage.verifyQuotasPopupRowTxt5(data.containstxt9);
    quotasPopupPage.verifyQuotasPopupRowTxt6(data.containstxt10);
  });
  it('Quota Popup - Verify quota status and blocking period', function() {
    const data = Cypress.env('testData')[7];
    quotasPopupPage.verifyQuotasStaticDtLink(data.containstxt, data.commodity);
    commonPage.verifyTxtAndClk(data.containstxt2);
    quotasPopupPage.verifyQuotasPopupHeadTxt(data.containstxt3);
    quotasPopupPage.verifyQuotasPopupStatDateVal(data.containstxt4);
    quotasPopupPage.verifyQuotasPopupTableNumVal1(data.containstxt5);
    quotasPopupPage.verifyQuotasPopupViewBalDt();
    quotasPopupPage.verifyQuotasPopupTableColVal(data.containstxt6);
    quotasPopupPage.verifyQuotasPopupStaTxt(data.containstxt7);
    quotasPopupPage.verifyQuotasPopupExhstTxt(data.containstxt8);
    quotasPopupPage.verifyQuotasPopupRowTxt5(data.containstxt9);
    quotasPopupPage.verifyQuotasInnerTextStatDate(data.containstxt10);
  });
  it('Quota Popup - Verify quota status and suspension period', function() {
    const data = Cypress.env('testData')[8];
    quotasPopupPage.verifyQuotasStaticDtLink(data.containstxt, data.commodity);
    commonPage.verifyTxtAndClk(data.containstxt2);
    quotasPopupPage.verifyQuotasPopupHeadTxt(data.containstxt3);
    quotasPopupPage.verifyQuotasPopupStatDateVal(data.containstxt4);
    quotasPopupPage.verifyQuotasPopupTableNumVal1(data.containstxt5);
    quotasPopupPage.verifyQuotasPopupViewBalDt(data.containstxt6);
    quotasPopupPage.verifyQuotasPopupTableColVal(data.containstxt7);
    quotasPopupPage.verifyQuotasPopupText(data.containstxt8);
    quotasPopupPage.verifyQuotasPopupStaTxt(data.containstxt9);
    quotasPopupPage.verifyQuotasPopupExhstTxt(data.containstxt10);
    quotasPopupPage.verifyQuotasPopupRowTxt7(data.containstxt11);
    quotasPopupPage.verifyQuotasPopupRowTxt7(data.containstxt12);
    quotasPopupPage.verifyQuotasPopupRowTxt8(data.containstxt13);
    quotasPopupPage.verifyQuotasPopupRowTxt8(data.containstxt14);
    quotasPopupPage.verifyQuotasPopupRowTxt5(data.containstxt15);
    quotasPopupPage.verifyQuotasPopupRowTxt5(data.containstxt16);
  });
  it('Quota Popup - Verify quota status and suspension and blocking periods', function() {
    const data = Cypress.env('testData')[9];
    quotasPopupPage.verifyQuotasStaticDtLink(data.containstxt, data.commodity);
    commonPage.verifyTxtAndClk(data.containstxt2);
    quotasPopupPage.verifyQuotasPopupHeadTxt(data.containstxt3);
    quotasPopupPage.verifyQuotasPopupStatDateVal(data.containstxt4);
    quotasPopupPage.verifyQuotasPopupTableNumVal1(data.containstxt5);
    quotasPopupPage.verifyQuotasPopupViewBalDt(data.containstxt6);
    quotasPopupPage.verifyQuotasPopupTableColVal(data.containstxt7);
    quotasPopupPage.verifyQuotasPopupText(data.containstxt8);
    quotasPopupPage.verifyQuotasPopupStaTxt(data.containstxt9);
    quotasPopupPage.verifyQuotasPopupExhstTxt(data.containstxt10);
    quotasPopupPage.verifyQuotasPopupRowTxt7(data.containstxt11);
    quotasPopupPage.verifyQuotasPopupRowTxt7(data.containstxt12);
    quotasPopupPage.verifyQuotasPopupRowTxt8(data.containstxt13);
    quotasPopupPage.verifyQuotasPopupRowTxt8(data.containstxt14);
    quotasPopupPage.verifyQuotasPopupRowTxt5(data.containstxt15);
    quotasPopupPage.verifyQuotasPopupRowTxt5(data.containstxt16);
    quotasPopupPage.verifyQuotasPopupContainsTxt(data.containstxt17);
    quotasPopupPage.verifyQuotasInnerTextStatDate(data.containstxt18);
  });
  it('UK quota numbers post 1 Jan 2021 -054xxx Licensed', function() {
    const data = Cypress.env('testData')[10];
    commonPage.goToUrl(`/commodities/${data.commodity}#import`);
    quotasPopupPage.verifyQuotasPanelTableColTxt(data.containstxt);
    quotasPopupPage.verifyQuotasOrderDetailsAndClk(data.containstxt2);
    quotasPopupPage.verifyQuotasPopupTextDtls(data.containstxt3);
  });
  context('when the commodity safeguard quota measure has transfer events', function() {
    it('does not show any balance transfers before HMRC started managing them', function() {
      const data = Cypress.env('testData')[11];
      quotasPopupPage.verifyQuotasStatic4DtLink(data.containstxt, data.commodity);
      commonPage.verifyTxtAndClk(data.containstxt2);
      quotasPopupPage.verifyQuotasPopupContainsTxt1(data.containstxt3);
      quotasPopupPage.verifyQuotasPopupContainsTxt2(data.containstxt4);
    });
    it('shows a pending balance before the closing date', function() {
      const data = Cypress.env('testData')[12];
      quotasPopupPage.verifyQuotasStatic4DtLink(data.containstxt, data.commodity);
      commonPage.verifyTxtAndClk(data.containstxt2);
      quotasPopupPage.verifyQuotasPopupContainsTxt(data.containstxt3);
      quotasPopupPage.verifyQuotasPopupContainsTxt(data.containstxt4);
    });
    it('shows a transfer balance after the closing date', function() {
      const data = Cypress.env('testData')[13];
      quotasPopupPage.verifyQuotasStatic4DtLink(data.containstxt, data.commodity);
      commonPage.verifyTxtAndClk(data.containstxt2);
      quotasPopupPage.verifyQuotasPopupContainsTxt(data.containstxt3);
      quotasPopupPage.verifyQuotasPopupContainsTxt(data.containstxt4);
    });
  });
});


