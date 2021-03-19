
describe.skip('UK 🇬🇧 | axeTest-UK | Accessibility tests on UK services ',function() {

    Cypress.config('baseUrl')

    it(' UK - Main Page ',function(){
        cy.visit('/sections')
        cy.injectAxe()
        cy.checkA11y()
    })
    it(' UK - Chapters page ',function(){
        cy.visit('/chapters/01')
        cy.injectAxe()
        cy.checkA11y()
    })
    it(' UK - Headings page ',function(){
        cy.visit('/headings/0101')
        cy.injectAxe()
        cy.checkA11y()
    })


    it(' UK - Commodity page ',function(){
        cy.visit('/commodities/2002903100')
        cy.injectAxe()
        cy.checkA11y()
    })
    
    
 
})