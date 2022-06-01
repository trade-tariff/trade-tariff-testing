describe.skip('importExportRoO.spec.js | Rules of Origin Import Export page', function() {
  it('Page validations', function() {
    cy.visit('/rules_of_origin?commodity_code=6004100091&country_code=JP');
    cy.contains('Are you importing goods into the UK or into Japan?');
    cy.contains('I am importing goods into the UK from Japan');
    cy.contains('I am exporting goods from the UK to Japan');
    // Validate error messages
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Select whether you are importing goods into the UK or Japan');
    cy.get('#rules-of-origin-steps-import-export-import-or-export-error')
        .contains('Select whether you are importing goods into the UK or Japan');
  });
});
