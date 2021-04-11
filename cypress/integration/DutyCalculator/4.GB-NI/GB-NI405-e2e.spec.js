 
// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - 🚫  Non processing - ✅ Certified as UK Origin
// Comm code :0702000007

describe('| GB-NI405-e2e.spec | GB to NI route 🚐 05  - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - 🚫  Non processing - ✅ Certified as UK Origin |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"] 
    for (let i =0;i<country.length;i++){
        console.log(i)
    it(`e2e GB to NI - ${country[i]}`,function(){
        //select future date 
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=0702000007`)
        cy.contains('Trade Tariff Duty Calculator')
        cy.validDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        // check URL 

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

        //select United Kingdom as country of Origin       
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()
        
        // ✅  Trader Scheme Registered - Yes 
        cy.contains('Are you registered with the UK Trader Scheme?')
        //Select Yes, I am registered with the UK Trader Scheme
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()

        // ✅  Final use in NI - Yes 
        cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
        //Select Yes, I am importing this good into Northern Ireland for its sale to, or final use by, end-consumers located in the United Kingdom
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_final_use[final_use]']").check()
        cy.contains('Continue').click()


        // 🚫 Non processing - No
        // Select - The goods will be processed for commercial purposes other than those listed above
        cy.get("#wizard-steps-planned-processing-planned-processing-commercial-purposes-field").check()
        cy.contains('Continue').click()

        // ✅ Certified as UK Origin
        cy.contains('Do you have a valid Certificate of Origin?')
        //Select Yes, valid Certificate of Origin
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-yes-field").check()
        cy.contains('Continue').click()
                    
        //Calculate import duties page 
        cy.contains('There is no import duty to pay')
        cy.contains('There is no import duty to pay because:')
        cy.contains('You are transporting goods from England, Scotland or Wales to Northern Ireland')
        cy.contains('You are able to take advantage of the preferential tariffs provided by the UK / EU Trade and Co-operation Agreement (TCA) and have a valid Certificate of Origin')
        cy.contains('You may be called upon to provide proof of your membership of the UK Trader Scheme and that your goods are not going to be subject to further processing.')

        cy.wait(1000)

        // selection is persisted 
        cy.go(-1)
        cy.get("#wizard-steps-certificate-of-origin-certificate-of-origin-yes-field")
            .parent()
            .find('input')
            .should('be.checked')
        
        cy.contains('Continue').click()
        cy.wait(200)
        cy.contains('There is no import duty to pay')
        cy.contains('Start again').click()
        cy.contains('When will the goods be imported?')

    })
}
})