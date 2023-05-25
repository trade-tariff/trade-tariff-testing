describe('Using beta search', {tags: ['devOnly']}, function() {
  beforeEach(function() {
    cy.visit('/find_commodity');
    cy.visit('/search/toggle_beta_search');
  });

  // TODO: Reinstate this test when guides are adjusted/come back from HMRC
  it.skip('Search result returns guides for `fresh potatoes`', function() {
    cy.searchForCommodity('fresh potatoes');
    cy.contains('Potatoes, fresh or chilled').click();
    cy.get('.image-guide').should('exist');
    cy.get('#search-filter-navigation div div p a').should(
        'have.attr',
        'href',
        'https://www.gov.uk/guidance/classifying-edible-fruit-vegetables-and-nuts-for-import-and-export',
    );
  });

  it('Search result returns no guides for `indian`', function() {
    cy.searchForCommodity('indian');

    cy.get('.image-guide').should('not.exist');
  });

  it('Search result corrects spelling for `halbiut` and supports using the original search query', function() {
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
    cy.searchForCommodity('tripe');
    cy.get('.search-results').contains('Meat and edible meat offal');
  });

  it('Search result returns results for synonyms with a goods nomenclature item id', function() {
    cy.searchForCommodity('hedgehog');
    cy.get('.search-results').contains('Other live animals');
  });

  it('Search filters results with facet clothing_gender', function() {
    cy.searchForCommodity('clothing sets womens');
    cy.contains('Show all filters').click();
    cy.contains('Women\'s and girls\'').click();
    cy.url().should('include', 'clothing_gender');
    cy.contains('Women\'s or girls\' blouses, shirts and shirt-blouses');
    cy.get('#search-filter-navigation').contains('Results are filtered by:');
    cy.get('.facet-classifications-tag').contains('[x] Women\'s and girls').click();
    cy.get('.facet-classifications-tag').should('not.exist');
    cy.url().should('not.include', 'clothing_gender');
  });

  it('Search filters results with heading 6211', function() {
    cy.searchForCommodity('clothing sets womens');
    cy.get('a').contains('Tracksuits, ski suits and swimwear; other garments').click();
    cy.url().should('include', '6211');
    cy.get('#search-filter-navigation').contains('Results are filtered by:');
    cy.get('.facet-classifications-tag').contains('[x] Heading 6211').click();
    cy.get('.facet-classifications-tag').should('not.exist');
    cy.url().should('not.include', '6211');
  });

  it('Searching for `access equipment` returns an intercept message', function() {
    cy.searchForCommodity('access equipment');
    cy.get('#intercept-message > p > a').eq(0).click();
    cy.url().should('include', '/chapters/85');
  });

  it('Searching intercept message term `fitbit` returns results', function() {
    cy.searchForCommodity('fitbit');
    cy.get('#intercept-message');
    cy.url().should('include', '/search');
    cy.get('#search-result-with-hits');
  });

  it('Search result returns the no results page for `flibble`', function() {
    cy.searchForCommodity('flibble');

    cy.get('div.govuk-warning-text > strong').contains('There are no results');

    cy.get('div#webchat-link > p > a')
        .eq(1)
        .should(
            'have.attr',
            'href',
            'https://www.tax.service.gov.uk/ask-hmrc/chat/trade-tariff',
        );
  });

  it('Enables switching between beta and legacy search implementations', function() {
    cy.visit('/search/toggle_beta_search');
    cy.visit('/browse');
    cy.get('#enable-beta-search.govuk-inset-text > a').contains('Use the Beta Search').click();
    // we're still on the browse page
    cy.url().should('include', '/browse');
    // and the beta search inset is now enabled
    cy.get('#enable-beta-search.govuk-inset-text > a').contains('switch back to legacy search');
    // when we do a search
    cy.searchWithSearchField('ham');
    // we see beta search results
    cy.get('[id^="beta-search-results-"]');
    // on the /search url
    cy.url().should('include', '/search');
    // when we switch back
    cy.get('#enable-beta-search > a').click();
    // we see legacy search results
    cy.get('.search-results').contains('Other results containing the term ‘ham’');
    // on the /search url
    cy.url().should('include', '/search');
  });

  it('Shows commodity results with matching search reference tokens', function() {
    cy.searchForCommodity('cardboard');
    cy.url().should('include', '/search');
    cy.get('[id^="beta-search-results-"]');
  });

  it('Supports single and double quoted search terms', function() {
    cy.searchForCommodity('"cherry tomatoes"');
    cy.url().should('include', '/commodities/0702000007');
    cy.searchForCommodity('\'For the manufacture of starch\'');
    cy.url().should('include', '/commodities/0701901000');
  });

  it('Supports fast fallback search on garbage inputs', function() {
    const inputQuery = 'qwdwefwfwWWWWWWWWRGRGEWGEWGEWGEWGerwgewrgerwgrgerwgrgrehtrhtrhjtyrjyjerhwrgsrbdrhwrhwrhwrbsdfbrbhwr';
    const minimumTimeFrame = 1000; // 1 second
    const start = new Date();
    cy.searchForCommodity(inputQuery);
    const end = new Date();

    expect(end - start).to.be.lessThan(minimumTimeFrame);
  });

  context('when searching for chemicals', function() {
    it('Supports chemical search on cus numbers', function() {
      cy.searchForCommodity('0154438-3');
      cy.url().should('include', '/commodities/0409000000');
      cy.get('#tab_chemicals').click();
      cy.get('#chemicals').eq(0).contains('mel powder');
    });

    it('Supports chemical search on cas numbers', function() {
      cy.searchForCommodity('7440-15-5');
      cy.url().should('include', '/commodities/8112419000');
      cy.get('#tab_chemicals').click();
      cy.get('#chemicals').eq(0).contains('rhenium, unwrought; powders');
    });

    it('Supports chemical search on chemical names', function() {
      cy.searchForCommodity('cerium alloy');
      cy.url().should('include', '/commodities/8105200000');
      cy.get('#tab_chemicals').click();
      cy.get('#chemicals').eq(0).contains('cerium alloy');
    });
  });

  context('when using the search input with search suggestions', function() {
    it('Search suggestions are displayed and work for search references', function() {
      cy.validateAutocompleteNthItem(
          'raw',
          2,
          'kelp, raw',
          '/subheadings/1212210000-10',
      );
    });

    it('Search suggestions are displayed and work for chemical names', function() {
      cy.validateAutocompleteNthItem(
          'insulin, human',
          1,
          'insulin, human',
          '/commodities/2937120000',
          '0036941-5',
          'Chemical',
      );
    });

    it('Search suggestions are displayed and work for chapters', function() {
      cy.validateAutocompleteNthItem(
          '01',
          1,
          '01',
          '/chapters/01',
          '27623',
          'Chapter',
      );
    });

    it('Search suggestions are displayed and work for headings', function() {
      cy.validateAutocompleteNthItem(
          '0101',
          1,
          '0101',
          '/headings/0101',
          '27624',
          'Heading',
      );
    });

    it('Search suggestions are displayed and work for subheadings', function() {
      cy.validateAutocompleteNthItem(
          '010121',
          1,
          '010121',
          '/subheadings/0101210000-10',
          '93797',
          'Subheading',
      );
    });

    it('Search suggestions are displayed and work for commodities', function() {
      cy.validateAutocompleteNthItem(
          '0101210000',
          1,
          '0101210000',
          '/commodities/0101210000',
          '93796',
          'Commodity',
      );
    });

    it('Search suggestions are displayed and work for cus numbers', function() {
      cy.validateAutocompleteNthItem(
          '01500',
          1,
          '0150000-1',
          '/commodities/3903909090',
          '0150000-1',
          'Chemical',
      );
    });

    it('Search suggestions are displayed and work for cas rn numbers', function() {
      cy.validateAutocompleteNthItem(
          '107000',
          1,
          '107000',
          '/commodities/2937290000',
          '0040087-3',
          'Chemical',
      );
    });
  });

  context('when using the search input on current goods nomenclature', function() {
    it('search navigates to chapters', function() {
      cy.get('#q').type('01{enter}');
      cy.url().should('include', '/chapters/01');
    });

    it('search navigates to non-declarable headings', function() {
      cy.get('#q').type('0101{enter}');
      cy.url().should('include', '/headings/0101');
    });

    it('search navigates to declarable headings', function() {
      cy.get('#q').type('0501{enter}');
      cy.url().should('include', '/commodities/0501000000');
    });

    it('search navigates to 6 digit subheadings', function() {
      cy.get('#q').type('010121{enter}');
      cy.url().should('include', '/subheadings/0101210000-10');
    });

    it('search navigates to 8 digit subheadings', function() {
      cy.get('#q').type('20079950{enter}');
      cy.url().should('include', '/subheadings/2007995000-80');
    });

    it('search navigates to 10 digit subheadings', function() {
      cy.get('#q').type('2007993929{enter}');
      cy.url().should('include', '/subheadings/2007993929-20');
    });

    it('search navigates to short-form commodity codes', function() {
      cy.get('#q').type('27101245{enter}');
      cy.url().should('include', '/commodities/2710124500');
    });

    it('search navigates to 10 digit commodities', function() {
      cy.get('#q').type('0101210000{enter}');
      cy.url().should('include', '/commodities/0101210000');
    });
  });


  context('when using the search input on expired goods nomenclature', function() {
    it('search navigates to expired headings ', function() {
      cy.get('#q').type('6908{enter}');
      cy.url().should('include', '/headings/6908');
    });

    it('search navigates to expired subheadings in their short form', function() {
      cy.get('#q').type('01029005{enter}');
      cy.url().should('include', '/subheadings/0102900500-80');
    });

    it('search navigates to expired commodities', function() {
      cy.get('#q').type('6908109000{enter}');
      cy.url().should('include', '/commodities/6908109000');
    });
  });

  context('when passing nonsense input', function() {
    it('search shows no results', function() {
      cy.get('#q').type('sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf{enter}');
      cy.contains('There are no results matching your query.');
    });
  });
});
