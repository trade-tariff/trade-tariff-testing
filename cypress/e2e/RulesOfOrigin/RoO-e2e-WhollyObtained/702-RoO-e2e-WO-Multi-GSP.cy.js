// WO - Multiple schemes - GSP
describe('| RoO-e2e-WO-Multiple-GSP.spec | WO + Multiple Schemes + GSP - Vietnam |', {tags: ['notProduction']}, function() {
  it('Import - WO + Multiple Schemes + GSP - Vietnam', function() {
    cy.visit('/commodities/0201100021?country=VN#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Select one agreement
    cy.multipleAgreements('Vietnam', 'gsp');
    // Import
    cy.importGSP('0201100021', 'Vietnam');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'Generalised Scheme of Preferences (GSP)');
    // How wholly obtained is defined
    cy.howWhollyObtained('Generalised Scheme of Preferences (GSP)');
    // what components ?
    cy.whatComponents('Generalised Scheme of Preferences (GSP)');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Vietnam', 'yes');
    // Verify feeback section on product rules met screen
    cy.feebackSection('VN');
    // Origin requirements met
    cy.originMet('Vietnam', '0201100021', 'Generalised Scheme of Preferences (GSP)');
  });
});
