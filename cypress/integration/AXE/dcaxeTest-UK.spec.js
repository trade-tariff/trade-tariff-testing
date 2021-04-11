
describe.skip('UK 🇬🇧 | Duty Calculator axeTest-UK | Accessibility tests on UK services ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it.only(' DC UK - Main Page ',function(){
        cy.visit('/0702000007/import-date')
        cy.injectAxe()
        cy.checkA11y()
    })
    it(' UK - Chapters page ',function(){
        cy.visit('/0702000007/certificate-of-origin')
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