// 🚫 Trade Remedies - ✅ 0% MFN EU tariff - ✅ Not at Risk - Import Duty 0% 
// Comm Code : 1212210000

describe('| 01-e2e.spec | GB to NI route 01 - 🚫 Trade Remedies - ✅ 0% MFN EU tariff - ✅ Not at Risk - Import Duty 0% |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e GB to NI ',function(){
        //select future date 
        cy.visit('/1212210000/import-date')
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

        // Not at Risk , Import duty is 0% - ** Show Results ** 


    })
})