// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - 🚫 Final use in NI - ✅ Certified as UK origin
// Comm code :1701141000

describe('| GB-NI403-e2e.spec | GB to NI route 🚐 03  - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - 🚫 Final use in NI - ✅ Certified as UK origin |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"]
    let pagetitles = ["UK Global Online Tariff","Northern Ireland Online Tariff"]
    
    for (let i =0;i<country.length;i++){
        console.log(i)

    it(`e2e GB to NI - ${country[i]}`,function(){
        //select future date 
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1701141000`)
        cy.contains(`${pagetitles[i]}`)

        //valid Date
        cy.validDate()

        //destination XI
        cy.selectDestination('xi')

        //origin GB
        cy.selectOrigin('gb')

        // ✅  Trader Scheme Registered - Yes 
        cy.traderScheme('yes')

        // 🚫 Final use in NI
        cy.finalUse('no')

        // ✅ Certified as UK origin
        cy.certificate('yes')

        //page validation - no import duty to pay 
        cy.contains('There is no import duty to pay')
        cy.contains('There is no import duty to pay because:')
        cy.contains('You are transporting goods from England, Scotland or Wales to Northern Ireland')
        cy.contains('You are able to take advantage of the preferential tariffs provided by the UK / EU Trade and Co-operation Agreement (TCA) and have a valid Certificate of Origin')
        cy.contains('You may be called upon to provide a copy of your Certificate of Origin to avoid paying duties.')


        cy.contains('Start again').click()
        cy.contains('When will the goods be imported?')
    })
}
})