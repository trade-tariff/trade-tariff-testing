describe('Smoke tests for infrastructure', function() {
  it('returns healthy for the frontend', function() {
    cy.request('/healthcheck').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('git_sha1');
    });
  });


  context('when verifying UK infrastructure', function() {
    it('returns healthy for all apps and services', function() {
      // verify backend healthcheck
      cy.request('/uk/api/v2/healthcheck').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('git_sha1');
        expect(response.body.healthy).to.eq(true);
      });
    });
  });

  context('when verifying XI infrastructure', function() {
    it('returns healthy for all apps and services', function() {
      // verify backend healthcheck
      cy.request('/xi/api/v2/healthcheck').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('git_sha1');
        expect(response.body.healthy).to.eq(true);
      });
    });
  });
});
