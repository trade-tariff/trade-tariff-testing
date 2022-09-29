// WO - Multiple schemes - nonGSP
describe('| RoO-e2e-WO-Multiple-nonGSP.spec | WO + Multiple Schemes + nonGSP - Vietnam |', function() {
  it('Import - WO + Multiple Schemes + GSP - Vietnam', function() {
    cy.visit('/commodities/0201100021?country=VN#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Select one agreement
    cy.multipleAgreements('Vietnam', 'vietnam');
    // Import
    cy.impOrExp('Vietnam', 'import');
    // How Originating is defined
    cy.howOrginating('Vietnam', 'UK-Vietnam Free Trade Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Vietnam Free Trade Agreement');
    // what components
    cy.whatComponents('UK-Vietnam Free Trade Agreement');
    // Wholly Obtained ?
    cy.whollyObtained('Vietnam', 'yes');
    // Origin requirements met
    cy.originMet('Vietnam', '0201100021', 'UK-Vietnam Free Trade Agreement');
  });
  it.skip('Export - WO + Multiple Schemes + GSP - Vietnam', function() {
    cy.visit('/commodities/0201100021?country=VN#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Select one agreement
    cy.multipleAgreements('Vietnam', 'vietnam');
    // Import
    cy.impOrExp('Vietnam', 'export');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'UK-Vietnam Free Trade Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Vietnam Free Trade Agreement');
    // what components
    cy.whatComponents('UK-Vietnam Free Trade Agreement');
    // Wholly Obtained ?
    cy.whollyObtained('Vietnam', 'yes');
    // Origin requirements met
    cy.originMet('Vietnam', '0201100021', 'UK-Vietnam Free Trade Agreement');
  });
});
