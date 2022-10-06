/* eslint-disable camelcase */
/* eslint-disable max-len */
// WO + Duty Drawback
describe('| RoO-e2e-WhollyObtained-DutyDrawback.spec | WO + Duty Drawback |', function() {
  it('Import - WO + Duty Drawback - Chile', function() {
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
    // Verify duty drawback link
    cy.dutyDrawback('Chile', 'UK-Chile Association Agreement');
  });
  it('Export - WO + Duty Drawback - Albania', function() {
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
    // Verify duty drawback link
    cy.dutyDrawback('Albania', 'UK-Albania Partnership, Trade and Cooperation Agreement');
  });
  it('Import - No Duty Drawback Link on RoO not met screen and duty drawback link on validate proofs of origin - Iceland', function() {
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
    // Verify duty drawback link on validate proofs of origin
    cy.dutyDrawback('Iceland', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
  });
  it('Export - No Duty Drawback Link on RoO not met screen and duty drawback link on validate proofs of origin - Iceland', function() {
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
    // Verify duty drawback link on validate proofs of origin
    cy.dutyDrawback('Iceland', 'Agreement on Trade in Goods between Iceland, Norway and the UK');
  });
});
