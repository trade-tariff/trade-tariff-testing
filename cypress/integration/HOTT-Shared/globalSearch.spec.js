/* eslint-disable max-len */
describe('globalSearch.spec| global search function on UK and XI service', {tags: ['config', 'xbrowser-tag']}, function() {
  it('Availabilty all pages', function() {
    cy.visit('/find_commodity');
    cy.get('.tariff-search-banner__toggle').click();
    cy.contains('Search the Online Tariff');
    cy.contains('Enter the name of the goods or a commodity code. Commodity codes are 10-digit numbers that classify goods so you can fill in declarations and other paperwork. You must use the right commodity code.');

    // search for commodity by name
    cy.globalSearchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
    // search for commodity by number
    cy.get('.tariff-search-banner__toggle').click();
    cy.globalSearchForCommodity('0702000007');
    cy.contains('Commodity 0702000007');
  });
});
