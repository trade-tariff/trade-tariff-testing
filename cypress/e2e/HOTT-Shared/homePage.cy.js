import commonPage from '../../pages/commonPage';
import homePage from '../../pages/homePage';

describe('cookie banner', function() {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('homePage');
  });
  beforeEach(function() {
    data = commonPage.getTestData();
    commonPage.goToUrl('/find_commodity');
  });

  it('Accept Cookies', function() {
    commonPage.verifyTxtAndClk(data.acptButton);
    commonPage.verifyTxtAndClk(data.hideButton);
    homePage.verifyCookie1(data, data.policy1);
    homePage.verifyCookie1(data, data.policy2);
  });


  it('Reject Cookies', function() {
    commonPage.verifyTxtAndClk(data.rejctButton);
    commonPage.verifyTxtAndClk(data.hideButton);
    homePage.verifyCookie1(data, data.policy1);
    homePage.verifyCookie1(data, data.policy2);
  });
});
