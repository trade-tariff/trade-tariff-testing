describe('🇬🇧 💡 | countrySelection-UK | Country Selection |', {tags: ['config', 'xbrowser-tag']}, function() {
  it('UK Country Selection - imports ', function() {
    cy.visit('/commodities/0208909800#import');
    //  XI
    cy.verifyCountrySelection('(XI)', 'No results found');
    // Andorra should be present
    cy.verifyCountrySelection('AD', 'Andorra (AD)');
    // no GB - United Kingdom (excluding Northern Ireland) (GB)
    cy.verifyCountrySelection('(GB)', 'No results found');
    // no XU
    cy.verifyCountrySelection('XU', 'No results found');
  });
  it('UK Country Selection - exports ', function() {
    cy.visit('/commodities/0208909800#export');
    //  XI
    cy.verifyCountrySelection('(XI)', 'No results found');
    // Andorra should be present
    cy.verifyCountrySelection('AD', 'Andorra (AD)');
    // no GB - United Kingdom (excluding Northern Ireland) (GB)
    cy.verifyCountrySelection('(GB)', 'No results found');
  });

  it('UK Country selection page', function() {
    cy.visit('/commodities/0804100030');
    cy.contains('You are currently using the UK Integrated Online Tariff');
    cy.contains('Select or enter a country name to view UK measures');
    cy.countryPickerpage({value: 'Argentina'});
    cy.get('.autocomplete__wrapper > ul >li.autocomplete__option').contains('Argentina (AR)');
    // Typing the country code
    cy.get('input#trading_partner_country').click();
    cy.countryPickerpage({value: '(DE)'});
    cy.get('.autocomplete__wrapper > ul >li.autocomplete__option').contains('Germany (DE)');
    // reset to all countries
    cy.get('a[href*="/commodities/"]').contains('Reset to all countries').click();
    cy.get('.autocomplete__wrapper > ul >li.autocomplete__option').contains('All countries');
  });
  it('UK Country selection page - No country selected ', function() {
    cy.visit('/commodities/0804100030');
    cy.contains('You are currently using the UK Integrated Online Tariff');
    cy.contains('Select or enter a country name to view UK measures');
    cy.get('#tab_rules-of-origin').click();
    cy.get('.govuk-grid-column-full > .govuk-warning-text > .govuk-warning-text__text').contains('Select a country to check which tariff treatments apply.');
    cy.get('input#trading_partner_country').click();
    cy.countryPickerpage({value: '(DE)'});
    // Reset all countries
    cy.get('.govuk-link').contains('Reset to all countries').click();
    cy.get('.autocomplete__wrapper > ul >li.autocomplete__option').contains('All countries');
  });
});
