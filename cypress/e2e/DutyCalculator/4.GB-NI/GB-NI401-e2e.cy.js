describe('| GB-NI401-e2e.spec | GB to NI route 🚎 01', function() {
  it('e2e GB to NI 🌾', function() {
    cy.visit(`/duty-calculator/xi/1212210000/import-date`);
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('gb');
    cy.contains('There is no import duty to pay');
    cy.contains('Start again').click();
    cy.contains('When will the goods be imported?');
  });
});
