describe('🇪🇺 💡 Select Commodities and measure details ',function() {
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('Ferro-alloy  ', function () {
        cy.visit('/commodities/7202118000#import')
            .contains('Commodity information for 7202118000')
        cy.get('.govuk-header__content')
            .contains('The Northern Ireland (EU) Tariff')
        cy.get('#measure-3632528')
           // .should('have.text','Third country duty')
            //.contains('20.00 %')
            .contains('European Economic Area (2012)')
        cy.get('#measure-3632528')
            .contains('0.00 %')
            //.contains('Tariff preference')
            //.contains('0.00%')

    })
})