describe('navigating the AZ for different goods nomenclature', function() {
  it('displays A-Z index for UK and XI services', function() {
    cy.visit('/a-z-index/a');
    cy.get('.govuk-table__caption').contains('A');

    cy.visit('/a-z-index/b');
    cy.get('.govuk-table__caption').contains('B');

    cy.visit('/xi/a-z-index/a');
    cy.get('.govuk-table__caption').contains('A');

    cy.visit('/xi/a-z-index/b');
    cy.get('.govuk-table__caption').contains('B');
  });

  context('when navigating a chapter in the az index', function() {
    const path = '/a-z-index/i';

    it('displays the chapter page', function() {
      cy.visit(path);
      cy.contains('Instruments And Apparatus Rules Instruments, Musical Other')
          .click();
      cy.url().should('include', '/chapters/92');
    });
  });


  context('when navigating a heading in the az index', function() {
    const path = '/a-z-index/i';

    it('displays the heading page', function() {
      cy.visit(path);
      cy.contains('Ice Cream').click();
      cy.url().should('include', '/headings/2105');
    });
  });

  context('when navigating a subheading in the az index', function() {
    const path = '/a-z-index/i';

    it('displays the subheading page', function() {
      cy.visit(path);
      cy.contains('Ice Breakers').click();
      cy.url().should('include', '/subheadings/8906900000-80');
    });
  });
});
