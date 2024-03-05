describe('Validating the /sections redirect is working', function() {
  it('redirects from /uk/sections to /uk/find_commodity', function() {
    cy.visit('/uk/sections', {failOnStatusCode: false});
    cy.url().should('include', '/find_commodity');
  });

  it('redirects from /sections to /find_commodity', function() {
    cy.visit('/sections', {failOnStatusCode: false});
    cy.url().should('include', '/find_commodity');
  });

  it('redirects from /xi/sections to /xi/find_commodity', function() {
    cy.visit('/xi/sections', {failOnStatusCode: false});
    cy.url().should('include', '/find_commodity');
  });
});
