// ✅  Trade Remedies - 
// Comm code : 0303149011

describe('| GB-NI409-e2e.spec | GB to NI route 🚌 09 - ✅  Trade Remedies |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e GB to NI ',function(){
        //select future date 
        cy.visit('/0303149011/import-date')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

        //select United Kingdom as country of Origin
         //select country from list 
       
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
         .click().clear().wait(500)
         .type('United Kingdom').wait(500)
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field__option--2')
         .click()
        cy.contains('Continue').click()

        // Interstitial Message 
        cy.contains('EU duties apply to this import')
        cy.get('.govuk-button').click()

        // At Risk

        // EU duties apply

        //Whats the monetary value?

        //How many kilos/litres ?

        //Confirm

        //Show Results 


    })

})