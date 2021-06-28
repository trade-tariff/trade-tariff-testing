// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - ✅ Measure Units
/* 1509102090 22nd December 2021
Quantity 1.0 - UK Tariffs 
India - GB = £240.00
India - NI = £247.00
Δ MFN = £7.00
************************
Quantity 20.0 - EU Tariffs
India - GB = £240.00
India - NI = £247.00
Δ MFN = £7.00

*/
describe('| Row-NI304.spec.js | Δ MFN < 3% of Import duties = UK import duties apply , Δ MFN > 3% of Import duties = EU import duties apply | ', function () {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    
    it(`RoW - 🇮🇳(India) to NI  service`, function () {
            cy.visit(`xi/1509102090/import-date`)

            //date
            cy.validDate()
            //destination
            cy.selectDestination('xi')
            //origin
            cy.selectOrigin('other')
            //select country from list 
            cy.wait(300)
            cy.otherOriginList({ value: 'India' })
            cy.wait(300)
            //Trader Scheme
            cy.traderScheme('yes')
            // ✅  Final use in NI - Yes 
            cy.finalUseNI('yes')
            //Planned processing - commercial 
            cy.plannedXI('commercial')
            //customs value
            cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
            // Import Quantity 1.0 gives UK tariffs 
            //Import Quantity 
            cy.quantity({ dtn: '1.0' })
            //VAT Page
            cy.vat('20')
            cy.contains('Value added tax (20.0%)')
            cy.get('.govuk-button').click()
            cy.contains('VAT')
            cy.contains('Standard rate')

            cy.contains('Option 1: Third-country duty')
            cy.contains('Third-country duty (UK)')
            cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.')

            //Change Quantity to 250 for EU tariff 
            cy.get('.govuk-back-link').click().wait(200)
            cy.get('div:nth-of-type(9) > .govuk-summary-list__actions > .govuk-link').click()
        //Import Quantity 
            cy.quantity({ dtn: '20.0' })
            //VAT Page
            cy.vat('20')
            cy.contains('Value added tax (20.0%)')
            cy.get('.govuk-button').click()
            cy.contains('VAT')
            cy.contains('Standard rate')

            cy.contains('Option 1: Third-country duty')
            cy.contains('Third-country duty (EU)')
            cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.')

        

    })
       
})
