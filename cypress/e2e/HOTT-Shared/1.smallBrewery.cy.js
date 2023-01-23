describe('smallBrewery.spec.js | small brewery copy and link', function() {
  // HOTT-878
  it('UK - small brewery copy and link X440,X441', function() {
    cy.visit('/commodities/2203000100#import');
    cy.get('tr:nth-of-type(3) > td:nth-of-type(4) > a[role=\'button\']').click();
    cy.contains('Excise duty on beer from small breweries');
    cy.contains('Excise code 440');
    cy.contains('Small Brewers Relief (SBR) provides for reduced rates of beer duty for small brewers.');
    cy.contains('Find out more about small brewery relief');
    cy.get('div#popup article  a').click();
    cy.contains('8. Small brewery beer');
    cy.contains('8.1 What is small brewery beer');
    cy.go(-1);
    cy.get('tr:nth-of-type(4) > td:nth-of-type(4) > a[role=\'button\']').click();
    cy.contains('Excise duty on beer from small breweries');
    cy.contains('441 - Imported beer – small brewery beer eligible to reduced rates');
    cy.contains('Small Brewers Relief (SBR) provides for reduced rates of beer duty for small brewers.');
    cy.contains('Find out more about small brewery relief');
    cy.get('div#popup article  a').click();
    cy.contains('8. Small brewery beer');
    cy.contains('8.1 What is small brewery beer');
  });
  it('XI - small brewery copy and link X440,X441', function() {
    cy.visit('/xi/commodities/2203000100#import');
    cy.get('div#import > table:nth-of-type(3) > tbody > tr:nth-of-type(3) > td:nth-of-type(4) > a[role=\'button\']').click();
    cy.contains('Excise duty on beer from small breweries');
    cy.contains('Excise code 440');
    cy.contains('Small Brewers Relief (SBR) provides for reduced rates of beer duty for small brewers.');
    cy.contains('Find out more about small brewery relief');
    cy.get('div#popup article  a').click();
    cy.contains('8. Small brewery beer');
    cy.contains('8.1 What is small brewery beer');
    cy.go(-1);
    cy.get('tr:nth-of-type(4) > td:nth-of-type(4) > a[role=\'button\']').click();
    cy.contains('Excise duty on beer from small breweries');
    cy.contains('441 - Imported beer – small brewery beer eligible to reduced rates');
    cy.contains('Small Brewers Relief (SBR) provides for reduced rates of beer duty for small brewers.');
    cy.contains('Find out more about small brewery relief');
    cy.get('div#popup article  a').click();
    cy.contains('8. Small brewery beer');
    cy.contains('8.1 What is small brewery beer');
  });
});
