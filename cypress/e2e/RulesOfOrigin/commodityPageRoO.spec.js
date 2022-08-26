/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable max-len */
describe('| commodityPageRoO - Rules of Origin - copy and links ', {tags: ['config', 'roo-tag']}, function() {
  // RoO tab exists and links work
  const service_urls = ['', 'xi'];
  const service_agreements = ['UK', 'EU'];
  const message = ['exist', 'not.exist'];
  for (let i=0; i<service_urls.length; i++) {
    it(`| ${service_agreements[i]} | Check RoO tab exsits on commodity page + links |`, function() {
      cy.visit(`${service_urls[i]}/commodities/0702000007`);
      cy.contains('Rules of origin').click();
      cy.contains('Preferential rules of origin');
      cy.contains(`To view rules of origin, select a country with which the ${service_agreements[i]} has a trade agreement from the list above`);

      // links
      cy.contains('Check your goods meet the rules of origin');
      cy.get('li:nth-of-type(1) > a[target=\'blank\']').should('have.attr', 'href', 'https://www.gov.uk/guidance/check-your-goods-meet-the-rules-of-origin');
      cy.contains('Pay less Customs Duty on goods from a country with a UK trade agreement (opens in new tab)');
      cy.get('li:nth-of-type(2) > a[target=\'blank\']').should('have.attr', 'href', 'https://www.gov.uk/guidance/import-and-export-goods-using-preference-agreements');
      cy.contains('Pay less Customs Duty on goods from a country with a UK trade agreement (opens in new tab)');
      cy.roOTab();
    });
    it(`| ${service_agreements[i]} | Chile 🇨🇱 - Service_urls with which there is a singular (1 to 1) trade agreement (e.g. Chile, which has an agreement on its own, not as part of a bloc) |`, function() {
      cy.visit('/commodities/0702000007');
      // Select Chile from All countries list', () => {
      cy.get('input#search_country').click().clear().wait(500)
          .type('Chile').wait(500)
          .type('{enter}');
      cy.contains('Rules of origin').click();
      cy.get('img[alt=\'Flag for Chile\']').should('be.visible');
      cy.contains('Preferential rules of origin for trading with Chile');
      //
      cy.contains('In order to qualify for preferential tariff treatment under the UK-Chile association agreement, the product must originate in the UK or Chile.');
      //
      cy.roOTab();
      cy.contains('Preferential rules of origin');
      // proving originating status + claiming pref treatment links
    });

    it(`| ${service_agreements[i]} | USA 🇺🇸 - Countries with which there is no trade agreement  |`, function() {
      cy.visit('/commodities/0702000007');
      cy.get('a#tab_rules-of-origin').contains('Rules of origin').click().wait(200);
      // Select USA from All countries list
      cy.get('input#search_country').click().clear().wait(500)
          .type('United States (US)').wait(500)
          .type('{enter}');
      cy.contains('Preferential rules of origin for trading with United States');
      cy.get('img[alt=\'Flag for United States\']').should('be.visible');

      cy.contains('There is no preferential agreement in place with United States, therefore rules of origin are not applicable.');
      cy.contains('Non-preferential rules of origin');
      cy.get('.govuk-table__row').contains('Heading').should('not.exist');
      cy.roOTab();
    });

    it(`| ${service_agreements[i]} | Bahamas (Cariforum) 🇧🇸 - Countries with which there is an agreement with a bloc - EU (France) |`, function() {
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
      // cy.RoOContent({commCode: '0702000007', country: 'The Bahamas'});
      cy.get('.govuk-table__row').contains('Heading');
      cy.contains('Non-preferential rules of origin');
    });

    it(`| ${service_agreements[i]} | Moldova 🇲🇩 - Countries with which there is an agreement Generalised Scheme of Preferences (GSP) |`, function() {
      cy.visit('/commodities/0702000007');
      cy.contains('Rules of origin').click();
      // Select USA from All countries list
      cy.get('input#search_country').click().clear().wait(500)
          .type('Moldova').wait(500)
          .type('{enter}');
      cy.contains('Preferential rules of origin for trading with Moldova');
      cy.get('img[alt=\'Flag for Moldova\']').should('be.visible');

      // TODO: Verify if the section "Proving originating status and claiming preferential treatment" has been rightly removed.
      // cy.contains('Proving originating status and claiming preferential treatment');

      cy.contains('Non-preferential rules of origin');
    });
    it(`| ${service_agreements[i]} | India 🇮🇳 - Countries with which there is an agreement - Generalised Scheme of Preferences (GSP) |`, function() {
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
    });
  }
});
