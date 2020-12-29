describe('🇪🇺 💡 Change Currency should not be visible  - XI services)',function() {
    //--- HOTT-161 ---

    it('XI - Change Currency should not be visible on main page - The Northern Ireland (EU) Tariff for the XI', function () {
        Cypress.config('baseUrl', Cypress.config('services')['xi'])
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
        cy.contains('Change date')
        cy.contains('Change currency').should('not.exist')
    })
    it('XI shows EUR currency NOT GBP',function(){
        cy.visit('/commodities/0201100021?day=2&month=1&year=2021#import')

        cy.get('.small-table.measures.govuk-table')
        cy.contains('12.80 % + 176.80 EUR / 100 kg')
    })
})
