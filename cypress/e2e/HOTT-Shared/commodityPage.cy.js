describe('Verify commodity code page', function() {
  const visitOpts = {failOnStatusCode: false};
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
    it('End dated commodities - 0602905000 child comm code', function() {
      cy.visit('/commodities/0602905010', visitOpts);
      cy.contains('Commodity 0602905010');
      cy.contains('The commodity code you entered could not be found for the date selected. ');
      cy.contains('The code is present for the dates shown below.');
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('From 15 September 2016 to 30 June 2023');
      cy.contains('Alternatively, you can visit heading 0602 or chapter 06.');
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
    it('End dated commodities - 0602905000 child comm code', function() {
      cy.visit('/xi/commodities/0602905010', visitOpts);
      cy.contains('Commodity 0602905010');
      cy.contains('The commodity code you entered could not be found for the date selected. ');
      cy.contains('The code is present for the dates shown below.');
      cy.contains('Click on a date to see the measures present on that date.');
      cy.contains('From 15 September 2016 to 30 June 2023');
      cy.contains('Alternatively, you can visit heading 0602 or chapter 06.');
    });
  });
});
