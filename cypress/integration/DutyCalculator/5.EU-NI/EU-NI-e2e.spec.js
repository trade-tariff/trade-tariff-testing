describe('| EU-NI-e2e |EU to Northern Ireland |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"] 
    for (let i =0;i<country.length;i++){
        console.log(i)


    it(`e2e EU to NI ${country[i]}`,function(){
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1212210000`)
        cy.validDate( )
        cy.contains('When will the goods be imported?')
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        cy.wait(500)
        cy.get('.govuk-back-link').wait(200).click()
        cy.contains('When will the goods be imported?')
        cy.contains('Continue').click()

       //select England ,Scotland or Wales (GB)
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')
        cy.contains('The duty you are charged may be dependent on the country of dispatch of the goods being imported.')
        //Back Button on page 
        cy.get('.govuk-back-link').click()
        cy.contains('Which part of the UK are you importing into?')
        cy.contains('Continue').click()

        //select country of Origin  
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-eu-field').click()
        cy.contains('Continue').click()

        cy.contains('There is no import duty to pay')
        cy.contains('There is no import duty to pay when importing goods into Northern Ireland from a European Union member state.')

        //Back Button on page 
        cy.get('.govuk-back-link').click()
        cy.contains('Which country are the goods dispatched from?')

        cy.contains('Continue').click()

        //Start again button 
        cy.get('.govuk-button').click()
        cy.contains('When will the goods be imported?')


    })
}
})