describe.skip('| swaggerValidation | Basic API checks |', () => {
  it('Should be a valid swagger schema', function() {
    cy.task('validateSwaggerFile', {
      file: 'cypress/Data/swagger.json', // optional path or full URL, see below
    }).should('equal', null);
  });

  it('Should return a valid health payload', function() {
    cy.request('/sections').then(($response) => {
      // Check the swagger schema:
      cy.task('validateSwaggerSchema', {
        file: 'cypress/Data/swagger.json', // optional path or full URL, see below
        endpoint: '/sections',
        method: 'get',
        statusCode: 200,
        responseSchema: $response.body,
      });
    });
  });
});
// .should('equal', null)
