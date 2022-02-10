describe('validate subheadings on UK and XI services - Frontend and API', function() {
  it('UK front end', function() {
    cy.visit('subheadings/0910999100-10');
    cy.contains('Subheading 09109991 - Other ');
  });
  it('UK API', function() {
    cy.request('/api/v2/subheadings/0910999100-10').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // headers
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(1000);
          // body lengths
          expect(response.body.included).to.have.length(21);
          // validate properties
          expect(response.body.data).to.have.property('id');
          expect(response.body.data).to.have.property('type').equals('subheading');
        });
  });
  it('XI front end', function() {
    cy.visit('xi/subheadings/0910999100-10');
    cy.contains('Subheading 09109991 - Other ');
  });
  it('XI API', function() {
    cy.request('xi/api/v2/subheadings/0910999100-10').as('comments');
    cy.get('@comments')
        .then((response) => {
          // status code
          expect(response.status).to.eq(200);
          // headers
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          // response duration less than 2000
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(1000);
          // body lengths
          expect(response.body.included).to.have.length(24);
          // validate properties
          expect(response.body.data).to.have.property('id');
          expect(response.body.data).to.have.property('type').equals('subheading');
        });
  });
});
