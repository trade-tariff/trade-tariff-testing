//UK measure - Yes
//EU measures - No 

describe('| Row-NI304e.spec.js | 🔼 Delta Route | preferential rates UK and EU  | ', function () {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    it('RoW 🇨🇦 (Canada) - GB', function () {
        cy.visit('xi/0102291010/import-date')
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(100)
        cy.otherOriginList({ value: 'Canada' })
        cy.wait(100)
        //Trader Scheme
        cy.traderScheme('yes')
        // ✅  Final use in NI - Yes 
        cy.finalUseNI('yes')
        //Planned processing - commercial 
        cy.plannedXI('commercial')
        //customs value
        cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })

        //Import Quantity 
        cy.quantity({ dtn: '100'})
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('Option 1: Third-country duty')
        cy.contains('Third-country duty (EU)')
        cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.')
        cy.contains('Option 2: Tariff preference - Canada')
        cy.contains('Tariff preference (UK)')
        cy.contains("UK preferential duties may be applied, as the difference between the UK preferential duty and the EU preferential duty is lower than 3% of the customs value of your trade.")

       
        

    })
})