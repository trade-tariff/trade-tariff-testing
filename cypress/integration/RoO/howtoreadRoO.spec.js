// How to read rules of origin
/* eslint-disable max-len */
// HOTT-
describe('| howtoreadRoO - link and copy ', {tags: ['config', 'roo-tag']}, function() {
  const countries = ['', 'xi'];
  const service = ['UK', 'EU'];
  for (let i=0; i<countries.length; i++) {
    it(`${service[i]} | Service - HTR link |`, function() {
      cy.visit(`${countries[i]}/commodities/0702000007`);
      cy.contains('Rules of origin').click();
      cy.get('input#search_country').click().clear().wait(500)
          .type('Japan').wait(500)
          .type('{enter}');
      cy.contains('Rules of origin').click();
      cy.contains('Preferential rules of origin for trading with Japan');
      cy.contains('How to read rules of origin').click();
      cy.contains('The rules of origin table contains:');
      cy.contains('Introductory notes');
      cy.contains('Note 1 - General principles');
      cy.contains('Note 2 - The structure of Annex 3-B');
      cy.contains('Note 7 - Tolerances applicable to products containing two or more basic textile materials');
      cy.contains('Note 8 - Other tolerances applicable to certain textile products');
    });
  }
});
