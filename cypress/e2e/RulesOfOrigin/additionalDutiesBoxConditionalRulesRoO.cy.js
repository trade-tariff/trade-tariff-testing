 
 
describe('| additionalDutiesBoxConditionalRulesRoO.spec - Rules of Origin tab - additional duties box conditional rules', {tags: ['notProduction']}, function() {
  it(`| UK | Third country duty (MFN) is 0.0%, and there is a preference or a quota |`, function() {
    cy.visit(`/commodities/0102211000?country=ZA#rules-of-origin`);
    cy.contains('Origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.import-trade-summary > p').contains('How rules of origin could affect the payable import duty:');
    cy.get('.basic-third-country-duty').contains('Basic third country duty =');
    cy.get('.basic-third-country-duty').contains('0.0');
    cy.get('.preferential-tariff-duty').contains('Preferential tariff duty =');
    cy.get('.preferential-tariff-duty').contains('0.0');
    cy.get('#rules-of-origin > .govuk-inset-text').contains('Check eligibility for preferential duty rates');
    cy.get('#rules-of-origin > .govuk-inset-text').should('include.text', 'SACUM-UK Economic Partnership Agreement (EPA)');
    cy.get('form > .govuk-button').should('be.visible').should('contain.text', 'Start now');
  });
  it(`| UK | There is neither a preference nor a quota |`, function() {
    cy.visit(`/commodities/0201100029?country=ZA#rules_of_origin`);
    cy.contains('Origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.import-trade-summary > p').contains('How rules of origin could affect the payable import duty:');
    cy.get('.basic-third-country-duty').contains('Basic third country duty =');
    cy.get('.basic-third-country-duty').contains('12.00 % + 147.00 GBP / 100 kg');
    cy.get('.import-trade-summary').contains('There is no preferential tariff duty or quota available for this commodity');
    cy.get('#rules-of-origin > .govuk-inset-text').contains('Check eligibility for preferential duty rates');
    cy.get('#rules-of-origin > .govuk-inset-text').should('include.text', 'SACUM-UK Economic Partnership Agreement (EPA)');
    cy.get('form > .govuk-button').should('be.visible').should('contain.text', 'Start now');
  });
  it(`| UK | Free Trade Agreement b/n UK and NZ |`, function() {
    cy.visit(`/commodities/2701121000?country=NZ#rules_of_origin`);
    cy.contains('Origin').click();
    cy.get('#rules-of-origin-proofs > :nth-child(3)').should('include.text','Free Trade Agreement between the United Kingdom of Great Britain and Northern Ireland and New Zealand');
    cy.get('.import-trade-summary > p').contains('How rules of origin could affect the payable import duty:');
    cy.get('.basic-third-country-duty').contains('Basic third country duty =');
    cy.get('.basic-third-country-duty').contains('0.00 %');
    cy.get('#rules-of-origin > .govuk-inset-text').contains('Check eligibility for preferential duty rates');
    cy.get('#rules-of-origin > .govuk-inset-text > p').should('include.text','Free Trade Agreement between the United Kingdom of Great Britain and Northern Ireland and New Zealand');
    cy.get('form > .govuk-button').should('be.visible').should('contain.text', 'Start now');
    cy.contains('Preferential rules of origin for trading with New Zealand');
    cy.get('.govuk-table__row > .tariff-markdown > .govuk-details > .govuk-details__summary > .govuk-details__summary-text').contains('Process Rule').click();
    cy.contains('Notwithstanding the applicable product-specific rules of origin, a good of chapters 27 through 40 that is the product of any of the following processes is an originating good if the process occurs in the territory of one or both of the Parties');
  });
  it(`| UK | Free Trade Agreement b/n UK and AU |`, function() {
    cy.visit(`/commodities/2701121000?country=AU#rules_of_origin`);
    cy.contains('Origin').click();
    cy.get('#rules-of-origin-proofs > :nth-child(3)').should('include.text','Free Trade Agreement between the United Kingdom of Great Britain and Northern Ireland and Australia');
    cy.get('.import-trade-summary > p').contains('How rules of origin could affect the payable import duty:');
    cy.get('.basic-third-country-duty').contains('Basic third country duty =');
    cy.get('.basic-third-country-duty').contains('0.00 %');
    cy.get('#rules-of-origin > .govuk-inset-text').contains('Check eligibility for preferential duty rates');
    cy.get('#rules-of-origin > .govuk-inset-text > p').should('include.text','Free Trade Agreement between the United Kingdom of Great Britain and Northern Ireland and Australia');
    cy.get('form > .govuk-button').should('be.visible').should('contain.text', 'Start now');
    cy.contains('Preferential rules').click();
    cy.contains('Preferential rules of origin for trading with Australia');
    cy.get('.govuk-table__row > .tariff-markdown > .govuk-details > .govuk-details__summary > .govuk-details__summary-text').contains('Chemical reaction rule').click();
    cy.contains('MINERAL FUELS, MINERAL OILS AND PRODUCTS OF THEIR DISTILLATION; BITUMINOUS SUBSTANCES; MINERAL WAXES');
  });
});
