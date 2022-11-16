/* eslint-disable max-len */
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
    cy.cumulation('japan', '6004100091', 'JP', 'UK-Japan Comprehensive Economic Partnership Agreement');
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
    cy.cumulation('japan', '6004100091', 'JP', 'UK-Japan Comprehensive Economic Partnership Agreement');
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
  it('Importing - NWO + Sufficient processing - Yes + Egypt + Prod specific rules - Yes', function() {
    cy.visit('/commodities/1301200000?country=EG#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Egypt', 'import');
    // How Originating is defined
    cy.howOrginating('Egypt', 'UK-Egypt Association Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Egypt Association Agreement');
    // what components
    cy.whatComponents('UK-Egypt Association Agreement');
    // Wholly Obtained ?
    cy.whollyObtained('Egypt', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Egypt');
    // cumulation
    cy.cumulation('egypt', '1301200000', 'EG', 'UK-Egypt Association Agreement');
    // min Operations met ?
    cy.minimalOps('UK-Egypt Association Agreement', 'yes');
    // Provide more information about your product
    cy.moreInfoAboutProduct('1301200000', 'Lac; natural gums, resins, gum-resins and oleoresins (for example, balsams)');
    // product specific rules?
    cy.prodSpecRules('Manufacture in which the value of all the materials of heading 1301 used does not exceed 50% of the ex-works price of the product.');
    // Origin requirements met
    cy.rooReqMet('Importing', 'Egypt', '1301200000', 'UK-Egypt Association Agreement');
    // Validate if product specific rules are met
    cy.go(-1);
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMet('Importing', 'Egypt', '1301200000', 'UK-Egypt Association Agreement');
  });
  it('Importing - NWO + Cumulation screens + Sufficient processing - Yes + Egypt + Prod specific rules - Yes', function() {
    cy.visit('/commodities/0502100000?country=EG#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Egypt', 'import');
    // How Originating is defined
    cy.howOrginating('Egypt', 'UK-Egypt Association Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Egypt Association Agreement');
    // what components
    cy.whatComponents('UK-Egypt Association Agreement');
    // Wholly Obtained ?
    cy.whollyObtained('Egypt', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Egypt');
    // cumulation
    cy.cumulation('egypt', '0502100000', 'EG', 'UK-Egypt Association Agreement');
    // min Operations met ?
    cy.minimalOps('UK-Egypt Association Agreement', 'yes');
    // Provide more information about your product
    cy.moreInfoAboutProduct('0502100000', 'Products of animal origin, not elsewhere specified or included');
    // product specific rules?
    cy.prodSpecRules('Manufacture in which all the materials of');
    // Origin requirements met
    cy.rooReqMet('Importing', 'Egypt', '0502100000', 'UK-Egypt Association Agreement');
    // Validate if product specific rules are met
    cy.go(-1);
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMet('Importing', 'Egypt', '0502100000', 'UK-Egypt Association Agreement');
  });
});
