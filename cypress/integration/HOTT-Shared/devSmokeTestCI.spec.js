/* eslint-disable max-len */
describe('🚀  UK 🇬🇧 XI 🇪🇺 💡 | devSmokeTestCI- UK,XI| Smoke tests for dev |', function() {
  // Main Page
  it('🚀 UK 🇬🇧 - Main Page Validation', function() {
    cy.visit('/sections');
    cy.MainPageUK();
  });
  // Date Picker validation
  it('🚀 UK 🇬🇧 - Check date picker function is working', function() {
    cy.visit('/sections');
    cy.wait(300);
    // select Change Date and OK with current date
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click();
    cy.get('#tariff_date_month').click();
    cy.get('#tariff_date_year').click();
    cy.contains('Set date').click();
    cy.wait(300);
    // select Change Date and CANCEL
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.contains('Set date').click();
    cy.wait(300);
    // select Change Date and change months and years
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2021);
    cy.contains('Set date').click();
    cy.wait(300);
    cy.contains('This tariff is for 21 December 2021');
  });
  // switching link works
  it('🚀 UK 🇬🇧 - Main Page - Switching link to XI available & works', function() {
    cy.visit('/sections');
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');

    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });
  // Commodity Search functionality - text search
  it('🚀 UK 🇬🇧 - Search Commodity by name ', function() {
    cy.visit('/sections');
    // changed on 11/02/2021
    cy.contains('Look up commodity codes, duty and VAT rates');
    // changed on 11/02/2021
    cy.get('.govuk-header__navigation ').contains('Search or browse the Tariff');
    // changed on 11/02/2021
    cy.get('.govuk-label').contains('Search the UK Integrated Online Tariff');

    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - comm code search
  it('🚀 UK 🇬🇧 - Search Commodity by code ', function() {
    cy.visit('/sections');
    cy.contains('Look up commodity codes, duty and VAT rates');
    cy.get('.govuk-label')
        .contains('Search the UK Integrated Online Tariff');
    cy.searchForCommodity('3808941000');
    cy.contains(/Commodity .*3808941000/i);
  });

  // Date picker working and persists on UK XI sites
  it('🚀 UK 🇬🇧 - Change date and verify if the data shown is same for both XI and UK', function() {
    cy.visit('/sections');
    // select Change Date and change months and years
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2021);
    cy.contains('Set date').click();
    cy.wait(300);
    cy.contains('This tariff is for 21 December 2021');
    cy.contains(' Live animals; animal products');

    cy.contains('Northern Ireland Online Tariff').click();
    cy.contains('Northern Ireland Online Tariff');

    cy.contains('UK Integrated Online Tariff').click();

    cy.contains(' Live animals; animal products');
    cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
        .contains('This tariff is for 21 December 2021');
  });
  

  // Main Page
  it('🚀 XI 🇪🇺 - Main Page Validation', function() {
    cy.visit('/xi/sections');
    cy.MainPageXI();
  });
  it('🚀 XI 🇪🇺 - Check Calendar is functioning', function() {
    cy.visit('/xi/sections');
    cy.wait(300);
    // select Change Date and OK with current date
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click();
    cy.get('#tariff_date_month').click();
    cy.get('#tariff_date_year').click();
    cy.contains('Set date').click();
    cy.wait(300);
    // select Change Date and CANCEL
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.contains('Set date').click();
    cy.wait(300);
    // select Change Date and change months and years
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2021);
    cy.contains('Set date').click();
    cy.wait(300);
    cy.contains('This tariff is for 21 December 2021');
  });
  // switching link works
  it('🚀 XI 🇪🇺 - Main Page - Switching link to UK available & works', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');

    // click on the UK link and it should navigate to UK version
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
  });

  // Commodity Search functionality - text search
  it('🚀 XI 🇪🇺 - Search Commodity by name ', function() {
    cy.visit('/xi/sections');
    // changed on 11/02/2021
    cy.contains('Look up commodity codes, duty and VAT rates');
    // changed on 11/02/2021
    cy.get('.govuk-header__navigation ').contains('Search or browse the Tariff');
    // changed on 11/02/2021
    cy.get('.govuk-label').contains('Search the Northern Ireland Online Tariff');

    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - comm code search
  it('🚀 XI 🇪🇺 - Search Commodity by code ', function() {
    cy.visit('/xi/sections');
    cy.contains('Look up commodity codes, duty and VAT rates');
    cy.get('.govuk-label')
        .contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('3808941000');
    cy.contains(/Commodity .*3808941000/i);
  });
});
