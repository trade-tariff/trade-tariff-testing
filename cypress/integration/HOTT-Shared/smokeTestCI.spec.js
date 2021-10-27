/* eslint-disable max-len */
describe('🚀  UK 🇬🇧 XI 🇪🇺 💡 | smokeTestCI- UK,XI & DC | Smoke tests to cover basic functionality on UK & XI services |', function() {
  // Main Page
  it('🚀 UK 🇬🇧 - Main Page Validation', function() {
    cy.visit('/sections');
    cy.MainPageUK();
  });
  // Date Picker validation
  it('🚀 UK 🇬🇧 - Check date picker function is working', function() {
    cy.visit('/sections');
    cy.wait(300);
    // select Change Date and OK with current date
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click();
    cy.get('#tariff_date_month').click();
    cy.get('#tariff_date_year').click();
    cy.contains('Set date').click();
    cy.wait(300);
    // select Change Date and CANCEL
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.contains('Set date').click();
    cy.wait(300);
    // select Change Date and change months and years
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2021);
    cy.contains('Set date').click();
    cy.wait(300);
    cy.contains('This tariff is for 21 December 2021');
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
    cy.contains('European Union');
    cy.contains('United Kingdom (GB)').should('not.exist');
  });

  // Licensed quotas
  it('🚀 UK 🇬🇧 - Quota numbers - 054xxx Licensed', function() {
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
  it('🚀 UK 🇬🇧 - Quota numbers - 057xxx Non-Licensed', function() {
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
    cy.contains('Look up commodity codes, duty and VAT rates');
    // changed on 11/02/2021
    cy.get('.govuk-header__navigation ').contains('Search or browse the Tariff');
    // changed on 11/02/2021
    cy.get('.govuk-label').contains('Search the UK Integrated Online Tariff');

    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - comm code search
  it('🚀 UK 🇬🇧 - Search Commodity by code ', function() {
    cy.visit('/sections');
    cy.contains('Look up commodity codes, duty and VAT rates');
    cy.get('.govuk-label')
        .contains('Search the UK Integrated Online Tariff');
    cy.searchForCommodity('3808941000');
    cy.contains('Commodity information for 3808941000');
  });
  // Country selection - imports
  it('🚀 UK 🇬🇧 - Country Selection ', function() {
    cy.visit('/commodities/0208909800');

    // XI
    cy.searchForCountry('(XI)').contains('No results found');

    // Andorra should be present
    cy.searchForCountry('(AD)').contains('Andorra (AD)');

    // no GB = United Kingdom (excluding Northern Ireland) (GB)
    cy.searchForCountry('(GB)').contains('No results found');

    // no XU
    cy.searchForCountry('(XU)').contains('No results found');
  });

  // Date picker working and persists on UK XI sites
  it('🚀 UK 🇬🇧 - Change date and verify if the data shown is same for both XI and UK', function() {
    cy.visit('/sections');
    // select Change Date and change months and years
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2021);
    cy.contains('Set date').click();
    cy.wait(300);
    cy.contains('This tariff is for 21 December 2021');
    cy.contains(' Live animals; animal products');

    cy.contains('Northern Ireland Online Tariff').click();
    cy.contains('Northern Ireland Online Tariff');

    cy.contains('UK Integrated Online Tariff').click();

    cy.contains(' Live animals; animal products');
    cy.get('.date-picker.datepicker.govuk-\\!-font-size-16.govuk-fieldset.govuk-form-group.inline.js-date-picker > .js-show.sections-context.text')
        .contains('This tariff is for 21 December 2021');
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

  //  cy.get('.quota-results.govuk-table');
    cy.contains('057015').click();
    cy.get('.tariff-info')
        .should('contain', 'Quota', '057015', 'Start date', '01/01/2021');
    cy.get('.close [href]').click();
  });
  it(`🚀 UK 🇬🇧 📱 - Mobile - nav-bar validation`, function() {
    const sizes = ['iphone-6', 'samsung-note9'];

    for (let i = 0; i < sizes.length; i++) {
      cy.viewport(`${sizes[i]}`);

      cy.visit('/sections');
      cy.get('.govuk-header').should('be.visible', 'UK Integrated Online Tariff');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('A-Z');
      cy.contains('Tools');
      cy.contains('Search or browse the Tariff').click();
      cy.contains('All sections');
    }
  });
  // XI tests

  // Main Page
  it('🚀 XI 🇪🇺 - Main Page Validation', function() {
    cy.visit('/xi/sections');
    cy.MainPageXI();
  });
  it('🚀 XI 🇪🇺 - Check Calendar is functioning', function() {
    cy.visit('/xi/sections');
    cy.wait(300);
    // select Change Date and OK with current date
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click();
    cy.get('#tariff_date_month').click();
    cy.get('#tariff_date_year').click();
    cy.contains('Set date').click();
    cy.wait(300);
    // select Change Date and CANCEL
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.contains('Set date').click();
    cy.wait(300);
    // select Change Date and change months and years
    cy.get(' .js-show.text > a[role=\'button\']').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2021);
    cy.contains('Set date').click();
    cy.wait(300);
    cy.contains('This tariff is for 21 December 2021');
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
    cy.contains('European Union');
    cy.contains('United Kingdom (GB)').should('not.exist');
  });
  // Commodity Search functionality - text search
  it('🚀 XI 🇪🇺 - Search Commodity by name ', function() {
    cy.visit('/xi/sections');
    // changed on 11/02/2021
    cy.contains('Look up commodity codes, duty and VAT rates');
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
    cy.contains('Look up commodity codes, duty and VAT rates');
    cy.get('.govuk-label')
        .contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('3808941000');
    cy.contains('Commodity information for 3808941000');
  });

  it('🚀 XI 🇪🇺 - Country Selection', function() {
    cy.visit('/xi/commodities/0208909800');

    // XI removed
    cy.searchForCountry('(XI)').contains('No results found');

    // Andora should be present
    cy.searchForCountry('(AD)').contains('Andorra (AD)');
    //  GB Present
    cy.searchForCountry('(GB)').contains('United Kingdom (excluding Northern Ireland) (GB)');
    // No XU
    cy.searchForCountry('(XU)').contains('No results found');
  });
  it(`🚀 XI 🇪🇺 📱 - Mobile - nav-bar validation`, function() {
    const sizes = ['iphone-6', 'samsung-note9'];
    for (let i = 0; i < sizes.length; i++) {
      cy.viewport(`${sizes[i]}`);
      cy.visit('/xi/sections');
      cy.get('.govuk-header').should('be.visible', 'Northern Ireland Online Tariff');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('A-Z');
      cy.contains('Tools');
      cy.contains('Search or browse the Tariff').click();
      cy.contains('All sections');
    }
  });
  // Duty Calculator tests
  it('🧮  UK 🇬🇧 - Duty Calculator e2e - ( NI to GB ) | 101 |', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');
    cy.contains('UK Integrated Online Tariff');
    cy.validDate();
    // select England ,Scotland or Wales (GB)
    cy.selectDestination('gb');
    // select country from list
    cy.originList({value: 'Northern Ireland'});
    cy.contains('There is no import duty to pay');
    cy.contains('There are no import duties applicable to the movement of goods from Northern Ireland to England, Scotland and Wales.');
    // Start again button
    cy.get('.govuk-button').click();
    cy.contains('When will the goods be imported?');
  });
  it(`🧮  UK 🇬🇧 - Duty Calculator e2e - ( RoW to GB )204 | 🇦🇫 Afghanistan to 🇬🇧 GB | Excise code | Wine |`, function() {
    // select future date
    cy.visit(`/duty-calculator/uk/2204210600/import-date`);
    cy.wait(500);
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Afghanistan'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({hlt: '1', ltr: '1', lpa: '1'});
    // Excise code
    cy.exciseCode('419');

    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - GSP – Least Developed Countries');
  });
  it.skip('🧮 UK 🇬🇧 - RoW 🇦🇪 (United Arab Emirates) - XI | Row-NI304d-delta |', function() {
    cy.visit('/duty-calculator/uk/1701141000/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.otherOriginList({value: 'United Arab Emirates'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // Planned processing - acceptable1
    cy.plannedXI('acceptable1');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({dtnr: '100', tne: '1', dap: '1'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Option 1: Third-country duty');
  });
  it.skip('🧮 XI 🇪🇺 | RoW 🇨🇦 (Canada) - XI | UK - yes, EU - no | Row-NI304e-delta |', function() {
    cy.visit('/duty-calculator/xi/0102291010/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.otherOriginList({value: 'Canada'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // Planned processing - acceptable2
    cy.plannedXI('acceptable2');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({dtn: '100'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - Canada');
  });
  //
  it.skip('🧮 XI 🇪🇺 | RoW 🇹🇷(Turkey) - XI | UK - yes, EU - yes|Qty 1 => UK ,Qty 100 => EU | Row-NI304e-delta |', function() {
    cy.visit('/duty-calculator/xi/0102291010/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.otherOriginList({value: 'Turkey'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // Planned processing - acceptable2
    cy.plannedXI('acceptable2');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({dtn: '1'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - Turkey');

    // Change quantity to 100 for EU tariffs , Delta Preferential > 3% Import Value
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(9) > .govuk-summary-list__actions > .govuk-link').click();
    // Import Quantity
    cy.quantity({dtn: '100'});
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Option 1: Third-country duty');

    cy.contains('Option 2: Tariff preference - Turkey');
  });

  it.skip(`🧮 XI 🇪🇺 - Duty Calculator e2e - ( GB to NI ) 406`, function() {
    cy.visit('/duty-calculator/xi/1701141000/import-date');
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('gb');
    // ✅ Trader Scheme Registered - Yes
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUse('yes');
    // 🚫 Non processing - No - The goods will be processed for commercial purposes other than those listed above
    cy.get('#steps-planned-processing-planned-processing-commercial-purposes-field').check();
    cy.contains('Continue').click();
    //  🚫 Certified as UK Origin
    cy.certificate('no');
    // Monetary value page
    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
    // Measure amount page
    cy.quantity({dtnr: '23.98'});
    // doc code
    cy.docCode({xi: 'n990'});
    cy.contains('Continue').click();
    // Check your answers page
    cy.contains('Check your answers');

    cy.get('.govuk-button').click();
    // Final Page
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
    cy.contains('Option 3: Claiming a waiver – Exchange rate');
  });
  it(`🧮 XI 🇪🇺 - Duty Calculator e2e - ( EU to NI )`, function() {
    cy.visit('/duty-calculator/xi/1212210000/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('eu');
    cy.contains('There is no import duty to pay');
    cy.contains('There is no import duty to pay when importing goods into Northern Ireland from a European Union member state.');
    // Back Button on page
    cy.get('.govuk-back-link').click();
    cy.contains('Which country are the goods coming from?');
    cy.contains('Continue').click();
    // Start again button
    cy.get('.govuk-button').click();
    cy.contains('When will the goods be imported?');
  });
});
