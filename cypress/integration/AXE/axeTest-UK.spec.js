
describe('UK 🇬🇧 | axeTest-UK | Accessibility tests on UK services ',function() {

    Cypress.config('baseUrl')

    it(' UK - Main Page ',function(){
        cy.visit('/sections')
        cy.injectAxe()
        cy.checkA11y()
    })

    it(' UK - Commodity page ',function(){
        cy.visit('/commodities/2002903100')
        cy.injectAxe()
        cy.checkA11y()
    })
    
 
})