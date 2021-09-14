describe('🇪🇺 💡 | mainPage-XI | Main Page ,headings ,sections - (XI version) |', function () {
    //--- HOTT-82 -------------
    //Page Title
    it('XI - Header text - Page- sections - Northern Ireland Online Tariff', function () {
        cy.visit('/xi/sections')
        cy.contains('Northern Ireland Online Tariff')
    })
    //Gov Logo
    it('XI - Header text - GOV.UK logo ', function () {
        cy.visit('/xi/sections')
        cy.get('.govuk-header').should('be.visible', 'GOV.UK')
    })
    //Sub sections in headings
    it('XI - Header text - Page -sections -Sub sections on headings banner ', function () {
        cy.visit('/xi/sections')
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

    it('XI - Sections Page - Forum section removed', function () {
        cy.visit('/xi/sections')
        cy.get('.govuk-header ')
        cy.contains('Forum').should('not.exist')
    })
    it('XI - Heading 2902', function () {
        cy.visit('/xi/headings/2902')
        cy.contains('Choose the commodity code below that best matches your goods to see more information')
    })
    it('XI - Chapter 99 ', function () {
        cy.visit('/xi/chapters/99')
        cy.contains('Choose the heading that best matches your goods')
        cy.contains('Goods delivered to vessels and aircraft').click()
        cy.contains('Choose the commodity code below that best matches your goods to see more information')
    })
    it('XI - Search the Tariff section', function () {
        cy.visit('/xi/sections')
        cy.contains('Search or browse the Tariff').click()
        cy.contains('Search the Northern Ireland Online Tariff')
        cy.searchForCommodity('9919000060')
        cy.contains('Commodity information for 9919000060')
    })
    it('XI - A-Z section', function () {
        cy.visit('/xi/sections')
        cy.get('li:nth-of-type(2) > .govuk-header__link').click()
        cy.contains('A–Z of Classified Goods')
    })
    it('XI - Tools section', function () {
        cy.visit('/xi/sections')
        cy.get('li:nth-of-type(3) > .govuk-header__link').click()
        cy.contains('Certificate, licenses and documents')
        cy.contains('Additional codes')
        cy.contains('Chemicals')
        cy.get('.govuk-list')
            .should('be.visible', 'Search for tariff quotas, including daily updated balances.')
            .should('be.visible', 'Search for certificates, licenses and other document codes.')
            .should('be.visible', 'Search for additional codes. Additional codes are used on the tariff for a number of purposes to help you to classify goods accurately on your customs declaration.')
            .should('be.visible', 'Search the tariff for chemicals by ')
    })

    //HOTT-164
    it('XI - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function () {
        cy.visit('/xi/sections')
        cy.get('.govuk-footer')
        cy.contains('API Documentation')
     //   cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.be.visible')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')
    })
    it('XI - Footnotes tab ', function () {
        cy.visit('/xi/commodities/4101203000')

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

