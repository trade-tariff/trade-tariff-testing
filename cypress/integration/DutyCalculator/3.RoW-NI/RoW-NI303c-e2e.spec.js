/* eslint-disable max-len */
// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - Trader Scheme - ✅  Trader Scheme - 🚫 Final use in NI
describe('| RoW-NI303c-e2e.spec |🚫 Trade Remedies - 🚫 0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ✅ Processing|', function() {
  it('RoW 🇲🇦 (Morocco) to Northern Ireland', function() {
    cy.visit('/duty-calculator/uk/0702000099/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // select country from list
    cy.otherOriginList({value: 'Morocco'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turn over < 500k = no
    cy.turnOver('less');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({kgm: '230.98'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('£0.00');
    // cy.contains('Option 2: Tariff preference - Morocco');
  });
  it('RoW (Norway) to Northern Ireland - Meursing - Delta', function() {
    cy.visit('/duty-calculator/uk/1905320500/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list

    cy.otherOriginList({value: 'Norway'});

    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turn over < 500k = no
    cy.turnOver('less');
    cy.meursingCode({value: '049'});
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({kgm: '1000.00'});
    cy.docCode({xi: 'y021'});
    cy.contains('Continue').click();
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Tariff preference (EU)');
    cy.contains('£423.25');
    cy.contains('£414.95');
  });
});
