describe('Search', function() {
  it('Search works as expected', function() {
    cy.visit('/find_commodity');
    cy.validateSearchAutocomplete('raw', 1, 'kelp, raw', '/subheadings/1212210000-10');
    cy.validateDirectSearch('01', '/chapters/01')

    const input = cy.get('#autocomplete input').should('be.visible');

    input.type('sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf');
    cy.waitForSearchingToFinish();
    input.type('{enter}');
    cy.contains('There are no results matching your query.');
  });
});
