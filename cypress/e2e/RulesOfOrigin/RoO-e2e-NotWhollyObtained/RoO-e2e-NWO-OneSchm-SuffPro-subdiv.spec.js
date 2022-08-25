/* eslint-disable max-len */
// NWO-One Scheme_Insufficient processing
// WO - one scheme
describe('| RoO-e2e-NWO-OneSchm-SuffPro-subdiv.spec | NWO + One Scheme + Sufficient processing +  |', function() {
  it('Importing - NWO + One Scheme + Sufficient processing + Botswana + Subdivision + Prod specific rules - Yes/No', function() {
    cy.visit('/commodities/5208121620?country=BW#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Import
    cy.impOrExp('Botswana', 'import');
    // How Originating is defined
    cy.howOrginating('Botswana', 'SACUM-UK economic partnership agreement (EPA)');
    // How wholly obtained is defined
    cy.howWhollyObtained('SACUM-UK economic partnership agreement (EPA)');
    // what components
    cy.whatComponents('SACUM-UK economic partnership agreement (EPA)');
    // Wholly Obtained ?
    cy.whollyObtained('Botswana', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Botswana');
    // cumulation
    cy.cumulation('Botswana', 'SACUM-UK economic partnership agreement (EPA)');
    // min Operations met ?
    cy.minimalOps('SACUM-UK economic partnership agreement (EPA)', 'yes');
    // subdivision
    cy.subDivision('5208121620', 'Woven fabrics of cotton');
    // product specific rules?
    cy.prodSpecRules('Manufacture from yarn ; or Printing accompanied by at least two preparatory or finishing operations (such as scouring, bleaching, mercerising, heat setting, raising, calendering, shrink resistance processing, permanent finishing, decatising, impregnating, mending and burling) where the value of the unprinted fabric used does not exceed 47.5% of the ex-works price of the product.');
    // Origin requirements met
    cy.rooReqMet('Botswana', '5208121620', 'SACUM-UK economic partnership agreement (EPA)');
    // Validate if product specific rules are not met
    cy.go(-1);
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements NOT met
    cy.rooNotMet('Botswana', '5208121620', 'SACUM-UK economic partnership agreement (EPA)');
  });
});
