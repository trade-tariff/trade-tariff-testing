import commonPage from '../../pages/commonPage';
import toolsPage from '../../pages/toolsPage';

describe('tools', function() {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('tools');
  });
  beforeEach(function() {
    data = commonPage.getTestData();
  });
  it.only('UK service - has the right links', function() {
    commonPage.goToUrl('/tools');
    commonPage.verifyContains(data.toolsHeadr);
    toolsPage.verifyHeader(data.tools);
    toolsPage.verifyLinks(data.toolsLinks);
    commonPage.textShudNotExist(data.merursinLnk);
  });
  it.only('XI service - has the right links', function() {
    commonPage.goToUrl('xi/tools');
    commonPage.goToUrl('xi/tools');
    commonPage.verifyContains(data.toolsHeadr);
    toolsPage.verifyHeader(data.tools);
    toolsPage.verifyLinks(data.toolsLinks);
    toolsPage.verifyTextShudNotExist(data.lnksNotToHav);
  });
});

