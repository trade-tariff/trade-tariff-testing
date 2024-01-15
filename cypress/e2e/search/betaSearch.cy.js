import commonPage from '../../pages/commonPage';
import searchPage from '../../pages/searchPage';
import commonHelpers from '../../helpers/commonHelpers';

describe('Using beta search', {tags: ['devOnly']}, () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.setTestData('search');
  });
  beforeEach(() => {
    data = commonPage.getTestData();
    commonPage.goToUrl('/find_commodity');
    commonPage.goToUrl('/search/toggle_beta_search');
  });

  // TODO: Reinstate this test when guides are adjusted/come back from HMRC
  it.skip('Search result returns guides for `fresh potatoes`', () => {
    searchPage.searchForCommodity(data.searchStr);
    commonPage.verifyTxtAndClk(data.pageContains);
    commonPage.imgShudExist();
    searchPage.searchFilterNavigatnLnk(data.link);
  });

  it('Search result returns no guides for `indian`', () => {
    // read test data from environment variable and get test case specific data to run
    searchPage.searchForCommodity(data.searchStr);
    commonPage.imgShudNotExist();
  });

  it('Search result corrects spelling for `halbiut` and supports using the original search query', () => {
    searchPage.searchForCommodity(data.searchStr);
    searchPage.verifySearchResultsHeading(data.pageContains);
    searchPage.clkNonCorrectedSearchResultsLink();
    commonPage.verifyUrlShudInclude(data.shudInclude);
    searchPage.verifyInterceptMessageTxt(data.pageContains2);
  });

  it('Search result returns results for synonyms', () => {
    commonHelpers.searchReturnsResultsForSynonmys(data.searchStr, data.pageContains);
  });

  it('Search result returns results for synonyms with a goods nomenclature item id', () => {
    commonHelpers.searchReturnsResultsForSynonmys(data.searchStr, data.pageContains);
  });

  it('Search filters results with facet clothing_gender', () => {
    searchPage.searchForCommodity(data.searchStr);
    commonPage.verifyTxtAndClk(data.pageContains);
    commonPage.verifyTxtAndClk(data.pageContains2);
    commonPage.verifyUrlShudInclude(data.shudInclude);
    commonPage.verifyContains(data.pageContains3);
    commonPage.verifyContains(data.pageContains4);
    searchPage.classificatnsTagContainsAndClk(data.pageContains5);
    searchPage.elementShudNotExist();
    commonPage.verifyUrlShudNotInclude(data.shudInclude);
  });

  it('Search filters results with heading 6211', () => {
    searchPage.searchForCommodity(data.searchStr);
    commonPage.verifyTxtAndClk(data.pageContains);
    commonPage.verifyUrlShudInclude(data.shudInclude);
    commonPage.verifyContains(data.pageContains2);
    searchPage.classificatnsTagContainsAndClk(data.pageContains3);
    searchPage.elementShudNotExist();
    commonPage.verifyUrlShudNotInclude(data.shudInclude);
  });

  it('Searching for `access equipment` returns an intercept message', () => {
    searchPage.searchForCommodity(data.searchStr);
    commonPage.verifyTxtAndClk(data.pageContains);
    commonPage.verifyUrlShudInclude(data.shudInclude);
  });

  it('Searching intercept message term `fitbit` returns results', () => {
    searchPage.searchForCommodity(data.searchStr);
    searchPage.interceptMsgCheck();
    commonPage.verifyUrlShudInclude(data.shudInclude);
    searchPage.searchResultsWithHitsCheck();
  });

  it('Search result returns the no results page for `flibble`', () => {
    searchPage.searchForCommodity(data.searchStr);
    searchPage.verifyInterceptMessageTxt(data.pageContains);
    commonPage.verifyWebChatShudHaveLnk(data.link);
  });

  it('Enables switching between beta and legacy search implementations', () => {
    commonPage.goToUrl(data.linktoselect);
    commonPage.goToUrl(data.shudInclude);
    commonPage.verifyTxtAndClk(data.pageContains);
    // we're still on the browse page
    commonPage.verifyUrlShudInclude(data.shudInclude);
    // and the beta search inset is now enabled
    commonPage.verifyContains(data.pageContains2);
    // when we do a search
    searchPage.searchWithSearchField('ham');
    // we see beta search results
    searchPage.verifyBetaSearchResults();
    // on the /search url
    commonPage.verifyUrlShudInclude(data.shudInclude2);
    // when we switch back
    searchPage.enableBetaSearch();
    // we see legacy search results
    searchPage.verifySearchResults(data.pageContains3);
    // on the /search url
    commonPage.verifyUrlShudInclude(data.shudInclude2);
  });

  it('Shows commodity results with matching search reference tokens', () => {
    searchPage.searchForCommodity(data.searchStr);
    commonPage.verifyUrlShudInclude(data.shudInclude);
    searchPage.verifyBetaSearchResults();
  });

  it('Supports single and double quoted search terms', () => {
    // double quote search
    cy.searchForCommodity(data.searchStr);
    commonPage.verifyUrlShudInclude(data.shudInclude);
    // single quote search
    cy.searchForCommodity(data.searchStr2);
    commonPage.verifyUrlShudInclude(data.shudInclude2);
  });

  it('Supports fast fallback search on garbage inputs', () => {
    const minimumTimeFrame = 1000; // 1 second
    const start = new Date();
    searchPage.searchForCommodity(data.inputQuery);
    const end = new Date();
    expect(end - start).to.be.lessThan(minimumTimeFrame);
  });

  context('when searching for chemicals', () => {
    it('Supports chemical search on cus numbers', () => {
      commonHelpers.searchChemicals(data.searchStr, data.shudInclude, data.pageContains);
    });

    it('Supports chemical search on cas numbers', () => {
      commonHelpers.searchChemicals(data.searchStr, data.shudInclude, data.pageContains);
    });

    it('Supports chemical search on chemical names', () => {
      commonHelpers.searchChemicals(data.searchStr, data.shudInclude, data.pageContains);
    });
  });

  context('when using the search input with search suggestions', () => {
    it('Search suggestions are displayed and work for search references', () => {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl);
    });

    it('Search suggestions are displayed and work for chemical names', () => {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for chapters', () => {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for headings', () => {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for subheadings', () => {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for commodities', () => {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for cus numbers', () => {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for cas rn numbers', () => {
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });
  });

  context('when using the search input on current goods nomenclature', () => {
    it('search navigates to chapters', () => {
      commonHelpers.searchNavigates(data.searchStr, data.shudInclude);
    });

    it('search navigates to non-declarable headings', () => {
      commonHelpers.searchNavigates(data.searchStr, data.shudInclude);
    });

    it('search navigates to declarable headings', () => {
      commonHelpers.searchNavigates(data.searchStr, data.shudInclude);
    });

    it('search navigates to 6 digit subheadings', () => {
      commonHelpers.searchNavigatesToSubheadings(data.searchStr, data.suggestionTxtToMatch, data.matchStr);
    });

    it('search navigates to 8 digit subheadings', () => {
      commonHelpers.searchNavigatesToSubheadings(data.searchStr, data.suggestionTxtToMatch, data.matchStr);
    });

    it('search navigates to 10 digit subheadings', () => {
      commonHelpers.searchNavigatesToSubheadings(data.searchStr, data.suggestionTxtToMatch, data.matchStr);
    });

    it('search navigates to short-form commodity codes', () => {
      commonHelpers.searchNavigates(data.searchStr, data.shudInclude);
    });

    it('search navigates to 10 digit commodities', () => {
      commonHelpers.searchNavigates(data.searchStr, data.shudInclude);
    });
  });

  context('when using the search input on expired goods nomenclature', () => {
    it('search navigates to expired headings', () => {
      commonHelpers.searchNavigates(data.searchStr, data.shudInclude);
    });

    it('search navigates to expired subheadings in their short form', () => {
      commonHelpers.searchNavigatesExpiredSubheadings(data.searchStrShortForm, data.shudInclude);
    });

    it('search navigates to expired commodities', () => {
      commonHelpers.searchNavigates(data.searchStr, data.shudInclude);
    });
  });

  context('when passing nonsense input', () => {
    it('search shows no results', () => {
      commonHelpers.searchShowsNoResults(data.searchStr, data.pageContains);
    });
  });
});
