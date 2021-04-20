
describe('|RoW-GB204-e2e.spec | 🇸🇬 Singapore to 🇬🇧 GB  | 201-e2e.spec | ',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    

    it(`e2e RoW to GB 🇸🇬 Singapore  to 🇬🇧 GB`,function(){
        //select future date 
        cy.visit(`/import-date?referred_service=uk&commodity_code=1701141000`)
        cy.wait(700)
        cy.validDate()
        cy.selectDestination('gb')
        cy.OriginList({value:'Singapore'})
     //   cy.selectOrigin('gb')
     //   cy.traderScheme('no')
    //    cy.certificate('no')
        cy.monetaryValue({monetary:'500.00',shipping:'100.00',cost:'250.00'})
        cy.quantity(null,{tonnes:1,deci:'1',deca:'1'})
        cy.confirmPage()
        cy.dutyPage()

    })

 })