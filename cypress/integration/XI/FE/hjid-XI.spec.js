describe('🇪🇺 💡 hjid tests ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['xi'])
    it('🇭🇹 Haiti exclusion from CARIFORUM group',function(){
        cy.visit('/commodities/0707000599#import')
        cy.contains('CARIFORUM (1033)').click()
        cy.get('#measure-3207936-children-geographical-areas')
            .contains('Haiti (HT)')
            //.should('not.exist')
    })
})


