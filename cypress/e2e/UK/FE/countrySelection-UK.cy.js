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

  it.only('UK Country selection page', function() {
    cy.visit('/commodities/0804100030');
    cy.get('a[href*="/trading"]').contains('Change').click();
    cy.contains('View UK measures for the selected country');
    cy.contains('UK Integrated Online Tariff');
    cy.title().should('eq', 'UK Integrated Online Tariff - Set country filter - GOV.UK');
    cy.countryPickerpage({value: 'Argentina'});
    cy.get('.govuk-summary-list').contains('Argentina');
    cy.get('.autocomplete__wrapper').contains('Argentina (AR)');
    // Typing the country code
    cy.get('a[href*="/trading"]').contains('Change').click();
    cy.countryPickerpage({value: '(DE)'});
    cy.get('.govuk-summary-list').contains('Germany');
    // reset to all countries
    cy.get('a[href*="/commodities/"]').contains('Reset to all countries').click();
    cy.get('.govuk-summary-list').contains('All countries');
  });
  it('UK Country selection page - No country selected ', function() {
    cy.visit('/commodities/0804100030');
    cy.get('a[href*="/trading"]').contains('Change').click();
    cy.contains('View UK measures for the selected country');
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Select a country');
    cy.get('.govuk-error-message')
        .contains('Select a country');
    // Reset all countries
    cy.get('.govuk-link').contains('Reset to all countries').click();
    cy.get('.govuk-summary-list').contains('All countries');
  });
});
