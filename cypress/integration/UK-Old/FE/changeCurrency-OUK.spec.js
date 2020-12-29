describe('🇬🇧 💡 OUK - Change Currency should not be visible - UK services)',function() {
    //--- HOTT-161 ---
    Cypress.config('baseUrl')
    it('UK - Change Currency should not be visible on main page - The Online Trade Tariff', function () {

        cy.visit('/sections')
        cy.get('.govuk-grid-row')
        cy.contains('Change date')
        cy.contains('Change currency').should('not.exist')
    })
    it('UK shows EUR currency NOT GBP',function(){
        cy.visit('/commodities/0201100021?day=2&month=1&year=2021#import')
        cy.get('.small-table.measures.govuk-table')
        cy.contains('12.80 % + 176.80 EUR / 100 kg')
    })
})
