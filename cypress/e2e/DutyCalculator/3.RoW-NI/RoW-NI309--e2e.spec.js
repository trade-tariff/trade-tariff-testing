// e2e journey validating alcohol percentage calculations Singapore to XI
describe('| RoW-GB209--e2e.spec | alcohol percentage |', function() {
  // alcohol percentage calclations
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
    cy.contains('0.60 EUR / % vol/hl + 3.20 EUR / hl');
    cy.contains('£140,970.46');
    // tariff preference rate for Singapore
    cy.contains('Option 2: Tariff preference - Singapore');
    cy.contains('0.30 EUR / % vol/hl + 1.60 EUR / hl');
    cy.contains('£139,561.23');
  });
});
