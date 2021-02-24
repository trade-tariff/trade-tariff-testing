describe('EU to Northern Ireland ',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e EU to NI ',function(){
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
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
        .click().clear().wait(500)
        .type('European Union').wait(500)
      
        cy.contains('Continue').click()
        cy.contains('There is no import duty to pay')
        cy.contains('There is no import duty to pay when importing goods into Northern Ireland from a European Union member state.')
        

    })
})