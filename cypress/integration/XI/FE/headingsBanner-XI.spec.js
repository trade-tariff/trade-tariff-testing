describe('💡 Heading  - (XI version)',function() {
    //--- HOTT-82 -------------
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    //Page Title
    it('Header text - Page- sections - The Northern Ireland (EU) Tariff for the XI', function () {
        cy.visit('/sections')
        cy.get('.govuk-header').should('be.visible', 'The Northern Ireland (EU) Tariff for the XI')
    })
    //Gov Logo
    it('Header text - GOV.UK logo ', function () {
        cy.visit('/sections')
        cy.get('.govuk-header').should('be.visible', 'GOV.UK')
    })
    //Sub sections in headings
    it('Header text - Page -sections -Sub sections on headings banner ', function () {
        cy.visit('/sections')
        cy.get('.govuk-header ')
        cy.contains('Search')
        cy.contains('Additional code')
        cy.contains('Certificate')
        cy.contains('Footnotes')
        cy.contains('Quotas')
        cy.contains('CAS')
        cy.contains('A-Z')
        cy.contains('Exchange rates')
        cy.contains('Forum').should('not.exist')
    })
    //
    it('Header text - Page - enter commodity code for Mozzaarella - 0406103010 and search',function(){
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(1000)
        cy.get('input[name=\'new_search\']').click()
        cy.get('.govuk-header').should('be.visible', 'The Northern Ireland (EU) Tariff for the XI')

    })

    it('Header text - Page - Commodity information for 0406103010 is displayed',function(){
        cy.get('.commodity-header.govuk-heading-l').should('be.visible')
        cy.get('.govuk-header').should('be.visible', 'The Northern Ireland (EU) Tariff for the XI')
    })

    it('Header text - Page - chapter notes is visible',function(){
        cy.get('div:nth-of-type(1) > .govuk-heading-s').should('be.visible')
        cy.get('.govuk-header').should('be.visible', 'The Northern Ireland (EU) Tariff for the XI')
    })
    it('Header text - page - select Export button',()=> {
        cy.get('a#tab_export').click()
        cy.get('div#import > .govuk-heading-m').contains('Import measures and restrictions')
        cy.get('.govuk-header').should('be.visible', 'The Northern Ireland (EU) Tariff for the XI')
    })
    it('Header text - page - select Import button',()=> {
        cy.get('a#tab_import').click()
        cy.get('div#import > .govuk-heading-m').contains('Import measures and restrictions')
        cy.get('.govuk-header').should('be.visible', 'The Northern Ireland (EU) Tariff for the XI')
    })

    it('Header text - page - select Chile from All countries list',()=>{
        cy.get('input#import_search_country').click().clear().wait(1000)
            .type('Chile').wait(1000)
            .type('{enter}')
        cy.get('.govuk-header').should('be.visible', 'The Northern Ireland (EU) Tariff for the XI')

    })
    it.skip('Header text - page - measures for Chile ',function(){
        cy.get('.small-table > .govuk-table__caption:nth-of-type(1)').should('be.visible')
        cy.get('.govuk-header').should('be.visible', 'The Northern Ireland (EU) Tariff for the XI')
    })


})

