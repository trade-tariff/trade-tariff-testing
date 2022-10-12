describe('quotasAPI.spec.js for UK and XI  |', function() {
  it('UK quotas API - type ,length , properties ', function() {
    cy.request('/api/v2/quota_order_numbers').as('comments');
    cy.get('@comments')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(60000);
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type');
        });
  });
  it('XI quotas API - type ,length , properties ', function() {
    cy.request('/xi/api/v2/quota_order_numbers').as('comments');
    cy.get('@comments')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property('headers');
          expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
          expect(response).to.have.property('duration');
          expect(response.duration).to.lessThan(60000);
          expect(response.body.data[0]).to.have.property('id');
          expect(response.body.data[0]).to.have.property('type');
        });
  });
});
