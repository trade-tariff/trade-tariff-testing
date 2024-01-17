import dutyCalculatorPage from '../../pages/dutyCalculatorPage';
import commonPage from '../../pages/commonPage';
import commodityPage from '../../pages/commodityPage';
import commonHelpers from '../../helpers/commonHelpers';

describe('| EU-NI-e2e.spec | EU to Northern Ireland', () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.setTestData('dutyCalculator');
  });
  beforeEach(() => {
    data = commonPage.getTestData();
  });
  afterEach(() => {
    dutyCalculatorPage.verifyNoDutyPage(data.noDutyPageEUToNI);
    commonPage.clkBackLnk();
    dutyCalculatorPage.verifySelectOriginPage();
    dutyCalculatorPage.selectOriginAndClkContinueBtn(data.origin);
    commonPage.clkStartAgainBtn();
    dutyCalculatorPage.verifyWhenWillTheGoodsImportPage();
  });
  context('| EU-NI-e2e.spec | EU to NI route 🚎', () => {
    it('EU-NI501-e2e', () => {
      commonHelpers.verifyStepsFromGoodsImportPageToOriginSelectionPage(
          data.country, data.commodityCode, data.destination, data.origin);
    });
    it('EU-NI502-e2e', function() {
      commodityPage.goToCommCodePage(data.commodityCode, data.country);
      dutyCalculatorPage.clkDutyCalcLnkOnCommoditiesPage(data.commodityCode);
      dutyCalculatorPage.verifyWhenWillTheGoodsImportPage();
      dutyCalculatorPage.enterDateAndClkContinueBtn(true);
      dutyCalculatorPage.verifySelectDestinationPage();
      dutyCalculatorPage.selectDestinationAndClkContinue(data.destination);
      dutyCalculatorPage.verifySelectOriginPage();
      dutyCalculatorPage.selectOriginAndClkContinueBtn(data.origin);
    });
  });
});
