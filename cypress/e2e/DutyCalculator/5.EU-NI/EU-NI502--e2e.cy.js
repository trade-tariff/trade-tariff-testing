describe('| *EU-NI502--e2e.spec |EU to Northern Ireland |', function() {
  it('e2e EU to NI', function() {
    cy.visit('/xi/commodities/1516209821/');
    cy.dutyCalLink('1516209821');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('eu');
    cy.contains('There is no import duty to pay');
    cy.contains('There is no import duty to pay when importing goods into Northern Ireland from a European Union member state.');
    cy.get('.govuk-back-link').click();
    cy.contains('Which country are the goods coming from?');
    cy.contains('Continue').click();
    cy.get('.govuk-button').click();
    cy.contains('When will the goods be imported?');
  });
});
