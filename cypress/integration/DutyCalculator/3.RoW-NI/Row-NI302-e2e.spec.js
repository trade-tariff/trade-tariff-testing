//to be implemented 
// ✅  Trade Remedies - ℹ️ 
describe('| Row-NI302-e2e.spec | RoW to Northern Ireland ',function(){
    
        Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
        let country = ["uk", "xi"]
        for (let i = 0; i < country.length; i++) {
            it(`WIP - RoW 🇹🇷 to NI ${country[i]}`, function () {
                cy.visit(`${country[i]}/0304829010/import-date`)
                //date
                cy.validDate()
                //destination
                cy.selectDestination('xi')
                //origin
                cy.selectOrigin('other')
                //select country from list 
                cy.otherOriginList({ value: 'Turkey' })
                //Duties apply
                cy.dutiesApply()
                //customs value
                cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
                //additional code
                cy.additionalCode({ code: 'B968' })
                
                cy.confirmPage()
                cy.dutyPage()
                cy.contains('Option 1: Third-country duty')
                cy.contains('Option 2: Tariff preference - Turkey')


    })
}
})