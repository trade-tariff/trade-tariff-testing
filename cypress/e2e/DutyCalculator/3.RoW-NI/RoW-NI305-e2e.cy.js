describe('| RoW-NI305-e2e.spec |🚫 Trade Remedies - 🚫 0% MFN EU tariff - ✅  Trader Scheme - 🚫 Final use in NI |', function() {
  it('RoW 🇲🇦 (Morocco) to Northern Ireland', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'Morocco'});
    cy.traderScheme('yes');
    cy.finalUseNI('no');
    cy.euDutiesApply();
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.quantity({kgm: '23000.98'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (EU)');
  });
});
