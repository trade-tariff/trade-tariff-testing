describe.skip('Performance Metrics for HOTT ', () => {
  before(function() {
    cy.lighthouse('https://www.trade-tariff.service.gov.uk/sections').as('results');
  });
  it('Meets performance benchmarks', function() {
    // Assert that the performance metric is greater than .85
    cy.log(this.results.performance);
    cy.log(this.results.accessibility);
    cy.wrap(this.results.performance).should('be.gt', .85);
    cy.wrap(this.results.accessibility).should('be.gt', .85);
  });
});
