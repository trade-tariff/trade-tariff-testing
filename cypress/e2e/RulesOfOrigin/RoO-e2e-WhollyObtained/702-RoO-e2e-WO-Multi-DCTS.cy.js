// WO - Multiple schemes - DCTS

// This is no longer a multi scheme scenarios as Vietnam has been removed from the DCTS groups.
describe('| RoO-e2e-WO-Multiple-DCTS.spec | WO + Multiple Schemes + DCTS - Vietnam |', {tags: ['notProduction']}, function() {
  it('Import - WO + Multiple Schemes + DCTS - Vietnam', function() {
    cy.visit('/commodities/0201100021?country=VN#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Vietnam', 'import');
    // How Originating is defined
    cy.howOrginating('Vietnam', 'UK-Vietnam Free Trade Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Vietnam Free Trade Agreement');
    // what components ?
    cy.whatComponents('UK-Vietnam Free Trade Agreement');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Vietnam', 'yes');
    // Origin requirements met
    cy.originMet('Vietnam', '0201100021', 'UK-Vietnam Free Trade Agreement');
  });
});
