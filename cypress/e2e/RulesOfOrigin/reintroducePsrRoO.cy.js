describe.skip('Reintroduce Product Specific Rules - RoO', function() {
  it('UK | Verify navigation links on RoO page', function() {
    cy.visit('/commodities/0702000007?country=FR#non-preferential-rules');
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin for trading with France');
    cy.contains('Related content');
    cy.get('#rules-of-origin__related-content a[href]').contains('Check your goods meet the rules of origin');
    cy.get('#rules-of-origin__related-content a[href]').contains('UK/EU and EAEC: Trade and Cooperation Agreement');
    cy.get('#rules-of-origin__related-content a[href]').contains('Claiming preferential rates of duty between the UK and EU');
    cy.get('#rules-of-origin__related-content a[href]').contains('Rules of origin for goods moving between the UK and EU');
    cy.contains('Overview').click();
    cy.contains('UK / EU Trade and Co-operation Agreement');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.contains('Work out if your goods meet the rules of origin').click();
    cy.get('.panel.panel--grey').contains('Work out if your goods meet the rules of origin');
    cy.get('.panel.panel--grey').contains('UK / EU Trade and Co-operation Agreement');
    cy.get('.panel.panel--grey a[href^="https://www.gov.uk/guidance/apply-for-an-advance-origin-ruling"]')
        .contains('apply for an advanced origin ruling (opens in new window)');
    cy.get('.panel.panel--grey button').contains('Check rules of origin');
    cy.contains('Product-specific rules').click();
    cy.get('h3#product-specific-rules').contains('Product-specific rules - trade with France');
    cy.contains('Rules under the UK / EU Trade and Co-operation Agreement');
    cy.contains('Proofs of origin').click();
    cy.get('h3#proofs-of-origin').contains('Proofs of origin');
    cy.get('#rules-of-origin-proofs').contains('Statement on origin').click();
    cy.get('#rules-of-origin-proofs').contains('Importer\'s knowledge').click();
    cy.contains('Non-preferential rules of origin').click();
    cy.get('h3#non-preferential-rules').contains('Non-preferential rules of origin');
    cy.get('.rules-of-origin__non-preferential a[href]')
        .contains('The Customs (Origin of Chargeable Goods) (EU Exit) Regulations 2020 (opens in new tab)');
  });
  it('UK | Click reset all countries link and check RoO page content', function() {
    cy.visit('/commodities/0702000007?country=FR#non-preferential-rules');
    cy.contains('Reset to all countries').click();
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin');
    cy.contains('Find out more about preferential rules of origin:');
    cy.get('#rules-of-origin a[href^="https://www.gov.uk/guidance/check-your-goods-meet-the-rules-of-origin"]')
        .contains('Check your goods meet the rules of origin (opens in new tab)');
    cy.get('#rules-of-origin a[href^="https://www.gov.uk/guidance/import-and-export-goods-using-preference-agreements"]')
        .contains('Pay less Customs Duty on goods from a country with a UK trade agreement (opens in new tab)');
    cy.get('#rules-of-origin').contains('Non-preferential rules of origin');
    cy.get('.rules-of-origin__non-preferential a[href]')
        .contains('The Customs (Origin of Chargeable Goods) (EU Exit) Regulations 2020 (opens in new tab)');
  });
  it('UK | Reintroduce proofs of origin | Country does not have dual schemes', function() {
    cy.visit('/commodities/0702000007?country=FR#non-preferential-rules');
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin for trading with France');
    cy.contains('UK / EU Trade and Co-operation Agreement');
    cy.get('.govuk-inset-text').contains('How rules of origin could affect the import duty payable');
    cy.get('.panel.panel--grey').contains('Work out if your goods meet the rules of origin');
    cy.get('.panel.panel--grey').contains('UK / EU Trade and Co-operation Agreement');
    cy.get('h3#product-specific-rules').contains('Product-specific rules - trade with France');
    cy.contains('Rules under the UK / EU Trade and Co-operation Agreement');
    cy.get('.govuk-table.govuk-table--responsive.commodity-rules-of-origin').contains('Heading');
    cy.get('.govuk-table.govuk-table--responsive.commodity-rules-of-origin').contains('Rule');
    cy.get('.govuk-table__cell.tariff-markdown.responsive-full-width')
        .contains('Production in which all the materials of chapter 7 used are wholly obtained');
    cy.get('.govuk-table__cell.tariff-markdown.responsive-full-width a[href^="/chapters/07"]').contains('chapter 7');
    cy.get('h3#proofs-of-origin').contains('Proofs of origin');
    cy.get('#rules-of-origin-proofs').contains('Statement on origin').click();
    cy.get('#rules-of-origin-proofs').contains('Importer\'s knowledge').click();
    cy.get('h3#non-preferential-rules').contains('Non-preferential rules of origin');
  });
  it('UK | Reintroduce proofs of origin | Country has dual schemes', function() {
    cy.visit('/commodities/0702000007?country=VN#product-specific-rules');
    cy.contains('Rules of origin').click();
    cy.contains('Preferential rules of origin for trading with Vietnam');
    cy.contains('UK-Vietnam Free Trade Agreement');
    cy.get('#rules-of-origin__intro--multiple-schemes')
        .contains('Your trade may qualify for preferential rates with Vietnam through 2 agreements');
    cy.get('#rules-of-origin__intro--multiple-schemes').contains('UK-Vietnam Free Trade Agreement');
    cy.get('#rules-of-origin__intro--multiple-schemes').contains('Generalised Scheme of Preferences (GSP)');
    cy.get('.panel.panel--grey').contains('Work out if your goods meet the rules of origin');
    cy.get('.panel.panel--grey a[href^="https://www.gov.uk/guidance/apply-for-an-advance-origin-ruling"]')
        .contains('apply for an advanced origin ruling (opens in new window)');
    cy.get('h3#product-specific-rules').contains('Product-specific rules - trade with Vietnam');
    cy.contains('Rules under the UK-Vietnam Free Trade Agreement');
    cy.get('.govuk-table.govuk-table--responsive.commodity-rules-of-origin').contains('Heading');
    cy.get('.govuk-table.govuk-table--responsive.commodity-rules-of-origin').contains('Rule');
    cy.get('.govuk-table__cell.tariff-markdown.responsive-full-width')
        .contains('Manufacture in which all the materials of chapter 7 used are wholly obtained.');
    cy.get('.govuk-table__cell.tariff-markdown.responsive-full-width a[href^="/chapters/07"]').contains('chapter 7');
    cy.contains('Rules under the Generalised Scheme of Preferences (GSP)');
    cy.get('.govuk-table.govuk-table--responsive.commodity-rules-of-origin').contains('Heading');
    cy.get('.govuk-table.govuk-table--responsive.commodity-rules-of-origin').contains('Rule');
    cy.get('.govuk-table__cell.tariff-markdown.responsive-full-width')
        .contains('Manufacture in which all the materials of chapter 7 used are wholly obtained.');
    cy.get('h3#proofs-of-origin').contains('Proofs of origin');
    cy.get('#rules-of-origin-proofs').contains('EUR1 or EUR.MED movement certificate').click();
    cy.get('#rules-of-origin-proofs').contains('Origin declaration').click();
    cy.get('#rules-of-origin-proofs').contains('Generalised Scheme of Preferences form A').click();
    cy.get('#rules-of-origin-proofs').contains('Invoice declaration').click();
    cy.get('h3#non-preferential-rules').contains('Non-preferential rules of origin');
  });
});