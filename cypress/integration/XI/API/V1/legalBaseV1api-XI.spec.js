/* eslint-disable camelcase */
describe('🇪🇺 ⚙️ XI-version v1 api - legal base should be present in the backend API response  API', function() {
  it('Prove that the data remains in the JSON API (v1)', () => {
    cy.request('/xi/api/v1/commodities/0101210000.json').then((response) => {
      //       expect(response).to.have.property('status', 200);
      //       expect(response.body).not.to.be.null;
      //       // check if legal_acts is present in response body
      //       const import_measures = response.body.import_measures;
      //       let found = false;
      //       for (let i = 0; i < import_measures.length; i++) {
      //         console.log(import_measures[i]);
      //         if (import_measures[i].hasOwnProperty('legal_acts')) {
      //           found = true;
      //           break;
      //         }
      //       }
      //       expect(found).to.be.true;
      //     });
      //   });
      // });
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
