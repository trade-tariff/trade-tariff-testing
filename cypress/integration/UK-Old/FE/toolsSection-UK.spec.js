describe('🇬🇧 💡 Tools Section - breadcrumbs   - (UK version)',function() {
    // HOTT-94
    Cypress.config('baseUrl')

    it('Tools Section in header ', function () {
        cy.visit('/sections')
        cy.get('.govuk-header').should('be.visible', 'The Online Trade Tariff')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.contains('Certificate, licenses and documents')
        cy.contains('Additional codes')
        cy.contains('Chemicals')

    })
    it('breadcrumbs - Quotas ', function () {
        cy.visit('/tools')
        cy.get('.govuk-list')
            .contains('Quotas').click()
        cy.contains('Search the Quotas')
        cy.get('.govuk-breadcrumbs')
            .contains('Quotas')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Home').click()
        cy.contains('Trade Tariff: look up commodity codes, duty and VAT rates')
    })

    it('breadcrumbs - Certificates ,licences and documents', function () {
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('.govuk-breadcrumbs')
            .contains('Certificate')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')

    })
    it('breadcrumbs - Additional codes', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')
        cy.get('.govuk-breadcrumbs')
            .contains('Additional codes')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')

    })
    it('breadcrumbs - Chemicals', function () {
        cy.visit('/chemical_search')
        cy.contains('Search by Chemical')
        cy.get('.govuk-breadcrumbs')
            .contains('Chemicals')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')

    })
})