describe.skip('🚀  UK 🇬🇧 💡 | Test1-UK | Smoke test to cover basic functionality on UK services |', function () {
    // Cypress.config('baseUrl', Cypress.config('services')['uk'])
    Cypress.config('baseUrl')

    it('🚀 UK Routing - Correct page + Legal base does not exist ', function () {
        cy.visit('/commodities/0101210000#import')
        cy.contains('UK Global Online Tariff')
        cy.get('.govuk-tabs__panel')
        cy.contains('Legal base').should('not.exist')
    })
    it('🚀 UK - Header Section-Sub sections ', function () {
        cy.visit('/sections')

        cy.title().should('eq', 'UK Global Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK')
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
    it('🚀 UK - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function () {
        cy.visit('/sections')
        cy.get('.govuk-footer')
        cy.contains('API Documentation')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

    })
    it('🚀 UK - Sections Page - Switching link to XI available & works', function () {
        cy.visit('/sections')
        cy.get('.govuk-header ')
            .contains('UK Global Online Tariff')

        //check correct text is displayed on banner as per UK - If they are at risk
        cy.get('.tariff-breadcrumbs')
            .should('have.text', 'From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland Online Tariff.')
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
    it('🚀 UK - Sections Page - Guidance Link and Page link', function () {
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
            .contains('UK Global Online Tariff')
    })

    it('🚀 UK - Change date and check if the data shown is same for both XI and UK', function () {
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
            .contains('Northern Ireland Online Tariff').click()

        cy.contains('Online Tariff')
        cy.get('main#content  nav  a')
        cy.contains('Online Tariff').click()

        cy.contains(' Live animals; animal products')
        cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
            .contains('This tariff is for 7 January 2021')
    })
    it('🚀 UK - Change Currency should not be visible on main page - The Online Trade Tariff', function () {
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
        cy.contains('Change date')
        cy.contains('Change currency').should('not.exist')
    })
    it('🚀 UK - United Kingdom should not be shown in EU country list', function () {
        cy.visit('/commodities/2403991000#import')
        cy.get('.govuk-tabs__panel')
            .contains('European Union (1013)').click()
        cy.get('.govuk-list')
            .contains('European Union (EU)')
        //  cy.get('.govuk-list')
        cy.get('#measure-20125860-children-geographical-areas')
            .contains('United Kingdom (GB)').should('not.exist')
    })

    it('🚀 UK Switching link banner on sections page for Jan 1 2021', function () {
        cy.visit('/sections?day=11&month=12&year=2020')
        cy.get('.govuk-header ')
            .contains('UK Global Online Tariff')

        //check correct text is displayed on banner as per UK - If they are at risk
        cy.get('.tariff-breadcrumbs')
            .should('have.text', 'From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland Online Tariff.')
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

        // Guidance link on UK page
        cy.get('.govuk-main-wrapper')
            .contains('if your goods are not ‘at risk’ of onward movement to the EU').click()
        cy.get('.govuk-grid-row')
            .contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU ')
        cy.log(cy.title())
        cy.title().should('eq', 'Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU - GOV.UK')
        //return to UK page
        cy.go('back')
        cy.get('.govuk-header ')
            .contains('UK Global Online Tariff')
    })
    //Licensed quotas
    it('🚀 UK quota numbers post 1 Jan 2021 -054xxx Licensed', function () {
        cy.visit('/commodities/0201100021?day=2&month=1&year=2021#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Non preferential tariff quota')
        cy.get('.table-line')
        cy.contains('054002').click()
        cy.get('.tariff-info')
            .contains('Information on the availability of this quota can be obtained from the Rural Payments Agency.')
        cy.get('.close [href]').click()
    })
    // Non Licensed quotas
    it('🚀 UK quota numbers post 1 Jan 2021 -057xxx Non-Licensed', function () {
        cy.visit('/commodities/0201100021?day=2&month=1&year=2021#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Preferential tariff quota')
        cy.get('.table-line')
        cy.contains('057300').click()
        cy.get('.tariff-info')
            .contains('quota 057300')
        cy.get('.close [href]').click()
    })
    // 
    it('🚀Enter commodity code for Mozzaarella - Sections page and search', function () {
        cy.visit('/sections')
        cy.get('.govuk-label')
            .contains('Search the UK Global Online Tariff')
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(500)
        cy.get('input[name=\'new_search\']').click()
        cy.title().should('contains', '0406103010')
        cy.get('.govuk-main-wrapper')
            .contains('Commodity information for 0406103010')
    })
    it('🚀 Enter commodity code for Mozzaarella - Sections/selecting chapter number and search', function () {
        cy.visit('/sections/4')
        cy.get('.govuk-label')
            .contains('Search the UK Global Online Tariff')
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(500)
        cy.get('input[name=\'new_search\']').click()
        cy.title().should('contains', '0406103010')
        cy.get('.govuk-main-wrapper')
            .contains('Commodity information for 0406103010')
    })
    it('🚀 Enter commodity code for Mozzaarella - Chapters and search', function () {
        cy.visit('chapters/20')
        cy.get('.govuk-label')
            .contains('Search the UK Global Online Tariff')
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(500)
        cy.get('input[name=\'new_search\']').click()
        cy.title().should('contains', '0406103010')
        cy.get('.govuk-main-wrapper')
            .contains('Commodity information for 0406103010')
    })
    it('🚀 Enter commodity code for Mozzaarella - Headings and search', function () {
        cy.visit('headings/2003')
        cy.get('.govuk-label')
            .contains('Search the UK Global Online Tariff')
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0406103010')
        cy.wait(500)
        cy.get('input[name=\'new_search\']').click()
        cy.title().should('contains', '0406103010')
        cy.get('.govuk-main-wrapper')
            .contains('Commodity information for 0406103010')
    })


})