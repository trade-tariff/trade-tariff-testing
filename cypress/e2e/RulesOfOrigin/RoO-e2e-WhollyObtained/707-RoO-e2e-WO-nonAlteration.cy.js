/* eslint-disable camelcase */
/* eslint-disable max-len */
describe('| RoO-e2e-WhollyObtained-NonAlteration.spec | WO + Non Alteration |', function() {
  it('Import - WO + Non Alteration - Japan', function() {
    cy.visit('/commodities/1602321110?country=JP#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Japan', 'import');
    // How Originating is defined
    cy.howOrginating('Japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Japan Comprehensive Economic Partnership Agreement');
    // what components ?
    cy.whatComponents('UK-Japan Comprehensive Economic Partnership Agreement');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Japan', 'yes');
    // Origin requirements met
    cy.originMet('Japan', '1602321110', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // Verify Non Alteration link
    cy.nonAlteration('Japan');
  });
  it('Export - WO + Non Alteration - Japan', function() {
    cy.visit('/commodities/1602321110?country=JP#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Japan', 'export');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Japan Comprehensive Economic Partnership Agreement');
    // what components ?
    cy.whatComponents('UK-Japan Comprehensive Economic Partnership Agreement');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('the UK', 'yes');
    // Origin requirements met for export
    cy.rooReqMetEx('Exporting', 'the UK', '1602321110', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // Verify Non Alteration link
    cy.nonAlteration('Japan');
  });
  it('Import - No Non Alteration link on RoO not met screen and valid proofs of origin pages - Iceland', function() {
    cy.visit('/commodities/0702000007?country=IS#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Iceland', 'import');
    // How Originating is defined
    cy.howOrginating('Iceland', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    // How wholly obtained is defined
    cy.howWhollyObtained('Agreement on Trade in Goods between Iceland, Norway and the UK');
    // what components ?
    cy.whatComponents('Agreement on Trade in Goods between Iceland, Norway and the UK');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Iceland', 'no');
    // Origin requirements not met for import
    cy.rooNotMetImp('Importing', 'Iceland', '0702000007', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    // Verify Non Alteration link
    cy.should('not.contain.text', 'Find out about the non-alternation rule');
  });
  it('Export - No Non Alteration link on RoO not met screen and valid proofs of origin pages - Iceland', function() {
    cy.visit('/commodities/0702000007?country=IS#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Iceland', 'export');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    // How wholly obtained is defined
    cy.howWhollyObtained('Agreement on Trade in Goods between Iceland, Norway and the UK');
    // what components ?
    cy.whatComponents('Agreement on Trade in Goods between Iceland, Norway and the UK');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('the UK', 'no');
    // Origin requirements not met for exporting
    cy.rooNotMetImp('Exporting', 'the UK', '0702000007', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
    // Verify Non Alteration link
    cy.should('not.contain.text', 'Find out about the non-alternation rule');
  });
});
