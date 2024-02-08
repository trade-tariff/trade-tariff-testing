// NWO- DCTS Scheme_Insufficient processing
// ONLY IMPORT JOURNEY
describe('|601-RoO-e2e-NWO-DCTS-InsuffProces.spec | NWO + DCTS Scheme + insufficient processing|', {tags: ['notProduction']}, function() {
  it('Importing - NWO + DCTS Scheme + insufficient processing - Bangladesh + PSR', function() {
    cy.visit('/commodities/5808100000?country=BD#rules-of-origin');
    cy.checkRoO();
    // Import
    cy.importGSP('5808100000', 'Bangladesh');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences');
    // How wholly obtained is defined
    cy.howWhollyObtained('Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences');
    // what components ?
    cy.whatComponents('Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Bangladesh', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Bangladesh');
    // cumulation
    cy.cumulation('dcts-ldcs', '5808100000', 'BD', 'Developing Countries Trading Scheme (DCTS)');
    // Min Processing NO
    cy.minimalOps('Developing Countries Trading Scheme (DCTS)', 'no');
    // Origin requirements met
    cy.rooNotMetGSP('Bangladesh', '5808100000', 'Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences');
    // Min Processing Yes
    cy.go(-2);
    cy.minimalOps('Developing Countries Trading Scheme (DCTS)', 'yes');
    // Product subDivisions
    cy.subDivision('5808100000', 'Special woven fabrics; tufted textile fabrics; lace; tapestries; trimmings; embroidery');
    // product specific rules?
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements met
    cy.rooNotMetGSP('Bangladesh', '5808100000', 'Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences');
  });
  it('Importing - NWO + DCTS Scheme + General&Enhanced - BO + PSR', function() {
    cy.visit('/commodities/3903110000?country=BO#rules-of-origin');
    cy.checkRoO();
    // Import
    cy.importGSP('3903110000', 'Bolivia');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    // How wholly obtained is defined
    cy.howWhollyObtained('Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    // what components ?
    cy.whatComponents('Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    // Wholly Obtained yes/no ?
    cy.whollyObtained('Bolivia', 'no');
    // Your goods are not wholly obtained
    cy.notWhollyObtained('Bolivia');
    // cumulation
    cy.cumulation('dcts-general-enhanced', '3903110000', 'BO', 'Developing Countries Trading Scheme (DCTS)');
    // Min Processing NO
    cy.minimalOps('Developing Countries Trading Scheme (DCTS)', 'no');
    // Origin requirements met
    cy.rooNotMetGSP('Bolivia', '3903110000', 'Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    // Min Processing Yes
    cy.go(-2);
    cy.minimalOps('Developing Countries Trading Scheme (DCTS)', 'yes');
    // Product subDivisions
    cy.subDivision('3903110000',
        'Plastics and articles thereof; except for the goods specified in Column 2 of the entries for ex 3907, ex 3920 and ex 3921');
    // prodSpecRules
    cy.prodSpecRules('Manufacture from materials of any heading, except that of the good.');
    // Origin requirements met
    cy.originMet('Bolivia', '3903110000', 'Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
    // product specific rules?
    cy.get('.govuk-back-link').click();
    // product specific rules?
    cy.prodSpecRules('Your goods do not meet any of these rules.');
    // Origin requirements met
    cy.rooNotMetGSP('Bolivia', '3903110000', 'Developing Countries Trading Scheme (DCTS) - Standard and Enhanced Preferences');
  });
});
