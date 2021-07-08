describe('| dcAdditionalCode | RoW to GB - additional codes |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

 it(`additional code 🇮🇱 | UK |`,function(){
    cy.visit('uk/6307909200/import-date')
    cy.validDate()
    cy.selectDestination('gb')
    cy.originList({value:'Israel'})
    cy.customsValue({monetary:'500.00',shipping:'100.00',cost:'250.00'})
    cy.contains('Describe your goods in more detail')
    cy.contains('To trade this commodity in the United Kingdom, you need to specify an additional 4 digits, known as an additional code. This affects the third country duty.')
    cy.contains('Continue').click()
    cy.get('.govuk-error-summary').contains('There is a problem')
    cy.contains('Specify a valid additional code')
    cy.get('.govuk-error-message').contains('Specify a valid additional code')
    cy.additionalCode({code:'2600'})
    cy.vat('20')
    cy.confirmPage()
    cy.dutyPage()
    cy.contains('Option 1: Third-country duty')
 })
})