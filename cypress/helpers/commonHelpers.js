import commodityPage from '../pages/commodityPage';
import commonPage from '../pages/commonPage';
import searchPage from '../pages/searchPage';

class CommonHelpers {
  searchChemicals(searchstr, include, containstxt) {
    searchPage.searchForCommodity(searchstr);
    commonPage.verifyUrlShudInclude(include);
    commodityPage.clkChemicalsTab();
    commodityPage.verifyChemicalsContains(containstxt);
  }
  searchNavigates(searchstr, include) {
    searchPage.enterTxtInTheSearchFieldAndClkEnter(searchstr);
    commonPage.verifyUrlShudInclude(include);
  }
}

module.exports = new CommonHelpers();
