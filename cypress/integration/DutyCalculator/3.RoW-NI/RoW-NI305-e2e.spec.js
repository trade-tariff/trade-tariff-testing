// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - Trader Scheme - ✅  Trader Scheme - 🚫 Final use in NI
describe('| RoW-NI305-e2e.spec |🚫 Trade Remedies - 🚫 0% MFN EU tariff - ✅  Trader Scheme - 🚫 Final use in NI |', function() {
  //
  it('RoW 🇲🇦 (Morocco) to Northern Ireland', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.wait(300);
    cy.otherOriginList({value: 'Morocco'});
    cy.wait(300);
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('no');
    // Duties Apply
    cy.euDutiesApply();
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({dtn: '230.98'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    // cy.contains('Option 2: Tariff preference - Morocco');
    cy.contains('Third-country duty (EU)');
  });
});
