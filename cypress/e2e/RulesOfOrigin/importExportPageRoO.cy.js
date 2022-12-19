/* eslint-disable max-len */
describe('importExportPageRoO.spec | Rules of Origin Import/Export , Import only page', {tags: ['notProduction']}, function() {
  it('UK - Page validations - Japan - Import/Export page', function() {
    cy.visit('/commodities/6004100091?country=JP#rules-of-origin');
    cy.contains('Work out if your goods meet the rules of origin');
    cy.contains('Check rules of origin').click();
    cy.contains('Are you importing goods into the UK or into Japan?');
    cy.contains('I am importing goods into the UK from Japan');
    cy.contains('I am exporting goods from the UK to Japan');
    // Validate error messages
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Select whether you are importing goods into the UK or Japan');
    cy.get('#rules-of-origin-steps-import-export-import-or-export-error')
        .contains('Select whether you are importing goods into the UK or Japan');
    // back button should take user to commodity page
    cy.get('.govuk-back-link').click();
    cy.contains('Preferential rules of origin for trading with Japan');
    cy.contains('Work out if your goods meet the rules of origin');
  });
});
