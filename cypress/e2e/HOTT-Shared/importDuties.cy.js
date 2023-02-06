describe('UK 🇬🇧 XI 🇪🇺 | importDuties.spec.js | validate new import duties on Front end |', function() {
/*
Add new measure types (485, 487, 488) to import duties section
Move reassigned measure types (464, 481, 482, 483) from 'hide me' to import duties section
464 Declaration of subheading submitted to authorised use provisions
481 Declaration of subheading submitted to restrictions (import)
482 Declaration of subheading submitted to restrictions (net weight/supplementary unit)
483 Declaration of subheading submitted to restrictions (value)
*485 Declaration of subheading submitted to restrictions (export)
*487 Representative price (poultry)
*488 Unit price
489 Representative price
490 Standard import value
*/
  const country = ['', 'xi'];
  const titles = ['Northern Ireland Online Tariff', 'UK Integrated Online Tariff'];
  for (let i = 0; i < country.length; i++) {
    it(`${country[i]} Import duties 481`, function() {
      cy.visit(`${country[i]}/commodities/2204219413#import`);
      cy.contains(`${titles[i]}`);
      cy.contains('Import duties').click();
      cy.contains('Declaration of subheading submitted to restrictions (import)');
      // cy.contains('TM640').click();
      // cy.contains('Declaration of subheading submitted to restrictions (import) for All countries');
    });

    it(`${country[i]} Import duties 464`, function() {
      cy.visit(`${country[i]}/commodities/8714999011#import`);
      cy.contains(`${titles[i]}`);
      cy.contains('Import duties').click();
      cy.contains('China (CN)');
      cy.contains('Declaration of subheading submitted to authorised use provisions');
    });
  }
  it('UK Import duties 489', function() {
    cy.visit('/commodities/1703100000#import');
    cy.contains('Import duties').click();
    cy.contains('Representative price').should('not.exist');
  });
  it('UK third country duties - multiple duties - heading', function() {
    cy.viewport(1200, 1080);
    cy.visit('/headings/3906');
    cy.get('ul > li.level-3.last-child').contains('Other');
    cy.get('.govuk-table.additional-code-table').contains('Depends on additional code');
    cy.get('.govuk-table.additional-code-table').contains('Code');
    cy.get('.govuk-table.additional-code-table').contains('Duty');
    cy.get('.govuk-table.additional-code-table').contains('2500');
    cy.get('.govuk-table.additional-code-table').contains('0.00 %');
    cy.get('.govuk-table.additional-code-table').contains('2501');
    cy.get('.govuk-table.additional-code-table').contains('6.00 %');
  });
  it('XI third country duties - multiple duties - heading', function() {
    cy.viewport(1200, 1080);
    cy.visit('xi/headings/3906');
    cy.get('ul > li.level-3.last-child').contains('Other');
    cy.get('.govuk-table.additional-code-table').contains('Depends on additional code');
    cy.get('.govuk-table.additional-code-table').contains('Code');
    cy.get('.govuk-table.additional-code-table').contains('Duty');
    cy.get('.govuk-table.additional-code-table').contains('0.00 %');
    cy.get('.govuk-table.additional-code-table').contains('6.50 %');
  });
});
