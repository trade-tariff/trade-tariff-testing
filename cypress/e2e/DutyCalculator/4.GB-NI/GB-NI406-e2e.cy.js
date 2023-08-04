describe('GB-NI406-e2e.spec|EU Duties|GB to NI route06-Trade Remedies-0% MFN EU-Trader Scheme-Use in NI-TO>£500k-NP-UK Origin', function() {
  it('e2e GB to NI', function() {
    cy.visit('/commodities/1701141000');
    cy.dutyCalLink('1701141000');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('gb');
    cy.traderScheme('yes');
    cy.finalUse('yes');
    cy.turnOver('more');

    cy.plannedXI('unacceptablecommercial');
    cy.certificate('no');
    cy.euDutiesApply();

    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
    cy.quantity({kgm: '2398'});
    cy.docCode({xi: 'n990'});
    cy.contains('Continue').click();
    cy.contains('Check your answers');

    cy.contains('Commodity code');
    cy.contains('Date of import');
    cy.contains('Destination');
    cy.contains('Coming from');
    cy.contains('Trader scheme');
    cy.contains('Final use');
    cy.contains('Processing');
    cy.contains('Certificate of origin');
    cy.contains('Customs value');
    cy.contains('Import quantity');
    cy.contains('kilograms');
    cy.contains('2398');

    cy.get('.govuk-button').click();

    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
    cy.contains('Tariff preference (EU)');
    cy.contains('Option 3: Claiming a waiver – Exchange rate');
  });

  it('e2e GB to NI - Meursing Code GB-NI406', function() {
    cy.visit(`/duty-calculator/xi/1806909019/import-date`);
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('gb');
    cy.traderScheme('yes');
    cy.finalUse('yes');
    cy.turnOver('more');

    cy.plannedXI('unacceptablecommercial');
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
