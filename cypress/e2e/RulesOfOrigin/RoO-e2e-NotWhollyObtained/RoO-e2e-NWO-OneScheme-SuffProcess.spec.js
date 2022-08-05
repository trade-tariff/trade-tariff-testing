// NWO-One Scheme_Insufficient processing
// WO - one scheme
describe('| RoO-e2e-NWO-OneScheme-SuffProcess.spec | NWO + One Scheme + Sufficient processing +  |', function() {
  it('Importing - NWO + One Scheme + Sufficient processing + Japan + Prod specific rules - Yes/No', function() {
    cy.visit('/commodities/6004100091?country=JP#rules-of-origin');
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
    cy.cumulation('Comprehensive Economic Partnership Agreement UK Japan');
    // min Operations met ?
    cy.minimalOps('Comprehensive Economic Partnership Agreement UK Japan', 'yes');
    // product specific rules?
    cy.prodSpecRules('Spinning of natural or man-made staple fibres combined with knitting or with crocheting.');
    // Origin requirements met
    cy.rooReqMet('Japan', '6004100091', 'Comprehensive Economic Partnership Agreement UK Japan');
    // Validate if product specific rules are not met
    cy.go(-1);
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMet('Japan', '6004100091', 'Comprehensive Economic Partnership Agreement UK Japan');
  });
});
