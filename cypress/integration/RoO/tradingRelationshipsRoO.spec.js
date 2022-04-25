/* eslint-disable max-len */
// HOTT  ,
describe('| tradingRelationsRoO - to exist only on UK service ', {tags: ['config', 'roo-tag']}, function() {
  it('| Trading relations with Chile - UK-Chile association agreement |', function() {
    cy.visit('/commodities/0702000007');
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin').click();
    cy.contains('UK-Chile association agreement');
    cy.contains('Preferential rules of origin for trading with Chile');
  });
  it('| Trading relations with Chile - EU - Chile association agreement |', function() {
    cy.visit('xi/commodities/0702000007');
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin').click();
    cy.contains('Trading relationship with Chile').should('not.exist');
    cy.contains('UK-Chile association agreement').should('not.exist');
    cy.contains('EU - Chile Association Agreement');
  });
  // add trading with GSP countries comoros
  it('| Trading relations with Kenya - UK-Vietnam agreement + GSP |', function() {
    cy.visit('/commodities/0702000007');
    cy.get('input#search_country').click().clear().wait(500)
        .type('Vietnam').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin for trading with Vietnam');
    cy.contains('Your trade may qualify for preferential rates with Vietnam through 2 agreements. Check the rules of origin applicable to each of these agreements.');
    cy.contains('UK-Vietnam Free Trade Agreement');
    cy.contains('Generalised Scheme of Preferences (GSP)');
  });
});
