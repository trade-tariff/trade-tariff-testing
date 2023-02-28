describe('verify subheadings', function() {
  it('UK subheading front end', function() {
    cy.visit('/subheadings/2933998000-80');
    cy.contains('Subheading 29339980 - Other ');
    cy.contains(/There are \d+ commodities in this category./);
    cy.contains('Footnotes');
    cy.contains('Chapter notes');
    cy.contains('Subheading notes');
    cy.contains('Section notes');
  });

  it('XI subheading front end', function() {
    cy.visit('/xi/subheadings/2933998000-80');
    cy.contains('Subheading 29339980 - Other ');
    cy.contains(/There are \d+ commodities in this category./);
    cy.contains('Chapter notes');
    cy.contains('Subheading notes');
    cy.contains('Section notes');
  });
});
