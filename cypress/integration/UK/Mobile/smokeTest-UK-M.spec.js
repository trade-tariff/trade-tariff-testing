describe('🚀 📱 UK 🇬🇧 💡 - smoke test to cover basic functionality on UK services ',function() {

    Cypress.config('baseUrl')


    //Main Page
    it('🚀 UK - Main Page Validation',function(){
        cy.viewport('iphone-x')
        cy.visit('/sections')
        //check header has UK information
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
        cy.title().should('eq', 'UK Global Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK')
        cy.get('.govuk-header ')
            .contains('UK Global Online Tariff')
        //check correct text is displayed on banner as per UK - If they are at risk
        cy.get('.tariff-breadcrumbs')
            .should('have.text','From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland Online Tariff.')
        //Search the tariff section
        cy.get('.govuk-label')
            .contains('Search the UK Global Online Tariff')
        cy.get('.govuk-header__menu-button').click()
            cy.contains('Search or browse the Tariff').click()
        cy.contains('All sections')
    })
    //Legal base tests
    it('🚀 UK - Legal base column suppressed ', function () {
        cy.viewport('iphone-x')
        cy.visit('/commodities/0101210000#import')
        cy.contains('UK Global Online Tariff')
        cy.get('.govuk-tabs__panel')
        cy.contains('Legal base').should('not.exist')
    })
    //switching link works
    it('🚀 UK - Main Page - Switching link to XI available & works', function () {
        cy.viewport('iphone-x')
        cy.visit('/sections')
        cy.get('.govuk-header ')
            .contains('UK Global Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
            .contains('Northern Ireland Online Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')

        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('UK Global Online Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('UK Global Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Northern Ireland Online Tariff')

    })
    // UK not to be in EU country list
    it('🚀 UK - United Kingdom should not be shown in EU country list', function () {
        cy.viewport('iphone-x')
        cy.visit('/commodities/2403991000#import')
        cy.get('.govuk-tabs__panel')
            .contains('European Union (1013)').click()
        cy.get('.govuk-list')
            .contains('European Union (EU)')

        cy.get('#measure-20125860-children-geographical-areas')
            .contains('United Kingdom (GB)').should('not.exist')
    })

    //Licensed quotas
    it('🚀 UK - quota numbers - 054xxx Licensed', function () {
        cy.viewport('iphone-x')
        cy.visit('/commodities/0201100021#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Non preferential tariff quota')
        cy.get('.table-line')
        cy.contains('054002').click()
        cy.get('.tariff-info')
            .contains('Information on the availability of this quota can be obtained from the Rural Payments Agency.')
        cy.get('.close [href]').click()
    })
    // Non Licensed quotas
    it('🚀 UK - quota numbers - 057xxx Non-Licensed', function () {
        cy.viewport('iphone-x')
        cy.visit('/commodities/0201100021#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Preferential tariff quota')
        cy.get('.table-line')
        cy.contains('057300').click()
        cy.get('.tariff-info')
            .contains('Order number 057300')
        cy.get('.close [href]').click()
    })
    //Commodity Search functionality - text search
    it('🚀 UK - Search Commodity by name ', function () {
        cy.viewport('iphone-x')
        cy.visit('/sections')
        //changed on 11/02/2021
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
        //changed on 11/02/2021
        cy.get('.govuk-header__navigation ').contains('Search or browse the Tariff')
        //changed on 11/02/2021
        cy.get('.govuk-label').contains('Search the UK Global Online Tariff')

        cy.get('.js-commodity-picker-select').click().type('gherkins')
        cy.wait(700)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(500)
        cy.contains('Search results for ‘gherkins’')
    })
    //Commodity Search functionality - code search
    it('🚀 UK - Search Commodity by code ', function () {
        cy.viewport('iphone-x')
        cy.visit('/sections')
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.govuk-label')
            .contains('Search the UK Global Online Tariff')
        cy.get('.js-commodity-picker-select').click().type('3808941000')
        cy.wait(700)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(500)
        cy.contains('Commodity information for 3808941000')
    })
    //Country selection - imports
    it('🚀 UK - Country Selection - imports ',function(){
        cy.viewport('iphone-x')
        cy.visit('/commodities/0208909800#import')
        // no XI
        cy.get('input#import_search_country').click().clear().wait(500).type('(XI)').wait(500)
        cy.get("[id='import_search_country__listbox']")
            .contains('No results found')

        //Andorra should be present
        cy.get('input#import_search_country').click().clear().wait(500).type('AD').wait(700)
        cy.get("[id='import_search_country__listbox']")
            .contains('Andorra (AD)')

        // no GB - United Kingdom (excluding Northern Ireland) (GB)
        cy.get('input#import_search_country').click().clear().wait(500).type('(GB)').wait(900)
        cy.get("[id='import_search_country__listbox']")
            .contains('No results found')

        // no XU
        cy.get('input#import_search_country').click().clear().wait(500).type('XU').wait(500)
        cy.get("[id='import_search_country__listbox']")
            //  .contains('United Kingdom (excluding Northern Ireland) (GB)').should('not.exist')
            .contains('No results found')
    })
    //Country selection - exports
    it('🚀 UK - Country Selection - exports ',function(){
        cy.viewport('iphone-x')
        cy.visit('/commodities/0208909800#export')
        // no XI
        cy.get('input#export_search_country').click().clear().wait(500).type('(XI)').wait(500)
        cy.get("[id='export_search_country__listbox']")
            .contains('No results found')

        //Andorra should be present
        cy.get('input#export_search_country').click().clear().wait(500).type('AD').wait(700)
        cy.get("[id='export_search_country__listbox']")
            .contains('Andorra (AD)')

        // no GB - United Kingdom (excluding Northern Ireland) (GB)
        cy.get('input#export_search_country').click().clear().wait(500).type('(GB)').wait(900)
        cy.get("[id='export_search_country__listbox']")
            .contains('No results found')

        // no XU
        cy.get('input#export_search_country').click().clear().wait(500).type('XU').wait(500)
        cy.get("[id='export_search_country__listbox']")
            //  .contains('United Kingdom (excluding Northern Ireland) (GB)').should('not.exist')
            .contains('No results found')

    })
    //Date picker working and persists on UK XI sites
    it('🚀 UK - Change date and check if the data shown is same for both XI and UK', function () {
        cy.viewport('iphone-x')
        cy.visit('/sections')
        cy.get('.js-show.sections-context.text > a[role=\'button\']').click()
        cy.get('input#tariff_date_date')
            .clear()
            .type('07/04/2021')
        cy.get('.fields > a[role=\'button\']')
            .contains('Set date').click()

        cy.contains(' Live animals; animal products')
        cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
            .contains('This tariff is for 7 April 2021')

        cy.get('main#content  nav  a')
            .contains('Northern Ireland Online Tariff').click()

        cy.contains('Online Tariff')
        cy.get('main#content  nav  a')
        cy.contains('Online Tariff').click()

        cy.contains(' Live animals; animal products')
        cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
            .contains('This tariff is for 7 April 2021')
    })
    // UK not in EU country list
    it('🚀 UK - United Kingdom should not be shown in EU country list', function () {
        cy.viewport('iphone-x')
        cy.visit('/commodities/2403991000#import')
        cy.get('.govuk-tabs__panel')
            .contains('European Union (1013)').click()
        cy.get('.govuk-list')
            .contains('European Union (EU)')

        cy.get('#measure-20125860-children-geographical-areas')
            .contains('United Kingdom (GB)').should('not.exist')
    })
    // Quota Search using order number
    it('🚀 UK - Quotas Search - Order Number',function(){
        cy.viewport('iphone-x')
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        cy.get('input#order_number')
            .click().clear().type('057140')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
        cy.get('.govuk-table__row').contains('057140')

    })
    // Quota Search using Commodity number
    it('🚀 UK - Quotas Search - Commodity Code',function(){
        cy.viewport('iphone-x')
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        cy.get('input#goods_nomenclature_item_id')
            .click()
            .clear()
            .type('3920000000')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
        cy.get('.govuk-table__head')
            .contains('Order number')

        cy.get('.quota-results.govuk-table')
        cy.contains('057015').click()
        cy.get('.tariff-info')
            .should('contain','Order Number','057015','Start date','01/01/2021')
        cy.get('.close [href]').click()
    })

})