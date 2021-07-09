describe.skip('🇪🇺 | countriesApi-XI | XI Country Selection |',function() {
    it('XI - Should return a valid payload and Schema should match', function () {
        cy.readFile(`./cypress/Data/xi/countriesXI.json`).then((fixturexi) => {
        cy.request('/xi/geographical_areas.json').then($response => {
            console.log(JSON.stringify(fixturexi))
            console.log(JSON.stringify($response.body))
            expect($response.status).to.eq(200)
            expect($response.body).to.deep.equal(fixturexi)
            expect($response.body.results).to.have.length(251)
            
            cy.task('validateJsonSchema', {
                data: $response.body,
                verbose: true,
                schemaFile: './cypress/Data/xi/countriesXI.json',
            }).should('equal', null)
            

        })
    })
})
})
