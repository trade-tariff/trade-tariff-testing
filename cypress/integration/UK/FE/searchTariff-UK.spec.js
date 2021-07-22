describe(' 🇬🇧 💡 🔍  | searchTariff-UK | Search the Tariff - UK |',function() {
    it('UK - Search Commodity by name ', function () {
        cy.visit('/sections')
        //changed on 11/02/2021
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
        //changed on 11/02/2021
        cy.get('.govuk-header__navigation ').contains('Search or browse the Tariff')
        //changed on 11/02/2021
        cy.get('.govuk-label').contains('Search the UK Global Online Tariff')

        cy.get('.js-commodity-picker-select').click().type('gherkins')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(300)
        cy.contains('Search results for ‘gherkins’')
    })

    it('UK - Search Commodity by code ', function () {
        cy.visit('/sections')
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.govuk-label')
            .contains('Search the UK Global Online Tariff')
        cy.get('.js-commodity-picker-select').click().type('3808941000')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(300)
        cy.contains('Commodity information for 3808941000')
    })

    it('UK - Search Commodity by heading code - displays headings page', function () {
        cy.visit('/sections')
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.govuk-label')
            .contains('Search the UK Global Online Tariff')
        cy.get('.js-commodity-picker-select').click().type('38089410')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(300)
        cy.contains('Choose the commodity code below that best matches your goods to see more information')
    })
    it('UK - Search unknown commodity ', function () {
        cy.visit('/sections')
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.govuk-label')
            .contains('Search the UK Global Online Tariff')
        cy.get('.js-commodity-picker-select').click().type('sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf')
        cy.wait(900)
        cy.get('input[name=\'new_search\']').wait(200).click()
        cy.contains('Search results for ‘sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf’')
        cy.contains('There are no results matching your query.')
        cy.get('.govuk-header__link')
            .contains('Search or browse the Tariff').click()
        cy.contains('All sections')
    })
    it('UK - Import tab - text',function(){
        cy.visit('commodities/2009909500#import')
        cy.get('.govuk-heading-m')
            .contains('Measures and restrictions for importing into the UK under the UKGT')
        cy.get('.govuk-label')
            .contains('UK Global Tariff imports from')
    })
    it('UK - Export tab - text',function(){
        cy.visit('commodities/2009909500#export')
        cy.get('.govuk-heading-m')
            .contains('Measures and restrictions for exporting from the UK under the UKGT')
        cy.get('.govuk-label')
            .contains('UK Global Tariff exports to')
    })


})
