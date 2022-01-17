
describe('🛃 📱 UK 🇬🇧 💡 | dcSmokeTest-Mobile-UK |Duty Calculator Smoke |', function() {
  //
  //   let country = ["uk"]
  //   let pagetitles = ["UK Integrated Online Tariff","Northern Ireland Online Tariff"]
  //   for (let i =0;i<country.length;i++){
  //       console.log(i)
  // iphone
  it(`📱 iphone - e2e journey`, function() {
    cy.viewport('iphone-6', 'landscape');
    cy.visit(`/duty-calculator/uk/1701141000/import-date`);
    cy.mobileMenu();
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
    cy.quantity({dtnr: '23.98'});
    cy.mobileMenu();
    // doc code
    cy.docCode({xi: 'n990'});
    cy.mobileMenu();
    cy.contains('Continue').click();
    // Check your answers page
    cy.contains('Check your answers');
    cy.mobileMenu();

    //   cy.get('.govuk-summary-list__key')
    cy.contains('Commodity code');


    cy.get('.govuk-button').click();
    cy.mobileMenu();

    // Final Page
    cy.contains('Option 1: Third-country duty');
  });
  it(`📱 android - e2e journey `, function() {
    cy.viewport('samsung-note9');
    cy.visit(`/duty-calculator/uk/1701141000/import-date`);
    cy.mobileMenu();
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
    cy.quantity({dtnr: '23.98'});
    cy.mobileMenu();
    // doc code
    cy.docCode({xi: 'n990'});
    cy.mobileMenu();
    cy.contains('Continue').click();
    // Check your answers page
    cy.contains('Check your answers');
    cy.mobileMenu();

    //   cy.get('.govuk-summary-list__key')
    cy.contains('Commodity code');


    cy.get('.govuk-button').click();
    cy.mobileMenu();

    // Final Page
    cy.contains('Option 1: Third-country duty');
  });
});
