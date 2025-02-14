describe('quota search', function() {
  it('works', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('input#goods_nomenclature_item_id').click();
    cy.get('input#goods_nomenclature_item_id').clear();
    cy.get('input#goods_nomenclature_item_id').type('0702001007');
    cy.get('input[name="new_search"]').click();
    cy.contains('Quota search results');
    cy.get('.govuk-table__head')
        .contains('Order number');
  });
});
