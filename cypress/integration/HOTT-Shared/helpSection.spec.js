describe('UK 🇬🇧 XI 🇪🇺 | helpSection.spec.js | validate help section |', function () {

    it('Link and page content',function(){

        let pages = ["uk/sections", "xi/sections", "duty-calculator/uk/0702000007/import-date","duty-calculator/xi/0702000007/import-date"]
        for (let i = 0 ; i < pages.length ;i++){

        cy.visit(`${pages[i]}`)
        cy.get('.govuk-header__content').contains('Help').click()
        cy.contains('Online Trade Tariff')
        cy.contains('Help on using the tariff')
        cy.contains('If you would like to leave feedback on this service or request additional help with your trade, then use the following links.')
        cy.contains('Get help or leave feedback')
        cy.contains('Classification guidance')
        cy.contains('CDS guidance, code and procedures')
        cy.contains('CHIEF guidance, code and procedures')
        cy.contains('Rules of origin - glossary of terms')
        //open all 
        cy.contains('Open all').click().wait(300)
        cy.contains('General classification guidance')
        //close all 
        cy.contains('Close all').click().wait(300)
        //home breadcrumb
        cy.contains('Home').click()
        cy.contains('All sections')
        }

    })
    it('Get help or leave feedback', function () {
        cy.visit('/help')
        cy.contains('Get help or leave feedback').click()

        cy.contains('Leave feedback on this service')
        cy.contains('Use this link if you would like to leave feedback or suggestions for improvements to this service.')
        cy.get('.govuk-accordion__section.govuk-accordion__section--expanded > .govuk-accordion__section-content > ul > li:nth-of-type(1) > .govuk-link').should("have.attr", "href", "/feedback")

        cy.contains('Using the Online Trade Tariff to find a commodity code')
        cy.contains('Guidance on the use of this service.')
        cy.get('.govuk-accordion__section.govuk-accordion__section--expanded > .govuk-accordion__section-content > ul > li:nth-of-type(2) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/using-the-trade-tariff-tool-to-find-a-commodity-code")

        cy.contains('Finding commodity codes for imports or exports')
        cy.contains('Find a commodity code to classify your goods and look up duty rates, reliefs and quotas.')
        cy.get('.govuk-accordion__section.govuk-accordion__section--expanded > .govuk-accordion__section-content > ul > li:nth-of-type(3) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/finding-commodity-codes-for-imports-or-exports")

        cy.contains('Apply for an Advance Tariff Ruling')
        cy.contains('Find out how to get a legally binding decision on the commodity code to use when importing into or exporting from Great Britain.')
        cy.get('.govuk-accordion__section.govuk-accordion__section--expanded > .govuk-accordion__section-content > ul > li:nth-of-type(4) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/apply-for-an-advance-tariff-ruling")

        cy.contains('Contact HMRC')
        cy.contains('For general HMRC enquiries.')
        cy.get('.govuk-accordion__section.govuk-accordion__section--expanded > .govuk-accordion__section-content > ul > li:nth-of-type(5) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/government/organisations/hm-revenue-customs/contact/vat-enquiries")
    })
    it('Classification guidance',function(){
        cy.visit('/help')
        cy.contains('Classification guidance').click()
        cy.contains('General classification guidance')
        cy.contains('Get advice on classifying your goods').click()
        cy.contains('Ask HMRC for help classifying your goods')
        cy.go(-1)
    
        cy.contains('Product-specific classification guidance')
        
        cy.contains('Aircraft parts')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(1) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-aircraft-parts-and-accessories")

        cy.contains('Audio and video equipment for import and export')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(2) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-audio-and-video-equipment")

        cy.contains('Ceramics')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(3) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-ceramics")

        cy.contains('Classification of goods')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(4) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/government/collections/classification-of-goods")

        cy.contains('Computers and software')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(5) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-computers-and-software")

        cy.contains('Edible fruits, nuts and peel')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(6) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-edible-fruits-nuts-and-peel")

        cy.contains('Edible vegetables, roots and tubers')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(7) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-edible-vegetables-roots-and-tubers")

        cy.contains('Electric lamps')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(8) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-electric-lamps")

        cy.contains('Footwear')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(9) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-footwear")

        cy.contains('Herbal medicines, tonics and supplements')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(10) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-herbal-medicines-supplements-tonics")

        cy.contains('Iron and Steel')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(11) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-iron-and-steel")

        cy.contains('Leather')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(12) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-leather")

        cy.contains('Monitors')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(13) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-monitors-for-import-and-export")

        cy.contains('Organic chemicals')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(14) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-organic-chemicals")

        cy.contains('Pharmaceutical products')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(15) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-pharmaceutical-products")

        cy.contains('Placebos and comparators')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(16) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-placebos-and-comparators")

        cy.contains('Plastics')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(17) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-plastics")

        cy.contains('Rice')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(18) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-rice")

        cy.contains('Textiles and textile articles')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(19) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-textile-apparel")

        cy.contains('Tobacco and manufactured tobacco substitutes')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(20) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-tobacco")

        cy.contains('Toys, games and sports equipment')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(21) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-toys-games-and-sports-equipment")

        cy.contains('Vehicles, parts and accessories')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(22) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-vehicles")

        cy.contains('Wood')
        cy.get('ul:nth-of-type(2) > li:nth-of-type(23) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/guidance/classifying-wood")

    })
    it('CDS guidance, code and procedures',function(){
        cy.visit('/help')
        cy.contains('CDS guidance, code and procedures').click()
   
        cy.contains('UK Trade Tariff: volume 3 for CDS')
        cy.get('div:nth-of-type(5) > .govuk-accordion__section-content > ul > li:nth-of-type(1) > .govuk-link').should("have.attr", "href","https://www.gov.uk/government/collections/uk-trade-tariff-volume-3-for-cds--2#imports:-guidance-on-completing-an-import-declaration-for-the-customs-declaration-service")
        cy.contains('Find the guidance, codes and procedures to use when importing or exporting goods when using the Customs Declaration Service (CDS).')

        cy.contains('Customs Declaration Completion Requirements for The Northern Ireland Protocol')
        cy.get('div:nth-of-type(5) > .govuk-accordion__section-content > ul > li:nth-of-type(2) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/government/publications/customs-declaration-completion-requirements-for-the-northern-ireland-protocol")
       
        cy.contains('Customs Declaration Completion Requirements for Great Britain')
        cy.get('div:nth-of-type(5) > .govuk-accordion__section-content > ul > li:nth-of-type(3) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/government/publications/customs-declaration-completion-requirements-for-great-britain")
       
        

    })
    it('CHIEF guidance, code and procedures',function(){
        cy.visit('/help')
        cy.contains('CHIEF guidance, code and procedures').click()
        cy.contains('UK Trade Tariff: volume 3 for CHIEF')
        cy.contains('Forms, codes and procedures to use when importing or exporting goods. How to input data onto the Customs Handling of Import and Export Freight (CHIEF) system.')
        cy.get('div:nth-of-type(6) > .govuk-accordion__section-content > ul > li:nth-of-type(1) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/government/collections/uk-trade-tariff-volume-3-for-chief")


        cy.contains('Customs Declaration Completion Requirements for Great Britain')
        cy.get('div:nth-of-type(6) > .govuk-accordion__section-content > ul > li:nth-of-type(2) > .govuk-link').should("have.attr", "href", "https://www.gov.uk/government/publications/customs-declaration-completion-requirements-for-great-britain")
        

    })
    it('Rules of origin - glossary of terms',function(){
        cy.visit('/help')
        cy.contains('Rules of origin - glossary of terms').click()
        cy.contains('Change in tariff chapter (CC)')
        cy.contains('Change in tariff classification (CTC)')
        cy.contains('Change in tariff heading (CTH)')
        cy.contains('Change in tariff subheading (CTSH)')
        cy.contains('Maximum value of non-originating materials (MaxNOM)')
        cy.contains('Ex-works price (EXW)')
        cy.contains('Free on Board (FOB)')
        cy.contains('Accumulation')

     

    })
})
