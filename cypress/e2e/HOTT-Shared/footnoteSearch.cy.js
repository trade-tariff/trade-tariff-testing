describe('footnote search', function() {
  context('when searching by type and code for footnotes associated with a measure', function() {
    const code = '03020';

    it('returns search results', function() {
      cy.visit('/footnote_search');

      cy.get('input#footnote-search-form-code-field').type(code);
      cy.get('#footnote-submit').click();

      cy.contains('Footnote search results');
      cy.contains('03020 UK VAT standard rate');
    });
  });

  context('when searching by code for footnotes associated with a goods nomenclature', function() {
    const code = 'TN207';

    it('returns search results', function() {
      cy.visit('/footnote_search');

      cy.get('input#footnote-search-form-code-field').type(code);
      cy.get('#footnote-submit').click();

      cy.contains('Footnote search results');
      cy.contains('TN207 The export of arms and WMD-related items');
    });
  });

  context('when searching by description', function() {
    const description = 'alcohol';

    it('returns search results', function() {
      cy.visit('/footnote_search');
      cy.get('input#footnote-search-form-description-field').type(description);
      cy.get('#footnote-submit').click();

      cy.contains('Footnote search results');
      cy.contains('PI001 This suspension only applies to alcohol solution');
    });
  });
});
