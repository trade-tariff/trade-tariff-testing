/* eslint-disable max-len */
describe('selectAgreementRoO.spec.js | Rules of Origin - Select Agreement page', function() {
  it('UK - Page validations - Vietnam - more than one agreement in place', function() {
    cy.visit('/commodities/6004100091?country=VN#rules-of-origin');
    cy.contains('UK-Vietnam Free Trade Agreement');
    cy.contains('Generalised Scheme of Preferences (GSP)');
    cy.contains('Work out if your goods meet the rules of origin');
    cy.contains('Check rules of origin').click();
    cy.contains('Select agreement for trading with Vietnam');
    cy.contains('Details of your trade');
    // Validate error messages
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.get('.govuk-error-summary').contains('Select an agreement');
    cy.get('.govuk-error-message').contains('Select an agreement');
    // back button should take user to commodity page
    cy.get('.govuk-back-link').click();
    cy.contains('Preferential rules of origin for trading with Vietnam');
    cy.contains('Work out if your trade fulfils the rules of origin and can therefore be considered originating.');
    // select GSP agreement
    cy.contains('Check rules of origin').click();
    cy.get('#rules-of-origin-steps-scheme-scheme-code-vietnam-field').check();
    cy.contains('Continue').click();
    cy.contains('Are you importing goods into the UK or into Vietnam?');
    cy.get('.govuk-back-link').click();
    // select non GSP agreement
    cy.get('#rules-of-origin-steps-scheme-scheme-code-gsp-field').check();
    cy.contains('Continue').click();
    cy.contains('Importing goods into the United Kingdom from countries which belong to the GSP scheme');
  });
  it('XI - Page validations - Vietnam - more than one agreement in place', function() {
    cy.visit('xi/commodities/6004100091?country=VN#rules-of-origin');
    cy.contains('EU-Vietnam Free Trade Agreement');
    cy.contains('Generalised Scheme of Preferences (GSP)');
    cy.contains('Work out if your goods meet the rules of origin');
    cy.contains('Check rules of origin').click();
    cy.contains('Select agreement for trading with Viet Nam');
    cy.contains('Details of your trade');
    // Validate error messages
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.get('.govuk-error-summary').contains('Select an agreement');
    cy.get('.govuk-error-message').contains('Select an agreement');
    // back button should take user to commodity page
    cy.get('.govuk-back-link').click();
    cy.contains('Preferential rules of origin for trading with Viet Nam');
    cy.contains('Work out if your trade fulfils the rules of origin and can therefore be considered originating.');
    // select GSP agreement
    cy.contains('Check rules of origin').click();
    cy.get('#rules-of-origin-steps-scheme-scheme-code-vietnam-field').check();
    cy.contains('Continue').click();
    cy.contains('Are you importing goods into Northern Ireland or into Viet Nam?');
    cy.get('.govuk-back-link').click();
    // select non GSP agreement
    cy.get('#rules-of-origin-steps-scheme-scheme-code-gsp-field').check();
    cy.contains('Continue').click();
    cy.contains('Importing goods into Northern Ireland from countries which belong to the GSP scheme');
  });
});
