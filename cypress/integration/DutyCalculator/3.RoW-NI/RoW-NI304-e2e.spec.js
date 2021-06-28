// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - 🚫 Measure Units
/* 9503002110 22nd December 2021 
Nepal - GB = £240.00
Nepal - NI = £247.00
Δ MFN = £7.00
*/
//STOP PAGE for Production

describe('| Row-NI304.spec.js | STOP Page - Δ MFN < 3% of Import duties = UK import duties apply | ', function () {

    Cypress.config('baseUrl', Cypress.config('services')['prod'])
        it('RoW 🇳🇵(Nepal) - GB',function(){
            cy.visit('/commodities/9503002110')
            cy.contains('UK Global Online Tariff')
            cy.get('.govuk-grid-row.import-and-export-boxes .govuk-link').click()
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
            //STOP Page 
            cy.contains("Duties cannot currently be calculated")
            cy.contains("We're currently unable to calculate the duties applicable to your import.")
            cy.contains("The functionality to calculate the duties applicable to your circumstances is under construction.")

        })
})
