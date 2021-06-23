describe('🇪🇺 💡 | mainPage-XI | Main Page ,headings ,sections - (XI version) |',function() {
    //--- HOTT-82 -------------
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    //Page Title
    it('Header text - Page- sections - Northern Ireland Online Tariff', function () {
        cy.visit('/sections')
        cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff')
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
        cy.contains('Search or browse the Tariff')
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

    it('Sections Page - Forum section removed', function () {
        cy.visit('/sections')
        cy.get('.govuk-header ')
        cy.contains('Forum').should('not.exist')
    })
    //--

    

    it('Header text - Page - enter commodity code for Mozzaarella - 0406103010 and search',function(){
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(500)
        cy.get('input[name=\'new_search\']').wait(500).click()
        cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff')
        

    })
    it('Header text - Page - Commodity information for 0406103010 is displayed',function(){
        cy.get('.commodity-header.govuk-heading-l').should('be.visible')
        cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff')
    })
    it('Header text - Page - chapter notes is visible',function(){
        cy.get('div:nth-of-type(1) > .govuk-heading-s').should('be.visible')
        cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff')
    })
    it('Header text - page - select Export button',()=> {
        cy.get('a#tab_export').click()
        cy.get('div#import > .govuk-heading-m').contains('Measures and restrictions for importing goods into Northern Ireland')
        cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff')
    })
    it('Header text - page - select Import button',()=> {
        cy.get('a#tab_import').click()
        cy.get('div#import > .govuk-heading-m').contains('Measures and restrictions for importing goods into Northern Ireland')
        cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff')
    })
    it('Header text - page - select Chile from All countries list',()=>{
        cy.get('input#import_search_country').click().clear().wait(700)
            .type('Chile').wait(700)
            .type('{enter}')
        cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff')
    })
    it('Header text - page - measures for Chile ',function(){
        cy.get('.govuk-tabs__panel')
            .contains('Measures and restrictions for importing goods into Northern Ireland')
        cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff')
    })
    it('Search the Tariff section',function(){
        cy.visit('/sections')
        cy.get('.govuk-header').contains('Search or browse the Tariff').click()
        cy.get('.govuk-main-wrapper')
            .contains('Search the Northern Ireland Online Tariff')
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

    //HOTT-164
    it('Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer')
        cy.contains('API Documentation')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

    })
    it('Remove the link to the EU website for looking up measures, geographical areas and regulations - Terms and Conditions -page link ',function() {
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(3) > .govuk-footer__link').click()
        cy.contains('Summary')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')
    })
    it('Remove the link to the EU website for looking up measures, geographical areas and regulations - Terms and Conditions -URL',function(){
    cy.visit('/terms')
    cy.contains('Summary')
    cy.get('.govuk-template ')
    cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

    })
    it('XI - Footnotes tab ',function(){
        cy.visit('/commodities/4101203000')
     
        cy.contains('TN701').should('not.be.visible')
        //Import Tab
        cy.get('a#tab_import').click()
        cy.contains('TN701').should('not.be.visible')
        //Export Tab
        cy.get('a#tab_export').click()
        cy.contains('TN701').should('not.be.visible')
        //Footnotes Tab 
        cy.get('a#tab_footnotes').click()
        cy.contains('Footnotes for commodity 4101203000')
        cy.contains('TN701')
        //Overview Tab does not contain Footnotes
        cy.get('a#tab_overview').click()
        cy.contains('TN701').should('not.be.visible')

    })


})

