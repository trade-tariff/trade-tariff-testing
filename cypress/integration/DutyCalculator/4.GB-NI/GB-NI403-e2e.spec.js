// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - 🚫 Final use in NI - ✅ Certified as UK origin
// Comm code :1701141000

describe('| GB-NI403-e2e.spec | GB to NI route 🚐 03  - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - 🚫 Final use in NI - ✅ Certified as UK origin |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"]
    
    for (let i =0;i<country.length;i++){
        console.log(i)

    it(`e2e GB to NI - ${country[i]}`,function(){
        //select future date 
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1701141000`)
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

        // 🚫 Final use in NI
        cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
        //Select Yes, I am importing this good into Northern Ireland for its sale to, or final use by, end-consumers located in the United Kingdom
        cy.get("div:nth-of-type(2) > input[name='wizard_steps_final_use[final_use]']").check()
        cy.contains('Continue').click()

        // ✅ Certified as UK origin
        //Select Yes, valid Certificate of Origin
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-yes-field").check()
        cy.contains('Continue').click()

        //page validation - no import duty to pay 
        cy.contains('There is no import duty to pay')
        cy.contains('Start again').click()
        cy.contains('When will the goods be imported?')
    })
}
})