import commonPage from '../../pages/commonPage';
import commodityPage from '../../pages/commodityPage';
import commonHelpers from '../../helpers/commonHelpers';

describe('| NI-GB-e2e | Northern Ireland to GB United Kingdom |', () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.setTestData('dutyCalculator');
  });
  // Get data before each test run based on test case name
  beforeEach(() => {
    data = commonPage.getTestData();
  });
  // Common method to run after each test case to validate same user actions
  afterEach(() => {
    commonHelpers.verifyNoDutyPageNIToGB(
        data.commodityCode, data.destination, data.origin, data.originPage, data.noDutyPageNIToGB);
  });
  context('| NI-GB-e2e.spec | NI to GB route 🚎 |', () => {
    it('NI-GB-101-e2e-uk', () => {
      commodityPage.goToCommCodePage(data.commodityCode, data.country);
    });
    it('NI-GB-102-e2e-xi', () => {
      commodityPage.goToCommCodePage(data.commodityCode, data.country);
    });
  });
});
