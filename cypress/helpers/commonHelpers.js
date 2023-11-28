import commodityPage from '../pages/commodityPage';
import commonPage from '../pages/commonPage';
import searchPage from '../pages/searchPage';
import quotasSearchPage from '../pages/quotasSearchPage';
import quotasPopupPage from '../pages/quotasPopupPage';

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
  verifyQuotasSearchBtnClkandRslts() {
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
  }
  // common method for data parameterization
  verifyData(data, value, size) {
    const keys = Object.keys(data);
    const testCaseName = commonPage.getTestName();
    for (let i = value; i < size; i++) {
      const key = keys[i];
      if (data[key] == testCaseName) {
        commonPage.verifyContains(data[key]);
      }
      if (data[key] == testCaseName) {
        quotasSearchPage.verifyQuotasSearchResults(data[key]);
      }
      if (data[key] == testCaseName) {
        quotasSearchPage.selectSearchForQuotasStatusTxt(data[key]);
        this.elements.verifyQuotasSearchBtnClkandRslts();
      }
      if (data[key] == testCaseName) {
        quotasPopupPage.verifyTableData(data[key]);
      }
    }
  }
}

module.exports = new CommonHelpers();
