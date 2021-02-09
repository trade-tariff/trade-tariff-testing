describe('🇪🇺 💡 hjid tests ',function() {
    Cypress.config('baseUrl')
    it('🇭🇹 Haiti exclusion 🚫 - CARIFORUM',function(){
    let commoditycodes_ids = ["0707000599","0302311000","8902001000","9603210000","7901121000","6602000010","4901910000"]
        let measurecodes_ids = ["20079770","20079766","20079851","20079857","20079841","20079829","20079812"]
        for (let i = 0; i < commoditycodes_ids.length; i++) {
        cy.visit(`/commodities/${commoditycodes_ids[i]}#import`)
            cy.contains('CARIFORUM (1033)').click()
        cy.get(`#measure-${measurecodes_ids[i]}-children-geographical-areas`)
            .contains('Haiti (HT)').should('not.exist')
        }
    })
})


