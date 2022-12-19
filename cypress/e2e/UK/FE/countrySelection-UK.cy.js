/* eslint-disable camelcase */
describe('🇬🇧 💡 | countrySelection-UK | Country Selection |', {tags: ['config', 'xbrowser-tag']}, function() {
  it('UK Country Selection - imports ', function() {
    cy.visit('/commodities/0208909800#import');
    //  XI
    cy.get('input#trading_partner_country').click().clear().wait(500).type('(XI)').wait(500);
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');

    // Andorra should be present
    cy.get('input#trading_partner_country').click().clear().wait(500).type('AD').wait(700);
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('Andorra (AD)');
    // no GB - United Kingdom (excluding Northern Ireland) (GB)
    cy.get('input#trading_partner_country').click().clear().wait(500).type('(GB)').wait(900);
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');
    // no XU
    cy.get('input#trading_partner_country').click().clear().wait(500).type('XU').wait(500);
    cy.get('[id=\'trading_partner_country__listbox\']')
    //  .contains('United Kingdom (excluding Northern Ireland) (GB)').should('not.exist')
        .contains('No results found');
  });
  it('UK Country Selection - exports ', function() {
    cy.visit('/commodities/0208909800#export');
    //  XI
    cy.get('input#trading_partner_country').click().clear().wait(500).type('(XI)').wait(500);
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');

    // Andorra should be present
    cy.get('input#trading_partner_country').click().clear().wait(500).type('AD').wait(700);
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('Andorra (AD)');
    // no GB - United Kingdom (excluding Northern Ireland) (GB)
    cy.get('input#trading_partner_country').click().clear().wait(500).type('(GB)').wait(900);
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');
    // no XU
    cy.get('input#trading_partner_country').click().clear().wait(500).type('XU').wait(500);
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');
  });

  it('UK Country selection page', function() {
    cy.visit('/commodities/0804100030');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Filter measures against the selected country');
    cy.contains('UK Integrated Online Tariff');
    cy.title().should('eq', 'UK Integrated Online Tariff - Set country filter - GOV.UK');
    cy.countryPickerpage({value: 'Argentina'});
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('Argentina');

    cy.get('.autocomplete__wrapper').contains('Argentina (AR)');
    // Typing the country code
    cy.get('div:nth-of-type(5) > .govuk-summary-list__actions > .govuk-link').click();
    cy.countryPickerpage({value: '(DE)'});
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('Germany');

    // reset to all countries
    cy.get('.reset-country-picker').click();
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('All countries');
  });
  it('UK Country selection page - No country selected ', function() {
    cy.visit('/commodities/0804100030');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Select country').click();
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Select a country');
    cy.get('.govuk-error-message')
        .contains('Select a country');
    // Reset all countries
    cy.get('.govuk-link').contains('Reset to all countries').click();
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('All countries');
  });
});
