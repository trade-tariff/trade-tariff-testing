// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - 🚫  Final use in NI - ✅  Certified as UK Origin  
// comm code : 

describe('| 02b-e2e.spec | GB to NI route 02a - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ✅ Non processing |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e GB to NI ',function(){
        //select future date 
        cy.visit('/0702000007/import-date')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

        //select United Kingdom as country of Origin       
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
         .click().clear().wait(500)
         .type('United Kingdom').wait(500)
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field__option--2')
         .click()
        cy.contains('Continue').click()

        // ✅  Trader Scheme Registered - Yes 
        cy.contains('Are you registered with the UK Trader Scheme?')
        //Select Yes, I am registered with the UK Trader Scheme
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()

        // ✅  Final use in NI - Yes 


        // ✅ Non processing - Yes 
        

    })
})
