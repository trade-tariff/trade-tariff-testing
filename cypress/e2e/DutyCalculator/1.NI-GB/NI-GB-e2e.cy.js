import commonPage from '../../../pages/commonPage';
import commodityPage from '../../../pages/commodityPage';
import commonHelpers from '../../../helpers/commonHelpers';

describe('| NI-GB101--e2e | Northern Ireland to GB United Kingdom |', () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.loadData('dutyCalculator');
  });
  beforeEach(() => {
    data = commonPage.getTestData();
  });
  afterEach(() => {
    commonHelpers.verifyNIToGBNoDutyScenario(
        data.commodityCode, data.destination, data.originStaticTxt, data.origin, data.noDutyStaticTxt);
  });
  context('| NI-GB-e2e.spec | NI to GB route 🚎 |', () => {
    it('NI-GB-101-e2e-uk', () => {
      commodityPage.goToCommCodePage(data.commodityCode);
    });
    it('NI-GB-102-e2e-xi', () => {
      commodityPage.goToCommCodePage(data.commodityCode, data.country);
    });
  });
});
