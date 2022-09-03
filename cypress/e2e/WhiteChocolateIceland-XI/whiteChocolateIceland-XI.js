/* eslint-disable new-cap */
Given('i am on Trade Tariff main page', () => {
  cy.visit('/xi/sections');
});
When('i enter commodity code 1704903000 in search tariff box', () => {
  cy.searchForCommodity('1704903000');
});
When('i select Import button', () => {
  cy.get('a#tab_import').click();
});
When('select Iceland from All countries list', () => {
  cy.get('input#trading_partner_country').click().clear().wait(500)
      .type('Iceland').wait(500)
      .type('{enter}');
  //
});
Then('Commodity information for 1704903000 is displayed', () => {
  cy.contains(/Commodity .*1704903000/i);
});
Then('{string} should be shown', (content) => {
  cy.contains(content, {timeout: 500}).should('be.visible');
});
Then('Measures for Iceland should be shown', () => {
  cy.contains('Importing into Northern Ireland').should('be.visible');
});

Then('Third Country duty displayed', () => {
  cy.get('#measure-2051552');
  cy.contains('Third country duty');
  cy.contains('9.10 % + 45.10 EUR / 100 kg MAX 18.90 % + 16.50 EUR / 100 kg');
});
Then('Tariff preference for Iceland is displayed', () => {
  cy.get('#measure-2972448');
  cy.contains('0.00 % + 43.59 EUR / 100 kg MAX 18.90 % + 16.50 EUR / 100 kg');
});

Then('VAT rates are displayed', () => {
  cy.contains('Import VAT and excise');
  cy.contains('20.00 %');
});
