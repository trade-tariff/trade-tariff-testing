class SearchPage {
  elements = {
    txtContains: () => cy.contains('Search for a commodity'),
    enterSearchStr: () => cy.get('.js-commodity-picker-select:last'),
    searchFilterNavLink: () => cy.get('#search-filter-navigation div div p a'),
    h1Heading: () => cy.get('h1'),
    nonCorrelatedSearchResults: () => cy.get('span.non-corrected-search-results > a'),
    inpterceptMsg: () => cy.get('#intercept-message'),
    searchResults: () => cy.get('.search-results'),
    searchFilterNav: () => cy.get('#search-filter-navigation'),
    classificatnsTag: () => cy.get('.facet-classifications-tag'),
    searchResultsWithHits: () => cy.get('#search-result-with-hits'),
    inputSearchField: () => cy.get('input#q'),
    newSearchNameField: () => cy.get('input[name=\'new_search\']'),
    betaSearchResults: () => cy.get('[id^="beta-search-results-"]'),
    clkBetaSearchLnk: () => cy.get('#enable-beta-search > a'),
    searchSuggestionsListSpn: () => cy.get('[role=\'listbox\'] > li > span'),
    searchSuggestionsList: () => cy.get('.autocomplete__menu > li'),
  };

  searchForCommodity(searchString) {
    this.elements.txtContains();
    this.elements.enterSearchStr().click();
    this.elements.enterSearchStr().type(`${searchString}{enter}`);
  }

  verifySearchResultsForSeachString(searchString) {
    cy.url().should('include', `/search?q=${searchString}`);
    cy.contains(`Search results for \\‘${searchString}\\’`);
  }

  verifySearchResultsForCommCodes(searchCommCode) {
    cy.url().should('include', `/commodities/${searchCommCode}`);
    cy.contains(`Commodity ${searchCommCode}`);
  }

  searchFilterNavigatnLnk(link) {
    this.elements.searchFilterNavLink().should(
        'have.attr',
        'href',
        `${link}`);
  }

  verifySearchResultsHeading(text) {
    this.elements.h1Heading().contains('Search results for ‘' + `${text}` + '’');
  }

  clkNonCorrectedSearchResultsLink() {
    this.elements.nonCorrelatedSearchResults().click();
  }

  verifyInterceptMessageTxt(txtToVerify) {
    this.elements.inpterceptMsg().contains(txtToVerify);
  }

  verifySearchResults(txtToVerify) {
    this.elements.searchResults().contains(txtToVerify);
  }

  classificatnsTagContainsAndClk(textToContains) {
    this.elements.classificatnsTag().contains(textToContains).click();
  }

  elementShudNotExist() {
    this.elements.classificatnsTag().should('not.exist');
  }

  interceptMsgCheck() {
    this.elements.inpterceptMsg();
  }

  searchResultsWithHitsCheck() {
    this.elements.searchResultsWithHits();
  }

  searchWithSearchField(searchString) {
    this.elements.inputSearchField().click().type(searchString);
    this.elements.newSearchNameField().click();
  }

  verifyBetaSearchResults() {
    this.elements.betaSearchResults();
  }

  enableBetaSearch() {
    this.elements.clkBetaSearchLnk().click();
  }

  verifySearchSuggstnListAndClkSpecificSuggstnTxt(txtToSearch, suggestionTxtToMatch) {
    this.elements.inputSearchField().type(`${txtToSearch}`);
    const items = [];
    this.elements.searchSuggestionsListSpn().each(($li) => items.push($li.text())).then(() => {
      const suggestionStrList = items.join(', ').replace(',', '').replace(' ', '').split(',');
      cy.log(suggestionStrList);
      cy.log(`${txtToSearch}${suggestionTxtToMatch}`);
      for (const suggestionStr of suggestionStrList) {
        if (`${txtToSearch}${suggestionTxtToMatch}` == `${suggestionStr}`) {
          cy.log(suggestionStr);
          this.elements.searchSuggestionsList().should('be.visible');
          this.elements.searchSuggestionsList().contains(suggestionStr).click({force: true});
        }
      }
    });
  }

  enterTxtInTheSearchFieldAndClkEnter(txtToSearch) {
    this.elements.inputSearchField().type(`${txtToSearch}{enter}`);
  }

  validateAutocompleteNthItem(inputText,
      nthItem,
      expectedText,
      expectedUrl,
      resourceId = null,
      suggestionType = null) {
    cy.get('#q').type(inputText);

    cy.get('.autocomplete__menu')
        .should('be.visible')
        .find('.autocomplete__option')
        .eq(nthItem)
        .as('nthRow')
        .invoke('text')
        .then((nthRowText) => {
          if (resourceId && suggestionType) {
            cy.get('@nthRow').find(`span[data-resource-id="${resourceId}"][data-suggestion-type="${suggestionType}"]`);
          }
          expect(nthRowText).to.contain(expectedText);
          cy.get('@nthRow').click();
        });

    cy.url().should('include', expectedUrl);
  }
}

export default new SearchPage();