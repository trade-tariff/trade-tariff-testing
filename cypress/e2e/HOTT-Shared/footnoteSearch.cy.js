describe('footnote search', function() {
  context('when searching by type and code for footnotes associated with a measure', function() {
    const type = '03';
    const id = '020';

    it('returns search results', function() {
      cy.visit('/footnote_search');

      cy.get('select#type').select(type);
      cy.get('input#code').type(id);
      cy.get('form#new_search > input[name=\'new_search\']').click();

      cy.contains('Footnote search results');
      cy.contains('03020 UK VAT standard rate');
    });
  });

  context('when searching by type and code for footnotes associated with a goods nomenclature', function() {
    const type = 'TN';
    const id = '207';

    it('returns search results', function() {
      cy.visit('/footnote_search');

      cy.get('select#type').select(type);
      cy.get('input#code').type(id);
      cy.get('form#new_search > input[name=\'new_search\']').click();

      cy.contains('Footnote search results');
      cy.contains('TN207 The export of arms and WMD-related items');
    });
  });

  context('when searching by description', function() {
    const description = 'alcohol';

    it('returns search results', function() {
      cy.visit('/footnote_search');
      cy.get('input#description').type(description);
      cy.get('form#new_search > input[name=\'new_search\']').click();

      cy.contains('Footnote search results');
      cy.contains('PI001 This suspension only applies to alcohol solution');
    });
  });
});
