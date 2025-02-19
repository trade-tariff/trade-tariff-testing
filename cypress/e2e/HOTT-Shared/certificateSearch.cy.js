describe('certificate search', function() {
  context('when on the UK service', function() {
    beforeEach(function() {
      cy.visit('/uk/certificate_search');
    });
    it('searches for a certificate by code', function() {
      cy.get('input#certificate-search-form-code-field').type('D008');
      cy.get('#certificate-submit').click();
      cy.get('article.search-results');
      cy.contains('Using this certificate on CDS').click();
      cy.contains('Commodity codes that require this certificate').click();
      cy.contains('Plated or coated by hot dip galvanisation');
    });

    it('searches for a certificate by description', function() {
      cy.get('input#certificate-search-form-description-field').type('invoice');
      cy.get('#certificate-submit').click();
      cy.get('article.search-results');
      cy.contains('Using this certificate on CDS').click();
      cy.contains('Commodity codes that require this certificate').click();
      cy.contains('Plated or coated by hot dip galvanisation');
    });
  });

  context('when on the XI service', function() {
    beforeEach(function() {
      cy.visit('/xi/certificate_search');
    });

    it('searches for a certificate by code', function() {
      cy.get('input#certificate-search-form-code-field').type('D008');
      cy.get('#certificate-submit').click();
      cy.get('article.search-results');
      cy.contains('Using this certificate on CDS').click();
      cy.contains('Commodity codes that require this certificate').click();
      cy.contains('Citric acid');
    });

    it('searches for a certificate by description', function() {
      cy.get('input#certificate-search-form-description-field').type('invoice');
      cy.get('#certificate-submit').click();
      cy.get('article.search-results');
      cy.contains('Using this certificate on CDS').click();
      cy.contains('Commodity codes that require this certificate').click();
      cy.contains('Citric acid');
    });
  });
});
