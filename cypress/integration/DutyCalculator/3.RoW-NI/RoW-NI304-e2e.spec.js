 // 🚫 Trade Remedies - 🚫 0% MFN EU tariff - Trader Scheme - ✅  Trader Scheme - 🚫 Final use in NI
describe('| RoW-NI304-e2e.spec |🚫 Trade Remedies - 🚫 0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - 🚫 Processing|', function () {
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    it('RoW 🇲🇦 (Morocco) to Northern Ireland',function(){
        cy.visit('uk/0702000007/import-date')
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(300)
        cy.otherOriginList({ value: 'Morocco' })
        cy.wait(300)
        //Trader Scheme
        cy.traderScheme('yes')
        // ✅  Final use in NI - Yes 
        cy.finalUseNI('yes')
        //Planned processing - commercial 
        cy.plannedXI('commercial')
        cy.contains('Duties cannot currently be calculated')
        cy.contains("We're currently unable to calculate the duties applicable to your import.")
        cy.contains("The functionality to calculate the duties applicable to your circumstances is under construction.")
        cy.contains("Find out more about trading and moving goods in and out of Northern Ireland.")
        cy.get("a[target='_blank']").should('have.attr', 'href', "https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland")

    /*
        //Duties Apply 
        cy.euDutiesApply()
        //customs value
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //Import Quantity 
        cy.quantity({ dtn: '230.98' })
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - Morocco')
 */       
    })
})