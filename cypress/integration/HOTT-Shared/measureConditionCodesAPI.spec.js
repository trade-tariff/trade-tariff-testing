/* eslint-disable max-len */
describe('measureConditionCodesAPI.spec.js for both UK and XI  |', function() {
  // check length , fields , as_of on both services =ability to show snapshot on a given date (validity start date before ////snapshot, validity end date after or null)
  it.only('UK measure_condition_codes API - type ,length , properties ', function() {
    cy.request('api/v2/measure_condition_codes').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // headers
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(1500);
          // body length
          expect(response.body.data).to.have.length(22);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type').contains('measure_condition_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
        });
  });
  it.only('UK measure_condition_codes API - as of validate data | 1972 - 5 entries ', function() {
    cy.request('/api/v2/measure_condition_codes?as_of=1972-01-01').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(5);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type').contains('measure_condition_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date').contains('1972-01-01T00:00:00.000Z');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date').to.be.null;
        });
  });
  it.only('UK measure_condition_codes API - as of validate data | 1969 - 0 entries  ', function() {
    cy.request('/api/v2/measure_condition_codes?as_of=1969-12-31').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(0);
        });
  });
  it.only('UK measure_condition_codes API - as of validate data | as_of takes current date ', function() {
    cy.request('/api/v2/measure_condition_codes?as_of=').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(22);
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(1500);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type').contains('measure_condition_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
        });
  });
  // XI service
  it.only('XI measure_condition_codes API - type ,length , properties ', function() {
    cy.request('xi/api/v2/measure_condition_codes').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // headers
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(1500);
          // body length
          expect(response.body.data).to.have.length(29);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type').contains('measure_condition_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
        });
  });
  it.only('XI measure_condition_codes API - as of validate data | 1972 - 5 entries ', function() {
    cy.request('xi/api/v2/measure_condition_codes?as_of=1972-01-01').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(5);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type').contains('measure_condition_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date').contains('1972-01-01T00:00:00.000Z');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date').to.be.null;
        });
  });
  it.only('XI measure_condition_codes API - as of validate data | 1969 - 0 entries  ', function() {
    cy.request('xi/api/v2/measure_condition_codes?as_of=1969-12-31').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(0);
        });
  });
  it.only('XI measure_condition_codes API - as of validate data | as_of takes current date ', function() {
    cy.request('xi/api/v2/measure_condition_codes?as_of=').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(29);
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(1500);
          // validate properties
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type').contains('measure_condition_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
          expect(response.body.data[0].attributes).to.have.property('validity_end_date');
        });
  });
});
