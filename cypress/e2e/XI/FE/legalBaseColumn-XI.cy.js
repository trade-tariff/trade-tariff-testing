 
describe('🇪🇺 💡 legalBaseColumn-XI | Legal base Column XI ', function() {
// HOT-58 Suppressing Legal Base Column for XI
  // front end
  it('☑️ 1.Prove that the legal base column exists on import measures tab on XI - commodity 0101210000', function() {
    cy.visit('xi/commodities/0101210000#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Legal base').should('exist');
    // eu regulation
    cy.contains('R2658/87');
    cy.get('a[title=\'NC - 1988 (UTS)\']').should('have.attr', 'href', 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A31987R2658');
    // // uk regulation

    // // hover over to see text
  });

  it('☑️ 2.Prove that the legal base column exists on export measures tab on XI - commodity 0101210000', function() {
    cy.visit('xi/commodities/0101210000#export');

    cy.get('.govuk-tabs__panel');
    cy.contains('Legal base').should('exist');
    cy.contains('R2658/87');
    cy.get('a[title=\'NC - 1988 (UTS)\']').should('have.attr', 'href', 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A31987R2658');
  });

  it('🚫 3.Binding Tariff Information link - not visible', function() {
    cy.visit('/xi/commodities/0102290500');
    cy.get('.govuk-tabs__panel');
    cy.contains('Binding tariff information').should('not.exist');
  });
});
