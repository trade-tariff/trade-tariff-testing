
describe.skip('🛃 📱 UK 🇬🇧 💡 | dcSmokeTest-Mobile-UK |Duty Calculator Smoke |', function() {
  //
  //   let country = ["uk"]
  //   let pagetitles = ["UK Integrated Online Tariff","Northern Ireland Online Tariff"]
  //   for (let i =0;i<country.length;i++){
  //       console.log(i)
  // iphone
  it(`📱 iphone - e2e journey`, function() {
    cy.viewport('iphone-6', 'landscape');
    cy.visit(`/duty-calculator/uk/0702000007/import-date`);
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    cy.validDate();
    // destination
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    cy.selectDestination('xi');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    // origin
    cy.selectOrigin('gb');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    // ✅ Trader Scheme Registered - Yes
    cy.traderScheme('yes');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    // ✅  Final use in NI - Yes
    cy.finalUse('yes');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    // 🚫 Non processing - No - The goods will be processed for commercial purposes other than those listed above
    cy.get('#steps-planned-processing-planned-processing-commercial-purposes-field').check();
    cy.contains('Continue').click();
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    //  🚫 Certified as UK Origin
    cy.certificate('no');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    // Monetary value page
    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    // Measure amount page
    cy.quantity({dtn: '23.98'});
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    // Check your answers page
    cy.contains('Check your answers');

    cy.get('.govuk-button').click();
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    // Final Page
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
    cy.contains('Option 3: Claiming a waiver – Exchange rate');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');
  });

  // android
  it(`📱 android - e2e journey `, function() {
    cy.viewport('samsung-note9');
    cy.visit(`/duty-calculator/uk/0702000007/import-date`);
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    cy.validDate();
    // destination
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    cy.selectDestination('xi');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    // origin
    cy.selectOrigin('gb');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    // ✅ Trader Scheme Registered - Yes
    cy.traderScheme('yes');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    // ✅  Final use in NI - Yes
    cy.finalUse('yes');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    // 🚫 Non processing - No - The goods will be processed for commercial purposes other than those listed above
    cy.get('#steps-planned-processing-planned-processing-commercial-purposes-field').check();
    cy.contains('Continue').click();
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    //  🚫 Certified as UK Origin
    cy.certificate('no');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    // Monetary value page
    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    // Measure amount page
    cy.quantity({dtn: '23.98'});
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');

    // Check your answers page
    cy.contains('Check your answers');

    cy.get('.govuk-button').click();
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');


    // Final Page
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
    cy.contains('Option 3: Claiming a waiver – Exchange rate');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('A-Z');
    cy.contains('Tools');
    cy.contains('Browse');
  });
});
