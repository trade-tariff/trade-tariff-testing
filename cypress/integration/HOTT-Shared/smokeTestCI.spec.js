/* eslint-disable max-len */
describe('🚀  UK 🇬🇧 XI 🇪🇺 💡 | smokeTestCI- UK,XI & DC | Smoke tests ( Front end and API ) to cover basic functionality UK and XI services + Duty Calculator |', function() {
  // ************ UK tests ************
  // Main Page
  it('🚀 UK 🇬🇧 - Main Page Validation', function() {
    cy.visit('/sections');
    cy.mainPageUK();
  });
  // Date Picker validation
  it('🚀 UK 🇬🇧 - Check date picker function is working', function() {
    cy.visit('/find_commodity');

    // select Change Date and OK with current date
    cy.get('.govuk-details__summary').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2022);
    cy.searchForCommodity('3808941000');
    cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
    cy.contains('21 December 2022');
    // select Change Date and CANCEL
    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 22, month: 12, year: 2022});

    cy.contains('22 December 2022');
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
    cy.contains('Search for a commodity');
    // changed on 11/02/2021
    cy.get('.govuk-label').contains('Search the UK Integrated Online Tariff');
    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - comm code search
  it('🚀 UK 🇬🇧 - Search Commodity by code ', function() {
    cy.visit('/sections');
    cy.contains('Look up commodity codes, import duties, taxes and controls'); ;
    cy.contains('Search for a commodity');
    cy.searchForCommodity('3808941000');
    cy.contains(/Commodity .*3808941000/i);
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

  // Date picker working and persists on UK XI sites
  it('🚀 UK 🇬🇧 - Change date and verify if the data shown is same for both XI and UK', function() {
    cy.visit('/find_commodity');
    // select Change Date and change months and years
    cy.get('.govuk-details__summary').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2021);
    cy.searchForCommodity('3808941000');
    cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
    // cy.contains('Set date').click();
    //
    cy.contains('21 December 2021');
    // switch to XI tariff
    cy.contains('Northern Ireland Online Tariff').click();
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('21 December 2021');
    // switch to UK tariff
    cy.contains('UK Integrated Online Tariff').click();
    cy.contains('21 December 2021');
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
      cy.contains('A-Z').click();
      cy.contains('A–Z of Classified Goods');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Tools').click();
      cy.contains('Tariff tools');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Browse').click();
      cy.contains('Browse the tariff');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search').click();
      cy.contains('Look up commodity codes, import duties, taxes and controls');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Help').click();
      cy.contains('Help on using the tariff');
    }
  });
  // API checks
  it('🚀 UK 🇬🇧 - API V2 - Commodity - validate response headers,status,content ', function() {
    cy.request('/api/v2/commodities/2007993943').as('comments');
    cy.get('@comments').then(cy.validJsonAPIresponse);
  });
  it('🚀 UK 🇬🇧 - API V2 - Heading - validate response headers,status,content ', function() {
    cy.request('/api/v2/commodities/5001000000').as('comments');
    cy.get('@comments').then(cy.validJsonAPIresponse);
  });
  // ************ XI tests ************

  // Main Page
  it('🚀 XI 🇪🇺 - Main Page Validation', function() {
    cy.visit('/xi/sections');
    cy.mainPageXI();
  });
  it('🚀 XI 🇪🇺 - Check Calendar is functioning', function() {
    cy.visit('/xi/sections');

    // select Change Date and OK with current date
    cy.get('.govuk-details__summary').click();
    cy.get('#tariff_date_day').click().clear().type(21);
    cy.get('#tariff_date_month').click().clear().type(12);
    cy.get('#tariff_date_year').click().clear().type(2022);
    cy.searchForCommodity('3808941000');
    cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
    cy.contains('21 December 2022');
    // select Change Date and CANCEL
    // select Change Date and change months and years
    cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click();
    cy.datePickerPage({day: 22, month: 12, year: 2022});

    cy.contains('22 December 2022');
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
  it('🚀 XI 🇪🇺- Search Commodity by name ', function() {
    cy.visit('xi/sections');
    cy.contains('Search for a commodity');
    // changed on 11/02/2021
    cy.get('.govuk-label').contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('gherkins');
    cy.contains('Search results for ‘gherkins’');
  });
  // Commodity Search functionality - comm code search
  it('🚀 XI 🇪🇺- Search Commodity by code ', function() {
    cy.visit('xi/sections');
    cy.contains('Look up commodity codes, import duties, taxes and controls'); ;
    cy.contains('Search for a commodity');
    cy.searchForCommodity('3808941000');
    cy.contains(/Commodity .*3808941000/i);
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
      cy.contains('A-Z').click();
      cy.contains('A–Z of Classified Goods');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Tools').click();
      cy.contains('Tariff tools');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Browse').click();
      cy.contains('Browse the tariff');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Search').click();
      cy.contains('Look up commodity codes, import duties, taxes and controls');
      cy.get('.govuk-header__menu-button').click();
      cy.contains('Help').click();
      cy.contains('Help on using the tariff');
    }
  });
  // API checks
  it('🚀 XI 🇪🇺 - API V2 - Commodity - validate response headers,status,content ', function() {
    cy.request('xi/api/v2/commodities/2007993943').as('comments');
    cy.get('@comments').then(cy.validJsonAPIresponse);
  });
  it('🚀 XI 🇪🇺 - API V2 - Heading - validate response headers,status,content ', function() {
    cy.request('xi/api/v2/commodities/5001000000').as('comments');
    cy.get('@comments').then(cy.validJsonAPIresponse);
  });
  // ************ Duty Calculator tests ************

  it('🧮 UK 🇬🇧 - Duty Calculator e2e - ( NI to GB ) | 101 |', function() {
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
  it(`🧮 UK 🇬🇧 - Duty Calculator e2e - ( RoW to GB )204 | 🇦🇫 Afghanistan to 🇬🇧 GB | Excise code | Wine |`, function() {
    // select future date
    cy.visit(`/duty-calculator/uk/2204210600/import-date`);

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
  it('🧮 UK 🇬🇧 - RoW - Duty Calculator e2e - 🇦🇪 (United Arab Emirates) - XI | Row-NI304d-delta || Turnover > £500,000 | 🔼 Delta Route - not be subject to processing - route 1️⃣ |', function() {
    cy.visit('/duty-calculator/uk/1701141000/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'United Arab Emirates'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
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
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.');
  });
  it('🧮 XI 🇪🇺 - Duty Calculator e2e - RoW 🇨🇦 (Canada) - XI | UK - yes, EU - no | Row-NI304e-delta |', function() {
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
    // turnover <£500,000
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({dtn: '100'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.');
    cy.contains('Option 2: Tariff preference - Canada');
    cy.contains('Tariff preference (UK)');
    cy.contains('UK preferential duties may be applied, as the difference between the UK preferential duty and the EU preferential duty is lower than 3% of the customs value of your trade.');
  });
  it(`🧮 XI 🇪🇺 - Duty Calculator e2e - e2e GB to NI - Meursing Code GB-NI406`, function() {
    // select future date
    cy.visit(`/duty-calculator/xi/1806909019/import-date`);
    cy.contains('Northern Ireland Online Tariff');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('gb');
    // ✅ Trader Scheme Registered - Yes
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUse('yes');
    // ⬆️ turnover > £500,000
    cy.turnOver('more');
    // 🚫 Non processing - No - The goods will be processed for commercial purposes other than // 🚫 Non processing - No
    cy.plannedXI('unacceptablecommercial');
    //  🚫 Certified as UK Origin
    cy.certificate('no');
    // interstitial page
    cy.dutiesApply1();
    cy.meursingCode({value: '000'});
    // customs value
    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
    // quantity
    cy.quantity({dtn: '23.98'});
    cy.vat('20');
    // Check your answers page
    cy.contains('Check your answers');
    cy.contains('Commodity code');
    cy.contains('Date of import');
    cy.contains('Destination');
    cy.contains('Coming from');
    cy.contains('Trader scheme');
    cy.contains('Final use');
    cy.contains('Certificate of origin');
    cy.contains('Customs value');
    cy.contains('Import quantity');
    cy.confirmPage();
    // Final Page
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');

    cy.contains('Option 3: Claiming a waiver – Exchange rate');
  });
  it(`🧮 XI 🇪🇺 - Duty Calculator e2e - ( EU to NI ) EU-NI501`, function() {
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
