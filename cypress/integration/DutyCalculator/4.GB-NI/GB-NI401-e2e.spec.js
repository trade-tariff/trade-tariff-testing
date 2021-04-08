// 🚫 Trade Remedies - ✅ 0% MFN EU tariff - ✅ Not at Risk - Import Duty 0% 
// Comm Code : 1212210000

describe('| GB-NI401-e2e.spec | GB to NI route 🚎 01 - 🚫 Trade Remedies - ✅ 0% MFN EU tariff - ✅ Not at Risk - Import Duty 0% |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    let country = ["uk","xi"]
    
    for (let i =0;i<country.length;i++){
        console.log(i)

    it(`e2e GB to NI - ${country[i]} `,function(){
        //select future date 
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1212210000`)
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')
    //select United Kingdom as country of Origin       
         cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()

    // Not at Risk , Import duty is 0% - ** Show Results ** 
        cy.contains('There is no import duty to pay')
        cy.contains("There is no import duty to pay when importing goods into Northern Ireland from GB when the EU's third country duty is 0.00%.")
    //Start again  
        cy.wait(100)
        cy.contains('Start again').click()
        cy.contains('When will the goods be imported?')

    
    })
}
})