describe('🇪🇺 💡   Chemical Search 🧪 -  XI services)',function() {
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it.skip('XI Chemical Search - CAS number', function () {
        cy.visit('/chemical_search')
        cy.contains('Search by Chemical')

            cy.get('input#cas')
                .clear()
                .type('18241-31-1')
            cy.wait(1000)
          //  cy.get('form#new_search > input[name=\'new_search\']').click()
            cy.get('.button.govuk-button').click()

        //expected result Bis(p-methylbenzyl) oxalate   ,2917110020
    })

    it.skip('XI Chemical Search - Chemical Name', function () {
        cy.visit('/chemical_search')
        cy.contains('Search by Chemical')

        cy.get('input#name')
            .clear()
            .type('Dihexyl phthalate')
        cy.wait(1000)
        //  cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.get('.button.govuk-button').click()

        //Dihexyl phthalate(CAS RN 84-75-3)  ,2917340070
    })
})