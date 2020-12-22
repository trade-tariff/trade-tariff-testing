describe('Validate correct date is displayed on main page',function(){
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('Check correct date is displayed',function(){
        cy.visit('/sections')
        cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
            .contains(Cypress.moment().format('DD MMMM YYYY'))

    })
})