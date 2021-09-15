describe.skip('🇬🇧 💡 | randomCommCode-UK  | random comm code test |',function() {
    it('💻 Commodity Search - random codes',function(){
        cy.fixture(`randomcommcodes.csv`).then((fixture) => {
            let randomcommcodes_ids = fixture.split(",")

            for (let i = 0; i < randomcommcodes_ids.length; i++) {
                cy.visit('/sections')
                cy.searchForCommodity(`${randomcommcodes_ids[i]}`)
               
                cy.contains(`Commodity information for ${randomcommcodes_ids[i]}`)
            }
        })
    })
})
