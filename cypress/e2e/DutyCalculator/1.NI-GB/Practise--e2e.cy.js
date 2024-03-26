describe('practice test', function() {
  it('practice test', function() {
    // look up commodity
    cy.visit('/commodities/0702000007');
    cy.dutyCalLink('0702000007');
    // check it contains the text "UK Integrated Online Tariff"
    cy.contains('UK Integrated Online Tariff');
    // put current date
    cy.validDate();
    // select destination country as GB
    cy.selectDestination('gb');
    // select origin country as Vietnam
    cy.originList({value: 'Vietnam'});
    // enter customs values
    cy.customsValue({monetary: '500', shipping: '250', cost: '250'});
    // check title contains "Check your answers"
    cy.contains('Check your answers');
    // check correct details are displayed
    cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('0702 00 00 07');
    cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('England, Scotland or Wales (GB)');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Vietnam');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('£1,000.00');

    // click "Calculate import duties"
    cy.get('.govuk-button').contains('Calculate').click();

    // check title is correct
    cy.contains('Import duty calculation');
  });
});
