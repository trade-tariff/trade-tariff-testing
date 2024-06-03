 
 
describe('| RoO-e2e-WhollyObtained-DirectTransport.spec | WO + Direct Transport |', {tags: ['notProduction']}, function() {
  it('Import - WO + Direct Transport - Chile', function() {
    cy.visit('/commodities/0701909090?country=CL#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Chile', 'import');
    // How Originating is defined
    cy.howOrginating('Chile', 'UK-Chile Association Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Chile Association Agreement');
    // what components ?
    cy.whatComponents('UK-Chile Association Agreement');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Chile', 'yes');
    // Origin requirements met
    cy.originMet('Chile', '0701909090', 'UK-Chile Association Agreement');
    // Verify Direct Transport link
    cy.directTransport('UK-Chile Association Agreement');
  });
  it('Export - WO + Direct Transport - Albania', function() {
    cy.visit('/commodities/0702000007?country=AL#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Albania', 'export');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'UK-Albania Partnership, Trade and Cooperation Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Albania Partnership, Trade and Cooperation Agreement');
    // what components ?
    cy.whatComponents('UK-Albania Partnership, Trade and Cooperation Agreement');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('the UK', 'yes');
    // Origin requirements met for export
    cy.rooReqMetEx('Exporting', 'the UK', '0702000007', 'UK-Albania Partnership, Trade and Cooperation Agreement');
    // Verify Direct Transport link
    cy.directTransport('UK-Albania Partnership, Trade and Cooperation Agreement');
  });
  it('Import - No Direct Transport link on RoO not met screen and valid proofs of origin pages - Iceland', function() {
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
    // Verify Direct Transport link
    cy.should('not.contain.text', 'Find out about the direct transport rule');
  });
  it('Export - No Direct Transport link on RoO not met screen and valid proofs of origin pages - Iceland', function() {
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
    // Verify Direct Transport link
    cy.should('not.contain.text', 'Find out about the direct transport rule');
  });
});
