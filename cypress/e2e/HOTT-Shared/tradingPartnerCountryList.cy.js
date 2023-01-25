/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable max-len */
describe('Validating trading partner countries', function() {
  it(`Autocomplete excluded countries list`, function() {
    const expectedMissingCountries = [
      'certificates',
      '1005',
      '1006',
      '6006',
      'Home Office',
      'OECD',
      'goods',
    ];
    const expectedContinentalShelfCountries =[
      'United Kingdom Continental Shelf',
      'Norwegian Continental Shelf',
      'Netherlands Continental Shelf',
      'Irish Continental Shelf',
      'German Continental Shelf',
      'French Continental Shelf',
      'Danish Continental Shelf',
      'Belgian Continental Shelf',
    ];
    cy.visit(`/commodities/0702000007`);

    for (let i = 0; i < expectedMissingCountries.length; i++) {
      cy.get('input#trading_partner_country').clear().wait(500).type(`${expectedMissingCountries[i]}`).wait(300);
      cy.get('[id=\'trading_partner_country__listbox\']')
          .contains('No results found');
    }

    for (let j = 0; j < expectedContinentalShelfCountries.length; j++) {
      cy.get('input#trading_partner_country').clear().wait(500).type(`${expectedContinentalShelfCountries[j]}`).wait(300);
      cy.get('[id=\'trading_partner_country__listbox\']')
          .contains(`${expectedContinentalShelfCountries[j]}`);
    }
  });
});
