describe('Performance Metrics for DC ', () => {
  before(function () {
    cy.lighthouse('https://staging.trade-tariff.service.gov.uk/duty-calculator/uk/0702000007/import-date').as('results')
    
  })
  it('Meets performance benchmarks', function () {
    // Assert that the performance metric is greater than .85
    cy.log(this.results.performance)
    cy.log(this.results.accessibility)
    cy.wrap(this.results.performance).should('be.gt', .85)
    cy.wrap(this.results.accessibility).should('be.gt', .85)

  })
})