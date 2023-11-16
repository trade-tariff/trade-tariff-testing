import commodityPage from '../../pages/commodityPage';
import commonPage from '../../pages/commonPage';
import searchPage from '../../pages/searchPage';

describe('Legacy search', function() {
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('search');
  });
  beforeEach(function() {
    commonPage.goToUrl('/find_commodity');
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
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl);
    });

    it('Search suggestions are displayed and work for chemical names', function() {
      const data = Cypress.env('testData')[18];
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for chapters', function() {
      const data = Cypress.env('testData')[19];
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for headings', function() {
      const data = Cypress.env('testData')[20];
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for subheadings', function() {
      const data = Cypress.env('testData')[21];
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for commodities', function() {
      const data = Cypress.env('testData')[22];
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for cus numbers', function() {
      const data = Cypress.env('testData')[23];
      searchPage.validateAutocompleteNthItem(
          data.inputText,
          data.nthItem,
          data.expectedText,
          data.expectedUrl,
          data.resourceId,
          data.suggestionType);
    });

    it('Search suggestions are displayed and work for cas rn numbers', function() {
      const data = Cypress.env('testData')[24];
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
      searchPage.verifySearchSuggstnListAndClkSpecificSuggstnTxt(data.searchstr, data.suggestiontxttomatch);
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
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstrshortform);
      commonPage.verifyUrlShudMatch(data.include);
    });

    it('search navigates to expired subheadings in their long form', function() {
      const data = Cypress.env('testData')[34];
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstrlongform);
      commonPage.verifyUrlShudMatch(data.include);
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
