
describe('|*RoW-GB205--e2e.spec | 🇸🇬 Singapore to 🇬🇧 GB  |', function() {
  it(`e2e RoW to GB 🇸🇬 Singapore  to 🇬🇧 GB`, function() {
    cy.visit('/xi/commodities/1701141000');
    cy.contains('Northern Ireland Online Tariff');
    cy.get('.calculator-panel > p:nth-of-type(2) > a').click();
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Singapore'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.quantity({tne: '1', kgm: '100', dap: '1'});
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.contains('100 kilograms');
    cy.contains('1 tonnes');
    cy.contains('1 x 10,000 kg');
    cy.confirmPage();
    // Duty Calculations
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - Singapore');
    cy.contains('Option 3: Non-preferential quota 057713');
    cy.contains('Option 4: Non-preferential tariff quota under end-use 054320');
    cy.contains('£28.00');
  });
});
