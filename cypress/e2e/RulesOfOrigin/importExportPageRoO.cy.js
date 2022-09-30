/* eslint-disable max-len */
describe('importExportPageRoO.spec | Rules of Origin Import/Export , Import only page', function() {
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
  it('UK - Page validations - Vietnam - import/export options - more than one agreement in place', function() {
    cy.visit('/commodities/6004100091?country=VN#rules-of-origin');
    cy.contains('UK-Vietnam Free Trade Agreement');
    cy.contains('Generalised Scheme of Preferences (GSP)');
    cy.contains('Work out if your goods meet the rules of origin');
    cy.contains('Check rules of origin').click();
    cy.contains('Select agreement for trading with Vietnam');
    cy.contains('Details of your trade');
    // select non GSP agreement
    cy.get('#rules-of-origin-steps-scheme-scheme-code-vietnam-field').check();
    cy.contains('Continue').click();
    cy.contains('Are you importing goods into the UK or into Vietnam?');
    // select import field
    cy.get('#rules-of-origin-steps-import-export-import-or-export-import-field').check();
    cy.contains('Continue').click();
    cy.contains('Are your goods originating?');
    cy.contains('How to work out if your goods are classed as \'originating\' in Vietnam');
    // back button should take user to commodity page
    cy.get('.govuk-back-link').click();
    // select export field
    cy.get('#rules-of-origin-steps-import-export-import-or-export-export-field').check();
    cy.contains('Continue').click();
    cy.contains('Are your goods originating?');
    cy.contains('How to work out if your goods are classed as \'originating\' in United Kingdom');
  });
  it.skip('XI - Page validations - Japan - Import/Export page', function() {
    cy.visit('xi/commodities/6004100091?country=JP#rules-of-origin');
    cy.contains('Work out if your goods meet the rules of origin');
    cy.contains('Check rules of origin').click();
    cy.contains('Are you importing goods into Northern Ireland or into Japan?');
    cy.contains('I am importing goods into Northern Ireland from Japan');
    cy.contains('I am exporting goods from Northern Ireland to Japan');
    // Validate error messages
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Select whether you are importing goods into Northern Ireland or Japan');
    cy.get('#rules-of-origin-steps-import-export-import-or-export-error')
        .contains('Select whether you are importing goods into Northern Ireland or Japan');
    // back button should take user to commodity page
    cy.get('.govuk-back-link').click();
    cy.contains('Preferential rules of origin for trading with Japan');
    cy.contains('Work out if your trade fulfils the rules of origin and can therefore be considered originating.');
  });
  it.skip('XI - Page validations - Vietnam - import/export options - more than one agreement in place', function() {
    cy.visit('xi/commodities/6004100091?country=VN#rules-of-origin');
    cy.contains('EU-Vietnam Free Trade Agreement');
    cy.contains('Generalised Scheme of Preferences (GSP)');
    cy.contains('Work out if your goods meet the rules of origin');
    cy.contains('Check rules of origin').click();
    cy.contains('Select agreement for trading with Viet Nam');
    cy.contains('Details of your trade');
    // select non GSP agreement
    cy.get('#rules-of-origin-steps-scheme-scheme-code-vietnam-field').check();
    cy.contains('Continue').click();
    cy.contains('Are you importing goods into Northern Ireland or into Viet Nam?');
    // select import field
    cy.get('#rules-of-origin-steps-import-export-import-or-export-import-field').check();
    cy.contains('Continue').click();
    cy.contains('Are your goods originating?');
    cy.contains('How to work out if your goods are classed as \'originating\' in Viet Nam');
    // back button should take user to commodity page
    cy.get('.govuk-back-link').click();
    // select export field
    cy.get('#rules-of-origin-steps-import-export-import-or-export-export-field').check();
    cy.contains('Continue').click();
    cy.contains('Are your goods originating?');
    cy.contains('How to work out if your goods are classed as \'originating\' in Northern Ireland');
  });
});
