describe(' 🇬🇧 💡 | newTerminatedCommCodes-UK | New ,Terminated comm codes from 1st Jan 2021 |',function() {
    it('Terminated comm codes from 01 Jan 2021', function () {
        let termcodes_ids = Cypress.config('termcodes');

        for (let i = 0; i < termcodes_ids.length; i++) {

            cy.visit('/xi/sections')
            cy.searchForCommodity(`${termcodes_ids[i]}`)
            cy.contains('Choose the commodity code below that best matches your goods to see more information')

        }
    })

    it('New comm codes starting from 01 Jan 2021', function () {
        let newcodes_ids = Cypress.config('newcodes');

        for (let i = 0; i < newcodes_ids.length; i++) {
            cy.visit('/xi/sections')
            cy.searchForCommodity(`${newcodes_ids[i]}`)
            cy.contains(`Commodity information for ${newcodes_ids[i]}`)

        }
    })

})






