describe('| EU-NI-e2e |EU to Northern Ireland |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"] 
    for (let i =0;i<country.length;i++){
        console.log(i)


    it(`e2e EU to NI ${country[i]}`,function(){
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1212210000`)

        //date
        cy.validDate()

        //destination
        cy.selectDestination('xi')

        //origin
        cy.selectOrigin('eu')

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