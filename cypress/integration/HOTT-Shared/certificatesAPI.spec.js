/* eslint-disable max-len */
describe('cerficatesAPI.spec.js for both UK and XI  |', function() {
  // check length , fields , as_of on both services =ability to show snapshot on a given date (validity start date before ////snapshot, validity end date after or null)
  it('UK certificates API - type ,length , properties ', function() {
    cy.request('/api/v2/certificates.json').as('comments');
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
          expect(response.body.data).to.have.length(493);
          // validate properties
          expect(response.body.data[0].attributes).to.have.property('certificate_type_code');
          expect(response.body.data[0].attributes).to.have.property('certificate_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('formatted_description');
          expect(response.body.data[0].attributes).to.have.property('certificate_type_description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
        });
  });
  it('UK certificates API - as of validate data | 1971 - 1 entry  ', function() {
    cy.request('api/v2/certificates?as_of=1971-01-01').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(1);
          // validate properties
          expect(response.body.data[0].attributes).to.have.property('certificate_type_code');
          expect(response.body.data[0].attributes).to.have.property('certificate_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('formatted_description');
          expect(response.body.data[0].attributes).to.have.property('certificate_type_description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
        });
  });
  it('UK certificates API - as of validate data | 1970 - 0 entries  ', function() {
    cy.request('api/v2/certificates?as_of=1970-01-01').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(0);
        });
  });
  it('UK certificates API - as of validate data | as_of takes current date ', function() {
    cy.request('api/v2/certificates?as_of=').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(493);
          // validate properties
          expect(response.body.data[0].attributes).to.have.property('certificate_type_code');
          expect(response.body.data[0].attributes).to.have.property('certificate_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('formatted_description');
          expect(response.body.data[0].attributes).to.have.property('certificate_type_description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
        });
  });
  it('XI certificates API - type ,length , properties ', function() {
    cy.request('xi/api/v2/certificates.json').as('comments');
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
          expect(response.body.data).to.have.length(498);
          // validate properties
          expect(response.body.data[0].attributes).to.have.property('certificate_type_code');
          expect(response.body.data[0].attributes).to.have.property('certificate_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('formatted_description');
          expect(response.body.data[0].attributes).to.have.property('certificate_type_description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
        });
  });
  it('XI certificates API - as of validate data | 1971 - 1 entry  ', function() {
    cy.request('xi/api/v2/certificates?as_of=1971-12-31').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(37);
          // validate properties
          expect(response.body.data[0].attributes).to.have.property('certificate_type_code');
          expect(response.body.data[0].attributes).to.have.property('certificate_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('formatted_description');
          expect(response.body.data[0].attributes).to.have.property('certificate_type_description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
        });
  });
  it('XI certificates API - as of validate data | 1970 - 0 entries  ', function() {
    cy.request('xi/api/v2/certificates?as_of=1970-01-01').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(0);
        });
  });
  it('XI certificates API - as of validate data | as_of takes current date ', function() {
    cy.request('xi/api/v2/certificates?as_of=').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // body length
          expect(response.body.data).to.have.length(498);
          // validate properties
          expect(response.body.data[0].attributes).to.have.property('certificate_type_code');
          expect(response.body.data[0].attributes).to.have.property('certificate_code');
          expect(response.body.data[0].attributes).to.have.property('description');
          expect(response.body.data[0].attributes).to.have.property('formatted_description');
          expect(response.body.data[0].attributes).to.have.property('certificate_type_description');
          expect(response.body.data[0].attributes).to.have.property('validity_start_date');
        });
  });
});
