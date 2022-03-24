/* eslint-disable max-len */
describe('🇪🇺 💡 legalBaseColumn-XI | Legal base Column XI ', function() {
// HOT-58 Suppressing Legal Base Column for XI
  // front end
  it('☑️ 1.Prove that the legal base column exists on import measures tab on XI - commodity 0101210000', function() {
    cy.visit('xi/commodities/0101210000#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Legal base').should('exist');
    // eu regulation
    cy.contains('R2658/87');
    cy.get('a[title=\'NC - 1988 (UTS)\']').should('have.attr', 'href', 'http://eur-lex.europa.eu/search.html?instInvStatus=ALL&or0=DN%3D31987R2658*,DN-old%3D31987R2658*&DTC=false&type=advanced');
    // // uk regulation
    // cy.get('a[title^=\'The Organic Production and Control (Amendment) (EU Exit) Reg\']').contains('S.I. 2019/693');
    // cy.get('a[title^=\'The Organic Production and Control (Amendment) (EU Exit) Reg\']').should('have.attr', 'href', 'https://www.legislation.gov.uk/uksi/2019/693');

    // // hover over to see text
    // cy.get('a[title^=\'The Organic Production and Control (Amendment) (EU Exit) Reg\']').trigger('mouseover');
    // //  cy.contains('The Organic Production and Control (Amendment) (EU Exit) Regulations 2019')
  });

  it('☑️ 2.Prove that the legal base column exists on export measures tab on XI - commodity 0101210000', function() {
    cy.visit('xi/commodities/0101210000#export');
    
    cy.get('.govuk-tabs__panel');
    cy.contains('Legal base').should('exist');
    cy.contains('R2658/87');
    cy.get('a[title=\'NC - 1988 (UTS)\']').should('have.attr', 'href', 'http://eur-lex.europa.eu/search.html?instInvStatus=ALL&or0=DN%3D31987R2658*,DN-old%3D31987R2658*&DTC=false&type=advanced');
  });

  it('🚫 3.Binding Tariff Information link - not visible', function() {
    cy.visit('/xi/commodities/0102290500');
    cy.get('.govuk-tabs__panel');
    cy.contains('Binding tariff information').should('not.exist');
  });
});
