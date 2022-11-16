// WO - Multiple schemes - nonGSP
describe('| RoO-e2e-WO-Multiple-nonGSP.spec | WO + Multiple Schemes + nonGSP - Vietnam |', function() {
  it('Import - WO + Multiple Schemes + GSP - Vietnam', function() {
    cy.visit('/commodities/0201100021?country=VN#rules-of-origin');
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
    cy.whollyObtained('Vietnam', 'yes');
    // Origin requirements met
    cy.originMet('Vietnam', '0201100021', 'UK-Vietnam Free Trade Agreement');
  });
  it('Export - WO + Multiple Schemes + GSP - Vietnam', function() {
    cy.visit('/commodities/0201100021?country=VN#rules-of-origin');
    // click Check Rules of Origin button
    cy.checkRoO();
    // Select one agreement
    cy.multipleAgreements('Vietnam', 'vietnam');
    // Import
    cy.impOrExp('Vietnam', 'export');
    // How Originating is defined
    cy.howOrginating('United Kingdom', 'UK-Vietnam Free Trade Agreement');
    // How wholly obtained is defined
    cy.howWhollyObtained('UK-Vietnam Free Trade Agreement');
    // what components
    cy.whatComponents('UK-Vietnam Free Trade Agreement');
    // Wholly Obtained ?
    cy.whollyObtained('the UK', 'yes');
    // Origin requirements met
    cy.rooReqMetEx('Exporting', 'the UK', '0201100021', 'UK-Vietnam Free Trade Agreement');
    cy.get('.govuk-list').contains('See valid proofs of origin').click();
    cy.contains('Valid proofs of origin');
    cy.get('.govuk-back-link').click();

    cy.get('.govuk-list').contains('See detailed processes and requirements for proving the origin for goods').click();
    cy.contains('Obtaining and verifying proofs of origin');
    cy.get('.govuk-back-link').click();

    cy.get('.govuk-list').contains('How proofs of origin are verified').click();
    cy.contains('Obtaining and verifying proofs of origin');
    cy.get('.govuk-back-link').click();
  });
});
