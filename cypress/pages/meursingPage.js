import commonHelpers from './../helpers/commonHelpers';
import commodityPage from './commodityPage';
import commonPage from './commonPage';
import dutyCalculatorPage from './dutyCalculatorPage';
import toolsPage from './toolsPage';

class MeursingPage {
  elements = {
    starchPageHeading: () => 'How much starch or glucose does the product contain?',
    starchPageErrorMsg: () => 'Enter how much starch or glucose the product contains',
    sugarPageHeading: () => 'How much sucrose, invert sugar or isoglucose does the product contain?',
    sugarPageErrorMsg: () => 'Enter how much sucrose, invert sugar or isoglucose the product contains',
    milkFatHeading: () => 'How much milk fat does the product contain?',
    milkFatErrorMsg: () => 'Enter how much milk fat the product contains',
    milkProteinHeading: () => 'How much milk protein does the product contain?',
    milkProteinErrorMsg: () => 'Enter how much milk protein the product contains',
    meursingLookUpStepsOptions: (pageName) => cy.get(`input[type='radio'][name='meursing_lookup_steps_${pageName}[${pageName}]']`),
    lookUpMeursingCode: () => cy.contains('Look up a Meursing code'),
    checkYoursAnswers: () => cy.contains('Check your answers'),
    meursingCode: (code) => cy.contains(`The Meursing additional code for a product with this composition is ${code}.`),
    errorSummary: () => cy.get('.govuk-error-summary'),
    errorMessage: () => cy.get('.govuk-error-message'),
  };

  verifyLookUpMeursingCode() {
    this.elements.lookUpMeursingCode();
  }

  clkMeursingLookUpStepsOptions(pageName) {
    this.elements.meursingLookUpStepsOptions(pageName).click({multiple: true});
  }

  checkErrorSummary(txtToVerify) {
    this.elements.errorSummary().contains(txtToVerify);
  }

  checkErrorMessage(txtToVerify) {
    this.elements.errorMessage().contains(txtToVerify);
  }

  verifyStarchPageAndClkContinueToVerifyError() {
    commonPage.verifyContains(this.elements.starchPageHeading());
    commonPage.clkContinueBtn();
    this.checkErrorSummary(this.elements.starchPageErrorMsg());
    this.checkErrorMessage(this.elements.starchPageErrorMsg());
  }

  verifySugarPageAndClkContinueToVerifyError() {
    commonPage.verifyContains(this.elements.sugarPageHeading());
    commonPage.clkContinueBtn();
    this.checkErrorSummary(this.elements.sugarPageErrorMsg());
    this.checkErrorMessage(this.elements.sugarPageErrorMsg());
  }

  verifyMilkFatPageAndClkContinueToVerifyError() {
    commonPage.verifyContains(this.elements.milkFatHeading());
    commonPage.clkContinueBtn();
    this.checkErrorSummary(this.elements.milkFatErrorMsg());
    this.checkErrorMessage(this.elements.milkFatErrorMsg());
  }

  verifyMilkProteinPageAndClkContinueToVerifyError() {
    commonPage.verifyContains(this.elements.milkProteinHeading());
    commonPage.clkContinueBtn();
    this.checkErrorSummary(this.elements.milkProteinErrorMsg());
    this.checkErrorMessage(this.elements.milkProteinErrorMsg());
  }

  clkMeursingOptionAndClkContinueBtn(pageName) {
    this.clkMeursingLookUpStepsOptions(pageName);
    commonPage.clkContinueBtn();
  }

  verifyMeursingPageAndErrorMsgAndClkContinueBtn(pageName) {
    switch (pageName) {
      case 'starch':
        this.verifyStarchPageAndClkContinueToVerifyError();
        this.clkMeursingOptionAndClkContinueBtn(pageName);
        break;
      case 'sucrose':
        this.verifySugarPageAndClkContinueToVerifyError();
        this.clkMeursingOptionAndClkContinueBtn(pageName);
        break;
      case 'milk_fat':
        this.verifyMilkFatPageAndClkContinueToVerifyError();
        this.clkMeursingOptionAndClkContinueBtn(pageName);
        break;
      case 'milk_protein':
        this.verifyMilkProteinPageAndClkContinueToVerifyError();
        this.clkMeursingOptionAndClkContinueBtn(pageName);
        break;
    }
  }

  verifyCheckYourAnswersDataAndClkContinueBtn(data) {
    commonHelpers.verifyStaticContent(data);
    commonPage.clkContinueBtn();
  }

  verifyMeursingCodeFinalStep(meursingCode, data) {
    this.elements.meursingCode(meursingCode);
    if (data != null) {
      commonHelpers.verifyStaticContent(data);
    }
  }

  clkChangeLnkAndClkContinueBtn(lnkTxtToClk, goToReviewAnswersPage) {
    commonPage.clkSpecificChangeLnk(dutyCalculatorPage.elements.changeLnks(), lnkTxtToClk);
    switch (lnkTxtToClk) {
      case 'starch':
        commonPage.verifyContains(this.elements.starchPageHeading());
        break;
      case 'sucrose':
        commonPage.verifyContains(this.elements.sugarPageHeading());
        break;
      case 'milkfat':
        commonPage.verifyContains(this.elements.milkFatHeading());
        break;
      case 'milkprotein':
        commonPage.verifyContains(this.elements.milkProteinHeading());
        break;
    }
    commonPage.clkContinueBtn();
    commonPage.goToUrl(goToReviewAnswersPage);
  }

