describe('Measure condition pop ups', function() {
  it('Condition Code 999L - Separated with new text at the bottom', function() {
    cy.visit('/commodities/0702001007');
    cy.get('#measure-20232654').contains('Conditions').click();
    cy.get('.info-content').contains('Import control of organic products for All countries');
  });

  it('Organic control on frog legs', function() {
    cy.visit('/commodities/0208907000');
    cy.get('#measure-20232644').contains('Conditions').click();
    cy.get('.info-content').contains('Import control of organic products for All countries');
    cy.get('.info-content').contains('Meet one of the following conditions');
    cy.get('.info-content').contains('Guidance for completing CDS Data Element 2/3').click();
    cy.get('.info-content').contains('Complete the statement ‘Excluded from regulation 834/2007’.');
    cy.get('.info-content').contains('Enter the reference number of the Certificate.');
  });
});
