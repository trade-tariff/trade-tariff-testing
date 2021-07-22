describe.skip('🇬🇧 💡 | countriesApi-UK | UK Country Selection |',function() {
    it('UK - Should return a valid payload and Schema should match', function () {
        cy.readFile(`./cypress/Data/uk/countriesUK.json`).then((fixtureuk) => {
        cy.request('/geographical_areas.json').then($response => {
            
            expect($response.status).to.eq(200)
        //    expect($response.body).to.deep.equal(fixtureuk)
            expect($response.body.results).to.have.length(238)
            cy.task('validateJsonSchema', {
                data: $response.body,
                verbose: true,
                schemaFile: './cypress/Data/uk/countriesUK.json',
            }).should('equal', null)


        })
    })
})
})
