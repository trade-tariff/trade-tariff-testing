describe('🇪🇺 💡 | toolsSection-XI |Tools Section - breadcrumbs   - (XI version)', function () {
    // HOTT-94
    it('Tools Section in header ', function () {
        cy.visit('/xi/sections')
        cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.contains('Certificate, licenses and documents')
        cy.contains('Additional codes')
        cy.contains('Chemicals')

    })
    it('breadcrumbs - No Quotas ', function () {
        cy.visit('/xi/tools')
        // XI not to have quotas 
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Home').click()
        cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')
    })

    it('breadcrumbs - Certificates ,licences and documents', function () {
        cy.visit('/xi/certificate_search')
        cy.contains('Search by Certificate')
        cy.get('.govuk-breadcrumbs')
            .contains('Certificate')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Home').click()
        cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')

    })
    it('breadcrumbs - Additional codes', function () {
        cy.visit('/xi/additional_code_search')
        cy.contains('Search by Additional Code')
        cy.get('.govuk-breadcrumbs')
            .contains('Additional codes')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Home').click()
        cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')

    })
    it('breadcrumbs - Chemicals', function () {
        cy.visit('/xi/chemical_search')
        cy.contains('Search by Chemical')
        cy.get('.govuk-breadcrumbs')
            .contains('Chemicals')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Tools').click()
        cy.contains('Tariff tools')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Home').click()
        cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')

    })
})
