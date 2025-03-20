describe('Smoke tests for dev', { tags: ['smokeTest'] }, function() {
  it('Main Page Validation', function() {
    cy.visit('/find_commodity');
    cy.mainPageUK();
    cy.contains('browse the goods classification').click();
    cy.contains('Browse the tariff');
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
