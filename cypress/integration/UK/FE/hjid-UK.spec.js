describe('🇬🇧 💡 hjid tests ',function() {

    Cypress.config('baseUrl')
    it('🇭🇹 Haiti exclusion - CARIFORUM',function(){
        cy.visit('/commodities/0707000599#import')
            cy.contains('CARIFORUM (1033)').click()
        cy.get('#measure-20079770-children-geographical-areas')
            .contains('Haiti (HT)').should('not.exist')
    })
})
