describe('when on the UK service - SPIMM - E2E journeys -Standard goods Scenarios', function () {
  const assertData = ['Category 1 exemptions', 'Category 2 exemptions', 'Condition met',
    'Your goods are exempt from Category 1 because you meet these conditions',
    'Your goods are exempt from Category 2 because you meet these conditions', 'Certificate needed'];
  const assertData2 = ['Your Category 1 result is based on the following regulations', 'Your Category 2 result is based on EU regulations', 'Condition not met']
  beforeEach('Navigates from SPIMM start page to your goods page', () => {
    cy.visit('/check_spimm_eligibility');
  });
  context('When on the UK service - Standard goods Scenarios', function () {
    beforeEach('Navigates from SPIMM start page to your goods page', () => {
      // SPIMM process start page
      cy.verifySpimmPage();
      // Start now button
      cy.clkBtnToContinue();
      // Answer eligibility questions page
      cy.verifyEligibilityNewPage('yes');
      // Continue button
      cy.clkBtnToContinue();
      // Check the category of your goods page
      cy.checkCategoryOfYourGoods();
      // Continue button
      cy.clkBtnToContinue();
    });
    it('Verify - Green lanes - UK to NI - Standard goods - Scenario 1', function () {
      const data = ['9603909100', 'Belarus (BY)', 'Standard goods']
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      cy.checkYourAnswersPage(data[0], data[1], false);
      // Continue button
      cy.clkBtnToContinue();
      // Results Page
      cy.verifyResultPage(data[0], data[1], data[2]);
    });
    // Scenario 2 - Cat2 exemptions to Standard category results page
    it('Verify - Green lanes - UK to NI - Standard goods - Scenario 2', function () {
      const data = ['1602509590', 'Faroe Islands (FO)', 'Standard goods'];
      const cat2DocCodes = ['y170', 'y900', 'y929'];
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // Tell us if your goods meet any exemptions - cat 2 and select at least one exception from each Exemptions list.
      // Need to pass false and true to capture and build correct category url params values
      cy.category2ExemptionsPage(data[0], data[1], cat2DocCodes, false);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      cy.checkYourAnswersPage(data[0], data[1], false, false, true, false, null, cat2DocCodes, null, assertData[1], assertData[2]);
      // Continue button
      cy.clkBtnToContinue();
      // Results Page
      cy.verifyResultPage(data[0], data[1], data[2], null, cat2DocCodes, null, assertData[4], null);
    });
    // Scenario 3 - Cat1 exemptions to Standard category results page
    it('Verify - Green lanes - UK to NI - Standard goods - Scenario 3', function () {
      const data = ['8708999790', 'Russian Federation (RU)', 'Standard goods'];
      const cat1DocCodes = ['y152', 'y792'];
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list.
      cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      cy.checkYourAnswersPage(data[0], data[1], false, true, false, false, cat1DocCodes, null, assertData[0], null, assertData[2]);
      // Continue button
      cy.clkBtnToContinue();
      // Results Page
      cy.verifyResultPage(data[0], data[1], data[2], cat1DocCodes, null, assertData[3], null, null);
    });
  });
});
