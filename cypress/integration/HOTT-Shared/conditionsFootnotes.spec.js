describe('UK 🇬🇧 XI 🇪🇺 | conditionsFootnotes | Validate Conditions and Footnotes on commodity page |', function () {
    
    Cypress.config('baseUrl')
    it('Conditions on UK imports',function(){
        cy.visit('/xi/commodities/6403990510/#import')
        cy.contains('UK import controls').click()
        cy.get("table:nth-of-type(4) > tbody > tr:nth-of-type(1) > td:nth-of-type(4) > a[role='button']").click()
        cy.contains('Animal Health Certificate for All countries')
        cy.contains('B: Presentation of a certificate/licence/document')
        cy.get('.close').click()
        cy.contains('PR003').click()
        cy.contains('Animal Health Certificate for All countries')
    })
    it('VAT and excise',function(){
        cy.visit('xi/commodities/9305200010#import')
        cy.contains('VAT and excise').click()
        cy.contains('03020').click()
        cy.contains('Value added tax for All countries')

    })
})