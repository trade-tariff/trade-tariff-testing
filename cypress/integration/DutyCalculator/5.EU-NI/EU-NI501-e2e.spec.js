describe('| EU-NI501-e2e.spec |EU to Northern Ireland |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"] 
    for (let i =0;i<country.length;i++){
        console.log(i)

        // new link /uk/0702000007/import-date
    it(`e2e EU to NI ${country[i]}`,function(){
        cy.visit(`${country[i]}/1212210000/import-date`)

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
        cy.contains('Which country are the goods coming from?')

        cy.contains('Continue').click()

        //Start again button 
        cy.get('.govuk-button').click()
        cy.contains('When will the goods be imported?')


    })
}
})