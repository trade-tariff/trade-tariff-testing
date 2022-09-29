// NWO-One Scheme_Insufficient processing
// WO - one scheme
describe('| RoO-e2e-NWO-OneSchm-InsuffPro.spec | NWO + One Scheme + insufficient processing |', function() {
  it('Importing - NWO + One Scheme + Insufficient processing - Japan', function() {
    cy.visit('/commodities/5808100000?country=JP#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Japan', 'import');
    // How Originating is defined
    cy.howOrginating('Japan', 'Comprehensive Economic Partnership Agreement UK Japan');
    // How wholly obtained is defined
    cy.howWhollyObtained('Comprehensive Economic Partnership Agreement UK Japan');
    // what components
    cy.whatComponents('Comprehensive Economic Partnership Agreement UK Japan');
    // Wholly Obtained ?
    cy.whollyObtained('Japan', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Japan');
    // cumulation
    cy.cumulation('Japan', 'Comprehensive Economic Partnership Agreement UK Japan');
    cy.minimalOps('Comprehensive Economic Partnership Agreement UK Japan', 'no');
    // Origin requirements met
    cy.rooNotMet('Japan', '5808100000', 'Comprehensive Economic Partnership Agreement UK Japan');
  });
});
