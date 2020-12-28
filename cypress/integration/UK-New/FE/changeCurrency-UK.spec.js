describe('🇬🇧 💡 🆕  Change Currency should not be visible  - New UK services)',function() {
    //--- HOTT-161 ---

    it('UK - Change Currency should not be visible on main page - The Online Trade Tariff', function () {
        Cypress.config('baseUrl')
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
        cy.contains('Change date')
        cy.contains('Change currency').should('not.exist')
    })
})
