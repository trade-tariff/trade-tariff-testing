describe('🇪🇺 💡 🧀 importing Mozzarella from Chile ',function() {
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('Navigate to trade tariff page ', function () {
        cy.visit('/sections')
            .contains('Trade Tariff: look up commodity codes, duty and VAT rates')
    })
    it('Enter commodity code for Mozzaarella - 0406103010 and search',function(){
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(1000)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(1000)
        cy.log(cy.title())
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
            .type('Chile').wait(3000)
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


    it('Footnotes is visible',function() {
        cy.get('.govuk-main-wrapper')
            .contains('Footnotes')
    })
})






