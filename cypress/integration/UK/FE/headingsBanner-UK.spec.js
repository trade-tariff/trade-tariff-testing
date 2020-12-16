describe('Heading  - (UK version)',function() {
    //--- Headings to be changed for UK -------------
    Cypress.config('baseUrl', Cypress.config('services')['uk'])

    //Page Title
    it('The Online Trade Tariff', function () {
        cy.visit('/sections')
        cy.get('.govuk-header').should('be.visible', 'The Online Trade Tariff')
    })
    //Gov Logo
    it('GOV.UK logo ',function (){
        cy.visit('/sections')
        cy.get('.govuk-header').should('be.visible', 'GOV.UK')
    })
    //Sub sections in headings
    it('Sub sections on headings banner ', function () {
        cy.visit('/sections')
        //   cy.get('li:nth-of-type(1) > .govuk-header__link')
        cy.get('.govuk-header ')
        cy.contains('Search')
        cy.contains('Additional code')
        cy.contains('Certificate')
        cy.contains('Footnotes')
        cy.contains('Quotas')
        cy.contains('CAS')
        cy.contains('A-Z')
        cy.contains('Exchange rates')
        cy.contains('Forum')
    })

})