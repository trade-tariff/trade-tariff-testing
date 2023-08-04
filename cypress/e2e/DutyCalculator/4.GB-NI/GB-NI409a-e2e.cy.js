describe('| GB-NI409a-e2e.spec | GB to NI route 🚌 09 - ✅  Trade Remedies |', function() {
  it('e2e GB to NI', function() {
    cy.visit(`/duty-calculator/uk/0303149011/import-date`);
    cy.validDate();
    cy.contains('Which part of the UK are you importing into?');

    cy.get('#steps-import-destination-import-destination-xi-field').check();
    cy.contains('Continue').click();
    cy.contains('Which country are the goods coming from?');

    cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click();
    cy.contains('Continue').click();

    cy.euDutiesApply();

    cy.contains('What is the customs value of this import?');
    cy.get('input#steps-customs-value-monetary-value-field').clear();
    cy.get('input#steps-customs-value-monetary-value-field').type('4567.001');
    cy.get('input#steps-customs-value-shipping-cost-field').clear();
    cy.get('input#steps-customs-value-shipping-cost-field').type('1213.43');
    cy.get('input#steps-customs-value-insurance-cost-field').clear();
    cy.get('input#steps-customs-value-insurance-cost-field').type('5.434');
    cy.contains('Continue').click();

    cy.contains('Check your answers');
    cy.contains('Commodity code');
    cy.contains('Date of import');
    cy.contains('Destination');
    cy.contains('Coming from');
    cy.contains('Customs value');

    cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('0303 14 90 11');
    cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('Northern Ireland');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('£5,785.87');
    cy.get('.govuk-button').click();

    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
    cy.contains('Option 3: Claiming a waiver – Exchange rate');
    cy.exchangeRate();
  });
});
