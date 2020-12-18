describe(' 🇬🇧 💡 Title tags ,page title in browser tab - UK service ',function() {
// - HOTT- 170
     Cypress.config('baseUrl')
   // Cypress.config('baseUrl', 'https://www.trade-tariff.service.gov.uk')

    it.skip('title tag ', function () {
        cy.visit('/sections')
      //  cy.hash().should('include', '/uk')
       // cy.title().should('eq', 'Trade Tariff: look up commodity codes, duty and VAT rates')
        cy.contains('All sections', {timeout: 2000}).should('be.visible')

    })
})