describe(' 🇪🇺 💡 |pageLinks-XI.spec| Terms and Conditions, Cookies ,Privacy links - XI ',function() {
//  HOTT-192
    it('XI - Terms and Conditions-navigates to right UK page ',function() {
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(3) > .govuk-footer__link')
            .contains('Terms and conditions').click()
        cy.title().should('eq', 'Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK')
        cy.get('.govuk-main-wrapper')
            .contains('Terms and conditions')
    })

    it('XI - Cookies -navigates to right XI page',function(){
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(2) > .govuk-footer__link')
            .contains('Cookies').click()
        cy.title().should('eq','Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK')
        cy.get('.govuk-main-wrapper')
            .contains('Cookies')
        cy.get('.govuk-breadcrumbs__list')
            .contains('Home').click()
        cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')

    })
    it('XI - Privacy-navigates to right XI page ',function(){
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link')
            .contains('Privacy').click()
        cy.contains('Privacy notice')
        cy.get('.govuk-breadcrumbs__link').click()
        cy.contains('Northern Ireland Online Tariff')


    })
    //HOTT-166
    it.skip('XI - List of supplementary units and their descriptions in imports to be HIDDEN',function(){
        cy.visit('/xi/commodities/9702000010?currency=EUR#import')
        cy.get('.govuk-tabs__panel')
            .contains('What are the main types of tariffs and charges').click()
        cy.get('span#details-import-supplementary-unit-heading')
            .contains('Supplementary unit').click()
            .contains('Check a list of supplementary units and their descriptions').should('not.exist')

    })
    it('XI - List of supplementary units and their descriptions in exports to be HIDDEN',function(){
        cy.visit('/xi/commodities/9702000010?currency=EUR#export')
        cy.get('span#details-export-heading')
            .contains('What are the main types of tariffs and charges').click()
        cy.get('span#details-export-supplementary-unit-heading')
            .contains('Supplementary unit')
            .click()
            .contains('Check a list of supplementary units and their descriptions').should('not.exist')

    })
    it('XI- Links to Previous and Next Commodity - available',function(){
        cy.visit('/xi/commodities/2801200000')
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


    //The UK has left the EU
    it('XI - The UK has left the EU - Check the new rules for January 2021 ', function () {
        cy.visit('/xi/sections')
        cy.contains('The UK has left the EU')
        cy.contains('Check the new rules for January 2021')
        cy.get('.govuk-footer__navigation .govuk-footer__row:nth-of-type(1) [target]').should('have.attr', 'href', 'https://www.gov.uk/transition') // no page load!

    })

    it('XI - Contact - Ask HMRC for advice on classifying your goods', function () {
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Ask HMRC for advice on classifying your goods')
        cy.get('.govuk-\\!-margin-top-5.govuk-footer__row > div:nth-of-type(1) > .govuk-footer__list > li:nth-of-type(1) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/guidance/ask-hmrc-for-advice-on-classifying-your-goods') // no page load!

    })
    it('XI - Contact - Imports and exports: general enquiries', function () {
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Imports and exports: general enquiries')
        cy.get('.govuk-\\!-margin-top-5.govuk-footer__row > div:nth-of-type(1) > .govuk-footer__list > li:nth-of-type(2) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/government/organisations/hm-revenue-customs/contact/customs-international-trade-and-excise-enquiries') // no page load!

    })
    it('XI - Contact - Feedback', function () {
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Feedback')
        cy.get('.govuk-\\!-margin-top-5.govuk-footer__row > div:nth-of-type(1) > .govuk-footer__list > li:nth-of-type(3) > .govuk-footer__link').should('have.attr', 'href', '/xi/feedback')
    })

    //Help Section

    it('XI - Help - Finding commodity codes for imports or exports',function(){
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Finding commodity codes for imports or exports')
        cy.get('div:nth-of-type(2) > .govuk-footer__list > li:nth-of-type(1) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/guidance/finding-commodity-codes-for-imports-or-exports')
    })
    it('XI - Help - Using the Trade Tariff tool to find a commodity code',function(){
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Using the Trade Tariff tool to find a commodity code')
        cy.get('div:nth-of-type(2) > .govuk-footer__list > li:nth-of-type(2) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/guidance/using-the-trade-tariff-tool-to-find-a-commodity-code')
    })
    it('XI - Help - Import and export',function(){
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Import and export')
        cy.get('div:nth-of-type(2) > .govuk-footer__list > li:nth-of-type(3) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/topic/business-tax/import-export')
    })


    //Related information
    it('XI - Related information - UK Trade Tariff: Volume 1 – background information for importers and exporters',function(){
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__list')
        cy.contains('UK Trade Tariff: Volume 1 – background information for importers and exporters')
        cy.get('div:nth-of-type(3) > .govuk-footer__list > li:nth-of-type(1) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/government/collections/uk-trade-tariff-volume-1')
    })

    it('XI - Related information - UK Trade Tariff: Volume 3 – procedures, codes and declaration entry details',function(){
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__list')
        cy.contains('UK Trade Tariff: Volume 1 – background information for importers and exporters')
        cy.get('div:nth-of-type(3) > .govuk-footer__list > li:nth-of-type(2) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/government/collections/uk-trade-tariff-volume-3')
    })

    it('XI - Related information - API Documentation',function(){
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__list')
        cy.contains('API Documentation')
        cy.get('div:nth-of-type(3) > .govuk-footer__list > li:nth-of-type(3) > .govuk-footer__link').should('have.attr', 'href', 'https://api.trade-tariff.service.gov.uk/#gov-uk-trade-tariff-api')
    })

    // OGL link

    it('XI - Open Government Licence v3.0',function(){
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__meta.govuk-footer__row')
        cy.contains('Open Government Licence v3.0')
        cy.get('span > .govuk-footer__link').should('have.attr', 'href', 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/')
    })

})
