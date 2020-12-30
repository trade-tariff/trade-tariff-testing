describe('Old UK 🇬🇧 💡 importing Mozzarella 🧀  from Chile 🇨🇱 ',function() {
    Cypress.config('baseUrl')

    it('Navigate to trade tariff page ', function () {
        cy.visit('/sections')
            .contains('Trade Tariff: look up commodity codes, duty and VAT rates')
    })
    it('Enter commodity code for Mozzaarella - 0406103010 and search',function(){
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(1000)
        cy.get('input[name=\'new_search\']').click()
        cy.title().should('contains','0406103010')

    })
    it('Commodity information for 0406103010 is displayed',function(){
        cy.get('.govuk-main-wrapper')
            .contains('Commodity information for 0406103010')
    })
    it('Chapter notes is visible',function(){
        cy.get('.govuk-main-wrapper')
            .contains('Chapter notes')
    })

    it('Select Import button',()=> {
        cy.get('a#tab_import').click()
        cy.get('.govuk-main-wrapper')
            .contains('Import measures and restrictions')
        cy.log(cy.title())
    })
    it('Select Chile from All countries list',()=>{
        cy.get('input#import_search_country').click().clear().wait(1000)
            .type('Chile').wait(1000)
            .type('{enter}')
        cy.wait(1000)
    })
    it("Measures for Chile",function(){
        cy.get('.govuk-main-wrapper')
            .contains(' Measures for Chile')
    })

    it('Third country duty  measure has value 185.20 EUR / 100 kg',function(){
        cy.get('.small-table.measures.govuk-table')
            .contains('185.20 EUR / 100 kg')
    })
    it('Preferential tariff quota order No:091924 is visible',function(){
        cy.get('.small-table.measures.govuk-table')
            .contains('Preferential tariff quota')
        cy.get('[href=\'\\#import-3408148-order-number-094591\']').click()
        cy.get('.tariff-info')
            .contains('Information on the availability of this quota can be obtained from the Rural Payments Agency.')
        cy.get('.close [href]').click()
    })
    it('Footnotes is visible',function() {
        cy.get('.govuk-main-wrapper')
            .contains('Footnotes')
    })
})






