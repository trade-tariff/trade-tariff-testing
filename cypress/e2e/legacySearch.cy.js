describe('Legacy search', function() {
  beforeEach(function() {
    cy.visit('/find_commodity');
  });

  it('Search suggestions are displayed and work for search references', function() {
    cy.get('#q').type('raw');

    cy.get('.autocomplete__menu')
        .should('be.visible')
        .find('.autocomplete__option')
        .eq(2)
        .as('nthRow')
        .invoke('text')
        .then((nthRowText) => {
          expect(nthRowText).to.eq('kelp, raw');
          cy.get('@nthRow').click();
        });

    cy.url().should('include', '/subheadings/1212210000-10');
  });

  it('Search suggestions are displayed and work for chemical names', function() {
    cy.get('#q').type('insulin, human');

    cy.get('.autocomplete__menu')
        .should('be.visible')
        .find('.autocomplete__option')
        .eq(1)
        .as('nthRow')
        .invoke('text')
        .then((nthRowText) => {
          cy.get('@nthRow').find('span[data-resource-id="0036941-5"][data-suggestion-type="Chemical"]');
          expect(nthRowText).to.contain('insulin, human');
          cy.get('@nthRow').click();
        });

    cy.url().should('include', '/commodities/2937120000');
  });

  it('Search suggestions are displayed and work for chapters', function() {
    cy.get('#q').type('01');

    cy.get('.autocomplete__menu')
        .should('be.visible')
        .find('.autocomplete__option')
        .eq(1)
        .as('nthRow')
        .invoke('text')
        .then((nthRowText) => {
          cy.get('@nthRow').find('span[data-resource-id="27623"][data-suggestion-type="Chapter"]');
          expect(nthRowText).to.contain('01');
          cy.get('@nthRow').click();
        });

    cy.url().should('include', '/chapters/01');
  });

  it('Search suggestions are displayed and work for headings', function() {
    cy.get('#q').type('0101');

    cy.get('.autocomplete__menu')
        .should('be.visible')
        .find('.autocomplete__option')
        .eq(1)
        .as('nthRow')
        .invoke('text')
        .then((nthRowText) => {
          cy.get('@nthRow').find('span[data-resource-id="27624"][data-suggestion-type="Heading"]');
          expect(nthRowText).to.contain('0101');
          cy.get('@nthRow').click();
        });

    cy.url().should('include', '/headings/0101');
  });

  it('Search suggestions are displayed and work for subheadings', function() {
    cy.get('#q').type('010121');

    cy.get('.autocomplete__menu')
        .should('be.visible')
        .find('.autocomplete__option')
        .eq(1)
        .as('nthRow')
        .invoke('text')
        .then((nthRowText) => {
          cy.get('@nthRow').find('span[data-resource-id="93797"][data-suggestion-type="Subheading"]');
          expect(nthRowText).to.contain('010121');
          cy.get('@nthRow').click();
        });

    cy.url().should('include', '/subheadings/0101210000-10');
  });

  it('Search suggestions are displayed and work for commodities', function() {
    cy.get('#q').type('0101210000');

    cy.get('.autocomplete__menu')
        .should('be.visible')
        .find('.autocomplete__option')
        .eq(1)
        .as('nthRow')
        .invoke('text')
        .then((nthRowText) => {
          cy.get('@nthRow').find('span[data-resource-id="93796"][data-suggestion-type="Commodity"]');
          expect(nthRowText).to.contain('0101210000');
          cy.get('@nthRow').click();
        });

    cy.url().should('include', '/commodities/0101210000');
  });

  it('Search suggestions are displayed and work for cus numbers', function() {
    cy.get('#q').type('01500');

    cy.get('.autocomplete__menu')
        .should('be.visible')
        .find('.autocomplete__option')
        .eq(1)
        .as('nthRow')
        .invoke('text')
        .then((nthRowText) => {
          cy.get('@nthRow').find('span[data-resource-id="0150000-1"][data-suggestion-type="Chemical"]');
          expect(nthRowText).to.contain('0150000-1');
          cy.get('@nthRow').click();
        });

    cy.url().should('include', '/commodities/3903909090');
  });

  it('Search suggestions are displayed and work for cas rn numbers', function() {
    cy.get('#q').type('107000');

    cy.get('.autocomplete__menu')
        .should('be.visible')
        .find('.autocomplete__option')
        .eq(1)
        .as('nthRow')
        .invoke('text')
        .then((nthRowText) => {
          cy.get('@nthRow').find('span[data-resource-id="0040087-3"][data-suggestion-type="Chemical"]');
          expect(nthRowText).to.contain('107000');
          cy.get('@nthRow').click();
        });

    cy.url().should('include', '/commodities/2937290000');
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
