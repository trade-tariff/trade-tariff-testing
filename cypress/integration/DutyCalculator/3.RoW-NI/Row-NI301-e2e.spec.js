// 🚫 Trade Remedies - ✅ 0% MFN EU tariff
describe('| Row-NI301-e2e.spec |RoW to Northern Ireland ',function(){
    
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
        let country = ["uk", "xi"]
        for (let i = 0; i < country.length; i++) {
    it(`RoW 🇮🇱 to NI ${country[i]}`, function () {
        cy.visit(`${country[i]}/1212210000/import-date`)
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(700)
        cy.otherOriginList({ value: 'Israel' })
        cy.wait(700)
        //customs value
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.vat('20')
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('VAT (UK)')
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - Israel')

        
    })
}
})