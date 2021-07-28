describe('🇬🇧 💡 | e2eMozzarellaChile-UK | importing Mozzarella 🧀  from Chile 🇨🇱 |', function () {
    it('Search and import cheese from Chile ', function () {
        cy.visit('/sections')
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')

        //'Enter commodity code for Mozzaarella - 0406103010 and search', function () {
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(300)
        cy.title().should('contains', '0406103010')

        //'Commodity information for 0406103010 is displayed', function () {
        cy.get('.govuk-main-wrapper')
            .contains('Commodity information for 0406103010')

        //'Chapter notes is visible', function () {
        cy.get('.govuk-main-wrapper')
        cy.contains('Chapter notes')


        //Select Import button', () => {
        cy.get('a#tab_import').click()
        cy.get('.govuk-main-wrapper')
            .contains('Import measures and restrictions')
        cy.log(cy.title())

        //Select Chile from All countries list', () => {
        cy.get('input#search_country').click().clear().wait(500)
            .type('Chile').wait(500)
            .type('{enter}')
        cy.wait(500)

        //Third country duty  measure has value 154.00 GBP / 100 kg', function () {
        cy.visit('/commodities/0406103010?country=CL#import')
        cy.get('.small-table.measures.govuk-table')
            .contains('154.00 GBP / 100 kg')

        //hott-189 - expand further with otehr commodities and order numbers
        //Preferential tariff quota order No:051924 is visible', function () {
        cy.get('.small-table.measures.govuk-table')
            .contains('Preferential tariff quota')
        cy.get('#measure-20071014')
            .contains('051924').click()
        //  cy.get('[href=\'\\#import-3408148-order-number-094591\']').click()
        cy.get('.tariff-info')
            .contains('Quota 051924')
        cy.get('.close [href]').click()

        //'Footnotes is visible', function () {
        cy.get('.govuk-main-wrapper')
            .contains('Footnotes')
    })
})
