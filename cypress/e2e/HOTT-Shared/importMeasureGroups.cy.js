describe('UK 🇬🇧 XI 🇪🇺 | importMeasureGrouping - UK & XI | validate if measures are grouped and clickable |', function() {
  // Main Page
  it('XI - VAT and Excise , Custom Duties ,Trade remedies ,EU import controls ,UK import controls', function() {
    cy.visit('/xi/commodities/0304829010#import');
    cy.get('li:nth-of-type(1) > .govuk-link').contains('Import duties').click();
    cy.get('li:nth-of-type(2) > .govuk-link').contains('Trade remedies, safeguards and retaliatory duties').click();
    cy.get('li:nth-of-type(3) > .govuk-link').contains('Suspensions').click();
    cy.get('li:nth-of-type(4) > .govuk-link').contains('Import VAT and excise').click();
    cy.get('h3#vat_excise').contains('Import VAT and excise');
    cy.get('li:nth-of-type(5) > .govuk-link').contains('EU import controls').click();
    cy.get('li:nth-of-type(6) > .govuk-link').contains('UK import controls').click();

    cy.contains('Import VAT and excise').click();
    cy.contains('Import duties').click();
    cy.get('#trade_remedies').contains('Trade remedies, safeguards and retaliatory duties').click();
    cy.contains('EU import controls').click();
    cy.contains('UK import controls').click();
  });
  it('UK - VAT and Excise , Custom Duties ,Trade remedies ,Quotas , import controls', function() {
    cy.visit('/commodities/0304829010#import');
    cy.get('li:nth-of-type(1) > .govuk-link').contains('Import controls').click();
    cy.get('li:nth-of-type(2) > .govuk-link').contains('Import duties').click();
    cy.get('li:nth-of-type(3) > .govuk-link').contains('Quotas').click();
    cy.get('li:nth-of-type(4) > .govuk-link').contains('Trade remedies, safeguards and retaliatory duties').click();
    cy.get('li:nth-of-type(5) > .govuk-link').contains('Import VAT and excise').click();
  });
  it('UK - Verify CDS guidance - additional duties for Russia', function() {
    cy.visit('/commodities/0304719010');
    cy.get('li:nth-of-type(4) > .govuk-link').contains('Trade remedies, safeguards and retaliatory duties');
    cy.get('#measure-20186730').contains('Russia (RU)');
    cy.get('#measure-20186730').contains('Additional duties');
    cy.get('#measure-20186730 > td.conditions-col.govuk-table__cell > a').click();
    cy.get('#popup').contains('Additional duties for Russia');
    cy.get('#popup > div > div > article > div > details > summary').contains('Guidance for completing Box 44 or Data Element 2/3').click();
    cy.get('#popup > div > div > article > div > details > div > table').contains('Document code');
    cy.get('#popup > div > div > article > div > details > div > table').contains('CDS guidance');
    cy.get('#popup > div > div > article > div > details > div > table').contains('9018');
    cy.get('#popup > div > div > article > div > details > div > table').contains('Complete the statement:');
    cy.get('#popup > div > div > article > div > details > div > table').contains('No document status code is required.');
  });
  it('UK - Update the display of additional codes for measures', function() {
    cy.visit('/commodities/3921139000');
    cy.contains('Import controls').click();
    cy.get('h3#uk_import_controls').contains('Import controls');
    cy.get('#measure-20101500').contains('Import prohibition');
    cy.get('#measure-20101500').contains('additional code: 4115');
    cy.get('#measure-20101446').contains('Restriction on entry into free circulation');
    cy.get('#measure-20101446').contains('additional code: 4999');
  });
  it('XI - Update the display of additional codes for measures', function() {
    cy.visit('/xi/commodities/9620001000');
    cy.contains('EU import controls').click();
    cy.get('h3#xi_import_controls').contains('EU import controls');
    cy.get('#measure-3531194').contains('Restriction on entry into free circulation');
    cy.get('#measure-3531194').contains('additional code: 4053');
    cy.get('#measure-3531195').contains('Restriction on entry into free circulation');
    cy.get('#measure-3531195').contains('additional code: 4098');
  });
});
