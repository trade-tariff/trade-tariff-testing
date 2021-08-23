describe(' 🇬🇧 💡 | pageLinks-UK | Terms and Conditions, Cookies ,Privacy links - UK |',function() {
//  HOTT-192
 
//Support Links
    it('UK - Support links - Terms and Conditions -UK', function () {
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(3) > .govuk-footer__link')
            .contains('Terms and conditions').click()
            cy.log(cy.title())
        cy.title().should('eq', 'UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK')
    
        cy.get('.govuk-main-wrapper')
            .contains('Terms and conditions')
    })

    it('UK - Support links - Terms and Conditions - New Content', function () {
        cy.visit('/terms?day=1&month=1&year=2021')
        cy.get('.govuk-main-wrapper')
        cy.contains('Trade Tariff users should be aware that in any case where information in the UK Trade Tariff is at variance with that contained in the appropriate legislation, the latter will represent the correct legal position.')
        cy.contains('Whilst every effort is made to ensure the accuracy of the Tariff on GOV.UK, the onus remains with the user to consult published legislation as necessary and to ensure that the correct duties are paid at importation.')
        cy.contains('In instances where the Customs Authorities are at error, the importer or exporter may still be liable for any additional duty that may be demanded as a result of that error being discovered.')

    })

    it('UK - Support links - Cookies-navigates to right UK page ', function () {
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(2) > .govuk-footer__link')
            .contains('Cookies').click()
            cy.title().should('eq', 'UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK')
            cy.get('.govuk-main-wrapper')
            .contains('Cookies')

    })
    it('UK - Support links - Privacy -navigates to right UK page', function () {
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link')
            .contains('Privacy').click()
        cy.contains('Privacy notice')
        cy.get('.govuk-breadcrumbs__link').click()
        cy.contains('UK Integrated Online Tariff')

    })

    //The UK has left the EU
    it('UK - The UK has left the EU - Check the new rules for January 2021 ', function () {
        cy.visit('/sections')
        cy.contains('The UK has left the EU')
        cy.contains('Check the new rules for January 2021')
        cy.get('.govuk-footer__navigation .govuk-footer__row:nth-of-type(1) [target]').should('have.attr', 'href', 'https://www.gov.uk/transition') // no page load!

    })

    it('UK - Contact - Ask HMRC for advice on classifying your goods', function () {
        cy.visit('/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Ask HMRC for advice on classifying your goods')
        cy.get('.govuk-\\!-margin-top-5.govuk-footer__row > div:nth-of-type(1) > .govuk-footer__list > li:nth-of-type(1) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/guidance/ask-hmrc-for-advice-on-classifying-your-goods') // no page load!

    })
    it('UK - Contact - Imports and exports: general enquiries', function () {
        cy.visit('/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Imports and exports: general enquiries')
        cy.get('.govuk-\\!-margin-top-5.govuk-footer__row > div:nth-of-type(1) > .govuk-footer__list > li:nth-of-type(2) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/government/organisations/hm-revenue-customs/contact/customs-international-trade-and-excise-enquiries') // no page load!

    })
    it('UK - Contact - Feedback', function () {
        cy.visit('/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Feedback')
        cy.get('.govuk-\\!-margin-top-5.govuk-footer__row > div:nth-of-type(1) > .govuk-footer__list > li:nth-of-type(3) > .govuk-footer__link').should('have.attr', 'href', '/feedback')
    })

    //Help Section

   it('UK - Help - Finding commodity codes for imports or exports',function(){
       cy.visit('/sections')
       cy.get('.govuk-footer__list')
       cy.contains('Finding commodity codes for imports or exports')
       cy.get('div:nth-of-type(2) > .govuk-footer__list > li:nth-of-type(1) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/guidance/finding-commodity-codes-for-imports-or-exports')
   })
    it('UK - Help - Using the Trade Tariff tool to find a commodity code',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Using the Trade Tariff tool to find a commodity code')
        cy.get('div:nth-of-type(2) > .govuk-footer__list > li:nth-of-type(2) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/guidance/using-the-trade-tariff-tool-to-find-a-commodity-code')
    })
    it('UK - Help - Import and export',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__list')
        cy.contains('Import and export')
        cy.get('div:nth-of-type(2) > .govuk-footer__list > li:nth-of-type(3) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/topic/business-tax/import-export')
    })

    //Related information
    it('UK - Related information - UK Trade Tariff: Volume 1 – background information for importers and exporters',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__list')
        cy.contains('UK Trade Tariff: Volume 1 – background information for importers and exporters')
        cy.get('div:nth-of-type(3) > .govuk-footer__list > li:nth-of-type(1) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/government/collections/uk-trade-tariff-volume-1')
    })

    it('UK - Related information - UK Trade Tariff: Volume 3 – procedures, codes and declaration entry details',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__list')
        cy.contains('UK Trade Tariff: Volume 1 – background information for importers and exporters')
        cy.get('div:nth-of-type(3) > .govuk-footer__list > li:nth-of-type(2) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/government/collections/uk-trade-tariff-volume-3')
    })

    it('UK - Related information - API Documentation',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__list')
        cy.contains('API Documentation')
        cy.get('div:nth-of-type(3) > .govuk-footer__list > li:nth-of-type(4) > .govuk-footer__link').should('have.attr', 'href', 'https://api.trade-tariff.service.gov.uk/#gov-uk-trade-tariff-api')
    })

    // OGL link
    it('UK - Open Government Licence v3.0',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__meta.govuk-footer__row')
        cy.contains('Open Government Licence v3.0')
        cy.get('span > .govuk-footer__link').should('have.attr', 'href', 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/')
    })

    //import measures page static links
    //What are the main types  of tariff and charges

    //export measures page static links
    //What are the main types  of tariff and charges
    it('UK - Export page links Supplementary Unit ,VAT,Third country duty,Tariff preference',function(){
        cy.visit('/commodities/4421999910#export').wait(500)
        cy.get('span#details-export-heading')
        .contains('What are the main types of tariffs and charges').click()

        //supplementary unit
        cy.get('span#details-export-supplementary-unit-heading')
         .contains('Supplementary unit').click()
        cy.contains('This is used when an additional measurement unit is needed, for example, the weight as well as the quantity of the products. The importer might need to declare this information. The product might not be allowed into the UK if the supplementary unit is not given.')

        //VAT 
        cy.get('span#details-export-vat-heading')
        .contains('Value Added Tax (VAT)').click()
        cy.contains('VAT is a national tax charged in addition to any other duties that apply.')  

        //Third country duty 
        cy.get('span#details-export-third-country-heading')
        .contains('Third country duty').click()
        cy.contains('A third country duty is the duty payable in the absence of any other type of tariff measure.')
        //Tariff preference 
        cy.get('span#details-export-preference-heading')
        .contains('Tariff preference').click()
        cy.contains('A tariff preference means that you pay a lower or nil rate of import duty on your goods. To qualify, goods must meet the rules of origin.')

        // change this validation to href link check 

       cy.get("#details-export-content-0281f1a7-6233-477b-9025-b67a53caef9f")
        .contains('tariff preference').click()
        cy.contains('Pay less Customs Duty on goods from a country with a UK trade agreement')
        cy.go('back')
        cy.contains('Commodity information for 4421999910')

     // 
    })
   
})




