describe('🇬🇧 💡 | mainPage-UK | Main Page - headers ,sections  - (UK version)|',function() {
    //--- Headings to be changed for UK -------------
  //  Cypress.config('baseUrl', Cypress.config('services')['uk'])
    Cypress.config('baseUrl')

    //Page Title
    it('UK - Header text - sections page', function () {
        cy.visit('/sections')
        cy.get('.govuk-header').should('be.visible', 'UK Global Online Tariff')
    })
    //Gov Logo
    it('UK - GOV.UK logo ',function (){
        cy.visit('/sections')
        cy.get('.govuk-header').should('be.visible', 'GOV.UK')
    })

    it('Sections Page - Forum section removed', function () {
        cy.visit('/sections')
        cy.get('.govuk-header ')
        cy.contains('Forum').should('not.exist')
    })
    //Sub sections in headings
    it('UK - Header text - Sub sections on headings banner ', function () {
        cy.visit('/sections')
        cy.get('.govuk-header ')
        cy.contains('Search the UK Global Online Tariff')
        cy.contains('Additional code').should('not.exist')
        cy.contains('Certificate').should('not.exist')
        cy.contains('Footnotes').should('not.exist')
        cy.contains('Quotas').should('not.exist')
        cy.contains('CAS').should('not.exist')
        cy.contains('A-Z')
        cy.contains('Exchange rates').should('not.exist')
        cy.contains('Forum').should('not.exist')
    })
    it('UK - Header text - Page - enter commodity code for Mozzaarella - 0406103010 and search',function(){
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(600)
        cy.get('input[name=\'new_search\']').click()
        cy.get('.govuk-header').should('be.visible', 'UK Global Online Tariff')
        

    })

    it('UK - Header text - Page - Commodity information for 0406103010 is displayed',function(){
    //    cy.get('.commodity-header.govuk-heading-l').should('be.visible')
        cy.get('.govuk-header').should('be.visible', 'UK Global Online Tariff')   
        cy.get('a#tab_import').click()
        cy.get('input#import_search_country').click().clear().wait(400)
            .type('Chile').wait(600)
            .type('{enter}')
        cy.get('.govuk-header').should('be.visible', 'UK Global Online Tariff')

    })

    it('UK - Search the Tariff section',function(){
        cy.visit('/sections')
        cy.get('.govuk-header').contains('Search or browse the Tariff').click()
        cy.get('.govuk-main-wrapper')
            .contains('Search the UK Global Online Tariff')
    })
    it('UK - A-Z section',function(){
        cy.visit('/sections')
        cy.get('li:nth-of-type(2) > .govuk-header__link').click()
        cy.contains('A–Z of Classified Goods')

    })
    it('UK - Tools section',function(){
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
    it('UK - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer')
        cy.contains('API Documentation')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

    })
    it('UK - Remove the link to the EU website for looking up measures, geographical areas and regulations - Terms and Conditions -page link ',function() {
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(3) > .govuk-footer__link').click()
        cy.contains('Summary')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')
    })
    it('UK - Remove the link to the EU website for looking up measures, geographical areas and regulations - Terms and Conditions -URL',function(){
        cy.visit('/terms')
        cy.contains('Summary')
        cy.get('.govuk-template ')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

    })
    it('UK -  Footnotes tab ', function () {
        cy.visit('/commodities/4101203000')
        cy.get('a#tab_footnotes').click()
        cy.contains('Footnotes for commodity 4101203000')

    })
})