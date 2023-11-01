describe('🧮 | dcFinalUse | Final Use - page |', function() {
  it('UK - Page Validation', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('gb');
    cy.traderScheme('yes');
    cy.contains('Are your goods for sale to, or final use by, end-consumers located in the United Kingdom?');
    cy.contains('Yes, I am moving these goods into Northern Ireland');
    cy.contains('No, these goods will not be for final use in the United Kingdom');

    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Select one of the two options');
    cy.get('#steps-final-use-final-use-error')
        .contains('Select one of the two options');

    cy.get('div:nth-of-type(1) > input[name=\'steps_final_use[final_use]\']').check();
    cy.contains('Continue').click();

    cy.contains('Explore the topic');
    cy.contains('Check if you can declare goods you bring into Northern Ireland \'not at risk\' of moving to the EU').click();
    cy.contains('Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU');
    cy.go('back');
    cy.turnOver('more');

    cy.contains('How will these goods be processed after they are moved into Northern Ireland?');


    cy.get('#steps-planned-processing-planned-processing-commercial-processing-field').check();
    cy.contains('Continue').click();
  });
});
