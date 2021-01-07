describe('Basic API checks', () => {
    it('Should return a valid health payload', function () {
        cy.request('/api/v2/commodities/').then($response => {

            cy.task('validateJsonSchema', {
                data:           $response.body,
                verbose:        true,                     // optional, default: false
                schemaFile:     './testing/schema.json',  // path or full URL, see below
                // Or you can also define the schema inline:
                schema:         {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        }
                    }
                },
            }).should('equal', null);
        });
    });
});
