describe('measure footnotes', function() {
  it('VAT and Excise on XI service', function() {
    cy.visit('/xi/commodities/9305200010');
    cy.contains('Import VAT and excise').click();
    cy.contains('03020').click();
    cy.contains('Value added tax for All countries');
  });
});
