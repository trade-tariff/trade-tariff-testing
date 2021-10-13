describe('UK 🇬🇧 XI 🇪🇺 | importMeasureGrouping - UK & XI | validate if measures are grouped and clickable |', function() {
  // Main Page
  it('Northern Ireland - VAT and Excise , Custom Duties ,Trade remedies ,EU import controls ,UK import controls', function() {
    cy.visit('/xi/commodities/0304829010#import');
    cy.get('li:nth-of-type(1) > .govuk-link').contains('Customs duties').click();
    cy.get('li:nth-of-type(2) > .govuk-link').contains('Trade Remedies, safeguards and retaliatory duties').click();
    cy.get('li:nth-of-type(3) > .govuk-link').contains('VAT and excise').click();
    cy.get('li:nth-of-type(4) > .govuk-link').contains('EU import controls').click();
    cy.get('li:nth-of-type(5) > .govuk-link').contains('UK import controls').click();

    cy.contains('VAT and excise').click();
    cy.contains('Customs duties').click();
    cy.contains('Trade Remedies, safeguards and retaliatory duties').click();
    cy.contains('EU import controls').click();
    cy.contains('UK import controls').click();
  });
  it('United Kingdom - VAT and Excise , Custom Duties ,Trade remedies ,Quotas , import controls', function() {
    cy.visit('/commodities/0304829010#import');
    cy.get('li:nth-of-type(1) > .govuk-link').contains('Customs duties').click();
    cy.get('li:nth-of-type(2) > .govuk-link').contains('Quotas').click();
    cy.get('li:nth-of-type(3) > .govuk-link').contains('Trade Remedies, safeguards and retaliatory duties').click();
    cy.get('li:nth-of-type(4) > .govuk-link').contains('VAT and excise').click();
    cy.get('li:nth-of-type(5) > .govuk-link').contains('Import controls').click();
  });
});
