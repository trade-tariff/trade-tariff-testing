import commonPage from '../../pages/commonPage';
import searchPage from '../../pages/searchPage';
import commonHelpers from '../../helpers/commonHelpers';

describe('Using beta search', {tags: ['devOnly']}, function() {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('search');
  });
  beforeEach(function() {
    data = commonPage.getTestData();
    cy.visit('/find_commodity');
    cy.visit('/search/toggle_beta_search');
  });

  // TODO: Reinstate this test when guides are adjusted/come back from HMRC
  it.skip('Search result returns guides for `fresh potatoes`', function() {
    searchPage.searchForCommodity(data.searchstr);
    commonPage.verifyTxtAndClk(data.containstxt);
    commonPage.imgShudExist();
    searchPage.searchFilterNavigatnLnk(data.link);
  });

  it('Search result returns no guides for `indian`', function() {
    // read test data from environment variable and get test case specific data to run
    searchPage.searchForCommodity(data.searchstr);
    commonPage.imgShudNotExist();
  });

  it('Search result corrects spelling for `halbiut` and supports using the original search query', function() {
    searchPage.searchForCommodity(data.searchstr);
    searchPage.verifyH1HeadingTxt(data.containstxt);
    searchPage.clkNonCorrectedSearchResultsLink();
    commonPage.verifyUrlShudInclude(data.include);
    searchPage.verifyInterceptMessageTxt(data.containstxt2);
  });

  it('Search result returns results for synonyms', function() {
    searchPage.searchForCommodity(data.searchstr);
    searchPage.verifySearchResults(data.containstxt);
  });

  it('Search result returns results for synonyms with a goods nomenclature item id', function() {
    searchPage.searchForCommodity(data.searchstr);
    searchPage.verifySearchResults(data.containstxt);
  });

  it('Search filters results with facet clothing_gender', function() {
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
    searchPage.searchForCommodity(data.searchstr);
    commonPage.verifyTxtAndClk(data.containstxt);
    commonPage.verifyUrlShudInclude(data.include);
    commonPage.verifyContains(data.containstxt2);
    searchPage.classificatnsTagContainsAndClk(data.containstxt3);
    searchPage.elementShudNotExist();
    commonPage.verifyUrlShudNotInclude(data.include);
  });

  it('Searching for `access equipment` returns an intercept message', function() {
    searchPage.searchForCommodity(data.searchstr);
    commonPage.verifyTxtAndClk(data.containstxt);
    commonPage.verifyUrlShudInclude(data.include);
  });

  it('Searching intercept message term `fitbit` returns results', function() {
    searchPage.searchForCommodity(data.searchstr);
    searchPage.interceptMsgCheck();
    commonPage.verifyUrlShudInclude(data.include);
    searchPage.searchResultsWithHitsCheck();
  });

  it('Search result returns the no results page for `flibble`', function() {
    searchPage.searchForCommodity(data.searchstr);
    searchPage.verifyInterceptMessageTxt(data.containstxt);
    commonPage.verifyWebChatShudHaveLink(data.link);
  });

  it('Enables switching between beta and legacy search implementations', function() {
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
    searchPage.searchForCommodity(data.searchstr);
    commonPage.verifyUrlShudInclude(data.include);
    searchPage.verifyBetaSearchResults();
  });

  it('Supports single and double quoted search terms', function() {
    // double quote search
    cy.searchForCommodity(data.searchstr);
    commonPage.verifyUrlShudInclude(data.include);
    // single quote search
    cy.searchForCommodity(data.searchstr2);
    commonPage.verifyUrlShudInclude(data.include2);
  });

  it('Supports fast fallback search on garbage inputs', function() {
    const minimumTimeFrame = 1000; // 1 second
    const start = new Date();
    searchPage.searchForCommodity(data.inputQuery);
    const end = new Date();

    expect(end - start).to.be.lessThan(minimumTimeFrame);
  });

  context('when searching for chemicals', function() {
    it('Supports chemical search on cus numbers', function() {
      commonHelpers.searchChemicals(data.searchstr, data.include, data.containstxt);
    });

    it('Supports chemical search on cas numbers', function() {
      commonHelpers.searchChemicals(data.searchstr, data.include, data.containstxt);
    });

    it('Supports chemical search on chemical names', function() {
      commonHelpers.searchChemicals(data.searchstr, data.include, data.containstxt);
    });
  });

  context('when using the search input with search suggestions', function() {
    it('Search suggestions are displayed and work for search references', function() {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl);
    });

    it('Search suggestions are displayed and work for chemical names', function() {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for chapters', function() {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for headings', function() {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for subheadings', function() {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for commodities', function() {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for cus numbers', function() {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for cas rn numbers', function() {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });
  });

  context('when using the search input on current goods nomenclature', function() {
    it('search navigates to chapters', function() {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to non-declarable headings', function() {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to declarable headings', function() {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to 6 digit subheadings', function() {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to 8 digit subheadings', function() {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to 10 digit subheadings', function() {
      searchPage.verifySearchSuggstnListAndClkSpecificSuggstnTxt(data.searchstr, data.suggestiontxttomatch);
      commonPage.verifyUrlShudMatch(data.match);
    });

    it('search navigates to short-form commodity codes', function() {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to 10 digit commodities', function() {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });
  });

  context('when using the search input on expired goods nomenclature', function() {
    it('search navigates to expired headings', function() {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to expired subheadings in their short form', function() {
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstrshortform);
      commonPage.verifyUrlShudMatch(data.include);
    });

    it('search navigates to expired commodities', function() {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });
  });

  context('when passing nonsense input', function() {
    it('search shows no results', function() {
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstr);
      commonPage.verifyContains(data.containstxt);
    });
  });
});
