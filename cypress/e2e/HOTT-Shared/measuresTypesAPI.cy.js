/* eslint-disable max-len */
describe('measuresTypesAPI.spec.js for both UK and XI  |', function() {
// id
// type (static)
// description
// measure_type_series_id
// measure_type_series_description
// trade_movement_code
// measure_component_applicable_code
// order_number_capture_code
// validity_start_date
// validity_end_date
  // check length , fields , as_of on both services =ability to show snapshot on a given date (validity start date before ////snapshot, validity end date after or null)
  it('UK measures API - type ,length , properties ', function() {
    cy.request('/api/v2/measure_types').as('comments');

    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // headers
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(3000);
          // body length
          expect(response.body.data).to.have.length(245);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_id');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_description');
          expect(response.body.data[0].attributes).to.have.property('order_number_capture_code');
          expect(response.body.data[0].attributes).to.have.property('trade_movement_code');
          expect(response.body.data[0].attributes).to.have.property('measure_component_applicable_code');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
        });
  });

  it('UK measures API - as of validate data | 1972 -  156 entries ', function() {
    cy.request('/api/v2/measure_types?as_of=1972-01-01').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(156);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_id');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_description');
          expect(response.body.data[0].attributes).to.have.property('order_number_capture_code');
          expect(response.body.data[0].attributes).to.have.property('trade_movement_code');
          expect(response.body.data[0].attributes).to.have.property('measure_component_applicable_code');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
        });
  });

  it('UK measures API - as of validate data | 1970 - 0 entries  ', function() {
    cy.request('/api/v2/measure_types?as_of=1971-01-01').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(0);
        });
  });

  it('UK measures API - as of validate data | as_of takes current date ', function() {
    cy.request('/api/v2/measure_types?as_of=').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(245);
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(3000);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_id');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_description');
          expect(response.body.data[0].attributes).to.have.property('order_number_capture_code');
          expect(response.body.data[0].attributes).to.have.property('trade_movement_code');
          expect(response.body.data[0].attributes).to.have.property('measure_component_applicable_code');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
        });
  });

  // xi measures
  it.only('XI measures API - type ,length , properties ', function() {
  //  cy.request('/api/v2/measure-types.json').as('comments');
    cy.request('/xi/api/v2/measure_types').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // headers
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(4000);
          // body length
          expect(response.body.data).to.have.length(251);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_id');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_description');
          expect(response.body.data[0].attributes).to.have.property('order_number_capture_code');
          expect(response.body.data[0].attributes).to.have.property('trade_movement_code');
          expect(response.body.data[0].attributes).to.have.property('measure_component_applicable_code');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
        });
  });

  it('XI measures API - as of validate data | 1972 -  156 entries ', function() {
    cy.request('xi/api/v2/measure_types?as_of=1972-01-01').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(156);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_id');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_description');
          expect(response.body.data[0].attributes).to.have.property('order_number_capture_code');
          expect(response.body.data[0].attributes).to.have.property('trade_movement_code');
          expect(response.body.data[0].attributes).to.have.property('measure_component_applicable_code');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
        });
  });

  it('XI measures API - as of validate data | 1970 - 0 entries  ', function() {
    cy.request('xi/api/v2/measure_types?as_of=1971-01-01').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(0);
        });
  });

  it.only('XI measures API - as of validate data | as_of takes current date ', function() {
    cy.request('xi/api/v2/measure_types?as_of=').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(251);
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(4000);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_id');
          expect(response.body.data[0].attributes).to.have.property('measure_type_series_description');
          expect(response.body.data[0].attributes).to.have.property('order_number_capture_code');
          expect(response.body.data[0].attributes).to.have.property('trade_movement_code');
          expect(response.body.data[0].attributes).to.have.property('measure_component_applicable_code');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
        });
  });
});
