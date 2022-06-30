/* eslint-disable camelcase */
describe('🇪🇺 ⚙️ XI - version v2 api - legal base should be present in the API response backend API', function() {
  it('Prove that the data remains in the JSON API (v2)', () => {
    cy.request('/xi/api/v2/commodities/0101210000.json').then((response) => {
      expect(response).to.have.property('status', 200);
      const measure_types = response.body.included;
      let found = false;
      for (let i = 0; i < measure_types.length; i++) {
        if (measure_types[i].type == 'legal_act') {
          found = true;
          break;
        }
      }
      expect(found).to.be.true;
    });
  });
});