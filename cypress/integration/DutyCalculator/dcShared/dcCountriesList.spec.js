describe('| dcCountriesList | RoW to GB - Exclude certain countries from the autocompleting country list |', function() {
  it(`RoW - GB - Autocomplete excluded countries list - `, function() {
    // select future date

    cy.visit(`/duty-calculator/uk/1212210000/import-date`);
    cy.contains('UK Integrated Online Tariff');
    cy.validDate();

    cy.contains('Which part of the UK are you importing into?');
    // select NI as country of destination
    cy.get('#steps-import-destination-import-destination-uk-field').check();
    cy.contains('Continue').click();
    cy.contains('Which country are the goods coming from?');

    const countries = ['European Union', 'Guernsey', 'Jersey', 'High seas (Maritime domain outside of territorial waters)', 'Stores and provisions', 'Stores and provisions within the framework of intra-EU trade', 'Stores and provisions within the framework of trade with Third Countries', 'Countries and territories not specified', 'Countries and territories not specified within the framework of intra-EU trade', 'Countries and territories not specified within the framework of trade with third countries', 'Countries and territories not specified for commercial or military reasons', 'Countries and territories not specified for commercial or military reasons in the framework of intra-EU trade', 'Countries and territories not specified for commercial or military reasons in the framework of trade with third countries', 'Belgian Continental Shelf', 'Danish Continental Shelf', 'Irish Continental Shelf', 'French Continental Shelf', 'German Continental Shelf', 'Netherlands Continental Shelf', 'Norwegian Continental Shelf', 'United Kingdom Continental Shelf'];
    for (let i = 0; i < countries.length; i++) {
      cy.get('#steps-country-of-origin-country-of-origin-field')
          .clear().wait(100).type(`${countries[i]}`).wait(300);
      cy.get('[id=\'steps-country-of-origin-country-of-origin-field__listbox\']')
          .contains('No results found');
    }
  });
  it(`RoW - GB - United Kingdom (Northern Ireland) included in countries list `, function() {
    // select future date
    cy.visit(`/duty-calculator/uk/1212210000/import-date`);
    //  cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1212210000`)
    cy.contains('UK Integrated Online Tariff');
    cy.validDate();

    cy.contains('Which part of the UK are you importing into?');
    // select NI as country of destination
    cy.get('#steps-import-destination-import-destination-uk-field').check();
    cy.contains('Continue').click();
    cy.contains('Which country are the goods coming from?');


    cy.get('#steps-country-of-origin-country-of-origin-field')
        .click().clear().wait(500)
        .type('United Kingdom (Northern Ireland)').wait(500);
    cy.get('[id=\'steps-country-of-origin-country-of-origin-field__listbox\']')
        .contains('United Kingdom (Northern Ireland)');
  });
  it('RoW to NI - Exclude EU countries ', function() {
    cy.visit('/duty-calculator/uk/1212210000/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');

    // select EU countries and validate
    const EU_countries = ['Austria', 'Belgium', 'Bulgaria', 'Cyprus', 'Czechia', 'Germany', 'Denmark', 'Estonia', 'European Union', 'Finland', 'France', 'Greece', 'Croatia', 'Hungary', 'Italy', 'Lithuania', 'Luxembourg', 'Latvia', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Sweden', 'Slovenia', 'Slovakia'];

    for (let i = 0; i < EU_countries.length; i++) {
      cy.get('#steps-country-of-origin-other-country-of-origin-field')
          .click().clear().wait(200)
          .type(`${EU_countries[i]}`).wait(200).click();
      cy.get('[id=\'steps-country-of-origin-other-country-of-origin-field__listbox\']')
          .contains('No results found');
      //  cy.contains('Continue').click()
    }
  });
});
