describe('| e2e-EU2NI |EU to Northern Ireland |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"] 
    for (let i =0;i<country.length;i++){
        console.log(i)


    it(`e2e EU to NI ${country[i]}`,function(){
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1212210000`)
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
}
})