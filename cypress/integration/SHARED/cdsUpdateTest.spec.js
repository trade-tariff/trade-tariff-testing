describe.skip('🇬🇧 🇪🇺 💡 New Updates test )',function() {
  //  Cypress.config('baseUrl')
      Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('Commodity Search - New codes',function(){
        cy.fixture(`newcommcodes.csv`).then((fixture) => {
            let newcommcodes_ids = fixture.split(",")

            for (let i = 0; i < newcommcodes_ids.length; i++) {
                cy.visit('/sections')
                cy.get('.js-commodity-picker-select.js-show  input#q').click().type(`${newcommcodes_ids[i]}`)
                cy.wait(1000)
                cy.get('input[name=\'new_search\']').click()
                cy.wait(200)
            //    cy.reload()
                cy.contains(`Commodity information for ${newcommcodes_ids[i]}`)

            }
        });
    })
})
