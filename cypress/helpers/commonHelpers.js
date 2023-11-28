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
    for (let i = value; i < size; i++) {
      const key = keys[i];
      switch (commonPage.getTestName()) {
        case 'Quotas Search - Copy / No Input': commonPage.verifyContains(data[key]);
          break;
        case 'Quotas Search - Order Number': quotasSearchPage.verifyQuotasSearchResults(data[key]);
          break;
        case 'Quotas Search - Status': quotasSearchPage.selectSearchForQuotasStatusTxt(data[key]);
          this.elements.verifyQuotasSearchBtnClkandRslts();
          break;
        default: quotasPopupPage.verifyPopupContains(data[key]);
      }
    }
  }
}

module.exports = new CommonHelpers();
