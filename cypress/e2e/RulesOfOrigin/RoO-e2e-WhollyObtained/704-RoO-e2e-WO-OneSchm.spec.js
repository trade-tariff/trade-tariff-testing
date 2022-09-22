// WO - one scheme
describe('| RoO-e2e-WhollyObtained-OneScheme.spec | WO + One Scheme |', function() {
  it('WO+One Scheme - South Africa', function() {
    cy.visit('/commodities/0201100021?country=ZA#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('South Africa', 'import');
    // How Originating is defined
    cy.howOrginating('South Africa', 'SACUM-UK economic partnership agreement (EPA)');
    // How wholly obtained is defined
    cy.howWhollyObtained('SACUM-UK economic partnership agreement (EPA)');
    // what components
    cy.whatComponents('SACUM-UK economic partnership agreement (EPA)');
    // Wholly Obtained ?
    cy.whollyObtained('South Africa', 'yes');
    // Origin requirements met
    cy.originMet('South Africa', '0201100021', 'SACUM-UK economic partnership agreement (EPA)');
  });
});
