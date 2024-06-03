 
 
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
    cy.get('.panel.panel--grey').contains('As the third country duty is zero, you do not need to apply for a preferential tariff or comply with preferential rules of origin.');
    cy.get('.panel.panel--grey').contains('If you would still like to continue, click the \'Check rules of origin\' button.');
    cy.get('form > .govuk-button').should('be.visible').should('contain.text', 'Check rules of origin');
  });
  it(`| UK | There is neither a preference nor a quota |`, function() {
    cy.visit(`/commodities/0201100029?country=ZA#rules_of_origin`);
    cy.contains('Origin').click();
    cy.contains('Preferential rules of origin');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.get('.basic-third-country-duty').contains('Basic third country duty =');
    cy.get('.basic-third-country-duty').contains('12.00 % + 147.00 GBP / 100 kg');
    cy.get('.govuk-inset-text.import-trade-summary > ul > li.no-preferential-duties').contains('There is no preferential tariff duty or quota available for this commodity');
    cy.get('#rules-of-origin__intro--bloc-scheme').contains('SACUM-UK Economic Partnership Agreement (EPA)');
    cy.get('.panel.panel--grey').contains('Work out if your goods meet the rules of origin');
    cy.get('button.govuk-button').contains('Check rules of origin');
  });
  it(`| UK | Free Trade Agreement b/n UK and NZ |`, function() {
    cy.visit(`/commodities/2701121000?country=NZ#rules_of_origin`);
    cy.contains('Origin').click();
    cy.get('#rules-of-origin__intro--country-scheme').contains('Free Trade Agreement between the United Kingdom of Great Britain and Northern Ireland and New Zealand');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.get('.basic-third-country-duty').contains('Basic third country duty =');
    cy.get('.basic-third-country-duty').contains('0.00 %');
    cy.get('.panel.panel--grey').contains('Work out if your goods meet the rules of origin');
    cy.get('button.govuk-button').contains('Check rules of origin');
    cy.contains('Preferential rules').click();
    cy.contains('Product-specific rules - trade with New Zealand');
    cy.get('td.govuk-table__cell.tariff-markdown.responsive-full-width').contains('Process Rule').click();
    cy.contains('Notwithstanding the applicable product-specific rules of origin, a good of chapters 27 through 40 that is the product of any of the following processes is an originating good if the process occurs in the territory of one or both of the Parties');
  });
  it(`| UK | Free Trade Agreement b/n UK and AU |`, function() {
    cy.visit(`/commodities/2701121000?country=AU#rules_of_origin`);
    cy.contains('Origin').click();
    cy.get('#rules-of-origin__intro--country-scheme').contains('Free Trade Agreement between the United Kingdom of Great Britain and Northern Ireland and Australia');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.get('.basic-third-country-duty').contains('Basic third country duty =');
    cy.get('.basic-third-country-duty').contains('0.00 %');
    cy.get('.panel.panel--grey').contains('Work out if your goods meet the rules of origin');
    cy.get('button.govuk-button').contains('Check rules of origin');
    cy.contains('Preferential rules').click();
    cy.contains('Product-specific rules - trade with Australia');
    cy.get('td.govuk-table__cell.tariff-markdown.responsive-full-width').contains('Chemical reaction rule').click();
    cy.contains('MINERAL FUELS, MINERAL OILS AND PRODUCTS OF THEIR DISTILLATION; BITUMINOUS SUBSTANCES; MINERAL WAXES');
  });
});
