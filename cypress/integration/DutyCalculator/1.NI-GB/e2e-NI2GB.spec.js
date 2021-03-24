describe('| e2e-NI2GB | Northern Ireland to United Kingdom |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e NI to UK ',function(){
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
        .click().clear()
        .type('United Kingdom (Northern Ireland)').wait(500)
      
        cy.contains('Continue').click()
        cy.contains('There is no import duty to pay')
        cy.contains('There are no import duties applicable to the movement of goods from Northern Ireland to England, Scotland and Wales.')
        cy.contains('Find out more about trading and moving goods in and out of Northern Ireland (opens in a new window).')
        cy.get('.govuk-grid-row .govuk-link').should('have.attr', 'href', 'https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland')


    })
})