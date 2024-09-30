describe('Reintroduce Product Specific Rules - RoO', function() {
  it('UK | Verify navigation links on RoO page', function() {
    cy.visit('/commodities/0702000007?country=FR#non-preferential-rules');
    cy.contains('Origin').click();
    cy.contains('Preferential rules of origin for trading with France');
    cy.contains('Further information on trade with France');
    cy.get('#rules-of-origin__related-content a[href]').contains('UK/EU and EAEC: Trade and Cooperation Agreement');
    cy.get('#rules-of-origin__related-content a[href]').contains('Claiming preferential rates of duty between the UK and EU');
    cy.get('#rules-of-origin__related-content a[href]').contains('Rules of origin for goods moving between the UK and EU');
    cy.get('#work-out-rules-of-origin').contains('Check eligibility for preferential duty rates');
    cy.get('#rules-of-origin > .govuk-inset-text > p').contains('This tool can help you understand if your product meets the rules of origin')+
          ('under the UK / EU Trade and Co-operation Agreement.');
    cy.get('#rules-of-origin-proofs').contains('Statement on origin').click();
    cy.get('#rules-of-origin-proofs').contains('Importer\'s knowledge').click();
    cy.contains('Non-preferential rules of origin').click();
    cy.get('h3#non-preferential-rules').contains('Non-preferential rules of origin');
    cy.get('.rules-of-origin__non-preferential a[href]')
        .contains('View rules for determining non-preferential origin (opens in new tab)');
  });
  it('UK | Click reset all countries link and check RoO page content', function() {
    cy.visit('/commodities/0702000007?country=FR#non-preferential-rules');
    cy.contains('Reset to all countries').click();
    cy.contains('Origin').click();
    cy.contains('Select a country to check which tariff treatments apply.');
    cy.contains('Origin allows for various policy measures to be implemented and for duties to be calculated.');
    cy.contains('There are two types of origin, subject to different rules, which may affect your trade.');
    cy.contains('Preferential rules of origin');
    cy.contains('Find out more about origin');
    cy.get('#rules-of-origin').contains('Non-preferential rules of origin');
    cy.get('.rules-of-origin__non-preferential a[href]')
        .contains('View rules for determining non-preferential origin (opens in new tab)');
  });
  it('UK | Reintroduce proofs of origin | Country does not have dual schemes', function() {
    cy.visit('/commodities/0702000007?country=FR#non-preferential-rules');
    cy.contains('Origin').click();
    cy.contains('Preferential rules of origin for trading with France');
    cy.contains('UK / EU Trade and Co-operation Agreement');
    cy.get('.govuk-table.govuk-table--responsive.commodity-rules-of-origin').contains('Agreement');
    cy.get('.govuk-table.govuk-table--responsive.commodity-rules-of-origin').contains('Heading');
    cy.get('.govuk-table__cell.tariff-markdown.responsive-full-width')
        .contains('Production in which all the materials of chapter 7 used are wholly obtained');
    cy.get('.govuk-table__cell.tariff-markdown.responsive-full-width a[href^="/chapters/07"]').contains('chapter 7');
    cy.get('h3#proofs-of-origin').contains('Prove the origin of your goods');
    cy.get('#rules-of-origin-proofs').contains('Statement on origin').click();
    cy.get('#rules-of-origin-proofs').contains('Importer\'s knowledge').click();
    cy.get('h3#non-preferential-rules').contains('Non-preferential rules of origin');
  });
  it('UK | Verify Proofs of origin page - RoO', function() {
    cy.visit('/commodities/6004100091?country=JP#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Japan', 'import');
    // How Originating is defined
    cy.howOrginating('Japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Japan Comprehensive Economic Partnership Agreement');
    // what components
    cy.whatComponents('UK-Japan Comprehensive Economic Partnership Agreement');
    // Wholly Obtained ?
    cy.whollyObtained('Japan', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Japan');
    // cumulation - Bilateral cumulation and Extended cumulation example
    cy.cumulation('japan', '6004100091', 'JP', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // min Operations met ?
    cy.minimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'yes');
    // Product subDivisions
    cy.subDivision('6004100091', '6001-6006');
    // product specific rules?
    cy.prodSpecRules('Spinning of natural or man-made staple fibres combined with knitting or with crocheting.');
    // Origin requirements met
    cy.rooReqMet('Importing', 'Japan', '6004100091', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.contains('See valid proofs of origin').click();
    // Verify proofs of origin page
    cy.proofsOfOriginPage('6004100091', 'Japan', 'JP');
  });
  it('UK | Show all proofs on the single page', function() {
    cy.visit('/rules_of_origin/proofs');
    cy.contains('Proofs of origin for all trade agreements');
    cy.contains('UK / EU Trade and Co-operation Agreement').click();
    cy.get('h2#proofs-for-eu').contains('UK / EU Trade and Co-operation Agreement');
    cy.contains('UK-Chile Association Agreement').click();
    cy.get('h2#proofs-for-chile').contains('UK-Chile Association Agreement');
    cy.contains('Developing Countries Trading Scheme (DCTS)').click();
    cy.get('h2#proofs-for-dcts-ldcs').contains('Developing Countries Trading Scheme (DCTS)');
    cy.get('h2#proofs-for-dcts-general-enhanced').contains('Developing Countries Trading Scheme (DCTS)');
  });
  it('UK | Show all PSRs on the single page', function() {
    cy.visit('/commodities/6210400000?country=CL#rules-of-origin');
    cy.contains('View valid proofs of origin for all trade agreements').click();
    cy.url().should('include', '/rules_of_origin/proofs');
    cy.contains('UK / EU Trade and Co-operation Agreement').click();
    cy.contains('UK-Chile Association Agreement').click();
    cy.get('h2#proofs-for-chile').contains('UK-Chile Association Agreement');
    cy.contains('Developing Countries Trading Scheme (DCTS)').click();
    cy.get('h2#proofs-for-dcts-ldcs').contains('Developing Countries Trading Scheme (DCTS)');
    cy.get('h2#proofs-for-dcts-general-enhanced').contains('Developing Countries Trading Scheme (DCTS)');
  });
});
