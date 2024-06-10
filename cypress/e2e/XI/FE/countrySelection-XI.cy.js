 
describe('🇪🇺 💡 | countrySelection-XI | Country Selection |', {tags: ['config', 'xbrowser-tag']}, function() {
  it('XI Country Selection -import ', function() {
    cy.visit('/xi/commodities/0208909800#import');
    //  XI
    cy.verifyCountrySelection('(XI)', 'No results found');
    // Andorra should be present
    cy.verifyCountrySelection('AD', 'Andorra (AD)');
    // no GB - United Kingdom (excluding Northern Ireland) (GB)
    cy.verifyCountrySelection('(GB)', 'United Kingdom (excluding Northern Ireland) (GB)');
    // no XU
    cy.verifyCountrySelection('XU', 'No results found');
  });
  it('XI Country Selection - export ', function() {
    cy.visit('/xi/commodities/0208909800#export');
    //  XI
    cy.verifyCountrySelection('(XI)', 'No results found');
    // Andorra should be present
    cy.verifyCountrySelection('AD', 'Andorra (AD)');
    // no GB - United Kingdom (excluding Northern Ireland) (GB)
    cy.verifyCountrySelection('(GB)', 'United Kingdom (excluding Northern Ireland) (GB)');
    // no XU
    cy.verifyCountrySelection('XU', 'No results found');
  });
  // XI Present
  // GB Present
  // no XU
  it('XI Country selection page', function() {
    cy.visit('xi/commodities/0804100030');
    cy.contains('You are currently using the Northern Ireland Online Tariff');
    cy.contains('Select or enter a country name to view EU and UK measures');
    cy.countryPickerpage({value: 'Argentina'});
    cy.get('.autocomplete__wrapper').contains('Argentina (AR)');
    // Typing the country code
    cy.get('input#trading_partner_country').click();
    cy.countryPickerpage({value: '(DE)'});
    cy.get('.autocomplete__wrapper').contains('Germany');
    // reset to all countries
    cy.get('a[href*="/commodities/"]').contains('Reset to all countries').click();
    cy.get('.autocomplete__wrapper').contains('All countries');
  });
  it('XI Country selection page - No country selected ', function() {
    cy.visit('xi/commodities/0804100030');
    cy.contains('You are currently using the Northern Ireland Online Tariff');
    cy.contains('Select or enter a country name to view EU and UK measures');
    cy.get('#tab_rules-of-origin').click();
    cy.contains('#rules-of-origin', 'Select a country to check which tariff treatments apply.').should('not.exist');  
    // Reset all countries
    cy.get('.govuk-link').contains('Reset to all countries').click();
    cy.get('.autocomplete__wrapper').contains('All countries');
  });
});
