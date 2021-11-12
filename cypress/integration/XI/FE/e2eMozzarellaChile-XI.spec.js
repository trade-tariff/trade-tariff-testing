describe('🇪🇺 💡 🧀  | e2eMozarellaChile-XI | importing Mozzarella from Chile |', function () {
    it('Navigate to trade tariff page ', function () {
        cy.visit('/xi/sections')
            .contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')
        cy.searchForCommodity('0406103010')
        cy.title().should('contains', '0406103010')

        //Commodity information for 0406103010 is displayed',function(){
        cy.get('.govuk-main-wrapper')
            cy.checkCommPage('0406103010')

        //Chapter notes is visible',function(){
        cy.get('.govuk-main-wrapper')
            .contains('Chapter notes')

        //Select Import button',()=> {
        cy.get('a#tab_import').click()
        cy.get('.govuk-main-wrapper')
            .contains('Import measures and restrictions')
        cy.log(cy.title())

        //Select Chile from All countries list',()=>{
        cy.get('input#search_country').click().clear().wait(500)
            .type('Chile').wait(500)
            .type('{enter}')
        cy.wait(500)

        //"Measures for Chile",function(){
        cy.get('.govuk-tabs__panel')
            .contains('Measures and restrictions for importing goods into Northern Ireland')

        //Third country duty  measure has value 185.20 EUR / 100 kg',function(){
        cy.get('.small-table.measures.govuk-table')
            .contains('185.20 EUR / 100 kg')



        //Footnotes is visible',function() {
        cy.get('.govuk-main-wrapper')
            .contains('Footnotes')
    })
})
