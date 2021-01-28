describe('🇪🇺 💡 Hide Legal base Column , Binding Tariff information link- (XI version) ',function() {
//HOT-58 Suppressing Legal Base Column for XI

    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    // front end
    it('1.Prove that the legal base column has been removed from the import measures tab on XI - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Legal base').should('not.exist')
    })

    it('2.Prove that the legal base column has been removed from the export measures tab on XI - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#export')
        cy.wait(500)
        cy.contains('Legal base').should('not.exist')
    })

    it('3.Binding Tariff Information link - not visible',function(){
        cy.visit('commodities/0102290500')
        cy.get('.govuk-tabs__panel')
        cy.contains('Binding tariff information').should('not.exist')
    })
})
