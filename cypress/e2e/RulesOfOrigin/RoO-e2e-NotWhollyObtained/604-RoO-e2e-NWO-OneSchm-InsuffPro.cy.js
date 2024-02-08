// NWO-One Scheme_Insufficient processing
// WO - one scheme
describe('| RoO-e2e-NWO-OneSchm-InsuffPro.spec | NWO + One Scheme + insufficient processing |', {tags: ['notProduction']}, function() {
  it('Importing - NWO + One Scheme + Insufficient processing - Japan', function() {
    cy.visit('/commodities/5808100000?country=JP#rules-of-origin');
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
    cy.cumulation('japan', '5808100000', 'JP', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.minimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'no');
    // Origin requirements met
    cy.rooNotMet('Importing', 'Japan', '5808100000', 'UK-Japan Comprehensive Economic Partnership Agreement');
  });
  it('Exporting - NWO + One Scheme + Insufficient processing - Japan', function() {
    cy.visit('/commodities/5808100000?country=JP#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Japan', 'export');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Japan Comprehensive Economic Partnership Agreement');
    // what components
    cy.whatComponents('UK-Japan Comprehensive Economic Partnership Agreement');
    // Wholly Obtained ?
    cy.whollyObtained('the UK', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('the UK');
    // cumulation
    cy.cumulation('japan', '5808100000', 'JP', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.minimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'no');
    // Origin requirements met
    cy.rooNotMetEx('Exporting', 'the UK', '5808100000', 'UK-Japan Comprehensive Economic Partnership Agreement', 'Japan');
  });
  it('Importing - NWO + One Scheme + Insufficient processing + tolerances and cumulation page - Japan', function() {
    cy.visit('/commodities/5808100000?country=JP#rules-of-origin');
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
    cy.cumulation('japan', '5808100000', 'JP', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.minimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'no');
    // Origin requirements not met
    cy.rooNotMetImp('Importing', 'Japan', '5808100000', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.go('back');
    // Verify tolerances page
    cy.tolerance('Importing', '5808100000', 'Japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // Verify cumulation page
    cy.clkCumulationLnk();
    cy.cumulation('japan', '5808100000', 'JP', 'UK-Japan Comprehensive Economic Partnership Agreement');
  });
  it('Importing - NWO + One Scheme + Insufficient processing + without cumulation block - Japan', function() {
    cy.visit('/commodities/0101291000?country=JP#rules-of-origin');
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
    // Origin requirements not met
    cy.rooNotMetImp('Importing', 'Japan', '0101291000', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.go('back');
    // Verify tolerances page
    cy.tolerance('Importing', '0101291000', 'Japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // Without cumulation block
    cy.should('not.contains.text', 'Cumulation rules');
  });
  it('Importing - NWO + One Scheme + Insufficient processing + with cumulation block - Japan', function() {
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
    cy.minimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'no');
    // Origin requirements not met
    cy.rooNotMetImp('Importing', 'Japan', '1602321110', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.go('back');
    // with cumulation block
    cy.clkCumulationLnk();
    cy.cumulation('japan', '1602321110', 'JP', 'UK-Japan Comprehensive Economic Partnership Agreement');
  });
  it('Importing - NWO + One Scheme + insufficient processing + cumulation - Norway', function() {
    cy.visit('/commodities/0511911000?country=NO#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Norway', 'import');
    // How Originating is defined
    cy.howOrginating('Norway', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    // How wholly obtained is defined
    cy.howWhollyObtained('Agreement on Trade in Goods between Iceland, Norway and the UK');
    // what components
    cy.whatComponents('Agreement on Trade in Goods between Iceland, Norway and the UK');
    // Wholly Obtained ?
    cy.whollyObtained('Norway', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Norway');
    // cumulation
    cy.cumulation('iceland-norway', '0511911000', 'NO', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    cy.minimalOps('Agreement on Trade in Goods between Iceland, Norway and the UK', 'yes');
    // Product subDivisions
    cy.subDivision('0511911000', 'Inedible fish eggs and roes');
    // prodSpecRules
    cy.prodSpecRules('All the eggs and roes are wholly obtained.');
    // Origin requirements met
    cy.originMet('Norway', '0511911000', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    cy.get('.govuk-back-link').click();
    cy.get('.govuk-back-link').click();
    cy.subDivision('0511911000', 'Any other product from heading 0511');
    // prodSpecRules
    cy.prodSpecRules('Manufacture from materials of any heading.');
    // Origin requirements met
    cy.originMet('Norway', '0511911000', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    // product specific rules?
    cy.get('.govuk-back-link').click();
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMet('Importing', 'Norway', '0511911000', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
  });
  it('Importing - NWO + One Scheme + insufficient processing + cumulation - Iceland', function() {
    cy.visit('/commodities/0511919000?country=IS#rules-of-origin');
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
    cy.cumulation('iceland-norway', '0511919000', 'IS', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    cy.minimalOps('Agreement on Trade in Goods between Iceland, Norway and the UK', 'yes');
    // Product subDivisions
    cy.subDivision('0511919000', 'Inedible fish eggs and roes');
    // prodSpecRules
    cy.prodSpecRules('All the eggs and roes are wholly obtained.');
    // Origin requirements met
    cy.originMet('Iceland', '0511919000', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    cy.get('.govuk-back-link').click();
    cy.get('.govuk-back-link').click();
    cy.subDivision('0511919000', 'Any other product from heading 0511');
    // prodSpecRules
    cy.prodSpecRules('Manufacture from materials of any heading.');
    // Origin requirements met
    cy.originMet('Iceland', '0511919000', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    // product specific rules?
    cy.get('.govuk-back-link').click();
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMet('Importing', 'Iceland', '0511919000', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
  });
});
