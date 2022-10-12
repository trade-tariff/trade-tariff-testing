describe('smoke test to cover basic mobile functionality on UK services |', {tags: ['smokeTest']}, function() {
  // Main Page
  it('🚀 UK - Main Page Validation', function() {
    cy.viewport('iphone-x');
    cy.visit('/find_commodity');
    cy.mobileMenu();
    // check header has UK information
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.title().should('matches', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    // check correct text is displayed on banner as per UK - If they are at risk
    cy.contains('If you’re bringing goods into Northern Ireland from outside the UK and the EU');
    // Search the tariff section
    cy.contains('Search for a commodity');
    cy.get('.govuk-header__menu-button').click();
    cy.contains('Browse').click();
    cy.contains('Browse the tariff');
  });
  // Legal base tests
  it('🚀 UK - Legal base column suppressed ', function() {
    cy.viewport('iphone-x');
    cy.visit('/commodities/0101210000#import');
    cy.contains('UK Integrated Online Tariff');
    cy.contains('Legal base').should('not.be.visible');
  });
  // switching link works
  it('🚀 UK - Main Page - Switching link to XI available & works', function() {
    cy.viewport('iphone-x');
    cy.visit('/find_commodity');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');

    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });
  // UK not to be in EU country list
  it('🚀 UK - United Kingdom should not be shown in EU country list', function() {
    cy.viewport('iphone-x');
    cy.visit('/commodities/2403991000#import');
    cy.get('.govuk-tabs__panel')
        .contains('European Union (1013)').click();
    cy.mobileMenu();
    cy.contains('European Union');
    cy.contains('United Kingdom (GB)').should('not.exist');
  });

  // Licensed quotas
  it('🚀 UK - quota numbers - 054xxx Licensed', function() {
    cy.viewport('iphone-x');
    cy.visit('/commodities/0201100021#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Non preferential tariff quota');
    cy.get('.table-line');
    cy.contains('054002').click();
    cy.get('.tariff-info')
        .contains('Information on the availability of this quota can be obtained from the Rural Payments Agency.');
    cy.get('.close [href]').click();
  });
  // Non Licensed quotas
  it('🚀 UK - quota numbers - 057xxx Non-Licensed', function() {
    cy.viewport('iphone-x');
    cy.visit('/commodities/0201100021#import');
    cy.mobileMenu();
    cy.get('.govuk-tabs__panel');
    cy.contains('Preferential tariff quota');
    cy.get('.table-line');
    cy.contains('057300').click();
    cy.get('.tariff-info')
        .contains('Quota 057300');
    cy.get('.close [href]').click();
  });
  // Commodity Search functionality - text search
  it('🚀 UK - Search Commodity by name ', function() {
    cy.viewport('iphone-x');
    cy.visit('/find_commodity');
    cy.mobileMenu();
    // changed on 11/02/2021
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.contains('Search for a commodity');
    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - code search
  it('🚀 UK - Search Commodity by code ', function() {
    cy.viewport('iphone-x');
    cy.visit('/find_commodity');
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.contains('Search for a commodity');
    cy.searchForCommodity('3808941000');
    cy.checkCommPage('3808941000');
  });
  // Country selection - imports
  it('🚀 UK - Country Selection - imports ', function() {
    cy.viewport('iphone-x');
    cy.visit('/commodities/0208909800#import');
    // no XI
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
  // Country selection - exports
  it('🚀 UK - Country Selection - exports ', function() {
    cy.viewport('iphone-x');
    cy.visit('/commodities/0208909800#export');
    // no XI
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
  // Date picker working and persists on UK XI sites
  it('🚀 UK - Change date and check if the data shown is same for both XI and UK', function() {
    cy.viewport('iphone-x');
    cy.visit('/find_commodity');
    // select Change Date and change months and years
    cy.get('.govuk-details__summary-text').click();
    cy.get('#tariff_date_day').click().clear().type(31);
    cy.get('#tariff_date_month').click().clear().type(10);
    cy.get('#tariff_date_year').click().clear().type(2022);
    cy.get('input[name=\'commit\']').click();

    cy.visit('/browse');
    cy.contains(' Live animals; animal products').click();
    cy.get('tr:nth-of-type(1) > .govuk-table__cell > a').click();
    // Change date
    cy.get('.govuk-link').contains('Change').click();
    // cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 22, month: 12, year: 2022});
    cy.contains('22 December 2022');
    // navigate to Northern Ireland service

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
  // UK not in EU country list
  it('🚀 UK - United Kingdom should not be shown in EU country list', function() {
    cy.viewport('iphone-x');
    cy.visit('/commodities/2403991000#import');
    cy.get('.govuk-tabs__panel')
        .contains('European Union (1013)').click();
    cy.contains('European Union');

    cy.contains('United Kingdom (GB)').should('not.exist');
  });
  // Quota Search using order number
  it('🚀 UK - Quotas Search - Order Number', function() {
    cy.viewport('iphone-x');
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('input#order_number')
        .click().clear().type('057140');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    cy.get('.govuk-table__row').contains('057140');
  });
  // Quota Search using Commodity number
  it('🚀 UK - Quotas Search - Commodity Code', function() {
    cy.viewport('iphone-x');
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('input#goods_nomenclature_item_id')
        .click()
        .clear()
        .type('3920000000');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    cy.get('.govuk-table__head')
        .contains('Order number');

    cy.get('.search-results');
    cy.contains('057140').click();
    cy.get('.tariff-info').contains('Quota order number');
    cy.get('.tariff-info').contains('057140');
    cy.get('.tariff-info').contains('Start and end dates');
    cy.get('.tariff-info').contains('1 August 2022 to 31 July 2023');
    cy.get('.close [href]').click();
  });
});
