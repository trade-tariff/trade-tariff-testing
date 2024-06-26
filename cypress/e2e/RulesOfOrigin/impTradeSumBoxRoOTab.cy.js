 
 
 
 
describe('| impTradeSumBoxRoOTab.spec.spec - Rules of Origin tab - Logic for duties box', {tags: ['config', 'roo-tag', 'notProduction']}, function() {
  it(`| UK | Preference + Quota |`, function() {
    cy.visit(`commodities/0203111000?country=PE#rules-of-origin`);
    cy.contains('Origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.import-trade-summary').contains('Preferential import duty rates');
    cy.impDutyBox('Basic third country duty =');
    cy.impDutyBox('Preferential tariff duty =');
    cy.impDutyBox('Preferential quota duty =');
  });
  it(`| UK | Preference + No Quota |`, function() {
    cy.visit(`/commodities/0103911000?country=ZA#rules_of_origin`);
    cy.contains('Origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.import-trade-summary').contains('Preferential import duty rates');
    cy.impDutyBox('Basic third country duty =');
    cy.impDutyBox('Preferential tariff duty =');
  });
  it(`| UK | No Preference + Quota |`, function() {
    cy.visit(`/commodities/0402109100?country=ZA#rules_of_origin`);
    cy.contains('Origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.import-trade-summary').contains('Preferential import duty rates');
    cy.impDutyBox('Basic third country duty');
    cy.impDutyBox('Preferential quota duty =');
  });
  it(`| UK | No Preference + No Quota |`, function() {
    cy.visit(`/commodities/0201100029?country=ZA#rules_of_origin`);
    cy.contains('Origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.import-trade-summary').contains('Preferential import duty rates');
    cy.impDutyBox('Basic third country duty =');
  });
});
