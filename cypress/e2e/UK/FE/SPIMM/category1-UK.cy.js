describe('When on the UK service - SPIMM - E2E journeys - Cat1 Scenarios', function () {
    const assertData = ['Category 1 exemptions', 'Category 2 exemptions', 'Exemption met',
        'Your Category 1 exemptions', 'Your Category 2 exemptions', 'Certificate needed'];
    const assertData2 = ['Why your goods are category 1', 'Why your goods are category 2', 'Exemption not met']
    beforeEach('Navigates to SPIMM journey start page', () => {
        cy.visit('/check_spimm_eligibility');
    });
    context('When on the UK service - Cat1 Scenarios', function () {
        // Sceanrio 1 - Direct to check your answers to Cat1 results page
        it('Verify - Green lanes - UK to NI - Cat1 - Scenario 1', function () {
            const data = ['0804500089', 'KP', 'Category 1', 'yes'];
            // SPIMM process start page
            cy.verifySpimmPage();
            // Start now button
            cy.clkBtnToContinue();
            // Answer eligibility questions page
            cy.verifyEligibilityNewPage(data[3]);
            // Continue button
            cy.clkBtnToContinue();
            // Check the category of your goods page
            cy.checkCategoryOfYourGoods();
            // Continue button
            cy.clkBtnToContinue();
            // Tell us about your goods
            cy.tellUsAboutYourGoodsPage(data[0], data[1]);
            // Continue button
            cy.clkBtnToContinue();
            // Check your answers page
            cy.checkYourAnswersPage(data[0], data[1], false, false, false, null, null, assertData[0], assertData[1], assertData[2]);
            // Continue button
            cy.clkBtnToContinue();
            // Results Page
            cy.verifyResultsPage(data[0], data[1], data[2], null, null, assertData[3], assertData[4], assertData[5]);
        });
        // Sceanrio 2 - Select Cat1 exemption 'none' to get Cat1 results page
        it('Verify - Green lanes - UK to NI - Cat1 - Scenario 2', function () {
            const data = ['8708999790', 'UA', 'Category 1', 'yes'];
            const cat1DocCodes = ['none', 'none', 'none', 'none'];
            // SPIMM process start page
            cy.verifySpimmPage();
            // Start now button
            cy.clkBtnToContinue();
            // Answer eligibility questions page
            cy.verifyEligibilityNewPage(data[3]);
            // Continue button
            cy.clkBtnToContinue();
            // Check the category of your goods page
            cy.checkCategoryOfYourGoods();
            // Continue button
            cy.clkBtnToContinue();
            // Tell us about your goods
            cy.tellUsAboutYourGoodsPage(data[0], data[1]);
            // Continue button
            cy.clkBtnToContinue();
            // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list.
            cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
            // Continue button
            cy.clkBtnToContinue();
            // Check your answers page
            cy.checkYourAnswersPage(data[0], data[1], true, false, false, cat1DocCodes, null, assertData[0], null, assertData[2]);
            // Continue button
            cy.clkBtnToContinue();
            // Results Page
            cy.verifyResultsPage(data[0], data[1], data[2], cat1DocCodes, null, assertData2[0], null, assertData2[2]);
        });
        // Sceanrio 3 - Select Cat1 exemptions page - select one exemption and one 'none' from available exemptions to get Cat1 results page
        it('Verify - Green lanes - UK to NI - Cat1 - Scenario 3', function () {
            const data = ['8708219000', 'GB', 'Category 1', 'yes'];
            const cat1DocCodes = ['y160', 'none'];
            // SPIMM process start page
            cy.verifySpimmPage();
            // Start now button
            cy.clkBtnToContinue();
            // Answer eligibility questions page
            cy.verifyEligibilityNewPage(data[3]);
            // Continue button
            cy.clkBtnToContinue();
            // Check the category of your goods page
            cy.checkCategoryOfYourGoods();
            // Continue button
            cy.clkBtnToContinue();
            // Tell us about your goods
            cy.tellUsAboutYourGoodsPage(data[0], data[1]);
            // Continue button
            cy.clkBtnToContinue();
            // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list.
            cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
            // Continue button
            cy.clkBtnToContinue();
            // Check your answers page
            cy.checkYourAnswersPage(data[0], data[1], true, false, false, cat1DocCodes, null, assertData[0], null, assertData[2]);
            // Continue button
            cy.clkBtnToContinue();
            // Results Page
            cy.verifyResultsPage(data[0], data[1], data[2], cat1DocCodes, null, assertData2[0], null, assertData2[2]);
        });
        // Sceanrio 4 - Select Cat1 exemptions page - skip exemption selection and click continue button to validate error messages.
        it('Verify - Green lanes - UK to NI - Cat1 - Scenario 4', function () {
            const data = ['8708219000', 'GB', 'Category 1', 'yes'];
            const cat1DocCodes = null;
            // SPIMM process start page
            cy.verifySpimmPage();
            // Start now button
            cy.clkBtnToContinue();
            // Answer eligibility questions page
            cy.verifyEligibilityNewPage(data[3]);
            // Continue button
            cy.clkBtnToContinue();
            // Check the category of your goods page
            cy.checkCategoryOfYourGoods();
            // Continue button
            cy.clkBtnToContinue();
            // Tell us about your goods
            cy.tellUsAboutYourGoodsPage(data[0], data[1]);
            // Continue button
            cy.clkBtnToContinue();
            // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list.
            cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
            // Continue button
            cy.clkBtnToContinue();
            // Verify User still on the exemptions page and should see error messages
            cy.verifyErrorMessageOnExemptionPage(data[0], data[1], data[2]);
        });
    });
});