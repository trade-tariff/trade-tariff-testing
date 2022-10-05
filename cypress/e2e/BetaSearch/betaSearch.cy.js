describe('Using beta search', {tags: ['devOnly']}, function() {
  it('Search result returns guides for `abs`', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('abs');

    cy.get('.image-guide').should('exist');

    cy.get('#search-filter-navigation div div p a').should(
        'have.attr',
        'href',
        'https://www.gov.uk/guidance/classifying-vehicles',
    );
  });

  it('Search result returns no guides for `clothing sets`', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('clothing sets');

    cy.get('.image-guide').should('not.exist');
  });

  it('Search result corrects spelling for `halbiut`', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('halbiut');

    cy.get('h1').contains('Search results for \'halibut\'');
  });

  it('Search result returns results for synonyms', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('tripe');
    cy.get('table').find('tr').find('td').contains('MEAT AND EDIBLE MEAT OFFAL');
  });

  it('Search redirects for expired goods nomenclature', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('0503');
    cy.url().should('include', '/headings/0503');
  });

  // TODO: This needs to return results
  it('Search does not redirect for existing goods nomenclature', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('0101');
    cy.url().should('include', '/search?q=0101');
  });

  it('Search filters results with facet clothing_gender', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('clothing sets');
    cy.get('.govuk-accordion__section').eq(0).click();
    cy.get('a').contains('Women\'s and girls\'').click();
    cy.url().should('include', 'clothing_gender');
    cy.get('a').contains('Women\'s or girls\' blouses, shirts and shirt-blouses');
    cy.get('#search-filter-navigation').contains('Results are filtered by:');
    cy.get('.facet-classifications-tag').contains('[x] Women\'s and girls').click();
    cy.get('.facet-classifications-tag').should('not.exist');
    cy.url().should('not.include', 'clothing_gender');
  });

  it('Search filters results with heading 6211', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('clothing sets');
    cy.get('a').contains('Tracksuits, ski suits and swimwear; other garments').click();
    cy.url().should('include', '6211');
    cy.get('#search-filter-navigation').contains('Results are filtered by:');
    cy.get('.facet-classifications-tag').contains('[x] Heading 6211').click();
    cy.get('.facet-classifications-tag').should('not.exist');
    cy.url().should('not.include', '6211');
  });
});
