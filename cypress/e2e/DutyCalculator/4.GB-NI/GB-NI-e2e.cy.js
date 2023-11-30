import dutyCalculatorPage from '../../../pages/dutyCalculatorPage';
import commonPage from '../../../pages/commonPage';

describe('| GB-NI-e2e.spec | GB to NI route', () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.loadData('dutyCalculator');
  });
  beforeEach(() => {
    data = commonPage.getTestData();
  });
  context('| GB-NI401-e2e.spec | GB to NI route 🚎 01', () => {
    it('GB-NI401-e2e', () => {
      dutyCalculatorPage.goToDutyCalcURL(data.country, data.commoditycode);
      dutyCalculatorPage.verifyWhenWillTheGoodsImportPage();
      dutyCalculatorPage.enterDateAndClkContinueBtn(true);
      dutyCalculatorPage.verifySelectDestinationPage();
      dutyCalculatorPage.selectDestinationAndClkContinue(data.destination);
      dutyCalculatorPage.verifySelectOriginPage();
      dutyCalculatorPage.selectOriginAndClkContinue(data.origin);
      commonPage.verifyContains(data.contains);
      commonPage.verifyTxtAndClk(data.txttoclk);
      commonPage.verifyContains(data.pagetitle);
    });
  });
});
