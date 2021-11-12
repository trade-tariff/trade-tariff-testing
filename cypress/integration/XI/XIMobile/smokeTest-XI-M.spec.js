/* eslint-disable max-len */

describe('🚀 XI 🇪🇺 💡 | smokeTest-XI-M | Smoke test to cover basic functionality on XI services ', function() {
  // Main Page
  it(`🚀 XI - Mobile - nav-bar validation`, function() {
    const sizes = ['iphone-6', 'samsung-note9'];
    for (let i = 0; i < sizes.length; i++) {
      cy.viewport(`${sizes[i]}`);

      cy.visit('/xi/sections');
      cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('A-Z');
      cy.contains('Tools');
      cy.contains('Search or browse the Tariff').click();
      cy.contains('All sections');
    }
  });

  // Legal base tests
  it('🚀 XI - Legal base column not suppressed', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/commodities/0101210000#import');
    cy.contains('Northern Ireland Online Tariff');
    cy.get('.govuk-tabs__panel');
    cy.contains('Legal base').should('exist');
    cy.contains('Legal base').should('be.visible');
  });
  // switching link works
  it('🚀 XI - Main Page - Switching link to UK available & works', function() {
    cy.viewport('iphone-x');
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
  // UK not to be in EU country list
  it('🚀 XI - United Kingdom should NOT be shown in EU country list', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/commodities/2403991000#import');
    cy.get('.govuk-tabs__panel')
        .contains('European Economic Area (2012)').click();
    cy.get('.govuk-list')
        .contains('European Union (EU)');
    cy.get('#measure-3625193')
        .contains('United Kingdom (GB)').should('not.exist');
  });
  // Commodity Search functionality - text search
  it('🚀 XI - Search Commodity by name ', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/sections');
    // changed on 11/02/2021
    cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates');
    // changed on 11/02/2021
    cy.get('.govuk-header__navigation ').contains('Search or browse the Tariff');
    // changed on 11/02/2021
    cy.get('.govuk-label').contains('Search the Northern Ireland Online Tariff');

    cy.get('.js-commodity-picker-select').click().type('gherkins');
    cy.get('li#q__option--0');
    cy.wait(400);
    cy.get('input[name=\'new_search\']').click();
    cy.wait(500);
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - comm code search
  it('🚀 XI - Search Commodity by code ', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/sections');
    cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates');
    cy.get('.govuk-label')
        .contains('Search the Northern Ireland Online Tariff');
    cy.get('.js-commodity-picker-select').click().type('3808941000');
    cy.get('li#q__option--0');
    cy.wait(400);
    cy.get('input[name=\'new_search\']').click();
    cy.wait(500);
    cy.checkCommPage('3808941000');
  });

  it('🚀 XI - Country Selection -import ', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/commodities/0208909800#import');
    // XI Present
    cy.get('input#search_country').click().clear().wait(500).type('(XI)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('Northern Ireland (XI)');

    // Andora should be present
    cy.get('input#search_country').click().clear().wait(500).type('(AD)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Andorra (AD)');
    //  GB Present
    cy.get('input#search_country').click().clear().wait(500).type('(GB)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('United Kingdom (excluding Northern Ireland) (GB)');


    // no XU
    cy.get('input#search_country').click().clear().wait(500).type('(XU)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');
  });
  it('🚀 XI - Country Selection -export ', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/commodities/0208909800#export');
    // XI Present
    cy.get('input#search_country').click().clear().wait(500)
        .type('(XI)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('Northern Ireland (XI)');

    // Andora should be present
    cy.get('input#search_country').click().clear().wait(500).type('(AD)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Andorra (AD)');
    //  GB Present
    cy.get('input#search_country').click().clear().wait(500).type('(GB)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('United Kingdom (excluding Northern Ireland) (GB)');


    // no XU
    cy.get('input#search_country').click().clear().wait(500).type('(XU)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');
  });
  // Date picker working and persists on UK XI sites
  it('🚀 XI - Change Date and check if the data shown is same for both XI and UK', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/sections');
    // select Change Date and change months and years
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click().clear().type(7);
    cy.get('#tariff_date_month').click().clear().type(4);
    cy.get('#tariff_date_year').click().clear().type(2022);
    cy.contains('Set date').click();
    cy.wait(300);

    cy.contains(' Live animals; animal products');
    cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
        .contains('This tariff is for 7 April 2022');

    cy.get('main#content  nav  a')
        .contains('Online Tariff').click();
    cy.contains('UK Integrated Online Tariff');
    cy.get('main#content  nav  a');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.contains(' Live animals; animal products');
    cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
        .contains('This tariff is for 7 April 2022');
  });
});
