describe('🧮 Duty Calculator Origin Country selection page ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('ESW (GB) ', function () {
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')

       //select England ,Scotland or Wales (GB)
       cy.get('#wizard-steps-import-destination-import-destination-gb-field').check()
       cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')
        cy.contains('The duty you are charged may be dependent on the country of dispatch of the goods being imported.')
        cy.contains('Enter the country of dispatch:')
        cy.contains('When autocomplete results are available, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.')

        //select country from list 
        cy.get('input#wizard-steps-country-of-origin-geographical-area-id-field')

        .click().clear().wait(500)
        .type('United Kingdom (Northern Ireland)').wait(500)
        cy.get('#wizard-steps-country-of-origin-geographical-area-id-field__listbox').wait(500)
      //  .type('{enter}')
        cy.contains('Continue').click()
        cy.contains('There is no import duty to pay')
        cy.contains('There are no import duties applicable to the movement of goods from Northern Ireland to England, Scotland and Wales.')
        cy.contains('Find out more about trading and moving goods in and out of Northern Ireland(opens in a new window).')
        cy.get('.govuk-grid-row .govuk-link').should('have.attr', 'href', 'https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland')

      //Back button - GDS style back link
      cy.contains('Back').click()
      cy.contains('Which country are the goods dispatched from?')


    })


    it('Northern Ireland ', function () {
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')

       //select England ,Scotland or Wales (GB)
       cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
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
