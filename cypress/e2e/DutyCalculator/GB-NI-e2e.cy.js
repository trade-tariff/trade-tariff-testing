import dutyCalculatorPage from '../../pages/dutyCalculatorPage';
import commonPage from '../../pages/commonPage';
import commonHelpers from '../../helpers/commonHelpers';

describe('| GB-NI-e2e.spec | GB to NI route', () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.setTestData('dutyCalculator');
  });
  beforeEach(() => {
    data = commonPage.getTestData();
    console.log('data: ', data);
    commonHelpers.verifyGBToNIStepsUptoOriginSelectionPage(
        data.country, data.commodityCode, data.destination, data.origin);
  });
  context('| GB-NI-e2e.spec | GB to NI route 🚎', () => {
    it('GB-NI401-e2e', () => {
      dutyCalculatorPage.verifyNoDutyPage();
      commonPage.clkStartAgainBtn();
      dutyCalculatorPage.verifyWhenWillTheGoodsImportPage();
    });
    it('GB-NI402a-e2e', () => {
      commonHelpers.verifyGBToNIStepsForNoDutyPageScenarios(
          data.traderScheme, data.finalUse, data.turnOver, null, null, data.noDutyPageGBToNI);
    });
    it('GB-NI402b-e2e', () => {
      commonHelpers.verifyGBToNIStepsForNoDutyPageScenarios(
          data.traderScheme, data.finalUse, data.turnOver, null, data.plannedOption, data.noDutyPageGBToNI);
    });
    it('GB-NI402c-e2e', () => {
      commonHelpers.verifyGBToNIStepsForNoDutyPageScenarios(
          data.traderScheme, data.finalUse, data.turnOver, null, data.plannedOption, data.noDutyPageGBToNI);
    });
    it('GB-NI403-e2e', () => {
      commonHelpers.verifyGBToNIStepsForNoDutyPageScenarios(
          data.traderScheme, data.finalUse, null, data.certOrigin, null, data.noDutyPageGBToNI);
    });
    it('GB-NI404a-e2e', () => {
      commonHelpers.verifyGBTONIStepsForE2EScenario(data.traderScheme, data.finalUse, data.certOrigin, data.euDutiesApplyPage, null,
          null, data.customsValuePage, data.customsValue, data.importQuantityPage, data.importQuantity, data.documentCodePage,
          data.documentCode, null, null, data.checkYourAnswersTableData, data.importDutyCalculationPage, null);
    });
    it('GB-NI404b-e2e', () => {
      commonHelpers.verifyGBTONIStepsForE2EScenario(data.traderScheme, data.finalUse, data.certOrigin, data.euDutiesApplyPage,
          data.meursingCodePage, data.meursingAdditionalCode, data.customsValuePage, data.customsValue, data.importQuantityPage,
          data.importQuantity, null, null, data.vatRatePage, data.vatRate, data.checkYourAnswersTableData,
          data.importDutyCalculationPage, null);
    });
    it('GB-NI405-e2e', () => {
      commonHelpers.verifyGBToNIStepsForNoDutyPageScenarios(
          data.traderScheme, data.finalUse, data.turnOver, data.certOrigin, data.plannedOption, data.noDutyPageGBToNI);
    });
    it('GB-NI406a-e2e', () => {
      commonHelpers.verifyGBTONIStepsForE2EScenario(data.traderScheme, data.finalUse, data.certOrigin, data.euDutiesApplyPage,
          null, null, data.customsValuePage, data.customsValue, data.importQuantityPage, data.importQuantity,
          data.documentCodePage, data.documentCode, null, null, data.checkYourAnswersTableData, data.importDutyCalculationPage, null);
    });
    it('GB-NI406b-e2e', () => {
      commonHelpers.verifyGBTONIStepsForE2EScenario(data.traderScheme, data.finalUse, data.certOrigin, data.euDutiesApplyPage,
          data.meursingCodePage, data.meursingAdditionalCode, data.customsValuePage, data.customsValue, data.importQuantityPage,
          data.importQuantity, null, null, data.vatRatePage, data.vatRate, data.checkYourAnswersTableData, data.importDutyCalculationPage,
          data.importDutyCalculationPageTableData, null);
    });
    it('GB-NI407-e2e', () => {
      commonHelpers.verifyGBToNIStepsForNoDutyPageScenarios(
          data.traderScheme, null, null, data.certOrigin, null, data.noDutyPageGBToNI);
    });
    it('GB-NI408a-e2e', () => {
      commonHelpers.verifyGBTONIStepsForE2EScenario(data.traderScheme, null, data.certOrigin, data.euDutiesApplyPage,
          null, null, data.customsValuePage, data.customsValue, null, null, null, null, null, null,
          data.checkYourAnswersTableData, data.importDutyCalculationPage, data.importDutyCalculationPageTableData, null, data.tradeOptions);
    });
    it('GB-NI408b-e2e', () => {
      commonHelpers.verifyGBTONIStepsForE2EScenario(data.traderScheme, null, data.certOrigin, data.euDutiesApplyPage, data.meursingCodePage,
          data.meursingAdditionalCode, data.customsValuePage, data.customsValue, data.importQuantityPage, data.importQuantity, null, null,
          data.vatRatePage, data.vatRate, data.checkYourAnswersTableData, data.importDutyCalculationPage,
          data.importDutyCalculationPageTableData, data.detailsOfYourTradeTableData, data.tradeOptions);
    });
    it('GB-NI409a-e2e', () => {
      commonHelpers.verifyGBTONIStepsForE2EScenario(null, null, null, data.euDutiesApplyPage, null, null, data.customsValuePage,
          data.customsValue, null, null, null, null, null, null, data.checkYourAnswersTableData, data.importDutyCalculationPage,
          data.importDutyCalculationPageTableData, data.detailsOfYourTradeTableData, data.tradeOptions);
    });
    it('GB-NI409b-e2e', () => {
      commonHelpers.verifyGBTONIStepsForE2EScenario(null, null, null, data.euDutiesApplyPage, null, null, data.customsValuePage,
          data.customsValue, null, null, null, null, null, null, data.checkYourAnswersTableData, data.importDutyCalculationPage,
          data.importDutyCalculationPageTableData, data.detailsOfYourTradeTableData, data.tradeOptions);
    });
  });
});
