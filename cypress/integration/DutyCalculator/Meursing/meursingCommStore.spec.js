describe('Store Commodity value in session for Meursing ', function() {
  it('meursingCommStoreSession', function() {
    const commcode = ['0702000007', '0910993100', '0208907000'];
    for (let i=0; i<commcode.length; i++) {
      cy.visit(`/xi/commodities/${commcode[i]}`);
      cy.contains('Tools').click();
      cy.contains('Meursing code finder').click();
      cy.get('a[role=\'button\']').click();
      cy.contains('0 - 4.99').click();
      cy.contains('Continue').click();
      cy.contains('5 - 29.99').click();
      cy.contains('Continue').click();
      cy.contains('1.5 - 2.99').click();
      cy.contains('Continue').click();
      cy.contains('2.5 - 5.99').click();
      cy.contains('Continue').click();
      cy.contains('Check your answers');
      cy.contains('Continue').click();
      cy.contains(`The Meursing additional code for a product with this composition is 7121.`);
      cy.contains('Return to commodity code');
      cy.get('.govuk-list.govuk-list--bullet > li:nth-of-type(1) > a').click();
      cy.contains(`Commodity information for ${commcode[i]}`);
    }
  });
});
