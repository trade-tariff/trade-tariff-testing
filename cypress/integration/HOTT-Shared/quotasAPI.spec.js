/* eslint-disable max-len */
describe('quotasAPI.spec.js for UK and XI  |', function() {
  // check length , fields , as_of on both services =ability to show snapshot on a given date (validity start date before ////snapshot, validity end date after or null)
  it('UK quotas API - type ,length , properties ', function() {
    cy.request('/api/v2/quota_order_numbers').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // headers
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(1600);
          // body length
          expect(response.body.data).to.have.length(846);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type');
          expect(response.body.data[0].attributes).to.have.property('quota_order_number_sid');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
          expect(response.body.data[0].relationships.quota_definition.data).to.have.property('type').contains('quota_definition');
          // other properties
          expect(response.body.included[0].attributes).to.have.property('quota_order_number_id');
          expect(response.body.included[0].attributes).to.have.property('validity_start_date');
          expect(response.body.included[0].attributes).to.have.property('validity_end_date');
          expect(response.body.included[0].attributes).to.have.property('initial_volume');
          expect(response.body.included[0].attributes).to.have.property('measurement_unit_code');
          expect(response.body.included[0].attributes).to.have.property('measurement_unit_qualifier_code');
          expect(response.body.included[0].attributes).to.have.property('maximum_precision');
          expect(response.body.included[0].attributes).to.have.property('critical_threshold');
        });
  });
  it('XI quotas API - type ,length , properties ', function() {
    cy.request('/xi/api/v2/quota_order_numbers').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // headers
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(1600);
          // body length
          expect(response.body.data).to.have.length(1154);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type');
          expect(response.body.data[0].attributes).to.have.property('quota_order_number_sid');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
          expect(response.body.data[0].relationships.quota_definition.data).to.have.property('type').contains('quota_definition');
          // other properties
          expect(response.body.included[0].attributes).to.have.property('quota_order_number_id');
          expect(response.body.included[0].attributes).to.have.property('validity_start_date');
          expect(response.body.included[0].attributes).to.have.property('validity_end_date');
          expect(response.body.included[0].attributes).to.have.property('initial_volume');
          expect(response.body.included[0].attributes).to.have.property('measurement_unit_code');
          expect(response.body.included[0].attributes).to.have.property('measurement_unit_qualifier_code');
          expect(response.body.included[0].attributes).to.have.property('maximum_precision');
          expect(response.body.included[0].attributes).to.have.property('critical_threshold');
        });
  });
});
