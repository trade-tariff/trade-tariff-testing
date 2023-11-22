import commonPage from '../../pages/commonPage';
import searchPage from '../../pages/searchPage';
import commonHelpers from '../../helpers/commonHelpers';

describe('Legacy search', function() {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(function() {
    commonPage.loadData('search');
  });
  beforeEach(function() {
    data = commonPage.getTestData();
    commonPage.goToUrl('/find_commodity');
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

    it('search navigates to expired subheadings in their long form', function() {
      searchPage.enterTxtInTheSearchFieldAndClkEnter(data.searchstrlongform);
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
