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
      cy.contains('Browse').click();
      cy.contains('Browse the tariff');
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
  // UK not to be in EU country list
  it('🚀 XI - United Kingdom should NOT be shown in EU country list', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/commodities/2403991000#import');
    cy.get('.govuk-tabs__panel')
        .contains('European Economic Area (2012)').click();
    cy.contains('European Union');
    cy.contains('United Kingdom (GB)').should('not.exist');
  });
  // Commodity Search functionality - text search
  it('🚀 XI - Search Commodity by name ', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/sections');
    // changed on 11/02/2021
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Look up commodity codes, import duties, taxes and controls');
    cy.contains('Search for a commodity');
    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - comm code search
  it('🚀 XI - Search Commodity by code ', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/sections');
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Look up commodity codes, import duties, taxes and controls');
    cy.contains('Search for a commodity');
    cy.searchForCommodity('3808941000');
    cy.contains(/Commodity .*3808941000/i);
  });

  it('🚀 XI - Country Selection - import ', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/commodities/0208909800#import');
    // XI removed
    cy.searchForCountry('(XI)').contains('No results found');
    // Andora should be present
    cy.searchForCountry('(AD)').contains('Andorra (AD)');
    //  GB Present
    cy.searchForCountry('(GB)').contains('United Kingdom (excluding Northern Ireland) (GB)');
    // No XU
    cy.searchForCountry('(XU)').contains('No results found');
  });
  it('🚀 XI - Country Selection - export ', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/commodities/0208909800#export');
    // XI removed
    cy.searchForCountry('(XI)').contains('No results found');

    // Andora should be present
    cy.searchForCountry('(AD)').contains('Andorra (AD)');
    //  GB Present
    cy.searchForCountry('(GB)').contains('United Kingdom (excluding Northern Ireland) (GB)');
    // No XU
    cy.searchForCountry('(XU)').contains('No results found');
  });
  // Date picker working and persists on UK XI sites
  it('🚀 XI - Change Date and check if the data shown is same for both XI and UK', function() {
    cy.viewport('iphone-x');
    cy.visit('/xi/sections');
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
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('21 December 2021');
    // switch to UK tariff
    cy.contains('UK Integrated Online Tariff').click();
    cy.contains('21 December 2021');
  });
});
