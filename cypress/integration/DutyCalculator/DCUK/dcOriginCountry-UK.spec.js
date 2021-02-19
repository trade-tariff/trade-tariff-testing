describe('🧮 Duty Calculator Origin Country selection page ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycalxi'])

    it('ESW (GB) ', function () {
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')

       //select England ,Scotland or Wales (GB)
       cy.get('#wizard-steps-import-destination-import-destination-1-field').check()
       cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')
        cy.contains('The duty you are charged may be dependent on the country of dispatch of the goods being imported.')
        cy.contains('Enter the country of dispatch:')
        cy.contains('When autocomplete results are available, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.')

        //select country from list 
        cy.get('input#wizard-steps-country-of-origin-geographical-area-id-field').clear().type('United Kingdom (Northern Ireland)')
      //  cy.contains('Continue').click()
      // placeholder for next page 

      //Back button - GDS style back link
      cy.contains('Back').click()
      cy.contains('Which part of the UK are you importing into?')


    })


    it('Northern Ireland ', function () {
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')

       //select England ,Scotland or Wales (GB)
       cy.get('#wizard-steps-import-destination-import-destination-2-field').check()
       cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')
        cy.contains('The duty you are charged may be dependent on the country of dispatch of the goods being imported.')
        cy.contains('Enter the country of dispatch:')
        cy.contains('When autocomplete results are available, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.')

        //select country from list 
        cy.get('input#wizard-steps-country-of-origin-geographical-area-id-field').clear().type('United Kingdom (Northern Ireland)')
      //  cy.contains('Continue').click()

      // Placeholder for next page 

    })
    it('No country selected',function(){
      cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        //select England ,Scotland or Wales (GB)
       cy.get('#wizard-steps-import-destination-import-destination-2-field').check()
       cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')
        cy.contains('The duty you are charged may be dependent on the country of dispatch of the goods being imported.')
        cy.contains('Enter the country of dispatch:')
        cy.contains('When autocomplete results are available, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.')
        //Continue without selecting any country from drop down menu
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid origin for this import')
        cy.get('.govuk-error-message')
            .contains('Enter a valid origin for this import')

    })

})
