/* eslint-disable max-len */
// e2e journey validating alcohol percentage calculations Singapore to XI
describe('| RoW-GB309--e2e.spec | Special calculations - alcohol % + sugar % |', function() {
  // alcohol percentage calculations
  it(' RoW 🇸🇬 Singapore - 🇬🇧 XI - Alcohol percentage calculations ', function() {
    cy.visit('/commodities/2208401100');
    cy.dutyCalLink('2208401100');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'Singapore'});

    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Page validation
    cy.contains('What is the alcohol percentage (%) of the goods you are importing?');
    // valid inputs entered
    cy.quantity({asv: 40, ltr: 10000, lpa: 4000});
    // Excise code
    cy.exciseCode('451');
    cy.confirmPage();
    // validate calculations - third country duty
    cy.contains('Option 1: Third-country duty');
    // cy.contains('0.60 EUR / % vol/hl + 3.20 EUR / hl');
    // cy.contains('£140,970.46');
    // tariff preference rate for Singapore
    cy.contains('Option 2: Tariff preference - Singapore');
    // cy.contains('0.30 EUR / % vol/hl + 1.60 EUR / hl');
    // cy.contains('£139,561.23');
  });
  // sugar percentage calclations
  it(' RoW 🇸🇬 Singapore - 🇬🇧 - Sugar percentage calculations ', function() {
    cy.visit('xi/commodities/2106905910');
    cy.dutyCalLink('2106905910');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'Singapore'});

    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Page validation
    cy.contains('What is the percentage of sucrose (Brix) in your goods?');
    cy.contains('If you do not know the percentage sucrose content (Brix value), check the footnotes for the commodity code to identify how to calculate it.');
    // valid inputs entered
    cy.quantity({kgm: 16320, brx: 80});
    // VAT Page
    cy.vat('20');
    cy.contains('80 % sucrose');
    cy.confirmPage();
    // validate calculations - third country duty
    cy.contains('Option 1: Third-country duty');
    cy.contains('0.40 EUR / 100 kg/net/%sacchar.');
    // tariff preference rate for Singapore
    cy.contains('Option 2: Tariff preference - Singapore');
    cy.contains('0.10 EUR / 100 kg/net/%sacchar.');
  });
});
