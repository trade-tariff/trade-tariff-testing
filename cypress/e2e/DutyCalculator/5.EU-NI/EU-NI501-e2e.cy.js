describe('| EU-NI501-e2e.spec |EU to Northern Ireland |', function() {
  it(`e2e EU to NI`, function() {
    cy.visit(`/duty-calculator/xi/1212210000/import-date`);
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('eu');
    cy.contains('There is no import duty to pay');
    cy.contains('There is no import duty to pay when importing goods into Northern Ireland from a European Union member state.');
    cy.get('.govuk-back-link').click();
    cy.contains('Which country are the goods coming from?');
    cy.contains('Continue').click();
    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    cy.contains('When will the goods be imported?');
  });
});
