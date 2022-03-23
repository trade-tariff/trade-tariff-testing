/* eslint-disable max-len */
// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - Trader Scheme - ✅  Trader Scheme - 🚫 Final use in NI
describe('| RoW-NI303a-e2e.spec |🚫 Trade Remedies - 🚫 0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ⬆️ turnover > £500,000 -  🚫 Processing  |', function() {
  //
  it('RoW 🇲🇦 (Morocco) to Northern Ireland', function() {
    cy.visit('/duty-calculator/xi/0805102210/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.otherOriginList({value: 'Morocco'});
    cy.wait(300);
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    cy.turnOver('more');
    // Planned processing - commercial
    cy.plannedXI('unacceptablecommercial');

    // Duties Apply
    cy.euDutiesApply();
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({dtn: '230.98'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    // cy.contains('Option 2: Tariff preference - Morocco');
    // cy.contains('Tariff preference (EU)');
  });
  it('RoW 🇲🇦 (Costa Rica) to Northern Ireland - Meursing Code', function() {
    cy.visit('/duty-calculator/xi/1901100000/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.wait(300);
    cy.otherOriginList({value: 'Costa Rica'});
    cy.wait(300);
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    cy.turnOver('more');
    // Planned processing - commercial
    cy.plannedXI('unacceptablecommercial');

    // Duties Apply
    cy.euDutiesApply();
    cy.meursingCode({value: '000'});
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({dtn: '230.98'});
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty (EU)');
    cy.contains('7.60 % + 0.00 EUR / 100 kg');
    cy.contains('Option 2: Tariff preference - Central America');
  });
});
