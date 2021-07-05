// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - ✅ Measure Units
// 1509102090 22nd December 2021 
// Multiple Additional Codes 
describe('| Row-NI304c.spec.js | 🔼 Delta Route | Multiple Additional Codes , UK = 2 codes , XI = None | ', function () {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    
    it(`RoW 🇯🇲 (Jamaica) to NI | 🔼 Delta Route |`, function () {
        cy.visit(`xi/6307909200/import-date`)

            //date
            cy.validDate()
            //destination
            cy.selectDestination('xi')
            //origin
            cy.selectOrigin('other')
            //select country from list 
            cy.wait(100)
            cy.otherOriginList({ value: 'Jamaica' })
            cy.wait(100)
            //Trader Scheme
            cy.traderScheme('yes')
            // ✅  Final use in NI - Yes 
            cy.finalUseNI('yes')
            //Planned processing - commercial 
            cy.plannedXI('commercial')
            //customs value
            cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
            //additional codes
            cy.additionalCode({ code: '2600' })
            // Import Quantity 1.0 gives UK tariffs 
            cy.vat('20')
            cy.confirmPage()
            cy.contains('6307 90 92 00 (2600)')
            cy.contains('Option 1: Third-country duty')
            cy.contains('Third-country duty (EU)')
            cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.')

            


        

    })
       
})
