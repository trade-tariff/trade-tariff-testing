describe('| GB-NI405-e2e.spec | GB to NI route 🚐 05', function() {
  it('e2e GB to NI', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');

    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('gb');
    cy.traderScheme('yes');

    cy.finalUse('yes');

    cy.turnOver('more');

    cy.plannedXI('unacceptablecommercial');
    cy.certificate('yes');

    cy.contains('There is no import duty to pay');
    cy.contains('There is no import duty to pay because:');
    cy.contains('You are transporting goods from England, Scotland or Wales to Northern Ireland');
    cy.contains('You are able to take advantage of the preferential tariffs');
    cy.contains('You may be called upon to provide a copy of your Certificate of Origin to avoid paying duties.');

    cy.contains('Start again').click();
    cy.contains('When will the goods be imported?');
  });
});
