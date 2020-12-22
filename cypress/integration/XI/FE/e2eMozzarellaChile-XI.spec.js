describe('importing Mozzarella from Chile ',function() {

    it('Navigate to trade tariff page ', function () {

        Cypress.config('baseUrl', Cypress.config('services')['xi'])
        cy.visit('/sections')
    })
    it('enter commodity code for Mozzaarella - 0406103010 and search',function(){
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(1000)
        cy.get('input[name=\'new_search\']').click()
    })

    it('Commodity information for 0406103010 is displayed',function(){
        cy.get('.commodity-header.govuk-heading-l').should('be.visible')
    })

    it('chapter notes is visible',function(){
        cy.get('div:nth-of-type(1) > .govuk-heading-s').should('be.visible')
    })

    it('select Import button',()=> {
        cy.get('a#tab_import').click()
    })

    it('select Chile from All countries list',()=>{
        cy.get('input#import_search_country').click().clear().wait(1000)
            .type('Chile').wait(1000)
            .type('{enter}')
        cy.wait(1000)
    })

    it("measures for Chile",function(){
        cy.get('.small-table > .govuk-table__caption:nth-of-type(1)').should('be.visible')
    })

    it('Third country duty  measure has value 185.20 EUR / 100 kg',function(){
        cy.get('.govuk-table.measures.small-table > tbody > tr:nth-of-type(2) > td:nth-of-type(4)').should('be.visible')
    })

    it('preferential tariff quota order No:091924 is visible',function(){
        cy.get('[href=\'\\#import-3738187-order-number-091924\']').click()
        cy.get('div#popup article > .govuk-table  h2').should('be.visible')
        cy.get('.close [href]').click()

    })
    it('footnotes is visible',function(){
        cy.get('[data-module] [role=\'tabpanel\']:nth-child(3) .small-table .govuk-table__caption').should('be.visible')
        })

})






