describe('Verify commodity code page', function() {
  context('when on the UK service', function() {
    it('Commodity does not have an end date', function() {
      cy.visit('/commodities/2206003100');
      cy.contains('UK Integrated Online Tariff');
      cy.get('.govuk-breadcrumbs__list').contains('2206003100');
      cy.get('.govuk-summary-list').contains('2206003100');
      cy.get('.govuk-summary-list').contains('Commodity valid from');
      cy.get('.govuk-summary-list').contains('1 January 1994');
      cy.get('.govuk-summary-list').contains('Date of trade');
      cy.get('.govuk-summary-list').contains('1 January 1994');
    });
    it('Commodity does have an end date', function() {
      cy.visit('/commodities/3911901910?day=31&month=12&year=2022');
      cy.contains('UK Integrated Online Tariff');
      cy.get('.govuk-breadcrumbs__list').contains('3911901910');
      cy.get('.govuk-summary-list').contains('3911901910');
      cy.get('.govuk-summary-list').contains('Commodity valid between');
      cy.get('.govuk-summary-list').contains('1 January 1997 and 31 December 2022');
      cy.get('.govuk-summary-list').contains('Date of trade');
      cy.get('.govuk-summary-list').contains('31 December 2022');
    });
  });
  context('when on the XI service', function() {
    it('Commodity does not have an end date', function() {
      cy.visit('/xi/commodities/2206003100');
      cy.contains('Northern Ireland Online Tariff');
      cy.get('.govuk-breadcrumbs__list').contains('2206003100');
      cy.get('.govuk-summary-list').contains('2206003100');
      cy.get('.govuk-summary-list').contains('Commodity valid from');
      cy.get('.govuk-summary-list').contains('1 January 1994');
      cy.get('.govuk-summary-list').contains('Date of trade');
      cy.get('.govuk-summary-list').contains('1 January 1994');
    });
    it('Commodity does have an end date', function() {
      cy.visit('/xi/commodities/3911901910?day=31&month=12&year=2022');
      cy.contains('Northern Ireland Online Tariff');
      cy.get('.govuk-breadcrumbs__list').contains('3911901910');
      cy.get('.govuk-summary-list').contains('3911901910');
      cy.get('.govuk-summary-list').contains('Commodity valid between');
      cy.get('.govuk-summary-list').contains('1 January 1997 and 31 December 2022');
      cy.get('.govuk-summary-list').contains('Date of trade');
      cy.get('.govuk-summary-list').contains('31 December 2022');
    });
  });
});
