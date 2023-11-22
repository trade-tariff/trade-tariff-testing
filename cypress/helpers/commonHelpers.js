import commodityPage from '../pages/commodityPage';
import commonPage from '../pages/commonPage';
import searchPage from '../pages/searchPage';

class CommonHelpers {
  // search shows expected chemicals
  searchChemicals(searchstr, include, containstxt) {
    searchPage.searchForCommodity(searchstr);
    commonPage.verifyUrlShudInclude(include);
    commodityPage.clkChemicalsTab();
    commodityPage.verifyChemicalsContains(containstxt);
  }
  // search returns results for synonyms
  searchReturnsResultsForSynonmys(searchstr, containstxt) {
    searchPage.searchForCommodity(searchstr);
    searchPage.verifySearchResults(containstxt);
  }
  // search shows expected results
  searchNavigates(searchstr, include) {
    searchPage.enterTxtInTheSearchFieldAndClkEnter(searchstr);
    commonPage.verifyUrlShudInclude(include);
  }
  // search navigates to 6/8/10 digits subheadings
  searchNavigatesToSubheadings(searchstr, suggestiontxttomatch, matchstr) {
    searchPage.verifySearchSuggstnListAndClkSpecificSuggstnTxt(searchstr, suggestiontxttomatch);
    commonPage.verifyUrlShudMatch(matchstr);
  }
  // search with expired subheadings
  searchNavigatesExpiredSubheadings(searchstr, include) {
    searchPage.enterTxtInTheSearchFieldAndClkEnter(searchstr);
    commonPage.verifyUrlShudMatch(include);
  }
  // search with nonsense input
  searchShowsNoResults(searchstr, containstxt) {
    searchPage.enterTxtInTheSearchFieldAndClkEnter(searchstr);
    commonPage.verifyContains(containstxt);
  }
}

module.exports = new CommonHelpers();
