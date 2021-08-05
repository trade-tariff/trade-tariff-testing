
// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - 🚫  Non processing - ✅ Certified as UK Origin
// Comm code :0702000007

describe('| GB-NI405-e2e.spec | GB to NI route 🚐 05  - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - 🚫  Non processing - ✅ Certified as UK Origin |', function () {
    //
    let country = ["uk"]
    let pagetitles = ["UK Global Online Tariff", "Northern Ireland Online Tariff"]

    for (let i = 0; i < country.length; i++) {
        console.log(i)
        it(`e2e GB to NI - ${country[i]}`, function () {
            //select future date 
            cy.visit(`/duty-calculator/${country[i]}/0702000007/import-date`)
            //   cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=0702000007`)
            cy.contains(`${pagetitles[i]}`)

            //date
            cy.validDate()
            //destination
            cy.selectDestination('xi')
            //origin
            cy.selectOrigin('gb')
            // ✅ Trader Scheme Registered - Yes 
            cy.traderScheme('yes')

            // ✅  Final use in NI - Yes 
            cy.finalUse('yes')


            // 🚫 Non processing - No
            // Select - The goods will be processed for commercial purposes other than those listed above
            cy.get("#steps-planned-processing-planned-processing-commercial-purposes-field").check()
            cy.contains('Continue').click()

            // ✅ Certified as UK Origin
            cy.certificate('yes')

            //Calculate import duties page 
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
