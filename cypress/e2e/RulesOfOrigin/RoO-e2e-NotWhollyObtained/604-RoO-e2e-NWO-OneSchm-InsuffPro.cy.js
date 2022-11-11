// NWO-One Scheme_Insufficient processing
// WO - one scheme
describe('| RoO-e2e-NWO-OneSchm-InsuffPro.spec | NWO + One Scheme + insufficient processing |', function() {
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
    cy.cumulation('japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
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
    cy.cumulation('japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
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
    cy.cumulation('japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.minimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'no');
    // Origin requirements not met
    cy.rooNotMetImp('Importing', 'Japan', '5808100000', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.go(-1);
    // Verify tolerances page
    cy.tolerance('Importing', '5808100000', 'Japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // Verify cumulation page
    cy.clkCumulationLnk();
    cy.cumulation('japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
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
    cy.go(-1);
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
    cy.cumulation('japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.minimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'no');
    // Origin requirements not met
    cy.rooNotMetImp('Importing', 'Japan', '1602321110', 'UK-Japan Comprehensive Economic Partnership Agreement');
    cy.go(-1);
    // with cumulation block
    cy.clkCumulationLnk();
    cy.cumulation('japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
  });
});
