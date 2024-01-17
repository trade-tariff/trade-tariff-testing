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
    for (const [key, value] of Object.entries(staticData)) {
      if (key.includes('link')) {
        commonPage.verifyPageShudHaveLnk(value);
      } else {
        commonPage.verifyContains(value);
      }
    }
  }
  // NI to GB no duty page scenario steps
  verifyNoDutyPageNIToGB(commodityCode, destination, originPage, origin, noDutyPageNIToGB) {
    commodityPage.clkDutyCalcLnk(commodityCode);
    dutyCalculatorPage.verifyWhenWillTheGoodsImportPage();
    dutyCalculatorPage.enterDateAndClkContinueBtn(true);
    dutyCalculatorPage.verifySelectDestinationPage();
    dutyCalculatorPage.selectDestinationAndClkContinue(destination);
    this.verifyStaticContent(originPage);
    dutyCalculatorPage.selectOriginFromListAndClkContinueBtn(origin);
    dutyCalculatorPage.verifyNoDutyPage(noDutyPageNIToGB);
    commonPage.clkBackLnk();
    dutyCalculatorPage.verifySelectOriginPage();
    this.verifyStaticContent(originPage);
    commonPage.clkContinueBtn();
    dutyCalculatorPage.clkStartAgainBtn();
  }

  // verfiy steps from when will the goods import page to select origin page - scenarios steps to run for before each method
  verifyStepsFromGoodsImportPageToOriginSelectionPage(country, commodityCode, destination, origin) {
    dutyCalculatorPage.goToDutyCalcURL(country, commodityCode);
    dutyCalculatorPage.verifyWhenWillTheGoodsImportPage();
    dutyCalculatorPage.enterDateAndClkContinueBtn(true);
    dutyCalculatorPage.verifySelectDestinationPage();
    dutyCalculatorPage.selectDestinationAndClkContinue(destination);
    dutyCalculatorPage.verifySelectOriginPage();
    dutyCalculatorPage.selectOriginAndClkContinueBtn(origin);
  }

  // GB to NI scenarios steps for no duty page
  verifyGBToNIStepsForNoDutyPageScenarios(traderScheme, finalUse, turnOver, certOrigin, plannedOption, noDutyPageGBToNI) {
    dutyCalculatorPage.verifyTraderSchemePage();
    dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(traderScheme);
    if (finalUse != null) {
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage();
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(finalUse);
    }
    if (turnOver != null) {
      dutyCalculatorPage.verifyAnnualTrunOverPage();
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(turnOver);
    }
    if (commonPage.getTestCaseName() == 'GB-NI405-e2e') {
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(plannedOption);
      dutyCalculatorPage.verifyCertificateOfOriginPage();
      dutyCalculatorPage.selectCertificateOfOriginAndClkContinueBtn(certOrigin);
    } else if (certOrigin != null) {
      dutyCalculatorPage.verifyCertificateOfOriginPage();
      dutyCalculatorPage.selectCertificateOfOriginAndClkContinueBtn(certOrigin);
    } else if (plannedOption != null) {
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(plannedOption);
    }
    dutyCalculatorPage.verifyNoDutyPage(noDutyPageGBToNI);
    if (commonPage.getTestCaseName() == 'GB-NI402a-e2e') {
      commonPage.clkBackLnk();
      dutyCalculatorPage.verifyAnnualTrunOverOptionShudBeChecked(turnOver);
    } else if (commonPage.getTestCaseName() != 'GB-NI403-e2e' && commonPage.getTestCaseName() != 'GB-NI405-e2e' &&
                  commonPage.getTestCaseName() != 'GB-NI407-e2e') {
      commonPage.clkBackLnk();
      dutyCalculatorPage.verifyPlannedProcessingOptionShudBeChecked(plannedOption);
    }
    if (commonPage.getTestCaseName() != 'GB-NI403-e2e' && commonPage.getTestCaseName() != 'GB-NI405-e2e' &&
          commonPage.getTestCaseName() != 'GB-NI407-e2e') {
      commonPage.clkContinueBtn();
      dutyCalculatorPage.verifyNoDutyPage();
    }
    commonPage.clkStartAgainBtn();
    dutyCalculatorPage.verifyWhenWillTheGoodsImportPage();
  }

  // GB to NI scenarios steps for E2E
  verifyGBTONIStepsForE2EScenario(traderScheme, finalUse, certOrigin, euDutiesApplyPage, meursingCodePage,
      meursingAdditionalCode, customsValuePage, customsValue, importQuantityPage, importQuantity, documentCodePage, documentCode,
      vatRatePage, vatRate, checkYourAnswersTableData, importDutyCalculationPage, importDutyCalculationPageTableData,
      detailsOfYourTradeTableData, tradeOptions) {
    if (traderScheme != null) {
      dutyCalculatorPage.verifyTraderSchemePage();
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(traderScheme);
    }
    if (finalUse != null ) {
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage();
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(finalUse);
    }
    if (certOrigin != null) {
      dutyCalculatorPage.verifyCertificateOfOriginPage();
      dutyCalculatorPage.selectCertificateOfOriginAndClkContinueBtn(certOrigin);
    }
    dutyCalculatorPage.verifyEuDutiesApplyPageAndClkContinueBtn(euDutiesApplyPage);
    if (meursingCodePage != null) {
      dutyCalculatorPage.verifyMeusingCodePage(meursingCodePage);
      dutyCalculatorPage.enterMeusingAdditionalCodeAndClkContinueBtn(meursingAdditionalCode);
    }
    dutyCalculatorPage.verifyCustomValueOfThisImportPage(customsValuePage);
    dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(customsValue);
    if (importQuantityPage != null) {
      dutyCalculatorPage.verifyEnterImportQuantityPage(importQuantityPage);
      dutyCalculatorPage.enterImportQuantityAndClkContinueBtn(importQuantity);
    }
    if (documentCodePage != null) {
      dutyCalculatorPage.verifyDoYouHaveFollowingDocumentsPage(documentCodePage);
      dutyCalculatorPage.selectDocumentCodeAndClkContinueBtn(documentCode);
    }
    if (vatRatePage != null) {
      dutyCalculatorPage.verifyVatRateIsApplicablePage(vatRatePage);
      dutyCalculatorPage.selectVatRateIsApplicableAndClkContinueBtn(vatRate);
    }
    dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(checkYourAnswersTableData);
    dutyCalculatorPage.verifyImportDutyCalculationPage(importDutyCalculationPage);
    if (importDutyCalculationPageTableData != null) {
      dutyCalculatorPage.verifyImportDutyCalculationPageTablesData(importDutyCalculationPageTableData);
      dutyCalculatorPage.clkCommCodeLinkOnImportDutyCalculatorPageAndGoBack(importDutyCalculationPageTableData);
    }
    if (detailsOfYourTradeTableData != null) {
      dutyCalculatorPage.clkAndVerifyDetailsOfYourTradeOnImportDutyCalcPage(detailsOfYourTradeTableData);
    }
    if (tradeOptions != null) {
      dutyCalculatorPage.verifyOptionsForPayingImportDuties(tradeOptions);
    }
  }
}

export default new CommonHelpers();
