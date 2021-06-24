// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - 🚫 Measure Units
/* 9503002110 22nd December 2021 
Nepal - GB = £240.00
Nepal - NI = £247.00
Δ MFN = £7.00
*/
describe('| Row-NI304.spec.js | Δ MFN < 3% of Import duties = GB import duties apply | ', function () {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk", "xi"]
    for (let i = 0; i < country.length; i++) {
        it(`RoW 🇳🇵(Nepal) to NI ${country[i]} service`, function () {
            cy.visit(`${country[i]}/9503002110/import-date`)

            //date
            cy.validDate()
            //destination
            cy.selectDestination('xi')
            //origin
            cy.selectOrigin('other')
            //select country from list 
            cy.wait(300)
            cy.otherOriginList({ value: 'Nepal' })
            cy.wait(300)
            //Trader Scheme
            cy.traderScheme('yes')
            // ✅  Final use in NI - Yes 
            cy.finalUseNI('yes')
            //Planned processing - commercial 
            cy.plannedXI('commercial')
            //customs value
            cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })

            cy.confirmPage()
            cy.dutyPage()
            cy.contains('Option 1: Third-country duty')
            cy.contains('Third-country duty (UK)')
            cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.')
        
        })
    }
        it('RoW 🇳🇵(Nepal) - GB',function(){
            cy.visit(`uk/9503002110/import-date`)

            //date
            cy.validDate()
            //destination
            cy.selectDestination('gb')
            //origin
            //select country from list 
            cy.wait(300)
            cy.originList({ value: 'Nepal' })
            //customs value
            cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
            cy.wait(300)
            //Trader Scheme
            cy.confirmPage()
            cy.dutyPage()
            cy.contains('Option 1: Third-country duty')
            cy.contains('Third-country duty (UK)')
            cy.contains("A ‘Third country’ duty is the tariff charged where there isn’t a trade agreement or a customs union available. It can also be referred to as the Most Favoured Nation (MFN) rate.")

        })
})
