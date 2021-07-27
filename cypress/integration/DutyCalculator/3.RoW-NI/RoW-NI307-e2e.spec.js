// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - Trader Scheme - 🚫 UK Trader Scheme 
describe('| RoW-NI307-e2e.spec | RoW (Argentina) to NI | Additional Codes + Document Codes |', function () {
    //
    it('RoW to NI | add codes + doc codes |', function () {
        cy.visit('/duty-calculator/xi/1516209821/import-date')
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(700)
        cy.otherOriginList({ value: 'Argentina' })
        cy.wait(700)
        //Duties Apply 
        cy.euDutiesApply() 
        //customs value
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //Import Quantity 
        cy.quantity({ tnei: '1000' })
        //Additional Codes
        cy.additionalCode({ uk: 'C999' , xi: 'C496'})
        cy.additionalCode({ xi: 'C999' })
        //Document Codes
        cy.docCode({ uk: 'c990' })
        cy.contains('Continue').click()
        cy.docCode({ uk: 'd017' })
        cy.docCode({ uk: 'd018' })
        cy.contains('Continue').click()
        //VAT Page
        cy.vat('0')
        cy.contains('VAT zero rate')
        cy.contains('Additional code(s)')
        cy.contains('C999, C496, C999')
        cy.contains('Document(s)')
        cy.contains('C990, D017, D018')
        cy.confirmPage()
        cy.dutyPage()
        cy.contains('You are importing commodity 1516 20 98 21 (C999, C496, C999) from Argentina on 31 December 2021.')

    })
})