describe('🧮 | dcOriginCountry | Duty Calculator Origin Country selection page |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('ESW (GB) ', function () {
      cy.visit('/import-date?referred_service=uk&commodity_code=0702000007')
      cy.contains('Trade Tariff Duty Calculator')
      cy.ValidDate()
      cy.contains('Continue').click()
      cy.contains('Which part of the UK are you importing into?')

       //select England ,Scotland or Wales (GB)
      cy.get('#wizard-steps-import-destination-import-destination-uk-field').check()
      cy.contains('Continue').click()
      cy.contains('Which country are the goods dispatched from?')
      cy.contains('The duty you are charged may be dependent on the country of dispatch of the goods being imported.')
      cy.contains('Enter the country of dispatch:')
      cy.contains('When autocomplete results are available, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.')

        //select country from list 
       
      cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
        .click().clear().wait(500)
        .type('United Kingdom (Northern Ireland)').wait(500)
      cy.contains('Continue').click()
      cy.contains('Which country are the goods dispatched from?')

      //validate country of origin selected has persisted - Northern Ireland is displayed 
    //  cy.get('#wizard-steps-country-of-origin-country-of-origin-field__listbox').should('contain','United Kingdom (Northern Ireland)')
    })
    it('Northern Ireland ', function () {
      cy.visit('/import-date?referred_service=uk&commodity_code=0702000007')
      cy.contains('Trade Tariff Duty Calculator')
      cy.ValidDate()
      cy.contains('Continue').click()
      cy.contains('Which part of the UK are you importing into?')

       //select England ,Scotland or Wales (GB)
       cy.contains('England, Scotland or Wales (GB)')
       cy.contains('Northern Ireland')
       cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
       cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')
        cy.contains('The duty you are charged may be dependent on the country of dispatch of the goods being imported.')
        cy.contains('Enter the country of dispatch:')
        cy.contains('When autocomplete results are available, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.')

        //select country from list 
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field').clear().type('United Kingdom').wait(500)
        cy.contains('Continue').click()

      // Placeholder for next page 

    })
    it('No country selected',function(){
      cy.visit('/import-date?referred_service=uk&commodity_code=0702000007')
      cy.contains('Trade Tariff Duty Calculator')
      cy.ValidDate()
      cy.contains('Continue').click()
      cy.contains('Which part of the UK are you importing into?')

       cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
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
