describe(' 🇬🇧  💡 Terms and Conditions, Cookies ,Privacy links - UK ',function() {
//  HOTT-192
    Cypress.config('baseUrl', Cypress.config('services')['uk'])


    it('UK - Terms and Conditions -UK',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(3) > .govuk-footer__link')
            .contains('Terms and conditions').click()
        cy.title().should('eq','The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')
        cy.get('.govuk-main-wrapper')
            .contains('Terms and conditions')

    })

    it('UK - Cookies ',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(2) > .govuk-footer__link')
            .contains('Cookies').click()
        cy.title().should('eq','The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')
        cy.get('.govuk-main-wrapper')
            .contains('Cookies')

    })
    it('UK - Privacy ',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link')
            .contains('Privacy').click()
        cy.get('.direction-ltr')
            .contains('Privacy notice')

    })
    //HOTT-166
    it('UK - List of supplementary units and their descriptions in imports to be HIDDEN',function(){
        cy.visit('/commodities/9702000010?currency=EUR#import')
        cy.get('.govuk-tabs__panel')
            .contains('What are the main types of tariffs and charges').click()
        cy.get('span#details-import-supplementary-unit-heading')
            .contains('Supplementary unit').click()
            .contains('Check a list of supplementary units and their descriptions').should('not.exist')

    })
    it('UK - List of supplementary units and their descriptions in exports to be HIDDEN',function(){
        cy.visit('/commodities/9702000010?currency=EUR#export')
        cy.get('span#details-export-heading')
            .contains('What are the main types of tariffs and charges').click()
        cy.get('span#details-export-supplementary-unit-heading')
            .contains('Supplementary unit')
            .click()
            .contains('Check a list of supplementary units and their descriptions').should('not.exist')

    })

})
