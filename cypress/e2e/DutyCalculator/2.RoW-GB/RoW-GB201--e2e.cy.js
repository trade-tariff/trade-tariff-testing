describe('| RoW-GB201--e2e.spec |🍅 - 🇻🇳 Vietnam to 🇬🇧 GB  | 201-e2e.spec | ', function() {
  it('e2e RoW to GB - 🇻🇳 Vietnam to 🇬🇧 GB', function() {
    cy.visit(`/uk/commodities/0703101900`);
    cy.dutyCalLink('0703101900');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Vietnam'});
    cy.customsValue({monetary: '500', shipping: '250', cost: '250'});
    cy.contains('Check your answers');
    cy.contains('Commodity code');
    cy.contains('Date of import');
    cy.contains('Destination');
    cy.contains('Coming from');
    cy.contains('Customs value');
    cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('0703 10 19 00');
    cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('England, Scotland or Wales (GB)');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Vietnam');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('£1,000.00');

    cy.get('.govuk-button').click();

    cy.contains('Import duty calculation');
    cy.contains('You are importing commodity');

    cy.contains('Details of your trade').click();
    cy.get('.govuk-details__text');
    cy.contains('Origin:');
    cy.contains('Commodity:');
    cy.contains('Import date:');
    cy.contains('Valuation of import:');
    cy.contains('0703 10 19 00');
    cy.contains('other');
    cy.contains('£1,000.00');

    cy.contains('Details of your trade');
    cy.get('.govuk-table__row');
    cy.contains('Data');
    cy.contains('Calculation');
    cy.contains('Value');
    cy.contains('Valuation for import');
    cy.contains('Value of goods + freight + insurance costs');
    cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£1,000.00');
    cy.contains('Import duty Tariff preference (UK)');
    cy.contains('Duty Total');
    cy.contains('8.00% * £1,000.00');
    cy.get('tr:nth-of-type(3) > td:nth-of-type(3)').contains('£0.00');
    cy.contains('Import duty calculation');
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - Vietnam');
    cy.dcRooLink({country: 'Vietnam'});
  });
});
