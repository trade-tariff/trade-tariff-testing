describe('🚀 XI 🇪🇺 💡  - Smoke test to cover basic functionality on XI services ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('🚀 XI - Routing - Correct page + Legal base does not exist', function () {
        cy.visit('/commodities/0101210000#import')
        cy.contains('The Northern Ireland (EU) Tariff')
        cy.get('.govuk-tabs__panel')
        cy.contains('Legal base').should('not.exist')
    })
    it('🚀 XI - Header Section-Sub sections ', function () {
        cy.visit('/sections')
        cy.title().should('eq', 'The Northern Ireland (EU) Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')
        cy.get('.govuk-header ')
        cy.contains('Northern Ireland (EU) Tariff')
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
    it('🚀 XI - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function () {
        cy.visit('/sections')
        cy.get('.govuk-footer')
        cy.contains('API Documentation')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

    })
    it('🚀 XI - Sections Page - Switching link to UK available & works', function () {
        cy.visit('/sections')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //check correct text is displayed on banner
        cy.get('.tariff-breadcrumbs')
            .should('have.text', 'From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are not at risk of onward movement to the EU, use the Online Tariff.')
        //click on the UK link and it should navigate to UK version
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')
    })
    it('🚀 XI - Sections Page - Guidance Link and Page link', function () {
        cy.visit('/sections')
        // Guidance link on XI page
        cy.get('.govuk-main-wrapper')
            .contains('if your goods are not ‘at risk’ of onward movement to the EU').click()
        cy.get('.govuk-grid-row')
            .contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU')
        cy.log(cy.title())
        cy.title().should('eq', 'Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU - GOV.UK')
        //return to Xi page
        cy.go('back')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
    })
    it('🚀 XI - Change to future date and check if the data shown is same for both XI and UK', function () {
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
            .contains('Online Tariff').click()
        cy.contains('The Online Trade Tariff')
        cy.get('main#content  nav  a')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        cy.contains(' Live animals; animal products')
        cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
            .contains('This tariff is for 7 January 2021')

    })

    it('🚀 XI - Change Currency should not be visible on main page - The Northern Ireland (EU) Tariff for the XI', function () {
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
        cy.contains('Change date')
        cy.contains('Change currency').should('not.exist')
    })

    it('🚀 United Kingdom should NOT be shown in EU country list', function () {
        cy.visit('/commodities/2403991000?day=3&month=1&year=2021#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('European Economic Area (2012)')
            .click()
        cy.get('.govuk-list')
            .contains('European Union (EU)')
      //  cy.get('#measure-20125860-children-geographical-areas')
      //  cy.get('#measure-3625193-children-geographical-areas')
        cy.get('.govuk-list')
        cy.contains('united kingdom').should('not.exist')
    })

    it(' 🚀 XI Switching link banner on sections page for Jan 1 2021', function () {
        cy.visit('/sections')
        //check header has Xi information
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //check correct text is displayed on banner
        cy.get('.tariff-breadcrumbs')
            .should('have.text', 'From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are not at risk of onward movement to the EU, use the Online Tariff.')
        //click on the UK link and it should navigate to UK version
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')
        // Guidance link on XI page
        cy.get('.govuk-main-wrapper')
            .contains('if your goods are not ‘at risk’ of onward movement to the EU').click()
        cy.get('.govuk-grid-row')
            .contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU')
        cy.log(cy.title())
        cy.title().should('eq', 'Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU - GOV.UK')
        //return to Xi page
        cy.go('back')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')

    })
})
