describe(' 🇬🇧 💡 🔍 Search the Tariff - UK ',function() {

    Cypress.config('baseUrl')

    it('UK - Search Commodity by name ', function () {
        cy.visit('/sections')
        cy.contains('Trade Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.js-commodity-picker-select').click().type('gherkins')
        cy.wait(3000)
        cy.get('input[name=\'new_search\']').click()
        cy.contains('Search results for ‘gherkins’')
    })

    it('UK - Search Commodity by code ', function () {
        cy.visit('/sections')
        cy.contains('Trade Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.js-commodity-picker-select').click().type('3808941000')
        cy.wait(3000)
        cy.get('input[name=\'new_search\']').click()
        cy.contains('Commodity information for 3808941000')
    })


    it('UK - Search Commodity by heading code - displays headings page', function () {
        cy.visit('/sections')
        cy.contains('Trade Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.js-commodity-picker-select').click().type('38089410')
        cy.wait(3000)
        cy.get('input[name=\'new_search\']').click()
        cy.contains('Choose the commodity code below that best matches your goods to see more information')
    })
    it('UK - Search unknown commodity ', function () {
        cy.visit('/sections')
        cy.contains('Trade Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.js-commodity-picker-select').click().type('sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf')
        cy.wait(3000)
        cy.get('input[name=\'new_search\']').click()
        cy.contains('Search results for ‘sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf’')
        cy.contains('There are no results matching your query.')
        cy.get('.govuk-header__link')
            .contains('Search the Tariff').click()
        cy.contains('All sections')
    })


})