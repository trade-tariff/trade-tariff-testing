/* eslint-disable no-unused-vars */

describe('🛃 📱 UK XI 💡 | dcSmokeTest-Mobile-UK | Duty Calculator Smoke |', function() {
//   https://transformuk.atlassian.net/browse/HOTT-1321
  const device = ['iphone-6', 'samsung-note9'];
  for (let i=0; i<device.length; i++) {
    it(`📱 ${device[i]} - UK e2e journey`, function() {
      cy.viewport(`${device[i]}`);
      cy.visit('/duty-calculator/uk/1701141000/import-date');
      // add validation to check if the menu is open when the page is loaded
      cy.contains('Browse').should('not.be.visible');
      // validate if the menu is clickable and collapses
      cy.mobileMenu();
      cy.contains('Browse').should('not.be.visible');
      // date
      cy.validDate();
      cy.mobileMenu();
      // destination
      cy.selectDestination('xi');
      cy.mobileMenu();
      // origin
      cy.selectOrigin('gb');
      cy.mobileMenu();
      // ✅ Trader Scheme Registered - Yes
      cy.traderScheme('yes');
      cy.mobileMenu();
      // ✅  Final use in NI - Yes
      cy.finalUse('yes');
      cy.mobileMenu();
      // ⬆️ turnover > £500,000
      cy.turnOver('more');
      cy.mobileMenu();

      // 🚫 Non processing - No - The goods will be processed for commercial purposes other than // 🚫 Non processing - No
      cy.plannedXI('unacceptablecommercial');
      cy.mobileMenu();
      //  🚫 Certified as UK Origin
      cy.certificate('no');
      cy.mobileMenu();
      // interstitial page
      cy.dutiesApply1();
      cy.mobileMenu();

      // Monetary value page
      cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
      cy.mobileMenu();
      // Measure amount page
      cy.quantity({kgm: '23.98'});
      cy.mobileMenu();
      // doc code
      cy.docCode({xi: 'n990'});
      cy.mobileMenu();
      cy.contains('Continue').click();
      // Check your answers page
      cy.contains('Check your answers');
      cy.mobileMenu();

      cy.contains('Commodity code');
      cy.get('.govuk-button').click();
      cy.mobileMenu();
      // Final Page
      cy.contains('Option 1: Third-country duty');
    });
  }
  // XI e2e test on iphone and samsung
  for (let i=0; i<device.length; i++) {
    it(`📱 ${device[i]} - XI e2e journey`, function() {
      cy.viewport(`${device[i]}`);
      cy.visit('/duty-calculator/xi/0102291010/import-date');
      // add validation to check if the menu is open when the page is loaded
      cy.contains('Browse').should('not.be.visible');
      // validate if the menu is clickable and collapses
      cy.mobileMenu();
      // date
      cy.validDate();
      cy.mobileMenu();
      // destination
      cy.selectDestination('xi');
      cy.mobileMenu();
      // origin
      cy.selectOrigin('other');
      cy.mobileMenu();
      // select country from list
      
      cy.otherOriginList({value: 'Canada'});
      cy.mobileMenu();
      
      // Trader Scheme
      cy.traderScheme('yes');
      cy.mobileMenu();
      // ✅  Final use in NI - Yes
      cy.finalUseNI('yes');
      cy.mobileMenu();
      // turnover <£500,000
      cy.turnOver('more');
      cy.mobileMenu();
      // Planned processing - acceptable1
      cy.plannedXI('notprocessing');
      cy.mobileMenu();
      // customs value
      cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
      cy.mobileMenu();

      // Import Quantity
      cy.quantity({kgm: '100'});
      cy.mobileMenu();
      cy.confirmPage();
      cy.mobileMenu();
      cy.dutyPage();
      cy.mobileMenu();
      cy.contains('Option 1: Third-country duty');
      cy.mobileMenu();
    });
  }
});
