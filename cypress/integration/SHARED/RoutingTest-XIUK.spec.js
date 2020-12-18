describe('🇪🇺 🇬🇧 💡 Testing routing mechanism for XI/UK/baseline',function(){
    it('routing dev-UK-OLD',function(){
        cy.visit(Cypress.env('baseUrl','/commodities/0101210000#import'))
        cy.contains('The Online Trade Tariff')
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')

    })
    it('routing dev-XI',function(){
        cy.visit(Cypress.env('xi','/commodities/0101210000#import'))
        cy.contains('The Northern Ireland (EU) Tariff')
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })

    // date picker on XI , change to UK and data should remain same ,
    it('Change date and check if the data shown is same for both XI and UK',function(){
        cy.visit(Cypress.env('xi','/sections'))
        cy.get('.js-show.sections-context.text > a[role=\'button\']').click()
        cy.get('input#tariff_date_date').click()
            .clear()
            .type('16/12/2020')
            cy.get('.fields > a[role=\'button\']').click()
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