/* eslint-disable max-len */
describe('| excludedCountryList.spec | Exclude certain countries from the autocompleting country list |', function() {
  // QU', 'QR', 'EU', 'QZ', 'QV', 'QW', 'QY', 'QX', 'QP', 'XU', 'IO', 'QS', 'XI', 'QQ', 'ZB', 'ZD', 'ZF', 'ZG', 'ZE', 'ZH', 'ZN', 'ZU', 'GG', 'JE'
  const country = ['', 'xi'];
  const countries = ['certificates', '1005', '1006', '6006', 'Home Office', 'OECD', 'goods'];
  const xcountries =['United Kingdom Continental Shelf', 'Norwegian Continental Shelf', 'Netherlands Continental Shelf', 'Irish Continental Shelf', 'German Continental Shelf', 'French Continental Shelf', 'Danish Continental Shelf', 'Belgian Continental Shelf'];
  for (let k=0; k<country.length; k++) {
    it.only(`${country[k]} - Autocomplete excluded countries list`, function() {
      cy.visit(`${country[k]}/commodities/0702000007#import`);
      for (let i = 0; i < countries.length; i++) {
        cy.get('input#search_country').clear().wait(500).type(`${countries[i]}`).wait(300);
        cy.get('[id=\'search_country__listbox\']')
            .contains('No results found');
      }
      for (let j = 0; j < xcountries.length; j++) {
        cy.get('input#search_country').clear().wait(500).type(`${xcountries[j]}`).wait(300);
        cy.get('[id=\'search_country__listbox\']')
            .contains(`${xcountries[j]}`);
      }
    });
  }
});
