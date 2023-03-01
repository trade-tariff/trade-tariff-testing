// e2e journey validating alcohol percentage calculations Singapore to UK
describe('| RoW-GB208--e2e.spec | Special calculations - alcohol % + sugar % |', function() {
  it(' RoW 🇸🇬 Singapore - 🇬🇧 GB - Alcohol percentage calculations ', function() {
    cy.visit('/commodities/2208401100');
    cy.dutyCalLink('2208401100');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Singapore'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Page validation
    cy.contains('What is the alcohol percentage (%) of the goods you are importing?');
    // valid inputs entered
    cy.quantity({asv: 40, ltr: 100, lpa: 40});
    // Excise code
    cy.exciseCode('451');
    cy.confirmPage();
    // validate calculations - third country duty
    cy.contains('Option 1: Third-country duty');
    cy.contains('0.50 GBP / % vol/hl + 2.60 GBP / hl');
    cy.contains('£1,576.64');
    // tariff preference rate for Singapore
    cy.contains('Option 2: Tariff preference - Singapore');
    cy.contains('0.20 GBP / % vol/hl + 1.30 GBP / hl');
    cy.contains('£1,560.68');
  });
  // alcohol percentage calclations
  it('RoW 🇺🇸 (USA) - UK - Excise code alcohol percentage calculations ', function() {
    cy.visit('/commodities/2208403900');
    cy.dutyCalLink('2208403900');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'United States'});
    cy.customsValue({monetary: '1000.00', shipping: '50.00', cost: '50.00'});
    cy.quantity({asv: '40', ltr: '4500', lpa: '1800'});
    cy.exciseCode('451');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('0.50 GBP / % vol/hl + 2.60 GBP / hl');
    cy.contains('£1,017.00');
  });
  // sugar percentage calclations
  it('RoW 🇸🇬 Singapore - 🇬🇧 - Sugar percentage calculations ', function() {
    cy.visit('/commodities/2106905910');
    cy.dutyCalLink('2106905910');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Singapore'});
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
    cy.contains('0.30 GBP / 100 kg/net/%sacchar.');
    cy.contains('£3,916.80');
    // tariff preference rate for Singapore
    cy.contains('Option 2: Tariff preference - Singapore');
    cy.contains('0.00 GBP / 100 kg/net/%sacchar.');
  });
});
