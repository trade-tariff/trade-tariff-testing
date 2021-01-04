describe('🚀  🆕  UK 🇬🇧 💡 - smoke test to cover basic functionality on UK services ',function() {
    // Cypress.config('baseUrl', Cypress.config('services')['uk'])
    Cypress.config('baseUrl')

    it('🚀 UK Routing - Correct page + Legal base does not exist ', function () {
        cy.viewport('iphone-x')
        cy.visit('/commodities/0101210000#import')
        cy.contains('The Online Trade Tariff')
        cy.get('.govuk-tabs__panel')
        cy.contains('Legal base').should('not.exist')
    })
    it('🚀 UK - Header Section-Sub sections ', function () {
        cy.viewport('iphone-x')
        cy.visit('/sections')
        cy.title().should('eq', 'The Online Trade Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')

        cy.get('.govuk-header ')
        cy.contains('Search the Tariff')
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
    it('🚀 UK - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function () {
        cy.viewport('iphone-x')
        cy.visit('/sections')
        cy.get('.govuk-footer')
        cy.contains('API Documentation')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

    })
    it('🚀 UK - Sections Page - Switching link to XI available & works', function () {
        cy.viewport('iphone-x')
        cy.visit('/sections')
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')

        //check correct text is displayed on banner as per UK - If they are at risk
        cy.get('.tariff-breadcrumbs')
            .should('have.text', 'From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland (EU) Tariff.')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
            .contains('Northern Ireland (EU) Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')

        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Online Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Northern Ireland (EU) Tariff')

    })
    it('🚀 UK - Sections Page - Guidance Link and Page link', function () {
        cy.viewport('iphone-x')
        cy.visit('/sections')
        // Guidance link on UK page
        cy.get('.govuk-main-wrapper')
            .contains('if your goods are not ‘at risk’ of onward movement to the EU').click()
        cy.get('.govuk-grid-row')
            .contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU')
        cy.log(cy.title())
        cy.title().should('eq', 'Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU - GOV.UK')
        //return to UK page
        cy.go('back')
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')

    })

    it('🚀 UK - Change date and check if the data shown is same for both XI and UK', function () {
        cy.viewport('iphone-x')
        cy.visit('/sections')
        cy.get('.js-show.sections-context.text > a[role=\'button\']').click()
        cy.get('input#tariff_date_date')
            .clear()
            .type('07/01/2021')
        cy.get('.fields > a[role=\'button\']')
            .contains('Set date').click()

        cy.contains(' Live animals; animal products')
        cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
            .contains('This tariff is for 7 January 2021')

        cy.get('main#content  nav  a')
            .contains('Northern Ireland (EU) Tariff').click()

        cy.contains('Online Tariff')
        cy.get('main#content  nav  a')
        cy.contains('Online Tariff').click()

        cy.contains(' Live animals; animal products')
        cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
            .contains('This tariff is for 7 January 2021')

    })
    it('🚀 UK - Change Currency should not be visible on main page - The Online Trade Tariff', function () {
        cy.viewport('iphone-x')
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
        cy.contains('Change date')
        cy.contains('Change currency').should('not.exist')
    })
    it('🚀 UK - United Kingdom should not be shown in EU country list', function () {
        cy.viewport('iphone-x')
        cy.visit('/commodities/2403991000?day=3&month=1&year=2021#import')
        cy.get('.govuk-tabs__panel')
            .contains('European Union (1013)').click()
        cy.get('.govuk-list')
            .contains('European Union (EU)')
        //  cy.get('.govuk-list')
        cy.get('#measure-20125860-children-geographical-areas')
            .contains('United Kingdom (GB)').should('not.exist')

    })


    it('🚀 UK Switching link banner on sections page for Jan 1 2021',function(){
        cy.viewport('iphone-x')
        cy.visit('/sections?day=11&month=12&year=2020')
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')

        //check correct text is displayed on banner as per UK - If they are at risk
        cy.get('.tariff-breadcrumbs')
            .should('have.text','From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland (EU) Tariff.')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
            .contains('Northern Ireland (EU) Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')

        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Online Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Northern Ireland (EU) Tariff')

        // Guidance link on UK page
        cy.get('.govuk-main-wrapper')
            .contains('if your goods are not ‘at risk’ of onward movement to the EU').click()
        cy.get('.govuk-grid-row')
            .contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU ')
        cy.log(cy.title())
        cy.title().should('eq','Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU - GOV.UK')
        //return to UK page
        cy.go('back')
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')

    })

    it('🚀 UK quota numbers post 1 Jan 2021 -054xxx Licensed', function () {
        cy.viewport('iphone-x')
        cy.visit('/commodities/0201100021?day=2&month=1&year=2021#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Non preferential tariff quota')
        cy.get('.table-line')
        cy.contains('054002').click()
        cy.get('.tariff-info')
            .contains('Information on the availability of this quota can be obtained from the Rural Payments Agency.')
        cy.get('.close [href]').click()
    })

    it('🚀 UK quota numbers post 1 Jan 2021 -052xxx Non-Licensed', function () {
        cy.viewport('iphone-x')
        cy.visit('/commodities/0201100021?day=2&month=1&year=2021#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Non preferential tariff quota')
        cy.get('.table-line')
        cy.contains('052201').click()
        cy.get('.tariff-info')
            .contains('Order number 052201')
        cy.get('.close [href]').click()
    })
})