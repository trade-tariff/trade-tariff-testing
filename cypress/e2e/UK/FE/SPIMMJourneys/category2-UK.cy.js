describe('when on the UK service - SPIMM - E2E journeys - Cat2 Scenarios', function () {
    const assertData = ['Category 1 exemptions', 'Category 2 exemptions', 'Condition met',
        'Your goods are exempt from Category 1 because you meet these conditions',
        'Your goods are exempt from Category 2 because you meet these conditions', 'Certificate needed'];
    const assertData2 = ['Your Category 1 result is based on the following regulations', 'Your Category 2 result is based on EU regulations', 'Condition not met', 'Exemptions not met']
    beforeEach('Navigates from SPIMM start page to your goods page', () => {
        cy.visit('/check_spimm_eligibility');
    });
    context('When on the UK service - Cat2 Scenarios', function () {
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
        // Category 2 scenarios
        // Scenario 1 - Direct to check your answers to Cat 2 results page
        it('Verify - Green lanes - UK to NI - Category 2 - Scenario 1', function () {
            const data = ['7606119989', 'BY', 'Category 2', 'Belarus (BY)'];
            // Tell us about your goods
            cy.tellUsAboutYourGoodsPage(data[0], data[1], false, data[3]);
            // Continue button
            cy.clkBtnToContinue();
            // Check your answers page
            cy.checkYourAnswersPage(data[0], data[1], false);
            // Continue button
            cy.clkBtnToContinue();
            // Results Page
            cy.verifyResultPage(data[0], data[1], data[2]);
        });
        // Scenario 2 - Cat2 exemptions to check your answers to Cat 2 results page
        it('Verify - Green lanes - UK to NI - Category 2 - Scenario 2', function () {
            const data = ['9303100000', 'GL', 'Category 2', 'Greenland (GL)'];
            const cat2DocCodes = ['none', 'none', 'none'];
            // Tell us about your goods
            cy.tellUsAboutYourGoodsPage(data[0], data[1], false, data[3]);
            // Continue button
            cy.clkBtnToContinue();
            // Tell us if your goods meet any exemptions - cat 2 and select at least one exception from each Exemptions list.
            cy.category2ExemptionsPage(data[0], data[1], cat2DocCodes, false);
            // Continue button
            cy.clkBtnToContinue();
            // Check your answers page
            // Only one excemption is showing in the url params instead of two or three based on user selection hence skipping this test until it is resolved.
            cy.checkYourAnswersPage(data[0], data[1], false, false, true, false, null, cat2DocCodes, null, assertData[1], assertData2[2]);
            // Continue button
            cy.clkBtnToContinue();
            // Results Page
            cy.verifyResultPage(data[0], data[1], data[2], null, cat2DocCodes, null, assertData2[1], assertData2[2]);
        });
        // Scenario 3 - Cat1 exemptions and Cat2 'none' to check your answers to Cat 2 results page
        it('Verify - Green lanes - UK to NI - Category 2 - Scenario 3', function () {
            const data = ['6913909890', 'UA', 'Category 2', 'Ukraine (UA)'];
            // Exception codes that need to select to get the desire result page
            const cat1DocCodes = ['y922', 'y997', 'y984'];
            const cat2DocCodes = 'none';
            // Tell us about your goods
            cy.tellUsAboutYourGoodsPage(data[0], data[1], false, data[3]);
            // Continue button
            cy.clkBtnToContinue();
            // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list.
            cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
            // Continue button
            cy.clkBtnToContinue();
            // Tell us if your goods meet any exemptions - cat 2 and select at least one exception from each Exemptions list.
            // Need to pass true and true to capture and build correct category url params values
            cy.category2ExemptionsPage(data[0], data[1], cat2DocCodes, true);
            // Continue button
            cy.clkBtnToContinue();
            // Check your answers page
            // Need to pass false and true to capture and build correct category url params values
            cy.checkYourAnswersPage(data[0], data[1], false, false, false, true, cat1DocCodes, cat2DocCodes, assertData[0], assertData[1], assertData[2]);
            // Continue button
            cy.clkBtnToContinue();
            // Results Page
            cy.verifyResultPage(data[0], data[1], data[2], cat1DocCodes, cat2DocCodes, assertData[3], assertData2[1], null);
        });
    });
  
    context('Cat2 - E2E Test Cases', function () {
        const globalAssertData = [assertData[0], assertData[1], assertData[2], assertData[3]]; const globalAssertData2 = [assertData2[1], assertData2[3]];
        it('Cat2 - Theme 2.4 - Waste', function () {
            const data = ['6913909890', 'UA', 'Category 2', 'yes'];
            const cat1DocCodes = ['y922', 'y997', 'y984'];
            const cat2DocCodes = ['none'];
            const cat2Results = ['Annex IV of the Windsor Framework: "2.4 Regulation (EC) No 1013/2006 of the European Parliament and of the Council of 14 June 2006 on shipments of waste"', 'View EU Regulation document', 'Exemptions not met']
            // Start page to cat2 result page
            cy.navigateToCatResultPage(data, cat1DocCodes, cat2DocCodes, globalAssertData, globalAssertData2);
            // verify cat2 result page
            cy.verifyResultsPageCategoryExemptions(cat2Results);
        });
        it('Cat2 - Theme 2.23 - Hazardous chemicals', function () {
            const data = ['2915900000', 'GB', 'Category 2', 'yes'];
            const cat2Results = ['Annex IV of the Windsor Framework: "2.23 Regulation (EU) No 649/2012 of the European Parliament and of the Council of 4 July 2012 concerning the export and import of hazardous chemicals"', 'No exemptions available']
            // Start page to cat2 result page
            cy.navigateToCatResultPage(data, null, null, globalAssertData, globalAssertData2);
            // verify cat2 results page
            cy.verifyResultsPageCategoryExemptions(cat2Results);
        });
        it('Cat2 - Theme 2.3 - Biocides', function () {
            const data = ['3003100000', 'AE', 'Category 2', 'yes'];
            const cat2DocCodes = ['y106', 'wfe008', 'none'];
            const cat2Results = ['Annex IV of the Windsor Framework: "2.3 Regulation (EU) No 528/2012 of the European Parliament and of the Council of 22 May 2012 concerning the making available on the market and use of biocidal products"', 'Exemptions not met']
            // Start page to cat2 result page
            cy.navigateToCatResultPage(data, null, cat2DocCodes, globalAssertData, globalAssertData2);
            // verify cat2  results page
            cy.verifyResultsPageCategoryExemptions(cat2Results);
        });
    });
});

