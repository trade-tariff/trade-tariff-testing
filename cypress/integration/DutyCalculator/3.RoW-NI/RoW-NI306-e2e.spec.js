 // 🚫 Trade Remedies - 🚫 0% MFN EU tariff - Trader Scheme - 🚫 UK Trader Scheme 
describe('| RoW-NI306-e2e.spec | RoW (Greenland) to Northern Ireland ', function () {
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    it('RoW 🇬🇱 to NI',function(){
        cy.visit('uk/0702000007/import-date')
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(700)
        cy.otherOriginList({ value: 'Greenland' })
        cy.wait(700)
        //Trader Scheme
        cy.traderScheme('no')
        //Duties Apply 
        cy.euDutiesApply()
        //customs value
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //Import Quantity 
        cy.quantity({ dtn: '230.98' })
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - OCTs (Overseas Countries and Territories)')
        cy.contains('Third-country duty (EU)')
        
    })
})