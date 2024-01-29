import commonHelpers from '../helpers/commonHelpers';
import commodityPage from './commodityPage';
import commonPage from './commonPage';
import dayjs from 'dayjs';

const currentDate = dayjs().format('DD');
const currentMonth = dayjs().format('MM');
const currentYear = dayjs().format('YYYY');
const importDate = dayjs().format('DD MMMM YYYY');

class DutyCalculatorPage {
  elements = {
    // Duty calculator various page titles and headings
    captionTitle: () => 'Calculate import duties',
    goodsImportTitle: () => 'When will the good be imported',
    goodsImportHeading: () => 'When will the goods be imported?',
    destinationCountry: () => 'Which part of the UK are you importing into',
    countryOfOriginTitle: () => 'Which country are the goods dispatched from',
    countryOfOriginHeading: () => 'Which country are the goods coming from',
    traderSchemeTitle: () => 'Are you authorised under the UK Internal Market Scheme',
    goodsSaleToOrFinalUseTitle: () => 'Are your goods for final use in the UK',
    goodsSaleToOrFinalUseHeadingUK: () => 'Are your goods for sale to, or final use by, end-consumers located in the United Kingdom?',
    goodsSaleToOrFinalUseHeadingXI: () => 'Are your goods for sale to, or final use by, end-consumers located in Northern Ireland?',
    annualTurnOverTitle: () => 'What was your annual turnover',
    annualTurnOverHeading: () => 'What was your annual turnover in the most recent complete financial year?',
    plannedProcessingTitle: () => 'How will your goods be processed',
    plannedProcessingHeading: () => 'How will these goods be processed after they are moved into Northern Ireland?',
    certificateOfOriginTitle: () => 'Do you have a valid proof of origin',
    certificateOfOriginHeading: () => 'Do you have a valid proof of preferential origin?',
    euDutiesApplyTitle: () => 'Duties apply to this import',
    euDutiesApplyHeading: () => 'EU duties apply to this import',
    addtionalCodesTitle: () => 'Describe your goods in more detail',
    meursingCodeTitle: () => 'Enter a \'Meursing Code\' for this commodity',
    meursingCodeHeading: () => 'Enter a \'Meursing code\' to work out applicable duties',
    noDuty: () => 'There is no import duty to pay',
    customValuesTitle: () => 'What is the customs value of this import',
    importQuantityTitle: () => 'Enter import quantity',
    vatRateApplicableTitle: () => 'Which VAT rate is applicable to your trade',
    documentCodeTitle: () => 'Do you have any of the following documents',
    checkYourAnswersTitle: () => 'Check your answers',
    importDutyCalcTitle: () => 'Import duty calculation',
    // Duty calculator various page elements
    importDate: (iValue) => cy.get(`#steps_import_date_import_date_${iValue}i`),
    selectDestination: (destCountry) => cy.get(`#steps-import-destination-import-destination-${destCountry}-field`),
    selectOtherCountryOrigin: () => cy.get('#steps-country-of-origin-other-country-of-origin-field'),
    selectOrigin: (originCountry) => cy.get(`input#steps-country-of-origin-country-of-origin-${originCountry}-field`),
    originList: () => cy.get('#steps-country-of-origin-country-of-origin-field'),
    traderScheme: (trade) => cy.get(`#steps-trader-scheme-trader-scheme-${trade}-field`),
    goodsSaleToOrFinalUse: (finalUse) => cy.get(`#steps-final-use-final-use-${finalUse}-field`),
    annualTrunOver: (turnOver) => cy.get(`#steps-annual-turnover-annual-turnover-${turnOver}-field`),
    plannedProcessing: (plannedOption) => cy.get(`input#steps-planned-processing-planned-processing-${plannedOption}-field`),
    certificateOfOrigin: (certOrigin) => cy.get(`input#steps-certificate-of-origin-certificate-of-origin-${certOrigin}-field`),
    meursingCode: () => cy.get('#steps-meursing-additional-code-meursing-additional-code-field'),
    customValues: (customsValue) => cy.get(`input#steps-customs-value-${customsValue}-field`),
    additionalCodes: () => cy.get('#steps-additional-code-additional-code-xi-field'),
    importQuantity: (kgm) => cy.get(`#steps-measure-amount-${kgm}-field`),
    vatRate: (vatRateOption) => cy.get(`input#steps-vat-vat-${vatRateOption}-field`),
    documentCode: (country, docCode) => cy.get(`input[id="steps-document-code-document-code-${country}-${docCode}-field"]`),
    calculateImportDutiesBtn: () => cy.get('.govuk-button').contains(this.elements.captionTitle()),
    checkYourAnswers: () => cy.get('.govuk-summary-list > .govuk-summary-list__row'),
    detailsOfYourTrade: () => 'Details of your trade',
    thirdCountryDutyOption1: () => '#main-content #third_country_tariff',
    thirdCountryDutyTableHeadData: () => cy.get('.govuk-table__head > .govuk-table__row'),
    thirdCountryDutyTableBodyData: () => cy.get('.govuk-table__body > .govuk-table__row'),
    dutyPageTables: () => cy.get('.govuk-grid-column-two-thirds > table'),
  };

