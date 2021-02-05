describe('🇪🇺 XI Country Selection ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('XI - Should return a valid payload and Schema should match', function () {
        cy.readFile(`./cypress/Data/xi/countriesXI.json`).then((fixturexi) => {
        cy.request('/geographical_areas.json').then($response => {
            
            expect($response.status).to.eq(200)
            expect($response.body).to.deep.equal(fixturexi)
            expect($response.body.results).to.have.length(251)
            console.log(JSON.stringify(fixturexi))
            console.log(JSON.stringify($response.body))
            cy.task('validateJsonSchema', {
                data: $response.body,
                verbose: true,
                schemaFile: './cypress/Data/xi/countriesXI.json',
            }).should('equal', null)
            

        })
    })
})
})