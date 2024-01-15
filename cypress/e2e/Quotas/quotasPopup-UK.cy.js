import commonPage from '../../pages/commonPage';
import quotasPopupPage from '../../pages/quotasPopupPage';
import commonHelpers from '../../helpers/commonHelpers';

describe('🇬🇧 💡 | quotasPopup-UK | Verify quota dialogs |', () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.setTestData('quotasPopup');
  });
  beforeEach(() => {
    data = commonPage.getTestData();
  });
  it('Quota Popup - Verify change the title to quota order number', () => {
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    quotasPopupPage.verifyPanelTxt(data.measureType);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyPopupNotContains(data.quotaOrderNumTxt);
    commonPage.verifyPopupCloseBtn();
  });
  it(`Quota Popup - Verify Balance as of todayDate`, () => {
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyBalDt();
    commonPage.verifyShudNotContains(data.currrentBalance);
  });
  it('Quota Popup - Verify Comma separator in quota balance', () => {
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    quotasPopupPage.verifyPanelTxt(data.measureType);
    commonPage.verifyTxtAndClk(data.orderNumber);
    quotasPopupPage.verifyNumVal();
  });
  it('Quota Popup - Verify Footer content', () => {
    commonPage.goToUrl(`/commodities/${data.commodity}#quotas`);
    commonPage.verifyTxtAndClk(data.orderNumber);
    quotasPopupPage.verifyTxt(data.footNotesTxt);
  });
  it(`Quota Popup - Verify balance as of previousDate and click and view balance for todayDate popup`, () => {
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
  it(`Quota Popup - Verify balance as of futureDate and click and view balance for todayDate popup`, () => {
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
  it('Quota Popup - Verify quota status and no suspension or blocking period', () => {
    quotasPopupPage.verifyStaticDtUrl(data.commodity, data.balanceDt);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyStaticDt(data.balance);
    quotasPopupPage.verifyViewBalDt();
    commonHelpers.verifyData(data.popupData);
  });
  it('Quota Popup - Verify quota status and blocking period', () => {
    quotasPopupPage.verifyStaticDtUrl(data.commodity, data.balanceDt);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyStaticDt(data.balance);
    quotasPopupPage.verifyNumVal(data.balanceValue);
    quotasPopupPage.verifyViewBalDt();
    commonHelpers.verifyData(data.popupData);
  });
  it('Quota Popup - Verify quota status and suspension period', () => {
    quotasPopupPage.verifyStaticDtUrl(data.commodity, data.balanceDt);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyStaticDt(data.balance);
    quotasPopupPage.verifyNumVal(data.balanceValue);
    quotasPopupPage.verifyViewBalDt();
    quotasPopupPage.verifyPopupNotHave(data.pendingBalance);
    commonHelpers.verifyData(data.popupData);
  });

  it('Quota Popup - Verify quota status and suspension and blocking periods', () => {
    quotasPopupPage.verifyStaticDtUrl(data.commodity, data.balanceDt);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.headTxt);
    quotasPopupPage.verifyStaticDt(data.balance);
    quotasPopupPage.verifyNumVal(data.balanceValue);
    quotasPopupPage.verifyViewBalDt();
    quotasPopupPage.verifyPopupNotHave(data.pendingBalance);
    commonHelpers.verifyData(data.popupData);
  });
  it('UK quota numbers post 1 Jan 2021 -054xxx Licensed', () => {
    commonPage.goToUrl(`/commodities/${data.commodity}#import`);
    quotasPopupPage.verifyPanelTxt(data.measureType);
    commonHelpers.clkQuotasOrderNumAndVfyTxt(data.orderNumber, data.RuralPmtsAgncy);
  });
  context('when the commodity safeguard quota measure has transfer events', () => {
    it('does not show any balance transfers before HMRC started managing them', () => {
      commonHelpers.verifyQuotasOrderNumAndClk(data.commodity, data.balanceDt, data.orderNumber);
      quotasPopupPage.verifyPopupNotContains(data.transferredBalance);
      quotasPopupPage.verifyPopupNotVisible(data.pendingBalance);
    });
    it('shows a pending balance before the closing date', () => {
      commonHelpers.verifyQuotasOrderNumAndClk(data.commodity, data.balanceDt, data.orderNumber);
      quotasPopupPage.verifyPopupContains(data.pendingBalance);
      quotasPopupPage.verifyPopupContains(data.pendingBalanceData);
    });
    it('shows a transfer balance after the closing date', () => {
      commonHelpers.verifyQuotasOrderNumAndClk(data.commodity, data.balanceDt, data.orderNumber);
      quotasPopupPage.verifyPopupContains(data.transferredBalance);
      quotasPopupPage.verifyPopupContains(data.transferredBalanceData);
    });
  });
});


