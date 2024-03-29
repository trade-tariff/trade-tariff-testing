/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable max-len */
describe('| commodityPageRoO - Rules of Origin - copy and links ', {tags: ['config', 'roo-tag']}, function() {
  it('Check RoO tab preserves anchor', function() {
    // given we're on the roo tab
    cy.visit(`/commodities/0702000007`);
    cy.contains('Rules of origin').click();
    cy.url().should('include', '#rules-of-origin');
    // when we change the trading partner
    cy.get('input#trading_partner_country').click().clear()
        .type('Chile')
        .type('{enter}');
    // then we're are still on the roo tab
    cy.url().should('include', '#rules-of-origin');
  });

  // RoO tab exists and links work
  it(`Check RoO tab exists on commodity page + links |`, function() {
    cy.visit(`/commodities/0702000007`);
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin');
    cy.contains(`To view rules of origin, select a country with which the UK has a trade agreement from the list above`);

    // links
    cy.contains('Check your goods meet the rules of origin');
    cy.get('li:nth-of-type(1) > a[target=\'blank\']').should('have.attr', 'href', 'https://www.gov.uk/guidance/check-your-goods-meet-the-rules-of-origin');
    cy.contains('Pay less Customs Duty on goods from a country with a UK trade agreement (opens in new tab)');
    cy.get('li:nth-of-type(2) > a[target=\'blank\']').should('have.attr', 'href', 'https://www.gov.uk/guidance/import-and-export-goods-using-preference-agreements');
    cy.contains('Pay less Customs Duty on goods from a country with a UK trade agreement (opens in new tab)');
    cy.roOTab();
  });

  it(`Chile 🇨🇱 - Service_urls with which there is a singular (1 to 1) trade agreement (e.g. Chile, which has an agreement on its own, not as part of a bloc) |`, function() {
    cy.visit('/commodities/0702000007');
    // Select Chile from All countries list', () => {
    cy.get('input#trading_partner_country').click().clear()
        .type('Chile')
        .type('{enter}');
    cy.contains('Rules of origin').click();
    cy.get('img[alt=\'Flag for Chile\']').should('be.visible');
    cy.contains('Preferential rules of origin for trading with Chile');
    //
    //
    cy.roOTab();
    cy.contains('Preferential rules of origin');
    // proving originating status + claiming pref treatment links
  });

  it(`Bahamas (Cariforum) 🇧🇸 - Countries with which there is an agreement with a bloc - EU (France) |`, function() {
    cy.visit('/commodities/0702000007');
    cy.contains('Rules of origin').click();
    // Select USA from All countries list
    cy.get('input#trading_partner_country').click().clear()
        .type('The Bahamas')
        .type('{enter}');
    cy.contains('Preferential rules of origin for trading with The Bahamas');
    cy.contains('Rules of origin').click();
    cy.get('img[alt=\'Flag for The Bahamas\']').should('be.visible');


    cy.contains('You do not need to apply for a preferential tariff (or comply with preferential rules of origin) if the MFN duty for your product is zero.');
    cy.RoOContent({commCode: '0702000007', country: 'The Bahamas'});
    cy.contains('Non-preferential rules of origin');
  });

  it(`Moldova 🇲🇩 - Countries with which there is an agreement Generalised Scheme of Preferences (GSP) |`, function() {
    cy.visit('/commodities/0702000007');
    cy.contains('Rules of origin').click();
    // Select USA from All countries list
    cy.get('input#trading_partner_country').click().clear()
        .type('Moldova')
        .type('{enter}');
    cy.contains('Preferential rules of origin for trading with Moldova');
    cy.contains('Rules of origin').click();
    cy.get('img[alt=\'Flag for Moldova\']').should('be.visible');

    cy.roOTab();
    cy.contains('Non-preferential rules of origin');
  });
  it('India 🇮🇳 - Countries with which there is an agreement - Generalised Scheme of Preferences (GSP)', function() {
    cy.visit('/commodities/0702000007');
    cy.contains('Rules of origin').click();
    // Select USA from All countries list
    cy.get('input#trading_partner_country').click().clear()
        .type('India')
        .type('{enter}');
    cy.contains('Preferential rules of origin for trading with India');
    cy.contains('Rules of origin').click();
    cy.get('img[alt=\'Flag for India\']').should('be.visible');
    cy.roOTab();

    cy.contains('Non-preferential rules of origin');
  });
});
