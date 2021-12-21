
describe('|*RoW-GB205--e2e.spec | 🇸🇬 Singapore to 🇬🇧 GB  |', function() {
  it(`e2e RoW to GB 🇸🇬 Singapore  to 🇬🇧 GB`, function() {
    cy.visit('/xi/commodities/1701141000');
    cy.contains('Northern Ireland Online Tariff');
    cy.get('p:nth-of-type(2) > a').click();

    cy.wait(700);
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Singapore'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.quantity({tne: '1', dtnr: '1', dap: '1'});
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - Singapore');
    // cy.contains('Option 3: Non-preferential quota 057713');
    cy.contains('Option 3: Non-preferential tariff quota under end-use 054320');
  });
});
