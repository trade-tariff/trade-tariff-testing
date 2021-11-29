/* eslint-disable max-len */
// HOTT- ,
describe('| tradingRelationsRoO - to exist only on UK service ', function() {
  it('| Trading relations with Chile - UK-Chile association agreement |', function() {
    cy.visit('/commodities/0702000007');
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin').click();
    cy.contains('UK-Chile association agreement');
    cy.contains('The UK has signed an association agreement with Chile, which is in effect.');
  });
  it('| Trading relations with Chile - EU -Chile association agreement |', function() {
    cy.visit('xi/commodities/0702000007');
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin').click();
    cy.contains('Trading relationship with Chile').should('not.exist');
    cy.contains('UK-Chile association agreement').should('not.exist');
    cy.contains('The UK has signed an association agreement with Chile, which is in effect.').should('not.exist');
  });
  // add trading with GSP countries comoros
});
