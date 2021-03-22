// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - 🚫 Trader Scheme - ✅ Certified as UK origin
// Comm code :0702000007

describe('| GB-NI407-e2e.spec | GB to NI route 🚐 07 - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - 🚫 Trader Scheme - ✅ Certified as UK origin |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e GB to NI ',function(){
        //select future date 
        cy.visit('/import-date?referred_service=uk&commodity_code=0702000007')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        // check URL 

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

        //select United Kingdom as country of Origin       
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
         .click().clear().wait(500)
         .type('United Kingdom').wait(500)
         .click()
        cy.contains('Continue').click()

        // 🚫 Trader Scheme Registered - Yes 
        cy.contains('Are you registered with the UK Trader Scheme?')
        //Select Yes, I am registered with the UK Trader Scheme
        cy.get("div:nth-of-type(2) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()

        // ✅ Certified as UK origin
        //Select Yes, valid Certificate of Origin
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-yes-field").check()
        cy.contains('Continue').click()

        //Duty Page 
        cy.contains('There is no import duty to pay')
        cy.contains('There is no import duty to pay because:')
        cy.contains('You are transporting goods from England, Scotland or Wales to Northern Ireland')
        cy.contains('You are able to take advantage of the preferential tariffs provided by the UK / EU Trade and Co-operation Agreement (TCA) and have a valid Certificate of Origin')
        cy.contains('You may be called upon to provide proof of your membership of the UK Trader Scheme and that your goods are not going to be subject to further processing.')
        cy.contains('Start again').click()
        cy.contains('When will the goods be imported?')

    })
})