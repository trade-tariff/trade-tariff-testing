describe('🧮 | dcFinalUse | Final Use - page |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Page Validation', function () {
        cy.visit('/0702000007/final-use')
        //main page title
        cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
        
        cy.contains('Yes, I am importing this good into Northern Ireland for its sale to, or final use by, end-consumers located in the United Kingdom')
        cy.contains('No, this import will not be for final use in the United Kingdom')
        
    })
     //error messages - nothing is entered 
     it('No Values Entered',function(){
        cy.visit('/0702000007/final-use')
        //main page title 
        cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Select one of the two options')
        cy.get('#wizard-steps-final-use-final-use-error')
            .contains('Select one of the two options')
  
    })
    it('User makes a selection',function(){
        cy.visit('/0702000007/final-use')
        //main page title
        cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
        //Select eYes, I am importing this good into Northern Ireland for its sale to, or final use by, end-consumers located in the United Kingdom
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_final_use[final_use]']").check()
        cy.contains('Continue').click()

        // selection is persisted 
        cy.go(-1)
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_final_use[final_use]']")
            .parent()
            .find('input')
            .should('be.checked')

        //Select No, this import will not be for final use in the United Kingdom
        cy.get("div:nth-of-type(2) > input[name='wizard_steps_final_use[final_use]']").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.go(-1)
        cy.get("div:nth-of-type(2) > input[name='wizard_steps_final_use[final_use]']")
            .parent()
            .find('input')
            .should('be.checked')


    })

   
    it('Explore the Topic : Other static page links',function(){
        cy.visit('/0702000007/final-use')
        //main page title
        cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
        
        cy.contains('Explore the topic')
        cy.contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU').click()
   
        //https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland-from-1-january-2021
        cy.contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU')
        cy.go(-1)
        cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')


    })
})