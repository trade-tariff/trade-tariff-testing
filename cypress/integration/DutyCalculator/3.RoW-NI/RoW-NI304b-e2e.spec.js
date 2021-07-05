// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - ✅ Measure Units
/* 1509102090 22nd December 2021
***********************************
Case 1 : Δ MFN < 3% - UK Tariffs
Quantity 1.0 
India - GB = £240.00
India - NI = £247.00
Δ MFN = £7.00
***********************************
Case 2 : Δ MFN > 3% - EU Tariffs
Quantity 20.0 - EU Tariffs
India - GB = £240.00
India - NI = £247.00
Δ MFN = £7.00
***********************************
Case 3 : Δ MFN = 3% - UK Tariffs
Quantity 10.0 , Customs Value = £987 
India - GB = £240.00
India - NI = £247.00
Δ MFN = £7.00
*/
describe('| Row-NI304b.spec.js | 🔼 Delta Route | Quantity | Δ MFN < 3% of Import duties = UK import duties apply , Δ MFN > 3% of Import duties = EU import duties apply | ', function () {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    
    it(`RoW - 🇮🇳 (India) to NI  service`, function () {
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

            //Change Quantity to 20 for EU tariff 
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

            //Change Quantity to 10 and Customs Imports value to 987 for EU tariff 
            cy.get('.govuk-back-link').click().wait(200)
            cy.get('div:nth-of-type(8) > .govuk-summary-list__actions > .govuk-link').click()
            //customs value
            cy.customsValue({ monetary: '987.00', shipping: '0.00', cost: '0.00' })

            //Import Quantity 
            cy.quantity({ dtn: '10.0' })
            //VAT Page
            cy.vat('20')
            cy.contains('Value added tax (20.0%)')
            cy.get('.govuk-button').click()
            cy.contains('VAT')
            cy.contains('Standard rate')

            cy.contains('Option 1: Third-country duty')
            cy.contains('Third-country duty (UK)')
            cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.')


        

    })
       
})
