describe('| 708-RoO-e2e-WO-SuffPro-ProdSpecRules | WO + SuffPro + Product Specfic Rules |', {tags: ['notProduction']}, function() {
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
    // Product subDivisions
    cy.subDivision('1602321110', 'Subheading 160232');
    // product specific rules
    cy.prodSpecificRules('A maximum of 60% of the ex-works price (EXW) is made up of non-originating parts (MAXNOM).');
    // Origin requirements met
    cy.originMet('Japan', '1602321110', 'UK-Japan Comprehensive Economic Partnership Agreement');
  });
  it('Importing - NWO + One Scheme + product specific rules - Iceland', function() {
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
    cy.moreInfoAboutProduct('6101201000', 'Articles of apparel and clothing accessories, knitted or crocheted ▸ Other');
    // prodSpecRules
    cy.prodSpecRules('Knitting and making-up in one operation');
    // Origin requirements met
    cy.originMet('Iceland', '6101201000', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    cy.contains('Product-specific rules met');
    cy.contains('Importing commodity 6101201000 from Iceland to the UK');
    cy.contains('Based on your responses, ');
    cy.contains('your product appears to meet the rules of origin requirements for the Agreement on Trade in Goods between Iceland, ');
    cy.contains('Norway and the UK');
    // links
    cy.get('.govuk-list').contains('See valid proofs of origin').click();
    cy.contains('Valid proofs of origin');
    cy.get('.govuk-list').contains('How proofs of origin are verified').click();
    // proof verification
    cy.proofVerification('Iceland');
  });
  it('Importing - NWO + Free Trade Agreement b/n UK and NZ + product specific rules - New Zealand', function() {
    const agreement = 'Free Trade Agreement between the United Kingdom of Great Britain and Northern Ireland and New Zealand';
    cy.visit('/commodities/2701121000?country=NZ#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('New Zealand', 'import');
    // How Originating is defined
    cy.howOrginating('New Zealand', `${agreement}`);
    // How wholly obtained is defined
    cy.howWhollyObtained(`${agreement}`);
    // what components
    cy.whatComponents(`${agreement}`);
    // Wholly Obtained ?
    cy.whollyObtained('New Zealand', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('New Zealand');
    // cumulation
    cy.cumulation('new-zealand', '2701121000', 'NZ', `${agreement}`);
    cy.minimalOps(`${agreement}`, 'yes');
    // prodSpecRules
    cy.prodSpecRules('Process Rule');
    // Origin requirements met
    cy.originMet('New Zealand', '2701121000', `${agreement}`);
    cy.contains('Product-specific rules met');
    cy.contains('Importing commodity 2701121000 from New Zealand to the UK');
    cy.contains(`Based on your responses, your product appears to meet the rules of origin requirements for the ${agreement}`);
    // links
    cy.get('.govuk-list').contains('See valid proofs of origin').click();
    cy.contains('Valid proofs of origin');
    cy.get('.govuk-list').contains('How proofs of origin are verified').click();
    // proof verification
    cy.contains('Verification for proving the origin for goods coming from New Zealand');
  });
  it('Importing - NWO + Free Trade Agreement b/n UK and AU + product specific rules - Australia', function() {
    const agreement = 'Free Trade Agreement between the United Kingdom of Great Britain and Northern Ireland and Australia';
    cy.visit('/commodities/2701121000?country=AU#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Australia', 'import');
    // How Originating is defined
    cy.howOrginating('Australia', `${agreement}`);
    // How wholly obtained is defined
    cy.howWhollyObtained(`${agreement}`);
    // what components
    cy.whatComponents(`${agreement}`);
    // Wholly Obtained ?
    cy.whollyObtained('Australia', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Australia');
    // cumulation
    cy.cumulation('australia', '2701121000', 'AU', `${agreement}`);
    cy.minimalOps(`${agreement}`, 'yes');
    // prodSpecRules
    cy.prodSpecRules('Chemical reaction rule');
    // Origin requirements met
    cy.originMet('Australia', '2701121000', `${agreement}`);
    cy.contains('Product-specific rules met');
    cy.contains('Importing commodity 2701121000 from Australia to the UK');
    cy.contains(`Based on your responses, your product appears to meet the rules of origin requirements for the ${agreement}`);
    // links
    cy.get('.govuk-list').contains('See valid proofs of origin').click();
    cy.contains('Valid proofs of origin');
    cy.get('.govuk-list').contains('How proofs of origin are verified').click();
    // proof verification
    cy.contains('Verification for proving the origin for goods coming from Australia');
  });
});
