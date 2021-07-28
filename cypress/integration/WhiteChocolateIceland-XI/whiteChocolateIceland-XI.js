Given('i am on Trade Tariff main page', () => {
  cy.visit('/xi/sections')
})
When('i enter commodity code 1704903000 in search tariff box', () => {
  cy.get('.js-commodity-picker-select.js-show  input#q').click().type('1704903000')
  cy.wait(3000)
  cy.get('input[name=\'new_search\']').click()
})
When('i select Import button', () => {
  cy.get('a#tab_import').click()
})
When('select Iceland from All countries list', () => {
  cy.get('input#search_country').click().clear().wait(1000)
    .type('Iceland').wait(1000)
    .type('{enter}')
  cy.wait(2000)
})
Then('Commodity information for 1704903000 is displayed', () => {
  cy.get('.commodity-header.govuk-heading-l').contains('Commodity information for 1704903000').should('be.visible')

})
Then('{string} should be shown', (content) => {
  cy.contains(content, { timeout: 10000 }).should('be.visible')
})
Then('Measures for Iceland should be shown', () => {
  cy.contains('Measures for Iceland').should('be.visible')
})

Then('Third Country duty displayed', () => {
  cy.get('#measure-2051552')
  cy.contains('Third country duty')
  cy.contains('9.10 % + 45.10 EUR / 100 kg MAX 18.90 % + 16.50 EUR / 100 kg')
})
Then('Tariff preference for Iceland is displayed', () => {
  cy.get('#measure-2972448')
  cy.contains('0.00 % + 43.59 EUR / 100 kg MAX 18.90 % + 16.50 EUR / 100 kg')
})

Then('VAT rates are displayed', () => {
  cy.get('.VTS')
  // cy.get('#measure--597452')
  cy.contains('VAT standard rate')
  cy.contains('20.00 %')
  cy.get('.VTZ')
  // cy.get('#measure--597453')
  cy.contains('VAT zero rate')
  cy.contains('0.00 %')
})
