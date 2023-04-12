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

  it('UK - Start subheading displays one tier further down', function() {
    cy.visit('/subheadings/1512110000-80?day=25&month=1&year=2023');
    cy.get('article.tariff').contains('Open all headings');
    cy.get('article.tariff').contains('Close all headings');
    cy.get('article.tariff').contains('1512111000');
    cy.get('article.tariff').contains('Depends on additional code');
    cy.get('article.tariff').contains('Close all headings').click();
    cy.get('article.tariff').contains('Open all headings').click();
    cy.get('article.tariff').contains('1512111000');
    cy.get('article.tariff').contains('Depends on additional code');
  });

  it('XI subheading front end', function() {
    cy.visit('/xi/subheadings/2933998000-80');
    cy.contains('Subheading 29339980 - Other ');
    cy.contains(/There are \d+ commodities in this category./);
    cy.contains('Chapter notes');
    cy.contains('Subheading notes');
    cy.contains('Section notes');
  });

  it('XI - Start subheading displays one tier further down', function() {
    cy.visit('/xi/subheadings/1512110000-80?day=25&month=1&year=2023');
    cy.get('article.tariff').contains('Open all headings');
    cy.get('article.tariff').contains('Close all headings');
    cy.get('article.tariff').contains('1512111000');
    cy.get('article.tariff').should('not.have.text', 'Depends on additional code');
    cy.get('article.tariff').contains('Close all headings').click();
    cy.get('article.tariff').contains('Open all headings').click();
    cy.get('article.tariff').contains('1512111000');
    cy.get('article.tariff').should('not.have.text', 'Depends on additional code');
  });
});
