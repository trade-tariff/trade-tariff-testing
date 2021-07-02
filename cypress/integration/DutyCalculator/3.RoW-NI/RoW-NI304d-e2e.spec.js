//
describe('| Row-NI304d.spec.js | 🔼 Delta Route | more than one measure amounts on UK and XI service | ', function () {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    it('RoW 🇦🇪 (United Arab Emirates) - GB', function () {
        cy.visit('uk/1701141000/import-date')
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(100)
        cy.otherOriginList({ value: 'United Arab Emirates' })
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
        cy.quantity({ dtnr: '100',tne:'1', dap:'1' })
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('Option 1: Third-country duty')
        cy.contains('Third-country duty (EU)')
        cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.')
        

    })
})