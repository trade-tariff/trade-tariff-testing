describe('RoW-NI303c', function() {
  it('RoW 🇲🇦 (Morocco) to Northern Ireland', function() {
    cy.visit('/duty-calculator/uk/0702000099/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'Morocco'});
    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('less');
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.quantity({kgm: '230.98'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('£0.00');
  });

  it('RoW 🇳🇴 (Norway) to Northern Ireland - Meursing - Delta', function() {
    cy.visit('/duty-calculator/uk/1905320500/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('other');
    cy.otherOriginList({value: 'Norway'});
    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('less');
    cy.meursingCode({value: '049'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.quantity({kgm: '1000.00'});
    cy.docCode({xi: 'y021'});
    cy.contains('Continue').click();
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Tariff preference (EU)');
  });
});
