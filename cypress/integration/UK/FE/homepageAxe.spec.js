describe('Home page accessibility test',function(){
    Cypress.config('baseUrl')
    it('should be accessible',function(){
        cy.visit('/sections')
        cy.injectAxe()
        cy.checkA11y()

    })
})