describe.skip('🇬🇧 💡 | randomCommCode-UK  | random comm code test |',function() {
    it('💻 Commodity Search - random codes',function(){
        cy.fixture(`randomcommcodes.csv`).then((fixture) => {
            let randomcommcodes_ids = fixture.split(",")

            for (let i = 0; i < randomcommcodes_ids.length; i++) {
                cy.visit('/sections')
                cy.get('.js-commodity-picker-select.js-show  input#q').click().type(`${randomcommcodes_ids[i]}`)
                cy.wait(1000)
                cy.get('input[name=\'new_search\']').click()
                cy.wait(200)
                cy.contains(`Commodity information for ${randomcommcodes_ids[i]}`)
            }
        })
    })
})
