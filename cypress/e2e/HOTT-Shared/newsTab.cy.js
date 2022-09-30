/* eslint-disable max-len */
describe('| 📰 newsTab.spec.js | news updates page on UK and XI services', function() {
  // Updates from 8th December 2021
  const countries = ['', 'xi'];
  for (let i=0; i<countries.length; i++) {
    it(`${countries[i]} News page`, function() {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('News').click();
      cy.contains('Latest news');
      cy.contains('Subscribe to the news feed');
    });
  }
});
