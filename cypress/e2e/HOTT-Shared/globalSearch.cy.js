
describe('globalSearch.spec| global search function on UK and XI service ** Unreleased **', {tags: ['config', 'unreleased-tag']}, {tags: ['config', 'xbrowser-tag']}, function() {
  it('Availabilty all pages', function() {
    // search for commodity by number
    cy.visit('/find_commodity');
    cy.globalSearchForCommodity('0702001007');
    cy.url().should('include', '/commodities/0702001007');

    // search for commodity by search reference
    cy.visit('/find_commodity');
    cy.globalSearchForCommodity('gherkins');
    cy.url().should('include', '/commodities/0707009000');
  });
});
