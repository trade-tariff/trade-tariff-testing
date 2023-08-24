describe('| RoW-GB208--e2e.spec | Special calculations - alcohol % + sugar % |', function() {
  it('RoW 🇸🇬 Singapore - 🇬🇧 GB - Alcohol percentage calculations ', function() {
    cy.visit('/commodities/2208401100');
    cy.dutyCalLink('2208401100');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Singapore'});
    cy.customsValue({monetary: '1000.00', shipping: '0.00', cost: '0.00'});
    cy.quantity({asv: 8.4, ltr: 1000, lpa: 84, spr: 5});
    cy.exciseCode('370');
    cy.confirmPage();
    cy.dutyPage();

    // validate excise calculations
    cy.contains('Spirits at least 3.5 but less than 8.5% & eligible for SPR');
    cy.contains('(£24.77 - SPR discount) / vol% / hl');
    cy.contains('£1,660.68');
    // validate calculations - third country duty
    cy.contains('Third-country duty');
    cy.contains('0.50 GBP / % vol/hl + 2.60 GBP / hl');
    cy.contains('£2,274.42');
    // tariff preference rate for Singapore
    cy.contains('Tariff preference - Singapore');
    cy.contains('0.10 GBP / % vol/hl + 0.80 GBP / hl');
    cy.contains('£2,212.50');
  });

  // alcohol percentage calculations
  it('RoW 🇺🇸 (USA) - UK - Excise code alcohol percentage calculations ', function() {
    cy.visit('/commodities/2208403900');
    cy.dutyCalLink('2208403900');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'United States'});
    cy.customsValue({monetary: '1000.00', shipping: '0.00', cost: '0.00'});
    cy.quantity({asv: '8.4', ltr: '1000', lpa: '84', spr: '5'});
    cy.exciseCode('370');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Third-country duty');
    cy.contains('0.50 GBP / % vol/hl + 2.60 GBP / hl');
    cy.contains('Spirits at least 3.5 but less than 8.5% & eligible for SPR');
    cy.contains('£1,660.68');
    cy.contains('£2,274.42');
  });

  // sugar percentage calculations
  it('RoW 🇻🇳 Vietnam - 🇬🇧 - Sugar percentage calculations ', function() {
    cy.visit('/commodities/2106905910');
    cy.dutyCalLink('2106905910');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Vietnam'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Page validation
    cy.contains('What is the percentage of sucrose (Brix) in your goods?');
    cy.contains('If you do not know the percentage sucrose content (Brix value),');
    cy.contains('check the footnotes for the commodity code to identify how to calculate it.');
    // valid inputs entered
    cy.quantity({kgm: 16320, brx: 80});
    // VAT Page
    cy.vat('20');
    cy.contains('kilograms');
    cy.contains('16320');
    cy.contains('% sucrose');
    cy.contains('80');
    cy.confirmPage();
    // validate calculations - third country duty
    cy.contains('Third-country duty');
    cy.contains('0.30 GBP / 100 kg/net/%sacchar.');
    cy.contains('£3,916.80');
    // tariff preference rate for Singapore
    cy.contains('Tariff preference - Vietnam');
    cy.contains('0.10 GBP / 100 kg/net/%sacchar.');
    cy.contains('£1,305.60');
  });
});
