describe('🇬🇧 🇪🇺 💡 | changeCurrency-UK XI | Change Currency should not be visible  -  UK services |', function() {
  // --- HOTT-161 ---
  it('UK - Change Currency should not be visible on main page - The Online Trade Tariff', function() {
    cy.visit('/sections');
    cy.mainPageUK();
    cy.get('.govuk-grid-row');
    cy.contains('Change date');
    cy.contains('Change currency').should('not.exist');
  });
  it(' UK shows GBP currency NOT EUR', function() {
    cy.visit('/commodities/0201100021#import');
    //  cy.get('#measure-2049567')
    cy.get('.small-table.measures.govuk-table');
    cy.contains('12.00 % + 147.00 GBP / 100 kg');
  });
  it('XI - Change Currency should not be visible on main page - The Northern Ireland (EU) Tariff for the XI', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-grid-row');
    cy.contains('Change date');
    cy.contains('Change currency').should('not.exist');
  });
  it('XI shows EUR currency NOT GBP', function() {
    cy.visit('/xi/commodities/0201100021#import');
    cy.get('.small-table.measures.govuk-table');
    cy.contains('12.80 % + 176.80 EUR / 100 kg');
  });
});
