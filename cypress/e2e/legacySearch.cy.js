describe('Legacy search', function() {
  beforeEach(function() {
    cy.visit('/find_commodity');
  });

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
});
