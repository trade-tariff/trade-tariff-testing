describe('RoW-NI303a', function() {
  it('RoW 🇲🇦 (Morocco) to Northern Ireland', function() {
    cy.visit('/duty-calculator/xi/0805102210/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'Morocco'});
    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');
    cy.planned('unacceptablecommercial');

    cy.euDutiesApply();
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({kgm: '100.0'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('£0.00');
  });

  it('RoW 🇲🇦 (Costa Rica) to Northern Ireland - Meursing Code', function() {
    cy.visit('/duty-calculator/xi/1901100000/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('other');
    cy.otherOriginList({value: 'Costa Rica'});
    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');
    cy.planned('unacceptablecommercial');

    cy.euDutiesApply();
    cy.meursingCode({value: '000'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.quantity({kgm: '230.98'});
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty (EU)');
    cy.contains('7.60 % + 0.00 EUR / 100 kg');
    cy.contains('Tariff preference - Central America');
    cy.contains('£247.52');
  });
});
