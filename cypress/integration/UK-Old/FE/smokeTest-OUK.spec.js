describe('🚀 OUK 🇬🇧 💡 - Smoke Test to cover basic functionality on UK services ',function() {
    Cypress.config('baseUrl')
    it('🚀 OUK Routing - Correct page + Legal base does not exist ', function () {

        cy.visit('/commodities/0101210000#import')
        cy.contains('The Online Trade Tariff')
        cy.get('.govuk-tabs__panel')
        cy.contains('Legal base').should('not.exist')
    })
    it('🚀 OUK - Header Section-Sub sections ', function () {
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
    it('🚀 OUK - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function () {
        cy.visit('/sections')
        cy.get('.govuk-footer')
        cy.contains('API Documentation')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

    })
    it('🚀 OUK - Sections Page - Switching link to XI available & works', function () {
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
    it('🚀 OUK - Sections Page - Guidance Link and Page link', function () {
        cy.visit('/sections')
        // Guidance link on UK page
        cy.get('.govuk-main-wrapper')
            .contains('if your goods are not ‘at risk’ of onward movement to the EU').click()
        cy.get('.govuk-grid-row')
            .contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU from 1 January 2021')
        cy.log(cy.title())
        cy.title().should('eq', 'Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU from 1 January 2021 - GOV.UK')
        //return to UK page
        cy.go('back')
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')

    })
    it('🚀 OUK - Change date and check if the data shown is same for both XI and UK', function () {
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

        cy.get('main#content  nav  a').click()
        cy.contains('Online Tariff')
        cy.get('main#content  nav  a').click()
        cy.contains('The Online Trade Tariff')
        cy.contains(' Live animals; animal products')
        cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
            .contains('This tariff is for 7 January 2021')

    })
    it('🚀 OUK - Change Currency should not be visible on main page - The Online Trade Tariff', function () {
        cy.visit('/sections')
        cy.get('.govuk-grid-row')
        cy.contains('Change date')
        cy.contains('Change currency').should('not.exist')
    })
})