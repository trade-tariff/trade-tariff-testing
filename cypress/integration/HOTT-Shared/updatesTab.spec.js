/* eslint-disable max-len */
describe.skip(' | updatesTab.spec.js | updates page on UK and XI services', function() {
  // Updates from 8th December 2021
  it('Updates CN21 -> CN22 page', function() {
    const countries = ['', 'xi'];
    for (let i=0; i<countries.length; i++) {
      cy.visit(`${countries[i]}/sections`);
      cy.get('li:nth-of-type(5) > .govuk-header__link').contains('Updates').click();
      cy.contains('Latest news');
      cy.contains('UK Goods classification 2021 to 2022 correlation table');
      cy.contains('correlation of commodity codes, at 8-digit level, from the 2021 Tariff to that of 2022').click();
      cy.contains('2022 UK goods classification');
      // cy.contains('UK goods classification 2021-2022 10-digit changes');
      // cy.contains('This page lists both the updates to 2022 UK goods classification chapters at 10-digit level (where these have been confirmed) and the correlation of commodity codes to the 8-digit level from the 2021 tariff to that of 2022.');
      cy.contains('Ex: means that the content of the code for the year 2022 comes partly from the code of the previous year which can be found opposite.');
      cy.contains('Changes to Chapter 62');
      cy.contains('Changes to Chapter 3 Fish and crustaceans, molluscs and other aquatic invertebrates');
      cy.contains('This table is indicative and has no legal value.');
      cy.contains('Eight new headings will be introduced from 1 January 2022;');
    }
  });
});
