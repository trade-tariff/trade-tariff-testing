
describe('|RoW-GB206-e2e.spec | additional codes |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    
    let addCodes = ['C491','C490','C493','C497']

    it(`e2e RoW to GB 🛢️ 🇦🇷 - One additional code / Changing code`,function(){
       
        cy.visit(`uk/1516209821/import-date`)
       
        cy.wait(200)
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({value:'Argentina'})
        cy.customsValue({monetary:'500.00',shipping:'100.00',cost:'250.00'})
        cy.quantity({tnei:'1'})
        cy.additionalCode({code:'C999'})
        cy.confirmPage()
        cy.dutyPage()
    
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms')
        cy.contains(`1516 20 98 21 (C999)`)
        cy.contains(`Import duty (C999)`)

        for (let i =0 ;i < addCodes.length;i++){
        cy.get('.govuk-back-link').click().wait(700)
        cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click()
        cy.additionalCode({code:`${addCodes[i]}`})
        cy.confirmPage()
        cy.dutyPage()
        cy.contains(`1516 20 98 21 (${addCodes[i]})`)
        }
    })
    it(`e2e RoW to GB 🛢️ 🇨🇦 - More than one additional code`,function(){
       
        cy.visit(`uk/1516209821/import-date`)
        cy.wait(700)
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({value:'Canada'})
        cy.customsValue({monetary:'500.00',shipping:'100.00',cost:'250.00'})
        cy.quantity({tnei:'1'})
        cy.additionalCode({code:'B999'})
        cy.additionalCode({code:'B999'})
        cy.confirmPage()
        cy.dutyPage()
    
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - Canada')
        cy.contains('Option 3: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms')
        cy.contains(`1516 20 98 21 (B999, B999)`)
        cy.contains(`Import duty (B999)`)
        cy.contains('Definitive anti-dumping duty (UK)')
        cy.contains('Definitive countervailing duty (UK)')
    })

 })