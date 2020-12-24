describe('Validate correct date is displayed on main page',function(){
  //  Cypress.config('baseUrl', Cypress.config('services')['xi'])
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('Check correct date is displayed',function(){

        cy.visit('/sections')
        cy.get('.govuk-grid-column-full')
            .contains(Cypress.moment().format('DD MMMM YYYY'))

    })
})