import commonPage from '../../pages/commonPage';
import commonHelpers from '../../helpers/commonHelpers';
import dutyCalculatorPage from '../../pages/dutyCalculatorPage';

describe('| RoW-NI-e2e | RoW to Northern Ireland |', () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.setTestData('dutyCalculator');
  });
  // Get data before each test run based on test case name
  beforeEach(() => {
    data = commonPage.getTestData();
    commonHelpers.verifyStepsFromGoodsImportPageToOriginSelectionPage(
        data.country, data.commodityCode, data.destination, data.origin, data.originPage);
  });
  context('| RoW-NI-e2e.spec | RoW to NI route 🚎 |', () => {
    it('RoW-NI301-e2e', () => {
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyVatRateIsApplicablePage(data.vatRatePage);
      dutyCalculatorPage.selectVatRateIsApplicableAndClkContinueBtn(data.vatRate);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage(data.importDutyCalculationPageRoWToNI);
    });
    it('RoW-NI302-e2e', () => {
      dutyCalculatorPage.verifyEuDutiesApplyPageAndClkContinueBtn(data.euDutiesApplyPage);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyAdditionalCodesPage(data.additionalCodesPage, data.pageURLAdditionalCode);
      dutyCalculatorPage.clkDropDownAndSelectAdditionalCodeClkContinueBtn(data.additionalCode);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage(data.importDutyCalculationPageRoWToNI);
      dutyCalculatorPage.verifyOptionsForPayingImportDuties(data.tradeOptions);
    });
    // RoW 🇲🇦 (Morocco) to Northern Ireland
    it('RoW-NI303a-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(data.plannedOption);
      dutyCalculatorPage.verifyEuDutiesApplyPageAndClkContinueBtn(data.euDutiesApplyPage);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyEnterImportQuantityPage(data.importQuantityPage);
      dutyCalculatorPage.enterImportQuantityAndClkContinueBtn(data.importQuantity);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage(data.importDutyCalculationPageRoWToNI);
      dutyCalculatorPage.verifyOptionsForPayingImportDuties(data.tradeOptions);
    });
    // RoW 🇲🇦 (Costa Rica) to Northern Ireland - Meursing Code
    it('RoW-NI303b-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(data.plannedOption);
      dutyCalculatorPage.verifyEuDutiesApplyPageAndClkContinueBtn(data.euDutiesApplyPage);
      dutyCalculatorPage.verifyMeusingCodePage(data.meursingCodePage);
      dutyCalculatorPage.enterMeusingAdditionalCodeAndClkContinueBtn(data.meursingAdditionalCode);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyEnterImportQuantityPage(data.importQuantityPage);
      dutyCalculatorPage.enterImportQuantityAndClkContinueBtn(data.importQuantity);
      dutyCalculatorPage.verifyVatRateIsApplicablePage(data.vatRatePage);
      dutyCalculatorPage.selectVatRateIsApplicableAndClkContinueBtn(data.vatRate);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage(data.importDutyCalculationPageRoWToNI);
      dutyCalculatorPage.verifyOptionsForPayingImportDuties(data.tradeOptions);
    });
    // RoW 🇲🇦 (Morocco) to Northern Ireland
    it('RoW-NI303c1-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyEnterImportQuantityPage(data.importQuantityPage);
      dutyCalculatorPage.enterImportQuantityAndClkContinueBtn(data.importQuantity);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyOptionsForPayingImportDuties(data.tradeOptions);
    });
    // RoW 🇳🇴 (Norway) to Northern Ireland - Meursing - Delta
    it('RoW-NI303c2-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyMeusingCodePage(data.meursingCodePage);
      dutyCalculatorPage.enterMeusingAdditionalCodeAndClkContinueBtn(data.meursingAdditionalCode);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyEnterImportQuantityPage(data.importQuantityPage);
      dutyCalculatorPage.enterImportQuantityAndClkContinueBtn(data.importQuantity);
      dutyCalculatorPage.verifyDoYouHaveFollowingDocumentsPage(data.documentCodePage);
      dutyCalculatorPage.selectDocumentCodeAndClkContinueBtn(data.documentCode);
      dutyCalculatorPage.verifyVatRateIsApplicablePage(data.vatRatePage);
      dutyCalculatorPage.selectVatRateIsApplicableAndClkContinueBtn(data.vatRate);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyOptionsForPayingImportDuties(data.tradeOptions);
    });
    // RoW 🇳🇵(Nepal) to NI | Ad Valorem - delta mfn < 3% = UK
    it('RoW-NI304a-delta1-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(data.plannedOption);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyOptionsForPayingImportDuties(data.tradeOptions);
    });

    // RoW 🇧🇹 (Bhutan) - XI | Ad Valorem - delta mfn < 3% = UK |
    it('RoW-NI304a-delta2-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(data.plannedOption);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyOptionsForPayingImportDuties(data.tradeOptions);
    });
    // RoW 🇱🇰 (Sri lanka) - XI | Ad Valorem - delta mfn > 3% = EU |
    it('RoW-NI304a-delta3-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(data.plannedOption);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyDoYouHaveFollowingDocumentsPage(data.documentCodePage);
      dutyCalculatorPage.selectDocumentCodeAndClkContinueBtn(data.documentCode1);
      dutyCalculatorPage.verifyDoYouHaveFollowingDocumentsPage(data.documentCodePage);
      dutyCalculatorPage.selectDocumentCodeAndClkContinueBtn(data.documentCode2);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyImportDutyCalculationPageTablesData(data.tradeOptions);
    });
    it('RoW-NI304a-delta4-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(data.plannedOption);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyVatRateIsApplicablePage(data.vatRatePage);
      dutyCalculatorPage.selectVatRateIsApplicableAndClkContinueBtn(data.vatRate);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyImportDutyCalculationPageTablesData(data.tradeOptions);
    });
    it('RoW-NI304b-delta-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(data.plannedOption);
      dutyCalculatorPage.verifyEuDutiesApplyPageAndClkContinueBtn(data.euDutiesApplyPage);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyEnterImportQuantityPage(data.importQuantityPage);
      dutyCalculatorPage.enterImportQuantityAndClkContinueBtn(data.importQuantity);
      dutyCalculatorPage.verifyDoYouHaveFollowingDocumentsPage(data.documentCodePage);
      dutyCalculatorPage.selectDocumentCodeAndClkContinueBtn(data.documentCode);
      dutyCalculatorPage.verifyVatRateIsApplicablePage(data.vatRatePage);
      dutyCalculatorPage.selectVatRateIsApplicableAndClkContinueBtn(data.vatRate);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyImportDutyCalculationPageTablesData(data.tradeOptions);
    });
    it('RoW-NI304c1-delta-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(data.plannedOption);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyDoYouHaveFollowingDocumentsPage(data.documentCodePage);
      dutyCalculatorPage.selectDocumentCodeAndClkContinueBtn(data.documentCode);
      dutyCalculatorPage.verifyVatRateIsApplicablePage(data.vatRatePage);
      dutyCalculatorPage.selectVatRateIsApplicableAndClkContinueBtn(data.vatRate);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyImportDutyCalculationPageTablesData(data.tradeOptions);
    });
    it('RoW-NI304c2-delta-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(data.plannedOption);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyAdditionalCodesPage(data.additionalCodesPage, data.pageURLAdditionalCode);
      dutyCalculatorPage.clkDropDownAndSelectAdditionalCodeClkContinueBtn(data.additionalCode1);
      dutyCalculatorPage.verifyDoYouHaveFollowingDocumentsPage(data.documentCodePage);
      dutyCalculatorPage.selectDocumentCodeAndClkContinueBtn(data.documentCode);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyImportDutyCalculationPageTablesData(data.tradeOptions1);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData, true);
      dutyCalculatorPage.clkSpecificChangeLnkOnCheckYourAnswersPage();
      dutyCalculatorPage.clkDropDownAndSelectAdditionalCodeClkContinueBtn(data.additionalCode2);
      dutyCalculatorPage.clkBtnToMoveFinalDutyPage();
      dutyCalculatorPage.clkBtnToMoveFinalDutyPage(true);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyImportDutyCalculationPageTablesData(data.tradeOptions2);
    });
    it('RoW-NI304d-delta-e2e', () => {
      dutyCalculatorPage.verifyTraderSchemePage(data.traderSchemePage);
      dutyCalculatorPage.selectTraderSchemeAndClkContinueBtn(data.traderScheme);
      dutyCalculatorPage.verifyGoodsForSaleToOrFinalUsePage(data.destination);
      dutyCalculatorPage.selectGoodsForSaleToOrFinalUseAndClkContinueBtn(data.finalUse);
      dutyCalculatorPage.verifyAnnualTrunOverPage(data.annualTurnOverPage);
      dutyCalculatorPage.selectAnnualTurnOverAndClkContinueBtn(data.turnOver);
      dutyCalculatorPage.verifyPlannedProcessingPage();
      dutyCalculatorPage.selectPlannedProcessingAndClkContinueBtn(data.plannedOption);
      dutyCalculatorPage.verifyCustomValueOfThisImportPage(data.customsValuePage);
      dutyCalculatorPage.enterCustomsValueOfImportAndClkContinueBtn(data.customsValue);
      dutyCalculatorPage.verifyEnterImportQuantityPage(data.importQuantityPage);
      dutyCalculatorPage.enterImportQuantityAndClkContinueBtn(data.importQuantity);
      dutyCalculatorPage.verifyDoYouHaveFollowingDocumentsPage(data.documentCodePage);
      dutyCalculatorPage.selectDocumentCodeAndClkContinueBtn(data.documentCode);
      dutyCalculatorPage.verifyDoYouHaveFollowingDocumentsPage(data.documentCodePage);
      dutyCalculatorPage.selectDocumentCodeAndClkContinueBtn(data.documentCode);
      dutyCalculatorPage.verifyCheckYourAnswersPageAndClkCalImportDutiesBtn(data.checkYourAnswersTableData);
      dutyCalculatorPage.verifyImportDutyCalculationPage();
      dutyCalculatorPage.verifyImportDutyCalculationPageTablesData(data.tradeOptions);
    });
  });
});
