import dayjs from 'dayjs';

const currentDate = dayjs().format('DD MMMM YYYY');

describe('| dcAdditionalCode | RoW to GB - additional codes |', {tags: ['config', 'dc-tag']}, function() {
  it(`additional code 🇮🇱 | UK |`, function() {
    cy.visit('/duty-calculator/uk/3926909790/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Israel'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.contains('Describe your goods in more detail');
    cy.contains('you need to specify an additional 4 digits, known as an additional code. This affects the third country duty.');
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Specify a valid additional code');
    cy.get('.govuk-error-message').contains('Specify a valid additional code');
    cy.get('.govuk-back-link').click();
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.additionalCode('2700');
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'c119'});
    cy.contains('Continue').click();
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('You are importing commodity');
    cy.contains(`from Israel on ${currentDate}.`);
    cy.contains('3926 90 97 90 (2700)');
    cy.contains('Third-country duty');
  });
});
