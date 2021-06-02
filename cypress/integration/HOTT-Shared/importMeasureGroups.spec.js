describe('UK 🇬🇧 XI 🇪🇺 | measureGrouping- UK & XI | validate if measures are grouped and clickable |', function () {

    Cypress.config('baseUrl')

    //Main Page
    it('Northern Ireland - VAT and Excise , Custom Duties ,Trade remedies ,EU import controls ,UK import controls', function () {
        cy.visit('/xi/commodities/0304829010#import')
        cy.contains('VAT and excise').click()
     //   cy.get('.govuk-link').should('have.attr', 'href','https://staging.trade-tariff.service.gov.uk/xi/commodities/0304829010#customs_duties')
        cy.contains('Customs duties').click()
        cy.contains('Trade remedies').click()
        cy.contains('EU import controls').click()
        cy.contains('UK import controls').click()

    })
    it('United Kingdom - VAT and Excise , Custom Duties ,Trade remedies ,Quotas , import controls', function () {
        cy.visit('/commodities/0304829010#import')
        cy.contains('VAT and excise').click()
        cy.contains('Customs duties').click()
        cy.contains('Trade remedies').click()
        cy.contains('Import controls').click()
        cy.contains('Quotas').click()

    })
})