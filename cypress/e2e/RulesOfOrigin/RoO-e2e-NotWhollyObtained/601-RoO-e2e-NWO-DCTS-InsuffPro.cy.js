// NWO- DCTS Scheme_Insufficient processing
// ONLY IMPORT JOURNEY
describe('| 601-RoO-e2e-NWO-DCTS-InsuffProces.spec | NWO + DCTS Scheme + insufficient processing |', {tags: ['notProduction']}, function() {
  it('Importing - NWO + DCTS Scheme + insufficient processing - Bangladesh + PSR', function() {
    cy.visit('/commodities/5808100000?country=BD#rules-of-origin');
    cy.checkRoO();
    // Import
    cy.importGSP('5808100000', 'Bangladesh');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'Developing Countries Trading Scheme (DCTS)');
    // How wholly obtained is defined
    cy.howWhollyObtained('Developing Countries Trading Scheme (DCTS)');
    // what components ?
    cy.whatComponents('Developing Countries Trading Scheme (DCTS)');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Bangladesh', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Bangladesh');
    // cumulation
    cy.cumulation('dcts-ldcs', '5808100000', 'BD', 'Developing Countries Trading Scheme (DCTS)');
    // Min Processing NO
    cy.minimalOps('Developing Countries Trading Scheme (DCTS)', 'no');
    // Origin requirements met
    cy.rooNotMetGSP('Bangladesh', '5808100000', 'Developing Countries Trading Scheme (DCTS)');
    // Min Processing Yes
    cy.go(-2);
    cy.minimalOps('Developing Countries Trading Scheme (DCTS)', 'yes');
    // Product subDivisions
    cy.subDivision('5808100000', 'Special woven fabrics; tufted textile fabrics; lace; tapestries; trimmings; embroidery');
    // product specific rules?
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements met
    cy.rooNotMetGSP('Bangladesh', '5808100000', 'Developing Countries Trading Scheme (DCTS)');
  });
});
