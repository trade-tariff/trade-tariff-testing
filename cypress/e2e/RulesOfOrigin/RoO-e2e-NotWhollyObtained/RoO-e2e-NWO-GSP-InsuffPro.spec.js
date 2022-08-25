// NWO- GSP Scheme_Insufficient processing
describe('| RoO-e2e-NWO-GSP-InsuffProcess.spec | NWO + GSP Scheme + insufficient processing |', function() {
  it('Importing - NWO + GSP Scheme + insufficient processing - Bangladesh + PSR', function() {
    cy.visit('/commodities/5808100000?country=BD#rules-of-origin');
    cy.checkRoO();
    // Import
    cy.importGSP('5808100000', 'Bangladesh');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'Generalised Scheme of Preferences (GSP)');
    // How wholly obtained is defined
    cy.howWhollyObtained('Generalised Scheme of Preferences (GSP)');
    // what components ?
    cy.whatComponents('Generalised Scheme of Preferences (GSP)');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Bangladesh', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Bangladesh');
    // cumulation
    cy.cumulation('Bangladesh', 'Generalised Scheme of Preferences (GSP)');
    // Min Processing NO
    cy.minimalOps('Generalised Scheme of Preferences (GSP)', 'no');
    // Origin requirements met
    cy.rooNotMetGSP('Bangladesh', '5808100000', 'Generalised Scheme of Preferences (GSP)');
    // Min Processing Yes
    cy.go(-2);
    cy.minimalOps('Generalised Scheme of Preferences (GSP)', 'yes');
    // product specific rules?
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements met
    cy.rooNotMetGSP('Bangladesh', '5808100000', 'Generalised Scheme of Preferences (GSP)');
  });
});
