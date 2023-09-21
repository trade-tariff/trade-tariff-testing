describe('| GB-NI402c-e2e.spec | GB to NI route 🚐 02', function() {
  it('e2e GB to NI 🧁', function() {
    cy.visit('/duty-calculator/uk/1701141000/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('gb');
    cy.traderScheme('yes');
    cy.finalUse('yes');
    cy.turnOver('more');

    cy.planned('notprocessing');

    cy.contains('There is no import duty to pay');
    cy.contains('There is no import duty to pay because:');
    cy.contains('You are transporting goods from England, Scotland or Wales to Northern Ireland');
    cy.contains('You are a member of the UK Trader Scheme');
    cy.contains('Your import is for sale to, or final use by, end-consumers located in Northern Ireland');
    cy.contains('You do not intend to further process the goods on arrival in Northern Ireland');

    cy.contains('Back').click();

    cy.get('#steps-planned-processing-planned-processing-without-any-processing-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.contains('Continue').click();

    cy.contains('Start again').click();
    cy.contains('When will the goods be imported?');
  });
});
