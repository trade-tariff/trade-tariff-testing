// WO - Multiple schemes - DCTS
describe('| RoO-e2e-WO-Multiple-DCTS.spec | WO + Multiple Schemes + DCTS - Vietnam |', {tags: ['notProduction']}, function() {
  it('Import - WO + Multiple Schemes + DCTS - Vietnam', function() {
    cy.visit('/commodities/0201100021?country=VN#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Select one agreement
    cy.multipleAgreements('Vietnam', 'dcts-general-enhanced');
    // Import
    cy.importGSP('0201100021', 'Vietnam');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    // How wholly obtained is defined
    cy.howWhollyObtained('Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    // what components ?
    cy.whatComponents('Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Vietnam', 'yes');
    // Verify feeback section on product rules met screen
    cy.feebackSection();
    // Origin requirements met
    cy.originMet('Vietnam', '0201100021', 'Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
  });
});
