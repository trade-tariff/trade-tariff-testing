describe('Hide Legal base Column - (XI version) ',function() {
//HOT-58 Suppressing Legal Base Column for XI

    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    // front end
    it('1.Imports measures tab on XI - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#import')
        //   cy.get('.govuk-tabs__panel').should('be.visible', 'Legal base')
        //   cy.get('govuk-tabs__panel').should('not.have.text', 'Legal base')
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })

    it('2.Exports measures tab on XI - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#export')
        cy.wait(1000)
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })
})
