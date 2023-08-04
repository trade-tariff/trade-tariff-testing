describe('GB-NI404-e2e.spec|GB to NI route 04-Trade Remedies-0% MFN EU-Trader Scheme-Final use in NI-Certified as UK origin', function() {
  it('e2e GB to NI', function() {
    cy.visit(`/duty-calculator/xi/1701141000/import-date`);
    cy.validDate();

    cy.selectDestination('xi');

    cy.selectOrigin('gb');

    cy.traderScheme('yes');

    cy.finalUse('no');

    cy.certificate('no');

    cy.euDutiesApply();

    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});

    cy.quantity({kgm: '2300.98'});

    cy.docCode({xi: 'n990'});
    cy.contains('Continue').click();

    cy.contains('Check your answers');

    cy.contains('Commodity code');
    cy.contains('Date of import');
    cy.contains('Destination');
    cy.contains('Coming from');
    cy.contains('Trader scheme');
    cy.contains('Final use');
    cy.contains('Certificate of origin');
    cy.contains('Customs value');
    cy.contains('Import quantity');
    cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('1701 14 10 00');
    cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('N990');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Northern Ireland');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
    cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('Yes');
    cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('No');
    cy.get('div:nth-of-type(8) > .govuk-summary-list__value').contains('No');
    cy.get('div:nth-of-type(9) > .govuk-summary-list__value').contains('£10,002.24');
    cy.contains('kilograms');
    cy.contains('2300.98');
    cy.get('.govuk-button').click();

    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('Zero rate');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
    cy.contains('Option 3: Claiming a waiver – Exchange rate');
  });

  it(`e2e GB to NI - Meursing Code `, function() {
    cy.visit(`/duty-calculator/xi/1806909019/import-date`);
    cy.contains('Northern Ireland Online Tariff');
    cy.validDate();

    cy.selectDestination('xi');

    cy.selectOrigin('gb');

    cy.traderScheme('yes');

    cy.finalUse('no');

    cy.certificate('no');

    cy.euDutiesApply();
    cy.meursingCode({value: '000'});

    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});

    cy.quantity({kgm: '23.98'});
    cy.vat('20');

    cy.contains('Check your answers');

    cy.contains('Commodity code');
    cy.contains('Date of import');
    cy.contains('Destination');
    cy.contains('Coming from');
    cy.contains('Trader scheme');
    cy.contains('Final use');
    cy.contains('Certificate of origin');
    cy.contains('Customs value');
    cy.contains('Import quantity');

    cy.confirmPage();

    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');

    cy.contains('Option 3: Claiming a waiver – Exchange rate');
  });
});
