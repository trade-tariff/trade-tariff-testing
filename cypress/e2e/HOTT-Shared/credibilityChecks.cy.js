describe('credibility checks', function () {
  context('when fetching a commodity with known credibility checks on the uk service', function() {
    it('shows credibility checks', function () {
        cy.visit('/commodities/2204219313');
        cy.get('td.measure-type-col.481 > span').contains('Declaration of subheading submitted to restrictions (import)')
    });
  });

  context('when fetching a commodity with known credibility checks on the xi service', function() {
    it('shows credibility checks', function () {
        cy.visit('/xi/commodities/2009897311');
        cy.get('td.measure-type-col.483 > span').contains('Declaration of subheading submitted to legal restrictions (unit price)')
    });
  });
});
