describe(' 🇬🇧 💡 New ,Terminated comm codes from 1st Jan 2021',function() {
   // Cypress.config('baseUrl', Cypress.config('services')['xi'])
    Cypress.config('baseUrl')


    it.skip('Terminated comm codes from 01 Jan 2021', function () {
        let termcodes_ids = Cypress.config('termcodes');

        for (let i = 0; i < termcodes_ids.length; i++) {

            cy.visit('/sections')
            cy.get('.js-commodity-picker-select.js-show  input#q').click().type(`${termcodes_ids[i]}`)
            cy.wait(500)
            cy.get('input[name=\'new_search\']').click()
            cy.contains('Choose the commodity code below that best matches your goods to see more information')

        }
    })

    it('New comm codes starting from 01 Jan 2021', function () {
        let newcodes_ids = Cypress.config('newcodes');

        for (let i = 0; i < newcodes_ids.length; i++) {
            cy.visit('/sections')
            cy.get('.js-commodity-picker-select.js-show  input#q').click().type(`${newcodes_ids[i]}`)
            cy.wait(700)
            cy.get('input[name=\'new_search\']').click()
       //     cy.wait(500)
      //      cy.reload()
            cy.contains(`Commodity information for ${newcodes_ids[i]}`)

        }
    })

})






