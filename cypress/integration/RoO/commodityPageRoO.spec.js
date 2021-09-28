/* eslint-disable max-len */
describe('| commodityPageRoO - Rules of Origin - copy and links ', function() {
  // RoO tab exists and links work
  it('| Check RoO tag exsits on commodity page |', function() {
    cy.visit('/commodities/0702000007');
    cy.contains('Rules of origin').click();
    cy.get('.govuk-grid-column-two-thirds > .govuk-heading-m').contains('Rules of origin');
    cy.contains('You can also find out about rules of origin');

    cy.contains('Check your goods meet the rules of origin').click();
    cy.contains('Guidance');
    cy.contains('Check your goods meet the rules of origin');
    cy.go(-1);
    cy.contains('Pay less Customs Duty on goods from a country with a UK trade agreement').click();
    cy.contains('Guidance');
    cy.contains('Pay less Customs Duty on goods from a country with a UK trade agreement');
    cy.go(-1);
    cy.get('.govuk-grid-column-two-thirds > .govuk-heading-m').contains('Rules of origin');
  });
  // check flag images exist
  it('| Countries with which there is a singular (1 to 1) trade agreement (e.g. Chile, which has an agreement on its own, not as part of a bloc) |', function() {
    cy.visit('/commodities/0702000007');
    // Select Chile from All countries list', () => {
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin').click();
    cy.get('img[alt=\'Flag for Chile\']').should('be.visible');
    cy.contains('In order to qualify for the lower or zero preferential tariff under the UK-Chile association agreement, the product must originate in the UK or Chile.');
    cy.contains('You do not need to apply for a preferential tariff (or comply with preferential rules of origin) if the MFN duty for your product is zero.');
  });

  it('| Countries with which there is no trade agreement (e.g. USA) |', function() {
    cy.visit('/commodities/0702000007');
    cy.contains('Rules of origin').click();
    // Select USA from All countries list
    cy.get('input#search_country').click().clear().wait(500)
        .type('United States (US)').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin for trading with United States');
    cy.get('img[alt=\'Flag for United States\']').should('be.visible');

    cy.contains('There is no preferential agreement in place with United States, therefore rules of origin are not applicable.');
    cy.contains('Product-specific rules for commodity 0702000007');
    cy.contains('There are no product-specific rules for commodity');
  });

  it('| Countries with which there is an agreement with a bloc - Bahamas (Cariforum), EU (France) |', function() {
    cy.visit('/commodities/0702000007');
    cy.contains('Rules of origin').click();
    // Select USA from All countries list
    cy.get('input#search_country').click().clear().wait(500)
        .type('The Bahamas').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin for trading with The Bahamas');
    cy.get('img[alt=\'Flag for The Bahamas\']').should('be.visible');

    cy.contains('In order to qualify for the lower or zero preferential tariff under the CARIFORUM-UK economic partnership agreement, the product must originate in the UK or one of the partner countries.');
    cy.contains('You do not need to apply for a preferential tariff (or comply with preferential rules of origin) if the MFN duty for your product is zero.')
    cy.contains('Product-specific rules for commodity 0702000007');
  });

});
