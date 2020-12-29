describe('🇪🇺 💡 Change Currency should not be visible  - XI services)',function() {
    //--- HOTT-161 ---

    it('XI - Change Currency should not be visible on main page - The Northern Ireland (EU) Tariff for the XI', function () {
        Cypress.config('baseUrl', Cypress.config('services')['xi'])
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
        cy.contains('Change date')
        cy.contains('Change currency').should('not.exist')
    })
    it('URL should not contain EUR',function(){
        cy.visit('/commodities/7202118000?currency=EUR#import')
        cy.log(cy.url())
        cy.log(cy.hash())
        cy.url()
            cy.contains( 'EUR')
    })
})
