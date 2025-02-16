describe('| RoW-GB204-e2e.spec | 🇦🇫🇸Afghanistan to 🇬🇧 GB  |', function() {
  it('e2e RoW to GB | 🇦🇫 Afghanistan to 🇬🇧 GB | Excise code | Wine |', function() {
    cy.visit('/duty-calculator/uk/2204210600/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Afghanistan'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({ltr: '1000', asv: '8.5', spr: '5'});
    cy.exciseCode('333');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Tariff preference - Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences');
    cy.contains('Wine at least 8.5 but not exceeding 22%');
  });

  it('e2e RoW to GB | 🇫🇷 France to 🇬🇧 GB | Excise code | Champagne |', function() {
    cy.visit('/duty-calculator/uk/2204101100/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'France'});
    cy.customsValue({monetary: '4000.00', shipping: '500.00', cost: '500.00'});
    cy.quantity({ltr: '100', asv: '8.5'});
    cy.exciseCode('333');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Tariff preference - European Union');
    cy.contains('Wine at least 8.5 but not exceeding 22%');
    cy.contains('Import quantity');
  });
});
