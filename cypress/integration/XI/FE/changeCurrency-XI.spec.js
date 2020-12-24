describe('🇪🇺 🇬🇧 💡 Change Currency should not be visible  - XI ,UK services)',function() {
    //--- HOTT-161 ---

    it('XI - Change Currency should not be visible on main page - The Northern Ireland (EU) Tariff for the XI', function () {
        Cypress.config('baseUrl', Cypress.config('services')['xi'])
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
            .should('be.visible', 'change date')
            .should('not.have.text', 'change currency')
    })

    it('UK - Change Currency should not be visible on main page - The Online Trade Tariff', function () {
        Cypress.config('baseUrl')
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
            .should('be.visible', 'change date')
            .should('not.have.text', 'change currency')
    })
})