  // duty calc link to click on commodities page to navigate to duty calc app
  clkDutyCalcLnkOnCommoditiesPage(commcode) {
    commodityPage.clkDutyCalcLnk(commcode);
  }

  goToDutyCalcURL(country, commodityCode) {
    commonPage.goToUrl(`/duty-calculator/${country}/${commodityCode}/import-date`);
    commonPage.verifyCountryBanner(country);
  }

  // Verify page title(s) of duty calculator app
  verifyPageTitle(titleToVerify) {
    switch (titleToVerify) {
      case 'What was your annual turnover':
      case 'Do you have any of the following documents':
      case 'Which VAT rate is applicable to your trade':
      case 'Describe your goods in more detail':
        cy.title().should('eq', `${titleToVerify} - Online Tariff Duty Calculator`);
        break;
      default:
        cy.title().should('eq', `${titleToVerify} - Online Tariff Duty calculator`);
        break;
    }
  }

  // When will the goods imported?
  verifyWhenWillTheGoodsImportPage() {
    commonPage.verifyUrlShudInclude('/import-date');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.goodsImportHeading());
    this.verifyPageTitle(this.elements.goodsImportTitle());
  }

  // When will the goods imported? - enter date and click continue button
  enterDateAndClkContinueBtn(currentBoolVal, date, month, year) {
    if (currentBoolVal == true) {
      this.elements.importDate(3).clear().type(currentDate);
      this.elements.importDate(2).clear().type(currentMonth);
      this.elements.importDate(1).clear().type(currentYear);
    } else {
      this.elements.importDate(3).clear().type(date);
      this.elements.importDate(2).clear().type(month);
      this.elements.importDate(1).clear().type(year);
    }
    commonPage.clkContinueBtn();
  }

  // Which part of the UK are you importing into?
  verifySelectDestinationPage() {
    commonPage.verifyUrlShudInclude('/import-destination');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.destinationCountry() + '?');
    this.verifyPageTitle(this.elements.destinationCountry());
  }

  // Which part of the UK are you importing into? - select destination country and click continue button
  selectDestinationAndClkContinue(destination) {
    this.elements.selectDestination(destination).check();
    commonPage.clkContinueBtn();
  }

  // Which country are the goods coming from?
  verifySelectOriginPage() {
    commonPage.verifyUrlShudInclude('/country-of-origin');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.countryOfOriginHeading() + '?');
    this.verifyPageTitle(this.elements.countryOfOriginTitle());
  }

  // Which country are the goods coming from? - select origin and click continue button
  selectOriginAndClkContinueBtn(originCountry, originPage) {
    if (originCountry == 'gb' || originCountry == 'eu') {
      const dataToVerify = this.getTestCaseSpecificStaticData(originPage, [5, 6]);
      commonHelpers.verifyStaticContent(dataToVerify);
      this.elements.selectOrigin(originCountry).click();
    } else {
      this.elements.selectOrigin('other').click({force: true});
      commonHelpers.verifyStaticContent(originPage);
      this.elements.selectOtherCountryOrigin().click().clear().type(originCountry);
    }
    commonPage.clkContinueBtn();
  }

  // Select Origin From Dropdown list and click continue button
  selectOriginFromListAndClkContinueBtn(origin) {
    this.verifySelectOriginPage();
    this.elements.originList().click().clear().type(origin);
    commonPage.clkContinueBtn();
  }

  // No duty page
  verifyNoDutyPage(staticData) {
    commonPage.verifyUrlShudInclude('/duty');
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.noDuty());
    this.verifyPageTitle(this.elements.noDuty());
    let data;
    if (staticData != null) {
      switch (commonPage.getTestCaseName()) {
        case 'GB-NI402a-e2e':
          data = commonPage.getTestCaseSpecificStaticData(staticData, [6, 7, 8, 9, 10]);
          commonHelpers.verifyStaticContent(data);
          break;
        case 'GB-NI402b-e2e':
          data = commonPage.getTestCaseSpecificStaticData(staticData, [5, 7, 8, 9, 10]);
          commonHelpers.verifyStaticContent(data);
          break;
        case 'GB-NI402c-e2e':
          data = commonPage.getTestCaseSpecificStaticData(staticData, [5, 6, 8, 9, 10]);
          commonHelpers.verifyStaticContent(data);
          break;
        case 'GB-NI403-e2e':
        case 'GB-NI405-e2e':
        case 'GB-NI407-e2e':
          data = commonPage.getTestCaseSpecificStaticData(staticData, [2, 3, 4, 5, 6, 7, 11]);
          commonHelpers.verifyStaticContent(data);
          break;
        default:
          commonHelpers.verifyStaticContent(staticData);
          break;
      }
    }
  }

  // Click start again button on no duty page etc.
  clkStartAgainBtn() {
    commonPage.elements.govUKBtn().click();
    commonPage.verifyContains(this.elements.goodsImportHeading());
  }

  // Are you authorised under the UK Internal Market Scheme?
  verifyTraderSchemePage(staticData) {
    commonPage.verifyUrlShudInclude('/trader-scheme');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.traderSchemeTitle() + '?');
    this.verifyPageTitle(this.elements.traderSchemeTitle());
    commonHelpers.verifyStaticContent(staticData);
  }

  // Select trade scheme and click continue button
  selectTraderSchemeAndClkContinueBtn(traderScheme) {
    this.elements.traderScheme(traderScheme).click();
    commonPage.clkContinueBtn();
  }

  // Are your goods for sale to, or final use by, end-consumers located in the United Kingdom?
  verifyGoodsForSaleToOrFinalUsePage(destination) {
    commonPage.verifyUrlShudInclude('/final-use');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    if (destination == 'xi') {
      commonPage.verifyContains(this.elements.goodsSaleToOrFinalUseHeadingXI());
    } else {
      commonPage.verifyContains(this.elements.goodsSaleToOrFinalUseHeadingUK());
    }
    this.verifyPageTitle(this.elements.goodsSaleToOrFinalUseTitle());
  }

  // Select goods sale to or final use yes or no option and click continue button
  selectGoodsForSaleToOrFinalUseAndClkContinueBtn(finalUse) {
    this.elements.goodsSaleToOrFinalUse(finalUse).click();
    commonPage.clkContinueBtn();
  }

  // What was your annual turnover in the most recent complete financial year?
  verifyAnnualTrunOverPage(staticData) {
    commonPage.verifyUrlShudInclude('/annual-turnover');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.annualTurnOverHeading());
    this.verifyPageTitle(this.elements.annualTurnOverTitle());
    commonHelpers.verifyStaticContent(staticData);
  }

  // Select annual turn over option and click continue button
  selectAnnualTurnOverAndClkContinueBtn(turnOver) {
    this.elements.annualTrunOver(turnOver).click();
    commonPage.clkContinueBtn();
  }

  // Click back link and verify previously selected annual turn over option persists.
  verifyAnnualTrunOverOptionShudBeChecked(turnOver) {
    this.elements.annualTrunOver(turnOver)
        .parent()
        .find('input')
        .should('be.checked');
  }

  // How will these goods be processed after they are moved into Northern Ireland?
  verifyPlannedProcessingPage() {
    commonPage.verifyUrlShudInclude('/planned-processing');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.plannedProcessingHeading());
    this.verifyPageTitle(this.elements.plannedProcessingTitle());
  }

  // Select planned processing option and click continue button
  selectPlannedProcessingAndClkContinueBtn(plannedOptions) {
    this.elements.plannedProcessing(plannedOptions).check();
    commonPage.clkContinueBtn();
  }

  // Click back link and verify previously selected planned processing option persists.
  verifyPlannedProcessingOptionShudBeChecked(plannedOptions) {
    this.elements.plannedProcessing(plannedOptions)
        .parent()
        .find('input')
        .should('be.checked');
  }

  // Do you have a valid proof of preferential origin?
  verifyCertificateOfOriginPage() {
    commonPage.verifyUrlShudInclude('/certificate-of-origin');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.certificateOfOriginHeading());
    this.verifyPageTitle(this.elements.certificateOfOriginTitle());
  }

  // Select certificate of origin option and click continue button
  selectCertificateOfOriginAndClkContinueBtn(certOrigin) {
    this.elements.certificateOfOrigin(certOrigin).click();
    commonPage.clkContinueBtn();
  }

  // EU duties apply to this import and click continue button
  verifyEuDutiesApplyPageAndClkContinueBtn(staticData) {
    commonPage.verifyUrlShudInclude('/interstitial');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.euDutiesApplyHeading());
    if (commonPage.getTestCaseName().includes('RoW-NI')) {
      this.verifyPageTitle(this.elements.euDutiesApplyHeading());
    } else {
      this.verifyPageTitle(this.elements.euDutiesApplyTitle());
    }
    switch (commonPage.getTestCaseName()) {
      case 'RoW-NI302-e2e':
      case 'GB-NI409a-e2e':
      case 'GB-NI409b-e2e':
        staticData = commonPage.getTestCaseSpecificStaticData(staticData, [1, 3]);
        break;
      case 'RoW-NI303a-e2e':
      case 'RoW-NI303b-e2e':
        staticData = commonPage.getTestCaseSpecificStaticData(staticData, [1, 2]);
        break;
      default:
        staticData = commonPage.getTestCaseSpecificStaticData(staticData, [2, 3]);
    }
    commonHelpers.verifyStaticContent(staticData);
    commonPage.clkContinueBtn();
  }

  // Enter a \'Meursing code\' to work out applicable duties
  verifyMeusingCodePage(staticData) {
    commonPage.verifyUrlShudInclude('/meursing-additional-codes');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.meursingCodeHeading());
    this.verifyPageTitle(this.elements.meursingCodeTitle());
    commonHelpers.verifyStaticContent(staticData);
  }

  // Enter meusing additional code and click continue button
  enterMeusingAdditionalCodeAndClkContinueBtn(meursingAdditionalCode) {
    for (const [, value] of Object.entries(meursingAdditionalCode)) {
      this.elements.meursingCode().clear().type(value);
    }
    commonPage.clkContinueBtn();
  }

  // What is the customs value of this import?
  verifyCustomValueOfThisImportPage(staticData) {
    commonPage.verifyUrlShudInclude('/customs-value');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.customValuesTitle() + '?');
    this.verifyPageTitle(this.elements.customValuesTitle());
    commonHelpers.verifyStaticContent(staticData);
  }

  // Enter customs value of import and click continue button
  enterCustomsValueOfImportAndClkContinueBtn(customsValue) {
    for (const [key, value] of Object.entries(customsValue)) {
      this.elements.customValues(key).clear().type(value);
    }
    commonPage.clkContinueBtn();
  }

  // Describe your goods in more detail
  verifyAdditionalCodesPage(staticData, additonalCode) {
    commonPage.verifyUrlShudInclude(`/additional-codes/${additonalCode}`);
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.addtionalCodesTitle());
    this.verifyPageTitle(this.elements.addtionalCodesTitle());
    commonHelpers.verifyStaticContent(staticData);
  }

  // clk please select drop down and select additional code and clk continue button
  clkDropDownAndSelectAdditionalCodeClkContinueBtn(additionalCode) {
    this.elements.additionalCodes().select(additionalCode);
    commonPage.clkContinueBtn();
  }

  // Enter import quantity
  verifyEnterImportQuantityPage(staticData) {
    commonPage.verifyUrlShudInclude('/measure-amount');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.importQuantityTitle());
    this.verifyPageTitle(this.elements.importQuantityTitle());
    switch (commonPage.getTestCaseName()) {
      case 'GB-NI404a-e2e':
      case 'GB-NI406a-e2e':
        staticData = commonPage.getTestCaseSpecificStaticData(staticData, 3);
        break;
      case 'RoW-NI303a-e2e':
      case 'RoW-NI303b-e2e':
      case 'RoW-NI303c1-e2e':
      case 'GB-NI404b-e2e':
      case 'GB-NI406b-e2e':
      case 'GB-NI408b-e2e':
        staticData = commonPage.getTestCaseSpecificStaticData(staticData, 2);
        break;
    }
    commonHelpers.verifyStaticContent(staticData);
  }

  // Enter import quantity value in kgm and click continue button
  enterImportQuantityAndClkContinueBtn(importValue) {
    for (const [key, value] of Object.entries(importValue)) {
      this.elements.importQuantity(key).clear().type(value);
    }
    commonPage.clkContinueBtn();
  }

  // Which VAT rate is applicable to your trade?
  verifyVatRateIsApplicablePage(staticData) {
    commonPage.verifyUrlShudInclude('/vat');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.vatRateApplicableTitle() + '?');
    this.verifyPageTitle(this.elements.vatRateApplicableTitle());
    commonHelpers.verifyStaticContent(staticData);
  }

  selectVatRateIsApplicableAndClkContinueBtn(vatRateOption) {
    for (const [key] of Object.entries(vatRateOption)) {
      this.elements.vatRate(key).click();
    }
    commonPage.clkContinueBtn();
  }

  // Do you have any of the following documents?
  verifyDoYouHaveFollowingDocumentsPage(staticData) {
    commonPage.verifyUrlShudInclude('/document-code');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.documentCodeTitle() + '?');
    this.verifyPageTitle(this.elements.documentCodeTitle());
    commonHelpers.verifyStaticContent(staticData);
  }

  // Select document code and click continue button
  selectDocumentCodeAndClkContinueBtn(documentCode) {
    for (const [key, value] of Object.entries(documentCode)) {
      this.elements.documentCode(key, value).check();
    }
    commonPage.clkContinueBtn();
  }

  // Check your answers (confirm) page and click continue button
  verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(tableData) {
    commonPage.verifyUrlShudInclude('/confirm');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.checkYourAnswersTitle());
    this.verifyPageTitle(this.elements.checkYourAnswersTitle());
    commonPage.getTableDataAndAssert(this.elements.checkYourAnswers(), tableData, 'Date', importDate);
    this.elements.calculateImportDutiesBtn().click();
  }

  // Verify import duty calculation page
  verifyImportDutyCalculationPage(staticData) {
    commonPage.verifyUrlShudInclude('/duty');
    commonPage.verifyBackLnk();
    commonPage.verifyContains(this.elements.captionTitle());
    commonPage.verifyContains(this.elements.importDutyCalcTitle());
    this.verifyPageTitle(this.elements.importDutyCalcTitle());
    switch (commonPage.getTestCaseName()) {
      case 'RoW-NI301-e2e':
        staticData = commonPage.getTestCaseSpecificStaticData(staticData, [4, 5, 6, 7, 8, 9, 10]);
        break;
      case 'RoW-NI302-e2e':
        staticData = commonPage.getTestCaseSpecificStaticData(staticData, [3, 4, 5, 6, 10, 11, 12]);
        break;
      case 'RoW-NI303a-e2e':
        staticData = commonPage.getTestCaseSpecificStaticData(staticData, [3, 5, 6, 7, 10, 12]);
        break;
      case 'RoW-NI303b-e2e':
        staticData = commonPage.getTestCaseSpecificStaticData(staticData, [3, 4, 6, 7, 10, 12]);
        break;
      case 'GB-NI404b-e2e':
      case 'GB-NI406b-e2e':
      case 'GB-NI408a-e2e':
      case 'GB-NI408b-e2e':
        staticData = commonPage.getTestCaseSpecificStaticData(staticData, 4);
        break;
    }
    commonHelpers.verifyStaticContent(staticData);
  }

  // Verify import duty calculation page table calculation data
  verifyImportDutyCalculationPageTablesData(staticData) {
    commonHelpers.verifyStaticContent(staticData);
  }

  // Click commodity link on import duty calculator page and verify commcode page and navigate back to import duty calc page.
  clkCommCodeLinkOnImportDutyCalculatorPageAndGoBack(staticData) {
    for (const [key, value] of Object.entries(staticData)) {
      if (key == 'Commodity code') {
        commonPage.verifyTxtAndClk(value);
        const commCode = value.replaceAll(' ', '');
        commonPage.verifyUrlShudInclude(commCode);
        commodityPage.checkCommPage(commCode);
      }
    }
    commonPage.goBack();
  }

  // Click and verify details of your trade on import duty calc page
  clkAndVerifyDetailsOfYourTradeOnImportDutyCalcPage(tableData) {
    commonPage.verifyTxtAndClk(this.elements.detailsOfYourTrade());
    for (const [key, value] of Object.entries(tableData)) {
      if (key == 'Commodity') {
        commonPage.getTableDataAndAssert(this.elements.checkYourAnswers(), tableData, value, null);
      }
    }
  }

  // Final Page
  // Verify options for paying import duties on this import
  verifyOptionsForPayingImportDuties(tableData) {
    commonPage.getDutyPageTableDataAndCompare(this.elements.dutyPageTables(), tableData);
  }

  // About this commodity code
}

export default new DutyCalculatorPage();
