describe('| GB-NI402b-e2e.spec | GB to NI route |', function() {
  it('e2e GB to NI 🧁', function() {
    cy.visit('/duty-calculator/uk/1701141000/import-date');
    cy.validDate();

    cy.contains('Which part of the UK are you importing into?');

    cy.get('#steps-import-destination-import-destination-xi-field').check();
    cy.contains('Continue').click();

    cy.contains('Which country are the goods coming from?');

    cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click();
    cy.contains('Continue').click();

    cy.traderScheme('yes');

    cy.finalUse('yes');

    cy.turnOver('more');

    cy.planned('commercialprocessing');

    cy.contains('There is no import duty to pay');
    cy.contains('There is no import duty to pay because:');
    cy.contains('You are transporting goods from England, Scotland or Wales to Northern Ireland');
    cy.contains('You are a member of the UK Trader Scheme, and');
    cy.contains('Your import is for sale to, or final use by, end-consumers located in Northern Ireland, and');
    cy.contains('You will be undertaking permitted commercial processing on the goods on arrival in Northern Ireland');

    cy.contains('Back').click();

    cy.get('input#steps-planned-processing-planned-processing-commercial-processing-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.contains('Continue').click();

    cy.contains('Start again').click();
    cy.contains('When will the goods be imported?');
  });
});
