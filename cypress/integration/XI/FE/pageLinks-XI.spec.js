describe(' 🇪🇺 💡 Terms and Conditions, Cookies ,Privacy links - XI ',function() {
//  HOTT-192
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('XI - Terms and Conditions-navigates to right UK page ',function() {
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(3) > .govuk-footer__link')
            .contains('Terms and conditions').click()
        cy.title().should('eq', 'The Northern Ireland (EU) Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')
        cy.get('.govuk-main-wrapper')
            .contains('Terms and conditions')
    })

    it('XI - Cookies -navigates to right UK page',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(2) > .govuk-footer__link')
            .contains('Cookies').click()
        cy.title().should('eq','The Northern Ireland (EU) Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')
        cy.get('.govuk-main-wrapper')
            .contains('Cookies')

    })
    it('XI - Privacy-navigates to right UK page ',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link')
            .contains('Privacy').click()
        cy.get('.direction-ltr')
            .contains('Privacy notice')

    })
    //HOTT-166
    it('XI - List of supplementary units and their descriptions in imports to be HIDDEN',function(){
        cy.visit('/commodities/9702000010?currency=EUR#import')
        cy.get('.govuk-tabs__panel')
            .contains('What are the main types of tariffs and charges').click()
        cy.get('span#details-import-supplementary-unit-heading')
            .contains('Supplementary unit').click()
            .contains('Check a list of supplementary units and their descriptions').should('not.exist')

    })
    it('XI - List of supplementary units and their descriptions in exports to be HIDDEN',function(){
        cy.visit('/commodities/9702000010?currency=EUR#export')
        cy.get('span#details-export-heading')
            .contains('What are the main types of tariffs and charges').click()
        cy.get('span#details-export-supplementary-unit-heading')
            .contains('Supplementary unit')
            .click()
            .contains('Check a list of supplementary units and their descriptions').should('not.exist')

    })
    it('XI- Links to Previous and Next Commodity - available',function(){
        cy.visit('/commodities/2801200000')
        //page contains commodity information
        cy.contains('Commodity information for 2801200000')
        //validate page has previous and next commodity links with commodity name at the bottom
        cy.get('.previous')
            .contains('Previous commodity')
            .contains('Chlorine')
        cy.get('.next')
            .contains('Next commodity')
            .contains('Fluorine')
            //clicking on the Next commodity link navigates to commodity information page
            .click()
        cy.contains('Commodity information for 2801301000')
        cy.get('.next')
            .contains('Next commodity')
            .contains('Bromine')
        cy.get('.previous')
            .contains('Previous commodity')
            .contains('Iodine')
            //clicking on the Previous commodity link navigates back to previous commodity information page
            .click()
        cy.contains('Commodity information for 2801200000')

    })

})
