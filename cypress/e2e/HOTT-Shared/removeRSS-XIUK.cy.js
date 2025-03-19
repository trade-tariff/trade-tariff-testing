describe(' 🇪🇺 🇬🇧 💡 remove RSS feed functionality - XI service ', function() {
// -- HOTT- 139 --

  it('UK - RSS feed on commodities page - does not exist', function() {
    cy.visit(Cypress.env('baseUrl', '/commodities/0704109000'));
    cy.get('.govuk-main-wrapper').should('not.have.value', 'Changes');
  });

  it('XI - RSS feed on commodities page - does not exist', function() {
    cy.visit(Cypress.env('xi', '/commodities/0704109000'));
    cy.get('.govuk-main-wrapper').should('not.have.value', 'Changes');
  });
});
