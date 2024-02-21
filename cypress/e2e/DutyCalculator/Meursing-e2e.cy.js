import commonPage from '../../pages/commonPage';
import meursingPage from '../../pages/meursingPage';
import commodityPage from '../../pages/commodityPage';
import commonHelpers from '../../helpers/commonHelpers';
import toolsPage from '../../pages/toolsPage';

describe('| Meursing e2e Spec |', () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.setTestData('meursingDutyCalc');
  });
  // Get data before each test run based on test case name
  beforeEach(() => {
    data = commonPage.getTestData();
    console.log('data: ', data);
  });
  it('MeursingCalculations-EA/EAR', () => {
    commodityPage.goToCommCodePage(data.commodityCode, data.country);
    commodityPage.checkCommPage(data.commodityCode);
    commodityPage.enterAndSelectTradePartnerCountryNameFromDropDown(data.tradePartnerCountry, data.countryShortCode);
    commodityPage.clkImportTab();
    commodityPage.verifyMeursingLookUpResultsTxt(data.meursingLookupResult, data.meursingInputPrefixCode);
    commodityPage.verifyImportDutiesMeasureContainsOrDutyRates(data.measureId, data.dutyRateEA);
    commodityPage.enterAdditionalCodeAndclkSaveCodeBtn(data.additionalCode);
    commodityPage.verifyImportDutiesMeasureContainsOrDutyRates(data.measureId, data.dutyRateEUR);
  });
  it('MeursingCalculations-ASDZ/ASDZR', () => {
    commodityPage.goToCommCodePage(data.commodityCode, data.country);
    commodityPage.checkCommPage(data.commodityCode);
    commodityPage.enterAndSelectTradePartnerCountryNameFromDropDown(data.tradePartnerCountry, data.countryShortCode);
    commodityPage.clkImportTab();
    commodityPage.verifyMeursingLookUpResultsTxt(data.meursingLookupResult, data.meursingInputPrefixCode);
    commodityPage.verifyImportDutiesMeasureContainsOrDutyRates(data.measureId1, data.dutyRate1);
    commodityPage.verifyImportDutiesMeasureContainsOrDutyRates(data.measureId2, data.dutyRate2);
    commodityPage.enterAdditionalCodeAndclkSaveCodeBtn(data.additionalCode);
    commodityPage.verifyImportDutiesMeasureContainsOrDutyRates(data.measureId1, data.dutyRate3);
    commodityPage.verifyImportDutiesMeasureContainsOrDutyRates(data.measureId2, data.dutyRate4);
  });
  it('MeursingCalculations-ADFM/ADFMR', () => {
    commodityPage.goToCommCodePage(data.commodityCode, data.country);
    commodityPage.checkCommPage(data.commodityCode);
    commodityPage.enterAndSelectTradePartnerCountryNameFromDropDown(data.tradePartnerCountry, data.countryShortCode);
    commodityPage.clkImportTab();
    commodityPage.verifyMeursingLookUpResultsTxt(data.meursingLookupResult, data.meursingInputPrefixCode);
    commodityPage.verifyImportDutiesMeasureContainsOrDutyRates(data.measureId1, data.dutyRate1);
    commodityPage.verifyImportDutiesMeasureContainsOrDutyRates(data.measureId2, data.dutyRate2);
    commodityPage.enterAdditionalCodeAndclkSaveCodeBtn(data.additionalCode);
    commodityPage.verifyImportDutiesMeasureContainsOrDutyRates(data.measureId1, data.dutyRate3);
    commodityPage.verifyImportDutiesMeasureContainsOrDutyRates(data.measureId2, data.dutyRate4);
  });
  it('Validate old meursing links are removed', () => {
    commodityPage.goToCommCodePage(data.commodityCode, data.country);
    commodityPage.checkCommPage(data.commodityCode);
    commonPage.textShudNotExist(data.noMeursingCode);
  });
  context('Meursinge Code E2E | end to end journeys', () => {
    it('meursing code e2e journeys - 4 options', () => {
      commonPage.goToUrl(data.baseUrl);
      commonHelpers.verifyStaticContent(data.meursingLookUpStartPage);
      commonPage.clkStartNowBtn();
      commonHelpers.verifyStaticContent(data.meursingLookUpStarchPage);
      meursingPage.verifyAndSelectMeursingCodeLookUpOptions(data.starch, data.sugar, data.milkfat, data.milkprotein, data.meursingCode);
    });
    it('meursing code e2e journeys - 3 options', () => {
      commonPage.goToUrl(data.baseUrl);
      commonHelpers.verifyStaticContent(data.meursingLookUpStartPage);
      commonPage.clkStartNowBtn();
      commonHelpers.verifyStaticContent(data.meursingLookUpStarchPage);
      meursingPage.verifyAndSelectMeursingCodeLookUpOptions(data.starch, data.sugar, data.milkfat, null, data.meursingCode);
    });
  });
  context('Meursing - Store Commodity code + Meursing code in Session', () => {
    it('Meursing - Store CommCode + MeursingCode in Session', () => {
      meursingPage.storeAndVerifyCommCodeAndMeursingCodeInSession(data.commodityCodes, data.country, data.meursingLookUpStartPage,
          data.starch, data.sugar, data.milkfat, data.milkprotein, data.meursingCode);
    });
    it('meursing calculator link on commodity import section', () => {
      commodityPage.goToCommCodePage(data.commodityCode, data.country);
      commonHelpers.verifyStaticContent(data.meursingLookupResult);
      commodityPage.clkMeursingCodeFinderLnk();
      meursingPage.verifyLookUpMeursingCode();
      commonPage.goBack();
      commodityPage.checkCommPage(data.commodityCode);
      commodityPage.enterAdditionalCodeAndclkSaveCodeBtn(data.additionalCode);
    });
  });
  context('| 🛃 📱 XI | meursingMobile | mobile version |', () => {
    it('iphone - meursing e2e journey', () => {
      meursingPage.verifyMeursingMobilePage(data.viewPort, data.baseUrl, data.starch, data.sugar, data.milkfat, data.milkprotein,
          data.meursingCode);
    });
    it('android - meursing e2e journey', () => {
      meursingPage.verifyMeursingMobilePage(data.viewPort, data.baseUrl, data.starch, data.sugar, data.milkfat, data.milkprotein,
          data.meursingCode);
    });
  });
  context('| meursingPages | Page validations |', () => {
    it('Stach, Sucrose, Milk fat, Milk protein pages', () => {
      commonPage.goToUrl(data.baseUrl);
      toolsPage.clkMeursingCodeFinderLnk();
      commonHelpers.verifyStaticContent(data.meursingLookUpStartPage);
      commonPage.clkStartNowBtn();
      meursingPage.verifyMeursingPageAndErrorMsgAndClkContinueBtn(data.starch);
      meursingPage.verifyMeursingPageAndErrorMsgAndClkContinueBtn(data.sucrose);
      meursingPage.verifyMeursingPageAndErrorMsgAndClkContinueBtn(data.milkfat);
      meursingPage.verifyMeursingPageAndErrorMsgAndClkContinueBtn(data.milkprotein);
      meursingPage.verifyCheckYourAnswersDataAndClkContinueBtn(data.checkYourAnswersTableData);
      meursingPage.verifyMeursingCodeFinalStep(data.meursingCode, data.meursingCodeFinalStepPage);
      meursingPage.clkBackLnkAndClkChangeLnkOptions(data.starch, data.sucrose, data.milkfat, data.milkprotein, data.reviewsAnswersLnk);
      meursingPage.clkBackLnkAndVerifyHeadingsOfMeursingPages();
    });
    it('Check answers and Change options', () => {
      commonPage.goToUrl(data.baseUrl);
      meursingPage.checkAnswersAndChangeOptions(data.starch, data.sugar, data.milkfat, data.milkprotein,
          data.meursingCode, data.reviewsAnswersLnk, data.changeLnkData);
    });
  });
});
