describe('Using beta search', {tags: ['devOnly']}, function() {
  it('Search result returns guides for `fresh potatoes`', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('fresh potatoes');

    cy.get('.image-guide').should('exist');

    cy.get('#search-filter-navigation div div p a').should(
        'have.attr',
        'href',
        'https://www.gov.uk/guidance/classifying-edible-fruits-nuts-and-peel',
    );
  });

  it('Search result returns no guides for `indian`', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('indian');

    cy.get('.image-guide').should('not.exist');
  });

  it('Search result corrects spelling for `halbiut` and supports using the original search query', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('halbiut');

    cy.get('h1').contains('Search results for ‘halibut’');
    cy.get('div#search-results-spelling > p.corrected-search-results > span.non-corrected-search-results > a')
        .click();

    cy.url().should(
        'include',
        '/search?q=halbiut&spell=0',
    );

    cy.get('#intercept-message').contains('There are no results');
  });

  it('Search result returns results for synonyms', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('tripe');
    cy.get('.search-results').contains('Meat and edible meat offal');
  });

  it('Search redirects for search heading `0101`', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('0101');
    cy.url().should('include', '/headings/0101');
  });

  it('Search redirects for search subheading `010129`', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('010129');
    cy.url().should('include', '/subheadings/0101290000-80');
  });

  it('Search redirects for search commodity `0101210000`', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('0101210000');
    cy.url().should('include', '/commodities/0101210000');
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

  it('Searching for `access equipment` returns an intercept message', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('access equipment');
    cy.get('#intercept-message > p > a').eq(0).click();
    cy.url().should('include', '/chapters/85');
  });

  it('Search result returns the no results page for `nothing`', function() {
    cy.visit('/find_commodity');
    cy.searchForCommodity('nothing');

    cy.get('div.govuk-warning-text > strong').contains('There are no results');

    cy.get('div#webchat-link > p > a')
        .eq(1)
        .should(
            'have.attr',
            'href',
            'https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff',
        );
  });
});
