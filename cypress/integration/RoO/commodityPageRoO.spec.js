/* eslint-disable new-cap */
/* eslint-disable max-len */
describe('| commodityPageRoO - Rules of Origin - copy and links ', {tags: ['config', 'roo-tag']}, function() {
  // RoO tab exists and links work
  const countries = [''];
  const service = ['UK', 'EU'];
  const message = ['exist', 'not.exist'];
  for (let i=0; i<countries.length; i++) {
    it(`| ${service[i]} | Check RoO tab exsits on commodity page |`, function() {
      cy.visit(`${countries[i]}/commodities/0702000007`);
      cy.contains('Rules of origin').click();
      cy.get('.govuk-grid-column-two-thirds > .govuk-heading-m').contains('Preferential rules of origin');
      cy.contains(`To view rules of origin, select a country with which the ${service[i]} has a trade agreement from the list above`);
      cy.contains('You can also find out about rules of origin').should(`${message[i]}`);

      cy.contains('Check your goods meet the rules of origin').click();
      cy.contains('Guidance');
      cy.contains('Check your goods meet the rules of origin');
      cy.go(-1);
      cy.contains(`Pay less Import Duty on goods from a country with a ${service[i]} trade agreement`).click();
      cy.contains('Guidance');
      cy.contains('Pay less Customs Duty on goods from a country with a UK trade agreement');
      cy.go(-1);
      cy.get('.govuk-grid-column-two-thirds > .govuk-heading-m').contains('Preferential rules of origin');
      cy.contains('Non-preferential rules of origin');
      cy.contains('Find out about the product-specific rules, to determine the origin of imports outside of a preferential agreement.').click();
      cy.contains('Reference Document for The Customs (Origin of Chargeable Goods) (EU Exit) Regulations 2020');
      cy.go(-1);
      cy.get('.govuk-grid-column-two-thirds > .govuk-heading-m').contains('Preferential rules of origin');
    });
  }
  it('| UK | Chile 🇨🇱 - Countries with which there is a singular (1 to 1) trade agreement (e.g. Chile, which has an agreement on its own, not as part of a bloc) |', function() {
    cy.visit('/commodities/0702000007');
    // Select Chile from All countries list', () => {
    cy.get('input#search_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');
    cy.contains('Rules of origin').click();
    cy.get('img[alt=\'Flag for Chile\']').should('be.visible');
    cy.contains('Preferential rules of origin for trading with Chile');
    //
    cy.contains('In order to qualify for the lower or zero preferential tariff under the UK-Chile association agreement, the product must originate in the UK or Chile.');
    cy.contains('You do not need to apply for a preferential tariff (or comply with preferential rules of origin) if the MFN duty for your product is zero.');
    //
    cy.contains('Non-preferential rules of origin');
    cy.contains('Find out about the product-specific rules, to determine the origin of imports outside of a preferential agreement.').click();
    cy.contains('Reference Document for The Customs (Origin of Chargeable Goods) (EU Exit) Regulations 2020');
    cy.go(-1);
    cy.contains('Preferential rules of origin');
    // proving originating status + claiming pref treatment links
    cy.contains('Proving originating status and claiming preferential treatment');
    cy.contains('The customs authority of the importing party will grant preferential tariff treatment, based on a claim made by the importer, to goods that originate in the other party that meet the conditions of the Trade Agreement');
    cy.contains('A claim can be made if the importer has one of the following proofs of origin:');
    cy.contains('EUR1 or EUR.MED movement certificate').click();
    cy.contains('EUR1 and EUR-MED movement certificates');
    cy.go(-1);
    cy.contains('Invoice declaration').click();
    cy.contains('Origin declaration');
    cy.contains('You can make an origin declaration (also known as an ‘invoice declaration’ or ‘statement on origin’) on a commercial document that has enough detail in it to identify the origin of the goods. The document can be:');
  });

  it('| UK | USA 🇺🇸 - Countries with which there is no trade agreement  |', function() {
    cy.visit('/commodities/0702000007');
    cy.wait(500);
    cy.get('a#tab_rules-of-origin').contains('Rules of origin').click().wait(200);
    // Select USA from All countries list
    cy.get('input#search_country').click().clear().wait(500)
        .type('United States (US)').wait(500)
        .type('{enter}');
    cy.contains('Preferential rules of origin for trading with United States');
    cy.get('img[alt=\'Flag for United States\']').should('be.visible');

    cy.contains('There is no preferential agreement in place with United States, therefore rules of origin are not applicable.');
    // cy.contains('Product-specific rules for commodity 0702000007');
    //  cy.contains('There are no product-specific rules for commodity 0702000007');
    cy.contains('Non-preferential rules of origin');
    cy.get('.govuk-table__row').contains('Heading').should('not.exist');
  });

  it('| UK | Bahamas (Cariforum) 🇧🇸 - Countries with which there is an agreement with a bloc - EU (France) |', function() {
    cy.visit('/commodities/0702000007');
    cy.contains('Rules of origin').click();
    // Select USA from All countries list
    cy.get('input#search_country').click().clear().wait(500)
        .type('The Bahamas').wait(500)
        .type('{enter}');
    cy.contains('Preferential rules of origin for trading with The Bahamas');
    cy.get('img[alt=\'Flag for The Bahamas\']').should('be.visible');

    cy.contains('In order to qualify for the lower or zero preferential tariff under the CARIFORUM-UK economic partnership agreement, the product must originate in the UK or one of the partner countries.');

    cy.contains('You do not need to apply for a preferential tariff (or comply with preferential rules of origin) if the MFN duty for your product is zero.');
    cy.RoOContent({commCode: '0702000007', country: 'The Bahamas'});
    cy.get('.govuk-table__row').contains('Heading');
    cy.contains('Non-preferential rules of origin');
  });

  it('| UK | Moldova 🇲🇩 - Countries with which there is an agreement Generalised Scheme of Preferences (GSP) |', function() {
    cy.visit('/commodities/0702000007');
    cy.contains('Rules of origin').click();
    // Select USA from All countries list
    cy.get('input#search_country').click().clear().wait(500)
        .type('Moldova').wait(500)
        .type('{enter}');
    cy.contains('Preferential rules of origin for trading with Moldova');
    cy.get('img[alt=\'Flag for Moldova\']').should('be.visible');

    cy.contains('If your product has been produced using any non-originating materials, the product has to fulfil the following product-specific rule to be considered originating in the UK or Moldova.');

    cy.contains('Proving originating status and claiming preferential treatment');
    cy.contains('Product-specific rules for commodity 0702000007');
    cy.contains('If your product has been produced using any non-originating materials, the product has to fulfil the following product-specific rule to be considered originating in the UK or Moldova.');
    cy.get('.govuk-table__row').contains('Heading');
    cy.contains('Non-preferential rules of origin');
  });
  it('| UK | India 🇮🇳 - Countries with which there is an agreement - Generalised Scheme of Preferences (GSP) |', function() {
    cy.visit('/commodities/0702000007');
    cy.contains('Rules of origin').click();
    // Select USA from All countries list
    cy.get('input#search_country').click().clear().wait(500)
        .type('India').wait(500)
        .type('{enter}');
    cy.contains('Preferential rules of origin for trading with India');
    cy.get('img[alt=\'Flag for India\']').should('be.visible');

    cy.contains('In order to qualify for the lower or zero preferential tariff under the Generalised Scheme of Preferences (GSP), the product must originate in one of the partner countries.');

    cy.contains('You do not need to apply for a preferential tariff (or comply with preferential rules of origin) if the MFN duty for your product is zero.');
    cy.contains('Product-specific rules for commodity 0702000007');
  });
  it('| XI | India 🇮🇳 - Countries with which there is an agreement - Generalised Scheme of Preferences (GSP) |', function() {
    cy.visit('/xi/commodities/0702000007');
    cy.contains('Rules of origin').click();
    // Select USA from All countries list
    cy.get('input#search_country').click().clear().wait(500)
        .type('India').wait(500)
        .type('{enter}');
    cy.contains('Preferential rules of origin for trading with India');
    cy.get('img[alt=\'Flag for India\']').should('be.visible');

    cy.contains('In order to qualify for the lower or zero preferential tariff under the Generalised Scheme of Preferences (GSP), the product must originate in one of the partner countries.');

    cy.contains('You do not need to apply for a preferential tariff (or comply with preferential rules of origin) if the MFN duty for your product is zero.');
    cy.contains('Product-specific rules for commodity 0702000007');
  });
});
