/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable max-len */
describe('🧮 | dcFinalUse | Final Use - page |', function() {
  it('UK - Page Validation', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');
    cy.validDate();
    // destination XI
    cy.selectDestination('xi');
    // origin GB
    cy.selectOrigin('gb');
    // ✅ Trader Scheme Registered - Yes
    cy.traderScheme('yes');
    // main page title
    cy.contains('Are your goods for sale to, or final use by, end-consumers located in the United Kingdom?');
    cy.contains('Yes, I am moving these goods into Northern Ireland for its sale to, or final use by, end-consumers located in the United Kingdom');
    cy.contains('No, these goods will not be for final use in the United Kingdom');

    // error messages - nothing is entered
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Select one of the two options');
    cy.get('#steps-final-use-final-use-error')
        .contains('Select one of the two options');

    // Select Yes, I am importing this good into Northern Ireland for its sale to, or final use by, end-consumers located in the United Kingdom
    cy.get('div:nth-of-type(1) > input[name=\'steps_final_use[final_use]\']').check();
    cy.contains('Continue').click();

    cy.contains('Explore the topic');
    cy.contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU').click();
    cy.contains('Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU');
    cy.go(-1);
    cy.turnOver('more');

    // planned-processing page
    cy.contains('How will these goods be processed after they are moved into Northern Ireland?');
    // // selection is persisted
    // cy.get('.govuk-back-link').click().wait(300);

    // cy.get('div:nth-of-type(1) > input[name=\'steps_final_use[final_use]\']')
    //     .parent()
    //     .find('input')
    //     .should('be.checked');

    // Select No, this import will not be for final use in the United Kingdom
    cy.get('#steps-planned-processing-planned-processing-commercial-processing-field').check();
    cy.contains('Continue').click().wait(500);
  });
});
