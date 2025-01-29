describe('Duty Calculator smoke tests', {tags: ['smokeTest']}, function() {
  it('🚀 UK 🇬🇧 - Duty Calculator e2e - ( NI to GB )| 102 |', function() {
    cy.visit('/duty-calculator/uk/1516209821/import-date');
    cy.validDate();
    cy.contains('Which part of the UK are you importing into?');
    cy.selectDestination('gb');
    cy.contains('Which country are the goods coming from?');
    cy.contains('The duty you are charged may be dependent on the country from which the goods are coming.');
    cy.contains('Where are the goods coming from?');
    cy.contains('When autocomplete results are available');
    cy.originList({value: 'Northern Ireland'});
    cy.contains('There is no import duty to pay');
    cy.contains('There are no import duties applicable to the movement of goods from Northern Ireland to England, Scotland and Wales.');
    cy.contains('Find out more about trading and moving goods in and out of Northern Ireland (opens in a new window).');
    cy.get('.govuk-grid-row .govuk-link').should(
        'have.attr',
        'href',
    );
    cy.get('.govuk-back-link').click();
    cy.contains('Which country are the goods coming from?');
    cy.contains('Continue').click();
    cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
    cy.contains('When will the goods be imported?');
  });
  it('🚀 UK 🇬🇧 Duty Calculator - RoW to GB 🇦🇫 Afghanistan to 🇬🇧 GB | 204 |', function() {
    cy.visit('/duty-calculator/uk/3926909790/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Afghanistan'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.additionalCode('2701');
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'c119'});
    cy.contains('Continue').click();
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains(' VAT');
    cy.contains('Third-country duty');
    cy.contains('Tariff preference - Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences');
    cy.contains('Suspension - goods for certain categories of ships');
    cy.contains('Airworthiness tariff suspension');
  });
});
