
describe('| geoAreasApi.spec.js |  geographical areas schema validation |', () => {
  it('Should return a valid health payload', function() {
    cy.request('/api/v2/geographical_areas').then(($response) => {
      // Check the swagger schema:
      cy.task('validateSwaggerSchema', {
        file: 'cypress/Data/geoareas.json', // optional path or full URL, see below
        endpoint: '/',
        method: 'get',
        statusCode: 200,
        responseSchema: $response.body,
        verbose: true, // optional, default: false
      });
    });
  });
});
