// NWO-One Scheme_Insufficient processing
// WO - one scheme
describe('| RoO-e2e-NWO-OneSchm-SuffPro.spec | NWO + One Scheme + Sufficient processing +  |', function() {
  it('Importing - NWO + One Scheme + Sufficient processing + Japan + Prod specific rules - Yes/No', function() {
    cy.visit('/commodities/6004100091?country=JP#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Japan', 'import');
    // How Originating is defined
    cy.howOrginating('Japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Japan Comprehensive Economic Partnership Agreement');
    // what components
    cy.whatComponents('UK-Japan Comprehensive Economic Partnership Agreement');
    // Wholly Obtained ?
    cy.whollyObtained('Japan', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Japan');
    // cumulation
    cy.cumulation('japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // min Operations met ?
    cy.minimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'yes');
    // product specific rules?
    cy.prodSpecRules('Spinning of natural or man-made staple fibres combined with knitting or with crocheting.');
    // Origin requirements met
    cy.rooReqMet('Importing', 'Japan', '6004100091', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // Validate if product specific rules are not met
    cy.go(-1);
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMet('Importing', 'Japan', '6004100091', 'UK-Japan Comprehensive Economic Partnership Agreement');
  });
  it('Exporting - NWO + One Scheme + Sufficient processing + Japan + Prod specific rules - Yes/No', function() {
    cy.visit('/commodities/6004100091?country=JP#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Japan', 'export');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Japan Comprehensive Economic Partnership Agreement');
    // what components
    cy.whatComponents('UK-Japan Comprehensive Economic Partnership Agreement');
    // Wholly Obtained ?
    cy.whollyObtained('the UK', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('the UK');
    // cumulation
    cy.cumulation('japan', 'UK-Japan Comprehensive Economic Partnership Agreement');
    // min Operations met ?
    cy.minimalOps('UK-Japan Comprehensive Economic Partnership Agreement', 'yes');
    // product specific rules?
    cy.prodSpecRules('Spinning of natural or man-made staple fibres combined with knitting or with crocheting.');
    // Origin requirements met
    cy.rooReqMetEx('Exporting', 'the UK', '6004100091', 'UK-Japan Comprehensive Economic Partnership Agreement', 'Japan');
    // Validate if product specific rules are not met
    cy.go(-1);
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMetEx('Exporting', 'the UK', '6004100091', 'UK-Japan Comprehensive Economic Partnership Agreement', 'Japan');
  });
});
