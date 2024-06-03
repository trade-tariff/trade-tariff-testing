 
describe('importOnlyPageRoO.spec.js | Rules of Origin Import only page', {tags: ['notProduction']}, function() {
  it('UK - Page validations - Afghanistan - Import only page', function() {
    cy.visit('/commodities/6004100091?country=AF#rules-of-origin');
    cy.contains('Work out if your goods meet the rules of origin');
    cy.contains('Check rules of origin').click();
    cy.contains('Trading commodity 6004100091 with Afghanistan');
    // importing
    cy.contains('Importing goods into the United Kingdom from countries which belong to unilateral preference schemes');
    cy.contains('Afghanistan is a member of the unilateral Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences scheme. The rules of origin apply only to the import of goods from the overseas country.');
    cy.contains('Importing goods from Afghanistan');

    // exporting
    cy.contains('Exporting goods to Afghanistan');
    cy.contains('If you would like to export goods to Afghanistan, then MFN duties will apply.');
    cy.get('.govuk-grid-column-two-thirds > p > a').should('have.attr', 'href', 'https://www.gov.uk/government/publications/reference-document-for-the-customs-origin-of-chargeable-goods-eu-exit-regulations-2020');

    // back button should take user to commodity page
    cy.get('.govuk-back-link').click();
    cy.contains('Preferential rules of origin for trading with Afghanistan');
    // click continue
    cy.contains('Check rules of origin').click();
    cy.get('.govuk-button').contains('Continue').click();
    cy.contains('How to work out if your goods are classed as \'originating\' in United Kingdom');
    cy.get('.govuk-back-link').click();
    cy.contains('Trading commodity 6004100091 with Afghanistan');
  });
  it('UK - Show Additional DCTS info on DCTS rows on Commodity code page', function() {
    cy.visit('/commodities/2203000900');
    cy.get('a[href="#import_duties"]').contains('Import duties').click();

    // DCTS - Comprehensive Preferences
    cy.get('#measure-20205188').contains('Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences (1062)');
    cy.get('#measure-20205188').contains('Conditions').click();
    cy.get('#popup > div > div').contains('Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences');
    cy.get('#popup > div > div').contains('Declaring your proof of origin');
    cy.get('#popup > div > p').contains('Close').click();
    cy.reload();

    // DCTS - Enhanced Preferences
    cy.get('#measure-20213585').contains('Developing Countries Trading Scheme (DCTS) - Enhanced Preferences (1061)');
    cy.get('#measure-20213585').contains('Conditions').click();
    cy.get('#popup > div > div').contains('Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    cy.get('#popup > div > div').contains('Declaring your proof of origin');
    cy.get('#popup > div > p').contains('Close').click();
    cy.reload();

    // DCTS - Standard Preferences
    cy.get('#measure-20211687').contains('Developing Countries Trading Scheme (DCTS) - Standard Preferences (1060)');
    cy.get('#measure-20211687').contains('Conditions').click();
    cy.get('#popup > div > div').contains('Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    cy.get('#popup > div > div').contains('Declaring your proof of origin');
    cy.get('#popup > div > p').contains('Close').click();
  });
});
