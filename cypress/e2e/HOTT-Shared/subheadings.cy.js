describe('verify subheadings', function() {
  it('UK - Subheading front end', function() {
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
    cy.get('ul[aria-hidden="true"]').should('be.hidden');
    cy.get('article.tariff').contains('1512111000').should('be.visible');
    cy.get('article.tariff').contains('Open all headings').click();
    cy.get('article.tariff').contains('1512111000');
    cy.get('article.tariff').contains('Depends on additional code');
  });

  it('XI - Subheading front end', function() {
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
    cy.get('ul[aria-hidden="true"]').should('be.hidden');
    cy.get('article.tariff').contains('1512111000').should('be.visible');
    cy.get('article.tariff').contains('Open all headings').click();
    cy.get('article.tariff').contains('1512111000');
    cy.get('article.tariff').should('not.have.text', 'Depends on additional code');
  });
  it('XI - Subheading page title should not show any special characters', function() {
    cy.visit('/xi/subheadings/0102291000-80');
    cy.title().should('eq', 'Of a weight not exceeding 80 kg - Northern Ireland Online Tariff - GOV.UK');
  });
});
