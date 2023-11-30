import commonPage from '../../pages/commonPage';
import searchPage from '../../pages/searchPage';
import commonHelpers from '../../helpers/commonHelpers';

describe('Legacy search', () => {
  let data;
  // Load test data from a fixture file to 'testData' environment variable
  before(() => {
    commonPage.loadData('search');
  });
  beforeEach(() => {
    data = commonPage.getTestData();
    commonPage.goToUrl('/find_commodity');
  });

  context('when searching for chemicals', () => {
    it('Supports chemical search on cus numbers', () => {
      commonHelpers.searchChemicals(data.searchstr, data.include, data.containstxt);
    });

    it('Supports chemical search on cas numbers', () => {
      commonHelpers.searchChemicals(data.searchstr, data.include, data.containstxt);
    });

    it('Supports chemical search on chemical names', () => {
      commonHelpers.searchChemicals(data.searchstr, data.include, data.containstxt);
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
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to non-declarable headings', () => {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to declarable headings', () => {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to 6 digit subheadings', () => {
      commonHelpers.searchNavigatesToSubheadings(data.searchstr, data.suggestiontxttomatch, data.matchstr);
    });

    it('search navigates to 8 digit subheadings', () => {
      commonHelpers.searchNavigatesToSubheadings(data.searchstr, data.suggestiontxttomatch, data.matchstr);
    });

    it('search navigates to 10 digit subheadings', () => {
      commonHelpers.searchNavigatesToSubheadings(data.searchstr, data.suggestiontxttomatch, data.matchstr);
    });

    it('search navigates to short-form commodity codes', () => {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to 10 digit commodities', () => {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });
  });

  context('when using the search input on expired goods nomenclature', () => {
    it('search navigates to expired headings', () => {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });

    it('search navigates to expired subheadings in their short form', () => {
      commonHelpers.searchNavigatesExpiredSubheadings(data.searchstrshortform, data.include);
    });

    it('search navigates to expired subheadings in their long form', () => {
      commonHelpers.searchNavigatesExpiredSubheadings(data.searchstrlongform, data.include);
    });

    it('search navigates to expired commodities', () => {
      commonHelpers.searchNavigates(data.searchstr, data.include);
    });
  });

  context('when passing nonsense input', () => {
    it('search shows no results', () => {
      commonHelpers.searchShowsNoResults(data.searchstr, data.containstxt);
    });
  });
});
