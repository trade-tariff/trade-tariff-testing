
describe.skip('🚀 | smokeTestTradeTariff.spec.js |UK & XI | Front end - Smoke tests for UK & XI services |', function() {
  // Main Page
  it('🚀 UK 🇬🇧 - Main Page Validation', function() {
    cy.visit('/sections');
    cy.mainPageUK();
  });
  // switching link works
  it('🚀 UK 🇬🇧 - Main Page - Switching link to XI available & works', function() {
    cy.visit('/sections');
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');

    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
  });
  // UK not to be in EU country list
  it('🚀 UK 🇬🇧 - United Kingdom should not be shown in EU country list', function() {
    cy.visit('/commodities/2403991000#import');
    cy.get('.govuk-tabs__panel')
        .contains('European Union (1013)').click();
    cy.get('.govuk-list')
        .contains('European Union (EU)');

    cy.get('#measure-20125860-children-geographical-areas')
        .contains('United Kingdom (GB)').should('not.exist');
  });

  // Licensed quotas
  it('🚀 UK 🇬🇧 - quota numbers - 054xxx Licensed', function() {
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
  it('🚀 UK 🇬🇧 - quota numbers - 057xxx Non-Licensed', function() {
    cy.visit('/commodities/0201100021#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('Preferential tariff quota');
    cy.get('.table-line');
    cy.contains('057300').click();
    cy.get('.tariff-info')
        .contains('Quota 057300');
    cy.get('.close [href]').click();
  });
  // Commodity Search functionality - text search
  it('🚀 UK 🇬🇧 - Search Commodity by name ', function() {
    cy.visit('/sections');
    // changed on 11/02/2021
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    // changed on 11/02/2021
    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });

  // Commodity Search functionality - comm code search
  it('🚀 UK 🇬🇧 - Search Commodity by code ', function() {
    cy.visit('/sections');
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.searchForCommodity('3808941000');
    cy.checkCommPage('3808941000');
  });
  // Country selection - imports
  it('🚀 UK 🇬🇧 - Country Selection - imports ', function() {
    cy.visit('/commodities/0208909800#import');
    // no XI
    cy.get('input#search_country').click().clear().wait(200).type('(XI)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');

    // Andorra should be present
    cy.get('input#search_country').click().clear().wait(200).type('(AD)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Andorra (AD)');

    // no GB - United Kingdom (excluding Northern Ireland) (GB)
    cy.get('input#search_country').click().clear().wait(200).type('(GB)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');

    // no XU
    cy.get('input#search_country').click().clear().wait(200).type('(XU)');
    cy.get('[id=\'search_country__listbox\']')
    //  .contains('United Kingdom (excluding Northern Ireland) (GB)').should('not.exist')
        .contains('No results found');
  });
  // Country selection - imports
  it('🚀 UK 🇬🇧 - Country Selection - exports ', function() {
    cy.visit('/commodities/0208909800#export');
    // no XI
    cy.get('input#search_country').click().clear().wait(500).type('(XI)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');

    // Andorra should be present
    cy.get('input#search_country').click().clear().wait(500).type('(AD)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Andorra (AD)');

    // no GB - United Kingdom (excluding Northern Ireland) (GB)
    cy.get('input#search_country').click().clear().wait(500).type('(GB)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');

    // no XU
    cy.get('input#search_country').click().clear().wait(500).type('XU');
    cy.get('[id=\'search_country__listbox\']')
    //  .contains('United Kingdom (excluding Northern Ireland) (GB)').should('not.exist')
        .contains('No results found');
  });
  // Date picker working and persists on UK XI sites
  it('🚀 UK 🇬🇧 - (past date) Change date and verify if the data shown is same for both XI and UK', function() {
    cy.visit('/sections');

    // select Change Date and change months and years
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click().clear().type(28);
    cy.get('#tariff_date_month').click().clear().type(2);
    cy.get('#tariff_date_year').click().clear().type(2020);
    cy.contains('Set date').click();
    

    cy.contains(' Live animals; animal products');
    cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
        .contains('This tariff is for 28 February 2020');

    cy.get('main#content  nav  a')
        .contains('Northern Ireland Online Tariff').click();

    cy.contains('Online Tariff');
    cy.get('main#content  nav  a');
    cy.contains('Online Tariff').click();

    cy.contains(' Live animals; animal products');
    cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
        .contains('This tariff is for 28 February 2020');
  });
  // UK not in EU country list
  it('🚀 UK 🇬🇧 - United Kingdom should not be shown in EU country list', function() {
    cy.visit('/commodities/2403991000#import');
    cy.get('.govuk-tabs__panel')
        .contains('European Union (1013)').click();
    cy.get('.govuk-list')
        .contains('European Union (EU)');

    cy.get('#measure-20125860-children-geographical-areas')
        .contains('United Kingdom (GB)').should('not.exist');
  });
  // Quota Search using order number
  it('🚀 UK 🇬🇧 - Quotas Search - Order Number', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('input#order_number')
        .click().clear().type('057140');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    cy.get('.govuk-table__row').contains('057140');
  });
  // Quota Search using Commodity number
  it('🚀 UK 🇬🇧 - Quotas Search - Commodity Code', function() {
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

    cy.get('.quota-results.govuk-table');
    cy.contains('057015').click();
    cy.get('.tariff-info').contains('Quota order number');
    cy.get('.tariff-info').contains('057015');
    cy.get('.tariff-info').contains('Start and end dates');
    cy.get('.tariff-info').contains('1 January 2021 to 01 January 2022');
    cy.get('.close [href]').click();
  });
  it(`🚀 UK 🇬🇧 - Mobile - nav-bar validation`, function() {
    const sizes = ['iphone-6', 'samsung-note9'];

    for (let i = 0; i < sizes.length; i++) {
      cy.viewport(`${sizes[i]}`);

      cy.visit('/sections');
      cy.get('.govuk-header').should('be.visible', 'UK Integrated Online Tariff');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('A-Z');
      cy.contains('Tools');
      cy.contains('Browse').click();
      cy.contains('Browse the tariff');
    }
  });
  // XI tests
  // Main Page
  it('🚀 XI 🇪🇺 - Main Page Validation', function() {
    cy.visit('/xi/sections');
    cy.mainPageXI();
  });
  // switching link works
  it('🚀 XI 🇪🇺 - Main Page - Switching link to UK available & works', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');

    // click on the UK link and it should navigate to UK version
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header ')
        .contains('UK Integrated Online Tariff');
    // click on the XI link and it should navigate to XI version
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
  });
  // UK not to be in EU country list
  it('🚀 XI 🇪🇺 - United Kingdom should NOT be shown in EU country list', function() {
    cy.visit('/xi/commodities/2403991000#import');
    cy.get('.govuk-tabs__panel');
    cy.contains('European Economic Area (2012)')
        .click();
    cy.get('.govuk-list')
        .contains('European Union (EU)');
    cy.get('.govuk-list').should('not.have.value', 'United Kingdom(GB)');
  });
  // Commodity Search functionality - text search
  it('🚀 XI 🇪🇺 - Search Commodity by name ', function() {
    cy.visit('/xi/sections');
    // changed on 11/02/2021
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    // changed on 11/02/2021
    cy.get('.govuk-header__navigation ').contains('Search or browse the Tariff');
    // changed on 11/02/2021
    cy.get('.govuk-label').contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - comm code search
  it('🚀 XI 🇪🇺 - Search Commodity by code ', function() {
    cy.visit('/xi/sections');
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.get('.govuk-label')
        .contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('3808941000');
    cy.checkCommPage('3808941000');
  });

  it('🚀 XI 🇪🇺 - Country Selection -import ', function() {
    cy.visit('/xi/commodities/0208909800#import');
    // XI Present
    cy.get('input#search_country').click().clear().wait(500).type('(XI)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Northern Ireland (XI)');
    // Andora should be present
    cy.get('input#search_country').click().clear().wait(500).type('(AD)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Andorra (AD)');
    //  GB Present
    cy.get('input#search_country').click().clear().wait(500).type('(GB)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('United Kingdom (excluding Northern Ireland) (GB)');
    // no XU
    cy.get('input#search_country').click().clear().wait(500).type('(XU)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');
  });
  it('🚀 XI 🇪🇺 - Country Selection -export ', function() {
    cy.visit('/xi/commodities/0208909800#export');
    // XI Present
    cy.get('input#search_country').click().clear().wait(500)
        .type('(XI)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('Northern Ireland (XI)');
    // Andora should be present
    cy.get('input#search_country').click().clear().wait(500).type('(AD)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Andorra (AD)');
    //  GB Present
    cy.get('input#search_country').click().clear().wait(500).type('(GB)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('United Kingdom (excluding Northern Ireland) (GB)');
    // no XU
    cy.get('input#search_country').click().clear().wait(500).type('(XU)');
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');
  });
  // Date picker working and persists on UK XI sites
  it('🚀 XI 🇪🇺 - ( future date) Change Date and check if the data shown is same for both XI and UK', function() {
    cy.visit('/xi/sections');
    // select Change Date and change months and years
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click().clear().type(31);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2021);
    cy.contains('Set date').click();
    

    cy.contains(' Live animals; animal products');
    cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
        .contains('This tariff is for 01 January 2022');
    cy.get('main#content  nav  a')
        .contains('Online Tariff').click();
    cy.contains('UK Integrated Online Tariff');
    cy.get('main#content  nav  a');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.contains(' Live animals; animal products');
    cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
        .contains('This tariff is for 01 January 2022');
  });
  it(`🚀 XI 🇪🇺 - Mobile - nav-bar validation`, function() {
    const sizes = ['iphone-6', 'samsung-note9'];
    for (let i = 0; i < sizes.length; i++) {
      cy.viewport(`${sizes[i]}`);
      cy.visit('/xi/sections');
      cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('A-Z');
      cy.contains('Tools');
      cy.contains('Browse').click();
      cy.contains('Browse the tariff');
    }
  });
});
