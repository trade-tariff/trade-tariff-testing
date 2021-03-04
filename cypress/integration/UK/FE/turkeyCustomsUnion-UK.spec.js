describe('🇬🇧💡 🇹🇷 | turkeyCustomsUnion | Turkey Customs Union runs from 01 Jan 2021 - 19th Jan 2021 |',function(){
  //  Cypress.config('baseUrl', Cypress.config('services')['uk'])
    Cypress.config('baseUrl')
    it('🆕 🇹🇷Turkey Customs Union Duty between 01/01/2021 -19/01/2021 available',function(){
        //available on 01 Jan 2021
        cy.visit('/commodities/0101299000?day=1&month=1&year=2021#import')
        cy.get('.small-table')
        cy.contains('Turkey (TR)')
        cy.contains('Customs Union Duty')
        cy.contains('01/01/2021')
        cy.contains('19/01/2021')
        //available on 19th Jan 2021
        cy.visit('/commodities/0101299000?day=19&month=1&year=2021#import')
        //   cy.get('.small-table')
        cy.get('#measure-20126708')
            .contains('Turkey (TR)')
        cy.get('#measure-20126708')
            .contains('Customs Union Duty')
        cy.get('#measure-20126708')
            .contains('01/01/2021')
        cy.get('#measure-20126708')
            .contains('19/01/2021')

    })
    it('🆕 🇹🇷Turkey Customs Union Duty after 19/01/21 Not available',function(){
        //not available on 20th Jan 2021
        cy.visit('/commodities/0101299000?day=20&month=1&year=2021#import')
        //  cy.get('.small-table')
        cy.get('#measure-20101931')
            .contains('Turkey (TR)')
        cy.get('#measure-20101931')
            .contains('Customs Union Duty').should('not.exist')
        cy.get('#measure-20101931')
            .contains('19/01/2021').should('not.exist')
        cy.get('#measure-20101931')
            .contains('20/01/2021')
    })

})