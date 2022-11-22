/* eslint-disable max-len */
describe('importOnlyPageRoO.spec.js | Rules of Origin Import only page', {tags: ['notProduction']}, function() {
  it('UK - Page validations - Afghanistan - Import only page', function() {
    cy.visit('/commodities/6004100091?country=AF#rules-of-origin');
    cy.contains('Work out if your goods meet the rules of origin');
    cy.contains('Check rules of origin').click();
    cy.contains('Trading commodity 6004100091 with Afghanistan');
    // importing
    cy.contains('Importing goods into the United Kingdom from countries which belong to the GSP scheme');
    cy.contains('Afghanistan is a member of the unilateral Generalised System of Preferences (GSP) scheme. The rules of origin apply only to the import of goods from the overseas country.');
    cy.contains('Importing goods from Afghanistan');
    cy.get('form#edit_rules_of_origin_steps_import_only_import_only  a').should('have.attr', 'href', 'https://www.gov.uk/government/publications/trading-with-developing-nations');

    // exporting
    cy.contains('Exporting goods to Afghanistan');
    cy.contains('If you would like to export goods to Afghanistan, then MFN duties will apply.');
    cy.get('.govuk-grid-column-two-thirds > p > a').should('have.attr', 'href', 'https://www.gov.uk/government/publications/reference-document-for-the-customs-origin-of-chargeable-goods-eu-exit-regulations-2020');

    // back button should take user to commodity page
    cy.get('.govuk-back-link').click();
    cy.contains('Preferential rules of origin for trading with Afghanistan');
    cy.contains('Work out if your trade fulfils the rules of origin and can therefore be considered originating.');
    // click continue
    cy.contains('Check rules of origin').click();
    cy.get('.govuk-button').contains('Continue').click();
    cy.contains('How to work out if your goods are classed as \'originating\' in United Kingdom');
    cy.get('.govuk-back-link').click();
    cy.contains('Trading commodity 6004100091 with Afghanistan');
  });
  it.skip('XI - Page validations - Afghanistan - Import only page', function() {
    cy.visit('xi/commodities/6004100091?country=AF#rules-of-origin');
    cy.contains('Work out if your goods meet the rules of origin');
    cy.contains('Check rules of origin').click();
    cy.contains('Trading commodity 6004100091 with Afghanistan');
    // importing
    cy.contains('Importing goods into Northern Ireland from countries which belong to the GSP scheme');
    cy.contains('Afghanistan is a member of the unilateral Generalised System of Preferences (GSP) scheme. The rules of origin apply only to the import of goods from the overseas country.');
    cy.contains('Importing goods from Afghanistan');
    cy.get('form#edit_rules_of_origin_steps_import_only_import_only  a').should('have.attr', 'href', 'https://www.gov.uk/government/publications/trading-with-developing-nations');

    // exporting
    cy.contains('Exporting goods to Afghanistan');
    cy.contains('If you would like to export goods to Afghanistan, then MFN duties will apply.');
    cy.get('.govuk-grid-column-two-thirds > p > a').should('have.attr', 'href', 'https://www.gov.uk/government/publications/reference-document-for-the-customs-origin-of-chargeable-goods-eu-exit-regulations-2020');

    // back button should take user to commodity page
    cy.get('.govuk-back-link').click();
    cy.contains('Preferential rules of origin for trading with Afghanistan');
    cy.contains('Work out if your trade fulfils the rules of origin and can therefore be considered originating.');
    // click continue
    cy.contains('Check rules of origin').click();
    cy.get('.govuk-button').contains('Continue').click();
    cy.contains('How to work out if your goods are classed as \'originating\' in Northern Ireland');
    cy.get('.govuk-back-link').click();
    cy.contains('Trading commodity 6004100091 with Afghanistan');
  });
});
