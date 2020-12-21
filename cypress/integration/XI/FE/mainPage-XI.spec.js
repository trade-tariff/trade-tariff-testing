describe('🇪🇺 💡 Main Page ,headings ,sections   - (XI version)',function() {
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
        cy.contains('Search the Tariff')
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Additional code').should('not.exist')
        cy.contains('Certificate').should('not.exist')
        cy.contains('Footnotes').should('not.exist')
        cy.contains('Quotas').should('not.exist')
        cy.contains('CAS').should('not.exist')
        cy.contains('Exchange rates').should('not.exist')
        cy.contains('Forum').should('not.exist')
    })

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
    it('Search the Tariff section',function(){
        cy.visit('/sections')
        cy.get('li:nth-of-type(1) > .govuk-header__link').click()
        cy.get('tariff-search sections-context')
            .contains('Search the tariff')

    })
    it('A-Z section',function(){
        cy.visit('/sections')
        cy.get('li:nth-of-type(2) > .govuk-header__link').click()
        cy.contains('A–Z of Classified Goods')

    })
    it('Tools section',function(){
        cy.visit('/sections')
        cy.get('li:nth-of-type(3) > .govuk-header__link').click()
        cy.contains('Certificate, licenses and documents')
        cy.contains('Additional codes')
        cy.contains('Chemicals')
        cy.get('.govuk-list')
            .should('be.visible','Search for tariff quotas, including daily updated balances.')
            .should('be.visible','Search for certificates, licenses and other document codes.')
            .should('be.visible','Search for additional codes. Additional codes are used on the tariff for a number of purposes to help you to classify goods accurately on your customs declaration.')
            .should('be.visible','Search the tariff for chemicals by ')
    })

})

