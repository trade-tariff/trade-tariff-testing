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
    cy.planned('notprocessing');
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({asv: 8.4, ltr: 1000, lpa: 84, spr: 5});
    cy.exciseCode('370');
    cy.confirmPage();
    cy.contains('Spirits at least 3.5 but less than 8.5% & eligible for SPR');
    cy.contains('£1,660.68');
    cy.contains('Third-country duty');
    cy.contains('0.50 GBP / % vol/hl + 2.60 GBP / hl');
    cy.contains('Tariff preference - Vietnam');
    cy.contains('0.10 GBP / % vol/hl + 1.00 GBP / hl');
  });

  // sugar percentage calculations
  it(' RoW 🇸🇬 Viet Nam - 🇬🇧 - Sugar percentage calculations ', function() {
    cy.visit('/xi/commodities/2106905910');
    cy.dutyCalLink('2106905910');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'Viet Nam'});

    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');
    cy.planned('notprocessing');
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({kgm: 16320, brx: 80});
    cy.vat('20');
    cy.contains('% sucrose');
    cy.contains('80 ');
    cy.confirmPage();
    cy.contains('Third-country duty');
    cy.contains('0.40 EUR / 100 kg/net/%sacchar.');
    cy.contains('Tariff preference - Viet Nam');
    cy.contains('0.40 EUR / 100 kg/net/%sacchar.');
  });
});
