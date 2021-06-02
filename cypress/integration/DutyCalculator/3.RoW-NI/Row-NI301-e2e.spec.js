//to be implemented 
describe('| Row-NI301-e2e.spec |RoW to Northern Ireland ',function(){
    
        Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
        let country = ["uk", "xi"]
        for (let i = 0; i < country.length; i++) {
            it(`WIP - RoW 🇮🇱 to NI ${country[i]}`, function () {
                cy.visit(`${country[i]}/1212210000/import-date`)
                //date
                cy.validDate()
                //destination
                cy.selectDestination('xi')
                //origin
                cy.selectOrigin('other')
                //select country from list 
                cy.otherOriginList({ value: 'Israel' })
        
    })
}
})