// Retail Price 
describe('| RoW-NI308-e2e.spec | RoW (Norway) to NI | Document Code , Retail Price , Excise Code  |', function () {

    it('🇳🇴 RoW to NI | Document Code , Retail Price , Excise Code |', function () {
        cy.visit('/duty-calculator/xi/2402209000/import-date')
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(700)
        cy.otherOriginList({ value: 'Norway' })
        cy.wait(700)
        //Duties Apply 
        cy.euDutiesApply() 
        //customs value
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //Import Quantity 
        cy.quantity({ ret: '1000' ,mil: '1000'})
        //Document Code
        cy.docCode({ xi: 'y021' }).check()
        cy.contains('Continue').click()
        
        //Excise code 611
        cy.exciseCode('611')
        cy.contains('Document(s)')
        cy.contains('Y021')
        cy.contains('1000 £')
        cy.contains('1000 x 1,000 items')
        cy.contains('Excise additional code')
        cy.contains('611')  
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('You are importing commodity 2402 20 90 00 from Norway on 31 December 2021.')

    })
})