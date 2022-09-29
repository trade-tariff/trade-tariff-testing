/* eslint-disable max-len */
// NWO + Multi-NonGSP + Insufficient processing = RoO Not met
//
describe('| RoO-e2e-NWO-MultiSchm-NonGSP-InsuffPro.spec | NWO + Multi-NonGSP + Insufficient processing |', function() {
  it('Importing - NWO + Multi-NonGSP + Insufficient processing  + Vietnam', function() {
    cy.visit('/commodities/6004100091?country=VN#rules-of-origin');
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
    cy.whollyObtained('Vietnam', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Vietnam');
    // cumulation
    cy.cumulation('Vietnam', 'UK-Vietnam Free Trade Agreement');
    // min Operations met ?
    cy.minimalOps('UK-Vietnam Free Trade Agreement', 'no');
    // Origin requirements NOT met
    cy.rooNotMetMulti('Vietnam', '6004100091', 'UK-Vietnam Free Trade Agreement');
  });
});
