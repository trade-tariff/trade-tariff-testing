describe('🇬🇧 💡 Hide Legal base Column - (UK version) ',function() {
//HOT-58 Suppressing Legal Base Column for UK

        Cypress.config(('services')['baseUrl'])

    // front end
    it('1.Prove that the legal act column has been removed from the import measures tab on UK - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#import')
        //   cy.get('.govuk-tabs__panel').should('be.visible', 'Legal base')
        //   cy.get('govuk-tabs__panel').should('not.have.text', 'Legal base')
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })

    it('2.Prove that the legal act column has been removed from the export measures tab on UK - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#export')
        cy.wait(1000)
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })
})
