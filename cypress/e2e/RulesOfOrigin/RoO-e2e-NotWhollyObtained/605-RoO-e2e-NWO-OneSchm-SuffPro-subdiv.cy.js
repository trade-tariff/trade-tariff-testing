/* eslint-disable max-len */
// NWO-One Scheme_Insufficient processing
// WO - one scheme
describe('| RoO-e2e-NWO-OneSchm-SuffPro-subdiv.spec | NWO + One Scheme + Sufficient processing |', {tags: ['notProduction']}, function() {
  it('Importing - NWO + One Scheme + Sufficient processing + Botswana + Subdivision + Prod specific rules - Yes/No', function() {
    cy.visit('/commodities/5808100000?country=BW#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Botswana', 'import');
    // How Originating is defined
    cy.howOrginating('Botswana', 'SACUM-UK Economic Partnership Agreement (EPA)');
    // How wholly obtained is defined
    cy.howWhollyObtained('SACUM-UK Economic Partnership Agreement (EPA)');
    // what components
    cy.whatComponents('SACUM-UK Economic Partnership Agreement (EPA)');
    // Wholly Obtained ?
    cy.whollyObtained('Botswana', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Botswana');
    // cumulation
    cy.cumulation('sacum', '5808100000', 'BW', 'SACUM-UK Economic Partnership Agreement (EPA)');
    // min Operations met ?
    cy.minimalOps('SACUM-UK Economic Partnership Agreement (EPA)', 'yes');
    // subdivision
    cy.subDivision('5808100000', 'Special woven fabrics; tufted textile fabrics; lace; tapestries; trimmings; embroidery');
    // product specific rules?
    cy.prodSpecRules('Manufacture from yarn');
    // Origin requirements met
    cy.rooReqMet('Importing', 'Botswana', '5808100000', 'SACUM-UK Economic Partnership Agreement (EPA)');
    // Validate if product specific rules are not met
    cy.go('back');
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMet('Importing', 'Botswana', '5808100000', 'SACUM-UK Economic Partnership Agreement (EPA)');
  });
  it('Exporting - NWO + One Scheme + Sufficient processing + Botswana + Subdivision + Prod specific rules - Yes/No', function() {
    cy.visit('/commodities/5808100000?country=BW#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Botswana', 'export');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'SACUM-UK Economic Partnership Agreement (EPA)');
    // How wholly obtained is defined
    cy.howWhollyObtained('SACUM-UK Economic Partnership Agreement (EPA)');
    // what components
    cy.whatComponents('SACUM-UK Economic Partnership Agreement (EPA)');
    // Wholly Obtained ?
    cy.whollyObtained('the UK', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('the UK');
    // cumulation
    cy.cumulation('sacum', '5808100000', 'BW', 'SACUM-UK Economic Partnership Agreement (EPA)');
    // min Operations met ?
    cy.minimalOps('SACUM-UK Economic Partnership Agreement (EPA)', 'yes');
    // subdivision
    cy.subDivision('5808100000', 'Special woven fabrics; tufted textile fabrics; lace; tapestries; trimmings; embroidery');
    // product specific rules?
    cy.prodSpecRules('Printing accompanied by at least two preparatory or finishing operations (such as scouring, bleaching, mercerising, heat setting, raising, calendering, shrink resistance processing, permanent finishing, decatising, impregnating, mending and burling) where the value of the unprinted fabric used does not exceed 47.5% of the ex-works price of the product.');
    // Origin requirements met
    cy.rooReqMetEx('Exporting', 'the UK', '5808100000', 'SACUM-UK Economic Partnership Agreement (EPA)');
    // Validate if product specific rules are not met
    cy.go('back');
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMetEx('Exporting', 'the UK', '5808100000', 'SACUM-UK Economic Partnership Agreement (EPA)', 'Botswana');
  });
});
