/* eslint-disable max-len */
// eslint-disable-next-line max-len
describe('| additionalDutiesBoxConditionalRulesRoO.spec - Rules of Origin tab - additional duties box conditional rules', {tags: ['notProduction']}, function() {
  it(`| UK | Third country duty (MFN) is 0.0%, and there is a preference or a quota |`, function() {
    cy.visit(`/commodities/0102211000?country=ZA#rules-of-origin`);
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.get('.basic-third-country-duty').contains('Basic third country duty =');
    cy.get('.basic-third-country-duty').contains('0.0');
    cy.get('.preferential-tariff-duty').contains('Preferential tariff duty =');
    cy.get('.preferential-tariff-duty').contains('0.0');
    cy.get('.tariff-breadcrumbs').contains('As the third country duty is zero, you do not need to apply for a preferential tariff or comply with preferential rules of origin.');
    cy.get('.tariff-breadcrumbs').contains('If you would still like to continue, click the \'Check rules of origin\' button.');
    cy.get('form > .govuk-button').should('be.visible').should('contain.text', 'Check rules of origin');
  });
  it(`| UK | There is neither a preference nor a quota |`, function() {
    cy.visit(`/commodities/0201100029?country=ZA#rules_of_origin`);
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.get('.basic-third-country-duty').contains('Basic third country duty =');
    cy.get('.basic-third-country-duty').contains('12.00 % + 147.00 GBP / 100 kg');
    cy.get('.govuk-inset-text').contains('SACUM-UK Economic Partnership Agreement (EPA)');
    cy.get('#rules-of-origin > div > div.govuk-grid-column-two-thirds > h3').contains('Work out if your goods meet the rules of origin');
    cy.get('button.govuk-button').contains('Check rules of origin');
  });
});