  clkBackLnkAndClkChangeLnkOptions(starch, sucrose, milkfat, milkprotein, goToReviewAnswersPage) {
    this.verifyLookUpMeursingCode();
    commonPage.clkBackLnk();
    this.elements.checkYoursAnswers();
    this.clkChangeLnkAndClkContinueBtn(starch, goToReviewAnswersPage);
    this.clkChangeLnkAndClkContinueBtn(sucrose, goToReviewAnswersPage);
    this.clkChangeLnkAndClkContinueBtn(milkfat, goToReviewAnswersPage);
    this.clkChangeLnkAndClkContinueBtn(milkprotein, goToReviewAnswersPage);
  }

  clkBackLnkAndVerifyHeadingsOfMeursingPages() {
    this.elements.checkYoursAnswers();
    commonPage.clkBackLnk();
    commonPage.verifyContains(this.elements.milkProteinHeading());
    commonPage.clkBackLnk();
    commonPage.verifyContains(this.elements.milkFatHeading());
    commonPage.clkBackLnk();
    commonPage.verifyContains(this.elements.sugarPageHeading());
    commonPage.clkBackLnk();
    commonPage.verifyContains(this.elements.starchPageHeading());
    commonPage.clkBackLnk();
    this.verifyLookUpMeursingCode();
  }

  checkAnswersAndChangeOptions(starch, sugar, milkfat, milkprotein, meursingCode, goToReviewAnswersPage, changeLnkData) {
    this.verifyLookUpMeursingCode();
    commonPage.clkStartNowBtn();
    this.verifyAndSelectMeursingCodeLookUpOptions(starch, sugar, milkfat, milkprotein, meursingCode);
    commonPage.goToUrl(goToReviewAnswersPage);
    this.clkChangeLnkAndClkContinueBtn(changeLnkData.starch, goToReviewAnswersPage);
    this.clkChangeLnkAndClkContinueBtn(changeLnkData.sucrose, goToReviewAnswersPage);
    this.clkChangeLnkAndClkContinueBtn(changeLnkData.milkfat, goToReviewAnswersPage);
    this.clkChangeLnkAndClkContinueBtn(changeLnkData.milkprotein, goToReviewAnswersPage);
  }

  verifyAndSelectMeursingCodeLookUpOptions(starch, sugar, milkfat, milkprotein, meursingCode) {
    let milkproteinTxtToVerify = {};
    commonPage.elements.backLnk().should('include.text', 'Back');
    const starchTxtToVerify = JSON.stringify(starch).split(',');
    const sugarTxtToVerify = JSON.stringify(sugar).split(',');
    const milkfatTxtToVerify = JSON.stringify(milkfat).split(',');
    if (milkprotein != null) {
      milkproteinTxtToVerify = JSON.stringify(milkprotein).split(',');
    }
    const meursingCodeToVerify = JSON.stringify(meursingCode).split(',');
    for (let i = 0; i < starchTxtToVerify.length; i++) {
      this.selectMeursingOptionAndClkContinueBtn(starchTxtToVerify[i]);
      this.selectMeursingOptionAndClkContinueBtn(sugarTxtToVerify[i]);
      this.selectMeursingOptionAndClkContinueBtn(milkfatTxtToVerify[i]);
      if (milkprotein != null) {
        this.selectMeursingOptionAndClkContinueBtn(milkproteinTxtToVerify[i]);
      }
      this.elements.checkYoursAnswers();
      commonPage.clkContinueBtn();
      this.verifyMeursingCodeFinalStep(this.getAMeursingCode(meursingCodeToVerify[i]));
      commonPage.clkStartAgainBtn();
      this.verifyLookUpMeursingCode();
      commonPage.clkStartNowBtn();
    }
  }

  selectMeursingOptionAndClkContinueBtn(txtToVerify) {
    const txt = txtToVerify.split('"');
    commonPage.verifyTxtAndClk(txt[1]);
    commonPage.clkContinueBtn();
  }

  getAMeursingCode(meursingCode) {
    const codeToReturn = meursingCode.split('"');
    return codeToReturn[1];
  }

  storeAndVerifyCommCodeAndMeursingCodeInSession(commodityCodes, country, meursingLookUpStartPage, starch,
      sugar, milkfat, milkprotein, meursingCode) {
    for (let i = 0; i < commodityCodes.length; i ++) {
      commonPage.clearCookies();
      commodityPage.goToCommCodePage(commodityCodes[i], country);
      commonPage.clkToolsLnkInTheBanner();
      toolsPage.clkMeursingCodeFinderLnk();
      this.verifyLookUpMeursingCode();
      commonHelpers.verifyStaticContent(meursingLookUpStartPage);
      commonPage.clkStartNowBtn();
      this.verifyAndSelectMeursingCodeLookUpOptions(starch, sugar, milkfat, milkprotein, meursingCode);
    }
  }

  verifyMeursingMobilePage(viewportOptions, baseUrl, starch, sugar, milkfat, milkprotein, meursingCode) {
    if (JSON.stringify(viewportOptions).includes('landscape')) {
      cy.viewport(viewportOptions[0], viewportOptions[1]);
    } else {
      cy.viewport(viewportOptions);
    }
    commonPage.goToUrl(baseUrl);
    commonPage.clkAndVerifyMobileBannerMenuLnks();
    commonPage.clkStartNowBtn();
    this.verifyAndSelectMeursingCodeLookUpOptions(starch, sugar, milkfat, milkprotein, meursingCode);
  }
}

export default new MeursingPage();
