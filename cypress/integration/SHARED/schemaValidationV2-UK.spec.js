describe.skip('API schema validation', () => {
    Cypress.config('baseUrl')
    it('Should return a valid payload and schema should match', function () {
        cy.request('/api/v2/commodities/7202118000').then($response => {
            expect($response.status).to.eq(200)

            cy.task('validateJsonSchema', {
                data:           $response.body,
                verbose:        true,
                schemaFile:     './cypress/Data/uk/v2/7202118000-2021-01-07.json',
            }).should('equal', null)

        })

    })
})
