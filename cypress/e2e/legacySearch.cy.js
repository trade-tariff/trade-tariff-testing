describe('Legacy search', function() {
  beforeEach(function() {
    cy.visit('/find_commodity');
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
      cy.url().should('include', '/subheadings/2007993929-10');
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
      cy.url().should('include', '/subheadings/0102900500-10');
    });

    it('search navigates to expired subheadings in their long form', function() {
      cy.get('#q').type('0102900500-10{enter}');
      cy.url().should('include', '/subheadings/0102900500-10');
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
