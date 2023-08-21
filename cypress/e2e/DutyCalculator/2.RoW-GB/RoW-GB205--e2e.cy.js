describe('|*RoW-GB205--e2e.spec | 🇸🇬 Singapore to 🇬🇧 GB  |', function() {
  it('e2e RoW to GB 🇸🇬 Singapore  to 🇬🇧 GB', function() {
    cy.visit('/xi/commodities/1701141000');
    cy.contains('Northern Ireland Online Tariff');
    cy.get('.measure-inset').contains('work out the duties and taxes applicable to the import of commodity').click();
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Singapore'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.quantity({tne: '1', kgm: '100', dap: '1'});
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.contains('kilograms');
    cy.contains('1,000 kg');
    cy.contains('decatonne, corrected according to polarisation (10,000 kg/polar)');
    cy.contains('1');
    cy.confirmPage();

    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Tariff preference - Singapore');
    cy.contains('Non-preferential quota 057713');
    cy.contains('Non-preferential tariff quota under end-use 054320');
    cy.contains('£28.00');
  });
});
