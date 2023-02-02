describe('chapter 99 specific warnings', function() {
  it('shows specific warning messaging for a commodity', function() {
    cy.visit('/commodities/9919000010');
    cy.contains('This code cannot be without prior authorisation from HMRC');
  });

  it('shows specific warning messaging for a heading', function() {
    cy.visit('/commodities/9905000000');
    cy.contains('This code cannot be without prior authorisation from HMRC');
  });
});
