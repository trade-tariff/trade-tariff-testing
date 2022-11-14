/* eslint-disable camelcase */
/* eslint-disable max-len */
describe('| 707-RoO-e2e-WO-SuffPro-ProdSpecRules | WO + SuffPro + Product Specfic Rules |', function() {
  it('Importing - NWO + One Scheme + Insufficient processing + product specific rules - Japan', function() {
    cy.visit('/commodities/1602321110?country=JP#rules-of-origin');
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
    // cumulation
    cy.cumulation('japan', '1602321110', 'JP', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.minimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'yes');
    // product specific rules
    cy.prodSpecificRules('A maximum of 60% of the ex-works price (EXW) is made up of non-originating parts (MaxNOM).');
    // Origin requirements met
    cy.originMet('Japan', '1602321110', 'UK-Japan Comprehensive Economic Partnership Agreement');
  });
  it.only('Importing - NWO + One Scheme + product specific rules - Iceland', function() {
    cy.visit('/commodities/6101201000?country=IS#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Iceland', 'import');
    // How Originating is defined
    cy.howOrginating('Iceland', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    // How wholly obtained is defined
    cy.howWhollyObtained('Agreement on Trade in Goods between Iceland, Norway and the UK');
    // what components
    cy.whatComponents('Agreement on Trade in Goods between Iceland, Norway and the UK');
    // Wholly Obtained ?
    cy.whollyObtained('Iceland', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Iceland');
    // cumulation
    cy.cumulation('iceland-norway', '6101201000', 'IS', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    cy.minimalOps('Agreement on Trade in Goods between Iceland, Norway and the UK', 'yes');
    // moreInfoAboutProduct
    cy.moreInfoAboutProduct('6101201000', 'Articles of apparel and clothing accessories, knitted or crocheted: ➔ Other');
    // prodSpecRules
    cy.prodSpecRules('Manufacture from :');
    // Origin requirements met
    cy.originMet('Iceland', '6101201000', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    cy.contains('Product-specific rules met');
    cy.contains('Importing commodity 6101201000 from Iceland to the UK');
    cy.contains('Based on your responses, your product appears to meet the rules of origin requirements for the Agreement on Trade in Goods between Iceland, Norway and the UK');
    // links
    cy.get('.govuk-list').contains('See valid proofs of origin').click();
    cy.contains('Valid proofs of origin');
    cy.get('.govuk-list').contains('How proofs of origin are verified').click();
    // proof verification
    cy.proofVerification('Iceland');
  });
});
