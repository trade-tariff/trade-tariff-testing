describe('Hide Legal base Column - (XI version) *** Change URLs *** ',function() {
//HOT-58 Suppressing Legal Base Column for XI
    Cypress.config('baseUrl','http://localhost:3001')
    it('1.Imports measures tab on XI - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#import')
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })
    it('2.Exports measures tab on XI - commodity 0101210000', function () {
        cy.visit('commodities/0101210000#export')
        cy.wait(1000)
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })
})
