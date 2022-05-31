/* eslint-disable max-len */
describe('🚀  UK 🇬🇧 XI 🇪🇺 💡 | devSmokeTestCI- UK,XI| Smoke tests for dev |', function() {
  // Main Page
  it('🚀 UK 🇬🇧 - Main Page Validation', function() {
    cy.visit('/find_commodity');
    cy.mainPageUK();
    cy.contains('browse the goods classification').click();
    cy.contains('Browse the tariff');
  });
  // Date Picker validation
  it('🚀 UK 🇬🇧 - Check date picker function is working', function() {
    cy.visit('/find_commodity');

    // select Change Date and OK with current date
    cy.get('.govuk-details__summary').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2022);
    cy.searchForCommodity('3808941000');
    cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
    cy.contains('21 December 2022');
    // select Change Date and CANCEL
    // cy.get(' .js-show.text > a[role=\'button\']').click();
    // cy.contains('Set date').click();
    //

    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 22, month: 12, year: 2022});

    cy.contains('22 December 2022');
  });
  // switching link works
  it('🚀 UK 🇬🇧 - Main Page - Switching link to XI available & works', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');

    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });
  // Commodity Search functionality - text search
  it('🚀 UK 🇬🇧 - Search Commodity by name ', function() {
    cy.visit('/find_commodity');
    cy.contains('Search for a commodity');
    // changed on 11/02/2021
    cy.get('.govuk-label').contains('Search the UK Integrated Online Tariff');
    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - comm code search
  it('🚀 UK 🇬🇧 - Search Commodity by code ', function() {
    cy.visit('/find_commodity');
    cy.contains('Look up commodity codes, import duties, taxes and controls'); ;
    cy.contains('Search for a commodity');
    cy.searchForCommodity('3808941000');
    cy.contains(/Commodity .*3808941000/i);
  });

  // Date picker working and persists on UK XI sites
  it('🚀 UK 🇬🇧 / XI 🇪🇺 - Change date and verify if the data shown is same for both XI and UK', function() {
    cy.visit('/find_commodity');
    // select Change Date and change months and years
    cy.get('.govuk-details__summary').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2021);
    cy.searchForCommodity('3808941000');
    cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
    // cy.contains('Set date').click();
    //
    cy.contains('21 December 2021');
    // switch to XI tariff
    cy.contains('Northern Ireland Online Tariff').click();
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('21 December 2021');
    // switch to UK tariff
    cy.contains('UK Integrated Online Tariff').click();
    cy.contains('21 December 2021');
  });

  // **** XI tests ****
  // Main Page
  it('🚀 XI 🇪🇺 - Main Page Validation', function() {
    cy.visit('/xi/sections');
    cy.mainPageXI();
    cy.contains('browse the goods classification').click();
    cy.contains('Browse the tariff');
  });
  it('🚀 XI 🇪🇺 - Check Calendar is functioning', function() {
    cy.visit('/xi/sections');

    // select Change Date and OK with current date
    cy.get('.govuk-details__summary').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2022);
    cy.searchForCommodity('3808941000');
    cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
    cy.contains('21 December 2022');
    // select Change Date and CANCEL
    // cy.get(' .js-show.text > a[role=\'button\']').click();
    // cy.contains('Set date').click();
    //

    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 22, month: 12, year: 2022});

    cy.contains('22 December 2022');
  });
  // switching link works
  it('🚀 XI 🇪🇺 - Main Page - Switching link to UK available & works', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');

    // click on the UK link and it should navigate to UK version
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
  });

  // Commodity Search functionality - text search
  it('🚀 XI 🇪🇺- Search Commodity by name ', function() {
    cy.visit('xi/sections');
    cy.contains('Search for a commodity');
    // changed on 11/02/2021
    cy.get('.govuk-label').contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - comm code search
  it('🚀 XI 🇪🇺- Search Commodity by code ', function() {
    cy.visit('xi/sections');
    cy.contains('Look up commodity codes, import duties, taxes and controls'); ;
    cy.contains('Search for a commodity');
    cy.searchForCommodity('3808941000');
    cy.contains(/Commodity .*3808941000/i);
  });
});
