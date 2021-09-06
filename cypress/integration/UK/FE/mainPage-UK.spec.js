describe('🇬🇧 💡 | mainPage-UK | Main Page - headers ,sections  - (UK version)|', function () {
    //--- Headings to be changed for UK -------------

    //Page Title
    it('UK - Header text - sections page', function () {
        cy.visit('/sections')
        cy.get('.govuk-header').should('be.visible', 'UK Integrated Online Tariff')
    })
    //Gov Logo
    it('UK - GOV.UK logo ', function () {
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
        cy.contains('Search the UK Integrated Online Tariff')
        cy.contains('Additional code').should('not.exist')
        cy.contains('Certificate').should('not.exist')
        cy.contains('Footnotes').should('not.exist')
        cy.contains('Quotas').should('not.exist')
        cy.contains('CAS').should('not.exist')
        cy.contains('A-Z')
        cy.contains('Exchange rates').should('not.exist')
        cy.contains('Forum').should('not.exist')
    })
    it('UK - Heading 9930', function () {
        cy.visit('/headings/9930')
        cy.contains('Choose the commodity code below that best matches your goods to see more information')
    })
    it('UK - Chapter 99 ', function () {
        cy.visit('/chapters/99')
        cy.contains('Choose the heading that best matches your goods')
        cy.contains('Goods delivered to vessels and aircraft').click()
        cy.contains('Choose the commodity code below that best matches your goods to see more information')
    })
    it('UK - Search the Tariff section', function () {
        cy.visit('/sections')
        cy.contains('Search or browse the Tariff').click()
        cy.contains('Search the UK Integrated Online Tariff')
        cy.searchForCommodity('9919000060')
        cy.contains('Commodity information for 9919000060')
    })
    it('UK - A-Z section', function () {
        cy.visit('/sections')
        cy.get('li:nth-of-type(2) > .govuk-header__link').click()
        cy.contains('A–Z of Classified Goods')

    })
    it('UK - Tools section', function () {
        cy.visit('/sections')
        cy.get('li:nth-of-type(3) > .govuk-header__link').click()
        cy.contains('Certificate, licenses and documents')
        cy.contains('Additional codes')
        cy.contains('Chemicals')
        cy.get('.govuk-list')
            .should('be.visible', 'Search for tariff quotas, including daily updated balances.')
            .should('be.visible', 'Search for certificates, licenses and other document codes.')
            .should('be.visible', 'Search for additional codes. Additional codes are used on the tariff for a number of purposes to help you to classify goods accurately on your customs declaration.')
            .should('be.visible','Search the tariff for footnotes')
            .should('be.visible', 'Search the tariff for chemicals by ')
    })
    //HOTT-164
    it('UK - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function () {
        cy.visit('/sections')
        cy.contains('API Documentation')
        //cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.be.visible')
         cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

    })
    it('UK - Footnotes tab ', function () {
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
