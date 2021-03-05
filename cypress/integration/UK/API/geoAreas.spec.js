 
    describe('| geoAreas |  geographical areas schema validation |', () => {
        it.skip('Should be a valid swagger schema', function () {
            cy.task('validateSwaggerFile', {
                file: 'cypress/Data/geoareas.json',  // optional path or full URL, see below
            }).should('not','equal', null);
        });
    
        it('Should return a valid health payload', function () {
            cy.request('/api/v2/geographical_areas').then($response => {
                // Check the swagger schema:
                cy.task('validateSwaggerSchema', {
                    file:           'cypress/Data/geoareas.json',  // optional path or full URL, see below
                    endpoint:       '/',
                    method:         'get',
                    statusCode:     200,
                    responseSchema: $response.body,
                    verbose:        true,                      // optional, default: false
                })
            })
        })
    })
