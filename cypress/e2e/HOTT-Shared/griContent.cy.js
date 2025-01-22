

describe('griContent.spec - Validate General Rules of Interpretation link on both services', function() {
  // https://transformuk.atlassian.net/browse/HOTT-1405
  const pages = ['/sections/1', '/chapters/15', '/headings/0102', '/subheadings/7209150000-80', '/commodities/0702001007#footnotes', 'commodities/0903000000#footnotes'];
  const countries = ['xi', 'uk'];
  for (let j=0; j<countries.length; j++) {
    it(`${countries[j]} Validate link`, function() {
      for (let i = 0; i<pages.length; i++) {
        cy.visit(`${pages[i]}`);
        cy.groiContent();
      }
    });
  }
});
