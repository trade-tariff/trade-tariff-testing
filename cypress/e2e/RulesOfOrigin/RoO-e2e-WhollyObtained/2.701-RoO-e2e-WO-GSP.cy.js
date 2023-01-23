// WO + GSP Scheme - Bangladesh
describe('| RoO-e2e-WhollyObtained-GSP.spec | WO + GSP Scheme - Bangladesh |', {tags: ['notProduction']}, function() {
  it('Import - WO + GSP Scheme - Bangladesh', function() {
    cy.visit('/commodities/0201100021?country=BD#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.importGSP('0201100021', 'Bangladesh');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'Generalised Scheme of Preferences (GSP)');
    // How wholly obtained is defined
    cy.howWhollyObtained('Generalised Scheme of Preferences (GSP)');
    // what components ?
    cy.whatComponents('Generalised Scheme of Preferences (GSP)');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Bangladesh', 'yes');
    // Origin requirements met
    cy.originMet('Bangladesh', '0201100021', 'Generalised Scheme of Preferences (GSP)');
  });
});
