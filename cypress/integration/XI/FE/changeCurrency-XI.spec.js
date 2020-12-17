describe('💡 Change Currency should not be visible  - (XI version)',function() {
    //--- HOTT-161 ---
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('Change Currency should not be visible on main page - The Northern Ireland (EU) Tariff for the XI', function () {
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
            .should('be.visible', 'change date')
            .should('not.have.text', 'change currency')

    })
})