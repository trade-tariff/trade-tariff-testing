import commonPage from '../../pages/commonPage';
import searchPage from '../../pages/searchPage';
import commodityPage from '../../pages/commodityPage';

describe('Using beta search', {tags: ['devOnly']}, function() {
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('search');
  });
  beforeEach(function() {
    cy.visit('/find_commodity');
    cy.visit('/search/toggle_beta_search');
  });

  // TODO: Reinstate this test when guides are adjusted/come back from HMRC
  it.skip('Search result returns guides for `fresh potatoes`', function() {
    const data = Cypress.env('testData')[0];
    searchPage.searchForCommodity(data.searchstr);
    commonPage.verifyTxtAndClk(data.containstxt);
    commonPage.imgShudExist();
    searchPage.searchFilterNavigatnLnk(data.link);
  });

  it('Search result returns no guides for `indian`', function() {
    // read test data from environment variable and get test case specific data to run
    const data = Cypress.env('testData')[1];
    searchPage.searchForCommodity(data.searchstr);
    commonPage.imgShudNotExist();
  });

  it('Search result corrects spelling for `halbiut` and supports using the original search query', function() {
    const data = Cypress.env('testData')[2];
    searchPage.searchForCommodity(data.searchstr);
    searchPage.verifyH1HeadingTxt(data.containstxt);
    searchPage.clkNonCorrectedSearchResultsLink();
    commonPage.verifyUrlShudInclude(data.include);
    searchPage.verifyInterceptMessageTxt(data.containstxt2);
  });

  it('Search result returns results for synonyms', function() {
    const data = Cypress.env('testData')[3];
    searchPage.searchForCommodity(data.searchstr);
    searchPage.verifySearchResults(data.containstxt);
  });

  it('Search result returns results for synonyms with a goods nomenclature item id', function() {
    const data = Cypress.env('testData')[4];
    searchPage.searchForCommodity(data.searchstr);
    searchPage.verifySearchResults(data.containstxt);
  });

  it('Search filters results with facet clothing_gender', function() {
    const data = Cypress.env('testData')[5];
    searchPage.searchForCommodity(data.searchstr);
    commonPage.verifyTxtAndClk(data.containstxt);
    commonPage.verifyTxtAndClk(data.containstxt2);
    commonPage.verifyUrlShudInclude(data.include);
    commonPage.verifyContains(data.containstxt3);
    commonPage.verifyContains(data.containstxt4);
    searchPage.classificatnsTagContainsAndClk(data.containstxt5);
    searchPage.elementShudNotExist();
    commonPage.verifyUrlShudNotInclude(data.include);
  });

  it('Search filters results with heading 6211', function() {
    const data = Cypress.env('testData')[6];
    searchPage.searchForCommodity(data.searchstr);
    commonPage.verifyTxtAndClk(data.containstxt);
    commonPage.verifyUrlShudInclude(data.include);
    commonPage.verifyContains(data.containstxt2);
    searchPage.classificatnsTagContainsAndClk(data.containstxt3);
    searchPage.elementShudNotExist();
    commonPage.verifyUrlShudNotInclude(data.include);
  });

  it('Searching for `access equipment` returns an intercept message', function() {
    const data = Cypress.env('testData')[7];
    searchPage.searchForCommodity(data.searchstr);
    commonPage.verifyTxtAndClk(data.containstxt);
    commonPage.verifyUrlShudInclude(data.include);
  });

  it('Searching intercept message term `fitbit` returns results', function() {
    const data = Cypress.env('testData')[8];
    searchPage.searchForCommodity(data.searchstr);
    searchPage.interceptMsgCheck();
    commonPage.verifyUrlShudInclude(data.include);
    searchPage.searchResultsWithHitsCheck();
  });

  it('Search result returns the no results page for `flibble`', function() {
    const data = Cypress.env('testData')[9];
    searchPage.searchForCommodity(data.searchstr);
    searchPage.verifyInterceptMessageTxt(data.containstxt);
    commonPage.verifyWebChatShudHaveLink(data.link);
  });

  it('Enables switching between beta and legacy search implementations', function() {
    const data = Cypress.env('testData')[10];
    commonPage.goToUrl(data.linktoselect);
    commonPage.goToUrl(data.include);
    commonPage.verifyTxtAndClk(data.containstxt);
    // we're still on the browse page
    commonPage.verifyUrlShudInclude(data.include);
    // and the beta search inset is now enabled
    commonPage.verifyContains(data.containstxt2);
    // when we do a search
    searchPage.searchWithSearchField('ham');
    // we see beta search results
    searchPage.verifyBetaSearchResults();
    // on the /search url
    commonPage.verifyUrlShudInclude(data.include2);
    // when we switch back
    searchPage.enableBetaSearch();
    // we see legacy search results
    searchPage.verifySearchResults(data.containstxt3);
    // on the /search url
    commonPage.verifyUrlShudInclude(data.include2);
  });

  it('Shows commodity results with matching search reference tokens', function() {
    const data = Cypress.env('testData')[11];
    searchPage.searchForCommodity(data.searchstr);
    commonPage.verifyUrlShudInclude(data.include);
    searchPage.verifyBetaSearchResults();
  });

  it('Supports single and double quoted search terms', function() {
    const data = Cypress.env('testData')[12];
    // double quote search
    cy.searchForCommodity(data.searchstr);
    commonPage.verifyUrlShudInclude(data.include);
    // single quote search
    cy.searchForCommodity(data.searchstr2);
    commonPage.verifyUrlShudInclude(data.include2);
  });

  it('Supports fast fallback search on garbage inputs', function() {
    const data = Cypress.env('testData')[13];
    const minimumTimeFrame = 1000; // 1 second
    const start = new Date();
    searchPage.searchForCommodity(data.inputQuery);
    const end = new Date();

    expect(end - start).to.be.lessThan(minimumTimeFrame);
  });

  context('when searching for chemicals', function() {
    it('Supports chemical search on cus numbers', function() {
      const data = Cypress.env('testData')[14];
      searchPage.searchForCommodity(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
      commodityPage.clkChemicalsTab();
      commodityPage.verifyChemicalsContains(data.containstxt);
    });

    it('Supports chemical search on cas numbers', function() {
      const data = Cypress.env('testData')[15];
      searchPage.searchForCommodity(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
      commodityPage.clkChemicalsTab();
      commodityPage.verifyChemicalsContains(data.containstxt);
    });

    it('Supports chemical search on chemical names', function() {
      const data = Cypress.env('testData')[16];
      searchPage.searchForCommodity(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
      commodityPage.clkChemicalsTab();
      commodityPage.verifyChemicalsContains(data.containstxt);
    });
  });

  context('when using the search input with search suggestions', function() {
    it('Search suggestions are displayed and work for search references', function() {
      const data = Cypress.env('testData')[17];
      cy.validateAutocompleteNthItem(data.inputText, data.nthItem, data.expectedText, data.expectedUrl);
    });

    it('Search suggestions are displayed and work for chemical names', function() {
      const data = Cypress.env('testData')[18];
      cy.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType,
      );
    });

    it('Search suggestions are displayed and work for chapters', function() {
      const data = Cypress.env('testData')[19];
      cy.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType,
      );
    });

    it('Search suggestions are displayed and work for headings', function() {
      const data = Cypress.env('testData')[20];
      cy.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType,
      );
    });

    it('Search suggestions are displayed and work for subheadings', function() {
      const data = Cypress.env('testData')[21];
      cy.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType,
      );
    });

    it('Search suggestions are displayed and work for commodities', function() {
      const data = Cypress.env('testData')[22];
      cy.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType,
      );
    });

    it('Search suggestions are displayed and work for cus numbers', function() {
      const data = Cypress.env('testData')[23];
      cy.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType,
      );
    });

    it('Search suggestions are displayed and work for cas rn numbers', function() {
      const data = Cypress.env('testData')[24];
      cy.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType,
      );
    });
  });

  context('when using the search input on current goods nomenclature', function() {
    it('search navigates to chapters', function() {
      const data = Cypress.env('testData')[25];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
    });

    it('search navigates to non-declarable headings', function() {
      const data = Cypress.env('testData')[26];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
    });

    it('search navigates to declarable headings', function() {
      const data = Cypress.env('testData')[27];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
    });

    it('search navigates to 6 digit subheadings', function() {
      const data = Cypress.env('testData')[28];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
    });

    it('search navigates to 8 digit subheadings', function() {
      const data = Cypress.env('testData')[29];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
    });

    it('search navigates to 10 digit subheadings', function() {
      const data = Cypress.env('testData')[30];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudMatch(data.match);
    });

    it('search navigates to short-form commodity codes', function() {
      const data = Cypress.env('testData')[31];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
    });

    it('search navigates to 10 digit commodities', function() {
      const data = Cypress.env('testData')[32];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
    });
  });


  context('when using the search input on expired goods nomenclature', function() {
    it('search navigates to expired headings ', function() {
      const data = Cypress.env('testData')[33];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
    });

    it('search navigates to expired subheadings in their short form', function() {
      const data = Cypress.env('testData')[34];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
    });

    it('search navigates to expired commodities', function() {
      const data = Cypress.env('testData')[35];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyUrlShudInclude(data.include);
    });
  });

  context('when passing nonsense input', function() {
    it('search shows no results', function() {
      const data = Cypress.env('testData')[36];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyContains(data.containstxt);
    });
  });
});
