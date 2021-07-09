// ✅  Trade Remedies - ℹ️ 
describe('| Row-NI302-e2e.spec | RoW to Northern Ireland ', function () {

    //
    let country = ["uk"]
    for (let i = 0; i < country.length; i++) {
        it(`RoW 🇹🇷 to NI ${country[i]}`, function () {
            cy.visit(`/duty-calculator/${country[i]}/0304829010/import-date`)
            //date
            cy.validDate()
            //destination
            cy.selectDestination('xi')
            //origin
            cy.selectOrigin('other')
            //select country from list 
            cy.otherOriginList({ value: 'Turkey' })
            //Duties apply
            cy.euDutiesApply()
            //customs value
            cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
            //additional code
            cy.additionalCode({ uk: 'B977', xi: 'B966' })
            
          

            cy.confirmPage()
            cy.dutyPage()
            cy.contains('Option 1: Third-country duty')
            cy.contains('Option 2: Tariff preference - Turkey')


        })
    }
})