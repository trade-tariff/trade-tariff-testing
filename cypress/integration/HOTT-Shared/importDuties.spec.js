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
      cy.contains('TM640').click();
      cy.contains('Declaration of subheading submitted to restrictions (import) for All countries');
    });

    it(`${country[i]} Import duties 464`, function() {
      cy.visit(`${country[i]}/commodities/8714999011#import`);
      cy.contains(`${titles[i]}`);
      cy.contains('Import duties').click();
      cy.contains('Declaration of subheading submitted to authorised use provisions');
      cy.contains('CD501').click();
      cy.contains('Declaration of subheading submitted to authorised use provisions');
    });
  }
  it('UK Import duties 489', function() {
    cy.visit('/commodities/1703100000#import');
    cy.contains('Import duties').click();
    cy.contains('Representative price').should('not.exist');
  });
});
