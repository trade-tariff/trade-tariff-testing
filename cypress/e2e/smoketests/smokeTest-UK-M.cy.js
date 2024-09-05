describe('smoke test to cover basic mobile functionality on UK services |', {tags: ['smokeTest']}, function() {
  beforeEach(function() {
    cy.viewport('iphone-x');
  });

  it('🚀 UK - Main Page Validation', function() {
    cy.visit('/find_commodity');
    cy.mobileMenu();
    cy.title().should('matches', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.contains('If you’re bringing goods into Northern Ireland from outside the UK and the EU');
    cy.contains('Search for a commodity');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('Browse').click();
    cy.contains('Browse the tariff');
  });

  it('🚀 UK - Legal base column suppressed ', function() {
    cy.visit('/commodities/0101210000#import');
    cy.contains('UK Integrated Online Tariff');
    cy.contains('Legal base').should('not.be.visible');
  });

  it('🚀 UK - Main Page - Switching link to XI available & works', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');

    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });

  it('🚀 UK - United Kingdom should not be shown in EU country list', function() {
    cy.visit('/commodities/2403991000#import');
    cy.get('.govuk-tabs__panel')
        .contains('European Union (1013)').click();
    cy.mobileMenu();
    cy.contains('European Union');
    cy.contains('United Kingdom (GB)').should('not.exist');
  });

  it('🚀 UK - quota numbers - 054xxx Licensed', function() {
    cy.visit('/commodities/0201100021#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.get('.table-line');
    cy.contains('054002').click();
    cy.get('.tariff-info').contains('UK tariff rate quotas');
    cy.get('.close [href]').click();
  });

  it('🚀 UK - quota numbers - 057xxx Non-Licensed', function() {
    cy.visit('/commodities/0201100021#import');
    cy.mobileMenu();
    cy.get('.govuk-tabs__panel');
    cy.contains('Preferential tariff quota');
    cy.get('.table-line');
    cy.contains('057300').click();
    cy.get('.tariff-info')
        .contains('Quota order number 057300');
    cy.get('.close [href]').click();
  });

  it('🚀 UK - Search Commodity by name ', function() {
    cy.visit('/find_commodity');
    cy.mobileMenu();
    cy.contains('Search for a commodity');
    cy.searchForCommodity('gherkins');
    cy.contains('Gherkins').click();
    cy.url().should('include', '/commodities/0707009000');
  });

  it('🚀 UK - Search Commodity by code ', function() {
    cy.visit('/find_commodity');
    cy.contains('Search for a commodity');
    cy.searchForCommodity('3808941000');
    cy.checkCommPage('3808941000');
  });

  it('🚀 UK - Country Selection - imports ', function() {
    cy.visit('/commodities/0208909800#import');
    cy.get('input#trading_partner_country').click();
    cy.get('input#trading_partner_country').clear();
    cy.get('input#trading_partner_country').type('(XI)');
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');

    cy.get('input#trading_partner_country').click();
    cy.get('input#trading_partner_country').clear();
    cy.get('input#trading_partner_country').type('AD');
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('Andorra (AD)');

    cy.get('input#trading_partner_country').click();
    cy.get('input#trading_partner_country').clear();
    cy.get('input#trading_partner_country').type('(GB)');
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');

    cy.get('input#trading_partner_country').click();
    cy.get('input#trading_partner_country').clear();
    cy.get('input#trading_partner_country').type('XU');
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');
  });

  it('🚀 UK - Country Selection - exports ', function() {
    cy.visit('/commodities/0208909800#export');
    cy.get('input#trading_partner_country').click();
    cy.get('input#trading_partner_country').clear();
    cy.get('input#trading_partner_country').type('(XI)');
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');

    cy.get('input#trading_partner_country').click();
    cy.get('input#trading_partner_country').clear();
    cy.get('input#trading_partner_country').type('AD');
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('Andorra (AD)');

    cy.get('input#trading_partner_country').click();
    cy.get('input#trading_partner_country').clear();
    cy.get('input#trading_partner_country').type('(GB)');
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');

    cy.get('input#trading_partner_country').click();
    cy.get('input#trading_partner_country').clear();
    cy.get('input#trading_partner_country').type('XU');
    cy.get('[id=\'trading_partner_country__listbox\']')
        .contains('No results found');
  });

  it('🚀 UK - Change date and check if the data shown is same for both XI and UK', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-details__summary-text').click();
    cy.get('#tariff_date_day').click();
    cy.get('#tariff_date_day').clear();
    cy.get('#tariff_date_day').type(31);
    cy.get('#tariff_date_month').click();
    cy.get('#tariff_date_month').clear();
    cy.get('#tariff_date_month').type(10);
    cy.get('#tariff_date_year').click();
    cy.get('#tariff_date_year').clear();
    cy.get('#tariff_date_year').type(2022);
    cy.get('input[name=\'commit\']').click();

    cy.visit('/browse');
    cy.contains(' Live animals; animal products').click();
    cy.get('tr:nth-of-type(1) > .govuk-table__cell > a').click();
    cy.get('.govuk-link').contains('Change').click();
    cy.datePickerPage({day: 22, month: 12, year: 2022});
    cy.contains('22 December 2022');

    cy.get('main#content  nav  a')
        .contains('Northern Ireland Online Tariff').click();
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Chapter 01 - Live animals');
    cy.contains('22 December 2022');

    cy.get('main#content  nav  a').click();
    cy.contains('UK Integrated Online Tariff');
    cy.contains('Chapter 01 - Live animals');
    cy.contains('22 December 2022');
  });

  it('🚀 UK - United Kingdom should not be shown in EU country list', function() {
    cy.visit('/commodities/2403991000#import');
    cy.get('.govuk-tabs__panel')
        .contains('European Union (1013)').click();
    cy.contains('European Union');

    cy.contains('United Kingdom (GB)').should('not.exist');
  });

  it('🚀 UK - Quotas Search - Order Number', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('input#order_number').click();
    cy.get('input#order_number').clear();
    cy.get('input#order_number').type('057140');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    cy.get('.govuk-table__row').contains('057140');
  });

  it('🚀 UK - Quotas Search - Commodity Code', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('input#goods_nomenclature_item_id').click();
    cy.get('input#goods_nomenclature_item_id').clear();
    cy.get('input#goods_nomenclature_item_id').type('3920000000');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    cy.get('.govuk-table__head')
        .contains('Order number');

    cy.get('.search-results');
    cy.contains('057140').click();
    cy.get('.tariff-info').contains('Quota order number');
    cy.get('.tariff-info').contains('057140');
    cy.get('.tariff-info').contains('Start and end dates');
    cy.get('.tariff-info').contains('1 August 2024 to 31 July 2025');
    cy.get('.close [href]').click();
  });
});
