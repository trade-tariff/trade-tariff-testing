/* eslint-disable camelcase */
describe('🇬🇧 ⚙  UK version v2 api - preference codes backend API', function() {
  it('UK- API V2 - Preference Codes - Validate response headers,status,content ', function() {
    cy.request('/api/v2/preference_codes.json').then((response) => {
      cy.validJsonAPIresponse(response);
    });
  });
  it('UK- API V2 - Preference Codes - Prove that the data available in preference codes API', () => {
    cy.request('/api/v2/preference_codes.json').then((response) => {
      expect(response).to.have.property('status', 200);
      // validate properties
      expect(response.body.data[0]).to.have.property('id');
      expect(response.body.data[0]).to.have.property('type');
      expect(response.body.data[0].attributes).to.have.property('code');
      expect(response.body.data[0].attributes).to.have.property('description');
    });
  });
});
