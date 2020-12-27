describe('XI - smoke test to cover basic functionality on XI services ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('XI - Routing - Correct page + Legal base does not exist', function () {
        cy.visit('/commodities/0101210000#import')
        cy.contains('The Northern Ireland (EU) Tariff')
        cy.get('.govuk-tabs__panel')
        cy.contains('Legal base').should('not.exist')
    })
    it('XI - Header Section-Sub sections ', function () {
        cy.visit('/sections')
        cy.title().should('eq', 'The Northern Ireland (EU) Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')

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
    it('XI - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function () {
        cy.visit('/sections')
        cy.get('.govuk-footer')
        cy.contains('API Documentation')
        cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist')

    })
    it.skip('XI - Sections Page - Switching link to UK available & works', function () {
        cy.visit('/sections')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Northern Ireland (EU) Tariff')
        cy.get('main#content  nav  a').click()
        cy.contains('The Online Trade Tariff')
        cy.get('main#content  nav  a').click()
        cy.contains('The Northern Ireland (EU) Tariff')
    })
    it.skip('XI - Change date and check if the data shown is same for both XI and UK',function(){
        cy.visit('/sections')
        cy.get('.js-show.sections-context.text > a[role=\'button\']').click()
        cy.get('input#tariff_date_date')
            .clear()
            .type('16/12/2020')
        cy.get('.fields > a[role=\'button\']')
            .contains('Set date').click()

        cy.contains(' Live animals; animal products')
        cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
            .contains('This tariff is for 16 December 2020')

        cy.get('main#content  nav  a').click()
        cy.contains('The Online Trade Tariff')
        cy.get('main#content  nav  a').click()
        cy.contains('The Northern Ireland (EU) Tariff')
        cy.contains(' Live animals; animal products')
        cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
            .contains('This tariff is for 16 December 2020')

    })
})
