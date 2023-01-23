/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable max-len */
describe('🧮 | dcTurnOver.spec | Duty Calculator TurnOver page  |', function() {
  it('Page Validation - RoW-GB ', function() {
    cy.visit('/duty-calculator/uk/1701141000/import-date');

    cy.validDate();
    // NI Destination
    cy.selectDestination('xi');
    // United Kingdom as country of Origin
    cy.selectOrigin('gb');
    // Trader Scheme Registered - Yes
    cy.traderScheme('yes');
    // Final use in NI - Yes
    cy.finalUse('yes');
    // Turnover page
    console.log(cy.title());
    cy.contains('What was your annual turnover in the most recent complete financial year?');
    cy.contains('If the turnover of your company was less than £500,000 in the latest complete financial year, then your goods will not be considered to be subject to commercial processing, and therefore not \'at risk\' of subsequently being moved into Ireland.');
    cy.contains('My company\'s turnover was less than £500,000');
    cy.contains('My company\'s turnover was £500,000 or more');
    // check for error messages
    cy.contains('Continue').click();

    // no values entered - error message
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('Select one of the two options');

    cy.get('#steps-annual-turnover-annual-turnover-error')
        .contains('Select one of the two options');
    cy.get('.govuk-back-link').click().wait(300);
    cy.contains('Continue').click();
    cy.turnOver('less');
    // no duty to pay page
    cy.contains('There is no import duty to pay');
    cy.get('.govuk-back-link').click().wait(300);
    cy.turnOver('more');
    // planned processing screen
    cy.contains('How will these goods be processed after they are moved into Northern Ireland?');
    cy.get('.govuk-back-link').click().wait(300);
    cy.contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU').click();
    cy.contains('Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU');
  });
});
