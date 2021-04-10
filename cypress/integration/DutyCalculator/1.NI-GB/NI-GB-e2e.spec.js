describe('| NI-GB-e2e | Northern Ireland to GB United Kingdom |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e NI to GB ',function(){
        cy.visit('/import-date?referred_service=uk&commodity_code=0702000007')
        cy.contains('Trade Tariff Duty Calculator')
        cy.validDate( )
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
        .click().clear()
        .type('Northern Ireland').wait(500)
      
        cy.contains('Continue').click()
        cy.contains('There is no import duty to pay')
        cy.contains('There are no import duties applicable to the movement of goods from Northern Ireland to England, Scotland and Wales.')
        cy.contains('Find out more about trading and moving goods in and out of Northern Ireland (opens in a new window).')
        cy.get('.govuk-grid-row .govuk-link').should('have.attr', 'href', 'https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland')
        //Back Button on page 
        cy.get('.govuk-back-link').click()
        cy.contains('Which country are the goods dispatched from?')

        cy.contains('Continue').click()

        //Start again button 
        cy.get('.govuk-button').click()
        cy.contains('When will the goods be imported?')
    })
})