
// HOTT  ,
describe('| tradingRelationsRoO - to exist only on UK service ', {tags: ['config', 'roo-tag']}, function() {
  it('| Trading relations with Chile - UK-Chile association agreement |', function() {
    cy.visit('/commodities/0702001007');
    cy.pickTradingPartner('CL', `${cy.url()}`);
    cy.contains('Origin').click();
    cy.get('#rules-of-origin__intro--country-scheme_uk > :nth-child(2)').should('include.text', 'UK-Chile Association Agreement');
    cy.contains('Preferential rules of origin for trading with Chile');
  });
  it('| Trading relations with Chile - EU - Chile association agreement |', function() {
    cy.visit('xi/commodities/0702001007');
    cy.pickTradingPartner('CL', `${cy.url()}`);
    cy.contains('Origin').click();
    cy.contains('Trading relationship with Chile').should('not.exist');
    cy.contains('UK-Chile association agreement').should('not.exist');
    cy.contains('EU - Chile Association Agreement');
  });
  // add trading with GSP countries comoros
  it('| Trading relations with Vietnam - UK-Vietnam agreement + GSP |', function() {
    cy.visit('/commodities/0702001007');
    cy.pickTradingPartner('VN', `${cy.url()}`);
    cy.contains('Origin').click();
    cy.contains('Preferential rules of origin for trading with Vietnam');
    cy.contains('UK-Vietnam Free Trade Agreement');
  });
});
