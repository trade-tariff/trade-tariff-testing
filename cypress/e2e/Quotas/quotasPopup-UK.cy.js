import commonPage from '../../pages/commonPage';
import quotasPopupPage from '../../pages/quotasPopupPage';
import commonHelpers from '../../helpers/commonHelpers';

describe('🇬🇧 💡 | quotasPopup-UK | Verify quota dialogs |', function() {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('quotasPopup');
  });
  beforeEach(function() {
    data = commonPage.getTestData();
  });
  it('Quota Popup - Verify change the title to quota order number', function() {
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    quotasPopupPage.verifyPanelTxt(data.measureType);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyPopupNotContains(data.quotaOrderNumTxt);
    commonPage.verifyPopupCloseBtn();
  });
  it(`Quota Popup - Verify Balance as of todayDate`, function() {
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyBalDt();
    commonPage.verifyShdNotContains(data.currrentBalance);
  });
  it('Quota Popup - Verify Comma separator in quota balance', function() {
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    quotasPopupPage.verifyPanelTxt(data.measureType);
    commonPage.verifyTxtAndClk(data.orderNumber);
    quotasPopupPage.verifyNumVal();
  });
  it('Quota Popup - Verify Footer content', function() {
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    commonPage.verifyTxtAndClk(data.orderNumber);
    quotasPopupPage.verifyTxt(data.footNotesTxt);
  });
  it(`Quota Popup - Verify balance as of previousDate and click and view balance for todayDate popup`, function() {
    quotasPopupPage.verifyPreDtUrl(data.commodity, quotasPopupPage.prevDt());
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyViewBalDt();
    quotasPopupPage.verifyPreDt();
    quotasPopupPage.clickViewBalDt();
    quotasPopupPage.verifyTxt(data.headTxt);
    quotasPopupPage.verifyBalDt();
    commonHelpers.verifyData(data.popupData);
    quotasPopupPage.verifyTxt(data.footNotesTxt);
  });
  it(`Quota Popup - Verify balance as of futureDate and click and view balance for todayDate popup`, function() {
    quotasPopupPage.verifyFutrDtUrl(data.commodity);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyFutrDt();
    quotasPopupPage.verifyViewBalDt();
    quotasPopupPage.clickViewBalDt();
    quotasPopupPage.verifyTxt(data.headTxt);
    quotasPopupPage.verifyBalDt();
    commonHelpers.verifyData(data.popupData);
    quotasPopupPage.verifyTxt(data.footNotesTxt);
  });
  it('Quota Popup - Verify quota status and no suspension or blocking period', function() {
    quotasPopupPage.verifyStaticDtUrl(data.commodity, data.balanceDt);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyStaticDt(data.balance);
    quotasPopupPage.verifyViewBalDt();
    commonHelpers.verifyData(data.popupData);
  });
  it('Quota Popup - Verify quota status and blocking period', function() {
    quotasPopupPage.verifyStaticDtUrl(data.commodity, data.balanceDt);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyStaticDt(data.balance);
    quotasPopupPage.verifyNumVal(data.balanceValue);
    quotasPopupPage.verifyViewBalDt();
    commonHelpers.verifyData(data.popupData);
  });
  it('Quota Popup - Verify quota status and suspension period', function() {
    quotasPopupPage.verifyStaticDtUrl(data.commodity, data.balanceDt);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyStaticDt(data.balance);
    quotasPopupPage.verifyNumVal(data.balanceValue);
    quotasPopupPage.verifyViewBalDt();
    quotasPopupPage.verifyPopupNotHave(data.pendingBalance);
    commonHelpers.verifyData(data.popupData);
  });

  it('Quota Popup - Verify quota status and suspension and blocking periods', function() {
    quotasPopupPage.verifyStaticDtUrl(data.commodity, data.balanceDt);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyStaticDt(data.balance);
    quotasPopupPage.verifyNumVal(data.balanceValue);
    quotasPopupPage.verifyViewBalDt();
    quotasPopupPage.verifyPopupNotHave(data.pendingBalance);
    commonHelpers.verifyData(data.popupData);
  });
  it('UK quota numbers post 1 Jan 2021 -054xxx Licensed', function() {
    commonPage.goToUrl(`/commodities/${data.commodity}#import`);
    quotasPopupPage.verifyPanelTxt(data.measureType);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.RuralPmtsAgncy);
  });
  context('when the commodity safeguard quota measure has transfer events', function() {
    it('does not show any balance transfers before HMRC started managing them', function() {
      commonHelpers.verifyQuotasOrderNumAndClk(data.commodity, data.balanceDt, data.orderNumber);
      quotasPopupPage.verifyPopupNotContains(data.transferredBalance);
      quotasPopupPage.verifyPopupNotVisible(data.pendingBalance);
    });
    it('shows a pending balance before the closing date', function() {
      commonHelpers.verifyQuotasOrderNumAndClk(data.commodity, data.balanceDt, data.orderNumber);
      quotasPopupPage.verifyPopupContains(data.pendingBalance);
      quotasPopupPage.verifyPopupContains(data.pendingBalanceData);
    });
    it('shows a transfer balance after the closing date', function() {
      commonHelpers.verifyQuotasOrderNumAndClk(data.commodity, data.balanceDt, data.orderNumber);
      quotasPopupPage.verifyPopupContains(data.transferredBalance);
      quotasPopupPage.verifyPopupContains(data.transferredBalanceData);
    });
  });
});


