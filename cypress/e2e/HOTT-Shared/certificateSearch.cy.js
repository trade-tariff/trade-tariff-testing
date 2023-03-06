describe('certificate search', function() {
  context('when on the UK service', function() {
    beforeEach(function() {
      cy.visit('/uk/certificate_search');
    });

    it('searches for a certificate', function() {
      cy.get('select#type').select('9 - National Document');
      cy.get('input#code').clear().type('111');

      cy.get('form#new_search > input[name=\'new_search\']').click();
      cy.get('article.search-results');

      cy.contains('Using this certificate on CDS or CHIEF').click();
      cy.contains('Enter GBHOO followed by the licence number.');
      cy.contains('Use one of the status codes');

      cy.contains('Commodity codes that require this certificate').click();
      cy.contains('Coca leaf');
    });
  });

  context('when on the XI service', function() {
    beforeEach(function() {
      cy.visit('/xi/certificate_search');
    });

    it('searches for a certificate', function() {
      cy.get('select#type').select('9 - National Document');
      cy.get('input#code').clear().type('111');

      cy.get('form#new_search > input[name=\'new_search\']').click();
      cy.get('article.search-results');

      cy.contains('Using this certificate on CDS or CHIEF').click();
      cy.contains('Enter GBHOO followed by the licence number.');
      cy.contains('Use one of the status codes');

      cy.contains('Commodity codes that require this certificate').click();
      cy.contains('Coca leaf');
    });
  });
});
