describe('additional code search', function() {
  context('when on the uk service', function() {
    const path = '/additional_code_search';

    it('returns goods nomenclature search results by additional code', function() {
      // given I am on the additional code search page
      cy.visit(path);
      // when I search for a specific additional code
      cy.get('#additional-code-search-form-code-field').type('8A04');
      // and I click the search button
      cy.get('#additional-code-submit').click();
      // then I should see the results
      cy.checkAdditionalCodeSearchResultsHaveGoodsNomenclatures();
    });

    it('returns goods nomenclature search results by description', function() {
      // given I am on the additional code search page
      cy.visit(path);
      // when I search for a specific description
      cy.get('#additional-code-search-form-description-field').type('Taiwan');
      // and I click the search button
      cy.get('#additional-code-submit').click();
      // then I should see the results
      cy.checkAdditionalCodeSearchResultsHaveGoodsNomenclatures();
    });
  });

  context('when on the xi service', function() {
    const path = '/xi/additional_code_search';

    it('returns goods nomenclature search results by additional code', function() {
      // given I am on the additional code search page
      cy.visit(path);
      // when I search for a specific additional code
      cy.get('#additional-code-search-form-code-field').type('A986');
      // and I click the search button
      cy.get('#additional-code-submit').click();
      // then I should see the results
      cy.checkAdditionalCodeSearchResultsHaveGoodsNomenclatures();
    });

    it('returns goods nomenclature search results by description', function() {
      // given I am on the additional code search page
      cy.visit(path);
      // when I search for a specific description
      cy.get('#additional-code-search-form-description-field').type('Taiwan');
      // and I click the search button
      cy.get('#additional-code-submit').click();
      // then I should see the results
      cy.checkAdditionalCodeSearchResultsHaveGoodsNomenclatures();
    });
  });
});
