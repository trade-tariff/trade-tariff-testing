describe('🇪🇺 💡 | toolsSection-XI |Tools Section - breadcrumbs   - (XI version)',function() {
    // HOTT-94
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('Tools Section in header ', function () {
        cy.visit('/sections')
        cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.contains('Certificate, licenses and documents')
        cy.contains('Additional codes')
        cy.contains('Chemicals')

    })
    it('breadcrumbs - Quotas ', function () {
        cy.visit('/tools')
        // XI not to have quotas 
     //   cy.get('.govuk-list')
     //       .contains('Quotas').click()
     //   cy.contains('Search the Quotas')
     //   cy.get('.govuk-breadcrumbs')
     //       .contains('Quotas')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Home').click()
        cy.get('a#proposition-name')
        .contains('Northern Ireland Online Tariff')
    })

    it('breadcrumbs - Certificates ,licences and documents', function () {
        cy.visit('/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('.govuk-breadcrumbs')
            .contains('Certificate')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Home').click()
        cy.get('a#proposition-name')
        .contains('Northern Ireland Online Tariff')

    })
    it('breadcrumbs - Additional codes', function () {
        cy.visit('/additional_code_search')
        cy.contains('Search by Additional Code')
        cy.get('.govuk-breadcrumbs')
            .contains('Additional codes')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Home').click()
        cy.get('a#proposition-name')
        .contains('Northern Ireland Online Tariff')

    })
    it('breadcrumbs - Chemicals', function () {
        cy.visit('/chemical_search')
        cy.contains('Search by Chemical')
        cy.get('.govuk-breadcrumbs')
            .contains('Chemicals')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Home').click()
        cy.get('a#proposition-name')
        .contains('Northern Ireland Online Tariff')

    })
})