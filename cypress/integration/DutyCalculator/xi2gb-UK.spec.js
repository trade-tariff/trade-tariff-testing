describe('Northern Ireland to United Kingdom ',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e NI to UK ',function(){
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
        

    })
})