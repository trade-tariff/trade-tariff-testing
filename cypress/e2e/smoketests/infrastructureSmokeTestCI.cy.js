describe('Smoke tests for infrastructure', function() {
  it('returns healthy for the search query parser', function() {
    cy.request('/api/search/healthcheck').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('git_sha1');
      expect(response.body.healthy).to.eq(true);
      expect(response.body.using_spelling_fallback).to.eq(false);
      expect(response.body.using_synonym_fallback).to.eq(false);
    });
  });

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

      // verify opensearch, caching and tokenisation
      cy.visit('/uk/find_commodity');
      cy.visit('/uk/search/toggle_beta_search');
      cy.searchForCommodity('halbiut');
      cy.get('section[id^="beta-search-results-"]').should('be.visible');
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

      // verify opensearch, caching and tokenisation
      cy.visit('/xi/find_commodity');
      cy.visit('/xi/search/toggle_beta_search');
      cy.searchForCommodity('halbiut');
      cy.get('section[id^="beta-search-results-"]').should('be.visible');
    });
  });
});
