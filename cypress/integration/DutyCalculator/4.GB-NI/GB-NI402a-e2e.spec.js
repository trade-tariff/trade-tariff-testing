// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ✅ Non processing 
// Comm code :1701141000

describe('| GB-NI402a-e2e.spec | GB to NI route 🚐 02  - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ✅ Non processing |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"]
    let pagetitles = ["UK Global Online Tariff","Northern Ireland Online Tariff"]
    
    for (let i =0;i<country.length;i++){
        console.log(i)

    it(`e2e GB to NI 🧁 - ${country[i]}`,function(){
        //select future date 
        cy.visit(`${country[i]}/1701141000/import-date`)
     //   cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1701141000`)
        cy.contains(`${pagetitles[i]}`)
        cy.validDate()
        //NI Destination
        cy.selectDestination('xi')
        //United Kingdom as country of Origin       
        cy.selectOrigin('gb')
        //✅  Trader Scheme Registered - Yes 
        cy.traderScheme('yes')
        //✅  Final use in NI - Yes 
        cy.finalUse('yes')

        //✅ Non processing - Yes - First Option selected 
        //Select - The goods will be sold to an end-user without any processing
        cy.get("#wizard-steps-planned-processing-planned-processing-without-any-processing-field").check()
        cy.contains('Continue').click()
        cy.wait(100)
         // duty page validation 
         cy.contains('There is no import duty to pay')
         cy.contains('There is no import duty to pay because:')
         cy.contains('You are transporting goods from England, Scotland or Wales to Northern Ireland')
         cy.contains('You are a member of the UK Trader Scheme')
         cy.contains('Your import is for sale to, or final use by, end-consumers located in Northern Ireland')
         cy.contains('You do not intend to further process the goods on arrival in Northern Ireland')
         cy.contains('You may be called upon to provide proof of your membership of the UK Trader Scheme and that your goods are not going to be subject to further processing.')

        cy.wait(100)
        // selection is persisted 
        cy.contains('Back').click()
        cy.wait(100)
        cy.get("#wizard-steps-planned-processing-planned-processing-without-any-processing-field")
            .parent()
            .find('input')
            .should('be.checked')

        cy.contains('Continue').click()
        cy.wait(100)
        cy.contains('Start again').click()
        cy.contains('When will the goods be imported?')
    })
}
})