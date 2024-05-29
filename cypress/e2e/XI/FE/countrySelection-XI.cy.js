/* eslint-disable camelcase */
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
    cy.get('a[href*="/xi/trading"]').contains('Change').click();
    cy.contains('View EU and UK measures for the selected country');
    cy.contains('Northern Ireland Online Tariff');
    cy.title().should('eq', 'Northern Ireland Online Tariff - Set country filter - GOV.UK');
    cy.countryPickerpage({value: 'Argentina'});
    cy.get('.govuk-summary-list').contains('Argentina');
    cy.get('.autocomplete__wrapper').contains('Argentina (AR)');
    // Typing the country code
    cy.get('a[href*="/xi/trading"]').contains('Change').click();
    cy.countryPickerpage({value: '(DE)'});
    cy.get('.govuk-summary-list').contains('Germany');
    // reset to all countries
    cy.get('a[href*="/commodities/"]').contains('Reset to all countries').click();
    cy.get('.govuk-summary-list').contains('All countries');
  });
  it('XI Country selection page - No country selected ', function() {
    cy.visit('xi/commodities/0804100030');
    cy.get('a[href*="/xi/trading"]').contains('Change').click();
    cy.contains('View EU and UK measures for the selected country');
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
