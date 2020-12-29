describe('🇬🇧 💡 🆕  Change Currency should not be visible  - New UK services)',function() {
    //--- HOTT-161 ---
    Cypress.config('baseUrl', Cypress.config('services')['uk'])
    it('🆕 UK - Change Currency should not be visible on main page - The Online Trade Tariff', function () {
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
        cy.contains('Change date')
        cy.contains('Change currency').should('not.exist')
    })
    it('🆕  UK shows GBP currency NOT EUR',function(){
        cy.visit('/commodities/0201100021?day=2&month=1&year=2021#import')
      //  cy.get('#measure-2049567')
        cy.get('.small-table.measures.govuk-table')
        cy.contains('12.00 % + 147.00 GBP / 100 kg')
    })
})
