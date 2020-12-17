describe('Testing routing mechanism for XI/UK/baseline',function(){
    it('routing dev-UK-OLD',function(){
        cy.visit(Cypress.env('baseUrl','/commodities/0101210000#import'))
        //validate if the url is landing on right page
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })
    it('routing dev-XI',function(){
        cy.visit(Cypress.env('xi','/commodities/0101210000#import'))

        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })
})
