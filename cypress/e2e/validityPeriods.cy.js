describe('Goods nomenclature history', function() {
  context('when fetching expired headings', function() {
    const path = '/headings/6908';

    it('renders a valid periods view of the heading', function() {
      cy.visit(path, {'failOnStatusCode': false});
      cy.contains('The heading you entered could not be found for the date selected');
    });
  });

  context('when fetching expired subheadings', function() {
    const path = '/subheadings/0102900500-80';

    it('renders a valid periods view of the subheading', function() {
      cy.visit(path, {'failOnStatusCode': false});
      cy.contains('The subheading you entered could not be found for the date selected');
    });
  });

  context('when fetching expired commodities', function() {
    const path = '/commodities/6908100000';

    it('renders a valid periods view of the commodity', function() {
      cy.visit(path, {'failOnStatusCode': false});
      cy.contains('The commodity code you entered could not be found for the date selected');
    });
  });
});
