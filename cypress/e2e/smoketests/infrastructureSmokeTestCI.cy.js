describe('Smoke tests for infrastructure', { tags: ['smokeTest'] }, function() {
  it('returns healthy for our import apps', function() {
    cy.request('/healthcheck').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('git_sha1');
    });
    cy.request('/uk/api/v2/healthcheck').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('git_sha1');
      expect(response.body.healthy).to.eq(true);
    });
    cy.request('/xi/api/v2/healthcheck').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('git_sha1');
      expect(response.body.healthy).to.eq(true);
    });
  });
});
