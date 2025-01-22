describe('| GB-NI402a-e2e.spec | GB to NI route 🚐 02', function() {
  it('e2e GB to NI 🧁', function() {
    cy.visit('/duty-calculator/uk/0702001007/import-date');
    cy.validDate();

    cy.contains('Which part of the UK are you importing into?');

    cy.get('#steps-import-destination-import-destination-xi-field').check();
    cy.contains('Continue').click();

    cy.contains('Which country are the goods coming from?');

    cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click();
    cy.contains('Continue').click();

    cy.traderScheme('yes');

    cy.finalUse('yes');
    cy.turnOver('less');

    cy.contains('There is no import duty to pay');
    cy.contains('There is no import duty to pay because:');
    cy.contains('You are transporting goods from England, Scotland or Wales to Northern Ireland');
    cy.contains('You are a member of the UK Internal Market Scheme');
    cy.contains('Your import is for sale to, or final use by, end-consumers located in Northern Ireland');
    cy.contains('The importer had a total annual turnover of less than £2,000,000 in its most recent complete financial year');
    cy.contains('You may be called upon to provide proof of your membership of the UK Internal Market Scheme');


    cy.go('back');
    cy.get('input#steps-annual-turnover-annual-turnover-yes-field')
        .parent()
        .find('input')
        .should('be.checked');

    cy.contains('Continue').click();

    cy.contains('Start again').click();
    cy.contains('When will the goods be imported?');
  });
});
