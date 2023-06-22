/* eslint-disable max-len */
// NWO + Multi-NonGSP + Sufficient processing + SubDivision + PSR
//

// This is no longer a multi scheme scenarios as Vietnam has been removed from the DCTS groups.
describe('| RoO-e2e-NWO-MultiSchm-NonGSP-SuffPro.spec | NWO + Multi-NonGSP + Sufficient processing + SubDivision + PSR  |', {tags: ['notProduction']}, function() {
  it('Importing - NWO + Multi-NonGSP + Sufficient processing  + Vietnam + Prod specific rules - Yes/No', function() {
    cy.visit('/commodities/6004100091?country=VN#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
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
    cy.cumulation('vietnam', '6004100091', 'VN', 'UK-Vietnam Free Trade Agreement');
    // min Operations met ?
    cy.minimalOps('UK-Vietnam Free Trade Agreement', 'yes');
    // sub Division
    cy.subDivision('6004100091', 'Knitted or crocheted fabrics.');
    // product specific rules?
    cy.prodSpecRules('Spinning of natural or man-made staple fibres or extrusion of manmade filament yarn, in each case accompanied by knitting');
    // knitting accompanied by dyeing or by flocking or by coating; flocking accompanied by dyeing or by printing; dyeing of yarn of natural fibres accompanied by knitting; or twisting or texturing accompanied by knitting provided that the value of the non-twisted/non-textured yarns used does not exceed 47.5% of the ex-works price of the product.');
    // Origin requirements met
    cy.rooReqMet('Importing', 'Vietnam', '6004100091', 'UK-Vietnam Free Trade Agreement');
    // Validate if product specific rules are not met
    cy.go(-1);
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMetMulti('Importing', 'Vietnam', '6004100091', 'UK-Vietnam Free Trade Agreement');
  });
});
