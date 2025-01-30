describe('Smoke tests for dev', function() {
  it('Main Page Validation', function() {
    cy.visit('/find_commodity');
    cy.mainPageUK();
    cy.contains('browse the goods classification').click();
    cy.contains('Browse the tariff');
  });

  it('verify date pickers are working', function() {
    cy.visit('/find_commodity');
    cy.get('input[name="day"]').click();
    cy.get('input[name="day"]').clear();
    cy.get('input[name="day"]').type(21);
    cy.get('input[name="month"]').click();
    cy.get('input[name="month"]').clear();
    cy.get('input[name="month"]').type(12);
    cy.get('input[name="year"]').click();
    cy.get('input[name="year"]').clear();
    cy.get('input[name="year"]').type(2022);
    cy.searchForCommodity('3808941000');
    cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
    cy.contains('21 December 2022');
    cy.get('a[href^=\'/import_export_dates\']').click();
    cy.datePickerPage({day: 22, month: 12, year: 2022});

    cy.contains('22 December 2022');
  });

  it('Main Page - Switching link to XI available & works', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-header').contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
      .contains('Northern Ireland Online Tariff')
      .click();
    cy.get('.govuk-header').contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header').contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper').contains('Northern Ireland Online Tariff');
  });
});
