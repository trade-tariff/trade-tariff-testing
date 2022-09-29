/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable max-len */
describe('| impTradeSumBoxRoOTab.spec.spec - Rules of Origin tab - Logic for duties box', {tags: ['config', 'roo-tag']}, function() {
  it(`| UK | Preference + Quota |`, function() {
    cy.visit(`commodities/0203111000?country=PE#rules-of-origin`);
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.impDutyBox('Basic third country duty =');
    cy.impDutyBox('Preferential tariff duty =');
    cy.impDutyBox('Preferential quota duty =');
  });
  it(`| UK | Preference + No Quota |`, function() {
    cy.visit(`/commodities/0103911000?country=ZA#rules_of_origin`);
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.impDutyBox('Basic third country duty =');
    cy.impDutyBox('Preferential tariff duty =');
  });
  it(`| UK | No Preference + Quota |`, function() {
    cy.visit(`/commodities/0402109100?country=ZA#rules_of_origin`);
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.impDutyBox('Basic third country duty');
    cy.impDutyBox('Preferential quota duty =');
  });
  it(`| UK | No Preference + No Quota |`, function() {
    cy.visit(`/commodities/0201100029?country=ZA#rules_of_origin`);
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.impDutyBox('Basic third country duty =');
    // cy.impDutyBox('There is no preferential tarif duty or quota available for this commodity');
  });
});
