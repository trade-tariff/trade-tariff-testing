
describe('|RoW-GB204-e2e.spec | 🇸🇬 Singapore to 🇬🇧 GB  | 201-e2e.spec | ',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    

    it(`e2e RoW to GB 🇸🇬 Singapore  to 🇬🇧 GB`,function(){
        //select future date 
        cy.visit(`uk/1701141000/import-date`)
       
        cy.wait(700)
        cy.validDate()
        cy.selectDestination('gb')
        cy.OriginList({value:'Singapore'})
        cy.customsValue({monetary:'500.00',shipping:'100.00',cost:'250.00'})
        cy.quantity({tne:'1',dtnr:'1',dap:'1'})
        cy.confirmPage()
        cy.dutyPage()
    
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - Singapore')
        cy.contains('Option 3: Non-preferential quota 057713')
        cy.contains('Option 4: Non-preferential tariff quota under end-use 054320')
    
    })

 })