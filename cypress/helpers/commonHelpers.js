import commodityPage from '../pages/commodityPage';
import commonPage from '../pages/commonPage';
import searchPage from '../pages/searchPage';
import quotasSearchPage from '../pages/quotasSearchPage';
import quotasPopupPage from '../pages/quotasPopupPage';
import dutyCalculatorPage from '../pages/dutyCalculatorPage';

class CommonHelpers {
  // search shows expected chemicals
  searchChemicals(searchStr, include, containsTxt) {
    searchPage.searchForCommodity(searchStr);
    commonPage.verifyUrlShudInclude(include);
    commodityPage.clkChemicalsTab();
    commodityPage.verifyChemicalsContains(containsTxt);
  }
  // search returns results for synonyms
  searchReturnsResultsForSynonmys(searchStr, containsTxt) {
    searchPage.searchForCommodity(searchStr);
    searchPage.verifySearchResults(containsTxt);
  }
  // search shows expected results
  searchNavigates(searchStr, include) {
    searchPage.enterTxtInTheSearchFieldAndClkEnter(searchStr);
    commonPage.verifyUrlShudInclude(include);
  }
  // search navigates to 6/8/10 digits subheadings
  searchNavigatesToSubheadings(searchStr, suggestionTxtToMatch, matchStr) {
    searchPage.verifySearchSuggstnListAndClkSpecificSuggstnTxt(searchStr, suggestionTxtToMatch);
    commonPage.verifyUrlShudMatch(matchStr);
  }
  // search with expired subheadings
  searchNavigatesExpiredSubheadings(searchStr, include) {
    searchPage.enterTxtInTheSearchFieldAndClkEnter(searchStr);
    commonPage.verifyUrlShudMatch(include);
  }
  // search with nonsense input
  searchShowsNoResults(searchStr, containsTxt) {
    searchPage.enterTxtInTheSearchFieldAndClkEnter(searchStr);
    commonPage.verifyContains(containsTxt);
  }
  // searchBtn click and verifyResults text
  verifyQuotasSearchBtnClkandRslts() {
    quotasSearchPage.verifySearchForQuotasBtn();
    quotasSearchPage.verifyQuotasSearchResult();
  }
  // navigate to specific url and verify and click on ordernumber
  verifyQuotasOrderNumAndClk(commodityCode, balanceDt, orderNum) {
    quotasPopupPage.verifyStaticDtUrl(commodityCode, balanceDt);
    commonPage.verifyTxtAndClk(orderNum);
  }
  // click ordenrNum and verify HeadText on QuotasPopup
  clkQuotasOrderNumAndVfyTxt(orderNum, headTxt) {
    commonPage.verifyTxtAndClk(orderNum);
    quotasPopupPage.verifyTxt(headTxt);
  }
  // common method for data parameterization
  verifyData(testData) {
    const keys = Object.keys(testData);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      switch (commonPage.getTestCaseName()) {
        case 'Quotas Search - Copy / No Input':
          commonPage.verifyContains(testData[key]);
          break;
        case 'Quotas Search - Order Number':
          quotasSearchPage.verifyQuotasSearchResults(testData[key]);
          break;
        case 'Quotas Search - Status':
          quotasSearchPage.selectSearchForQuotasStatusTxt(testData[key]);
          this.verifyQuotasSearchBtnClkandRslts();
          break;
        case 'Quotas Search - Order Number - Included EU country  - Italy':
          quotasSearchPage.verifyQuotasSearchResults(testData[key]);
          break;
        default: quotasPopupPage.verifyPopupContains(testData[key]);
      }
    }
  }
  // this method is used to verify static text on a specific page
  verifyStaticContent(staticData) {
    const keys = Object.keys(staticData);
    cy.log(keys);
    const values = Object.values(staticData);
    for (let i = 0; i < values.length; i++) {
      if (keys[i].includes('link')) {
        commonPage.verifyPageShudHaveLnk(values[i]);
      } else {
        commonPage.verifyContains(values[i]);
      }
    }
  }
  // NI to GB duty calculator scenario steps
  verifyNIToGBNoDutyScenario(commodityCode, destination, originStaticTxt, origin, noDutyStaticTxt) {
    commodityPage.clkDutyCalcLnk(commodityCode);
    dutyCalculatorPage.verifyWhenWillTheGoodsImportPage();
    dutyCalculatorPage.enterDateAndClkContinueBtn(true);
    dutyCalculatorPage.verifySelectDestinationPage();
    dutyCalculatorPage.selectDestinationAndClkContinue(destination);
    this.verifyStaticContent(originStaticTxt);
    dutyCalculatorPage.selectOriginFromListAndClkContinueBtn(origin);
    dutyCalculatorPage.verifyNoDutyPage();
    this.verifyStaticContent(noDutyStaticTxt);
    commonPage.clkBackLnk();
    dutyCalculatorPage.verifySelectOriginPage();
    commonPage.clkContinueBtn();
    dutyCalculatorPage.clkStartAgainBtn();
  }
}

export default new CommonHelpers();
