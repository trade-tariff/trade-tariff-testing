describe('| RoW-NI309--e2e.spec | Special calculations - alcohol % + sugar % |', function() {
  // alcohol percentage calculations
  it(' RoW 🇸🇬 Viet Nam - 🇬🇧 XI - Alcohol percentage calculations ', function() {
    cy.visit('/commodities/2208401100');
    cy.dutyCalLink('2208401100');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'Viet Nam'});
    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');
    cy.plannedXI('notprocessing');
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.contains('What is the alcohol percentage (%) of the goods you are importing?');
    cy.quantity({asv: 40, ltr: 10000, lpa: 4000});
    cy.exciseCode('451');
    cy.confirmPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('0.60 EUR / % vol/hl + 3.20 EUR / hl');
    cy.contains('Option 2: Tariff preference - Viet Nam');
    cy.contains('0.30 EUR / % vol/hl + 1.60 EUR / hl');
  });

  // sugar percentage calclations
  it(' RoW 🇸🇬 Viet Nam - 🇬🇧 - Sugar percentage calculations ', function() {
    cy.visit('/xi/commodities/2106905910');
    cy.dutyCalLink('2106905910');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'Viet Nam'});

    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');
    cy.plannedXI('notprocessing');
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.contains('What is the percentage of sucrose (Brix) in your goods?');
    cy.contains('If you do not know the percentage sucrose content (Brix value)');
    cy.quantity({kgm: 16320, brx: 80});
    cy.vat('20');
    cy.contains('80 % sucrose');
    cy.confirmPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('0.40 EUR / 100 kg/net/%sacchar.');
    cy.contains('Option 2: Tariff preference - Viet Nam');
    cy.contains('0.20 EUR / 100 kg/net/%sacchar.');
  });
});
