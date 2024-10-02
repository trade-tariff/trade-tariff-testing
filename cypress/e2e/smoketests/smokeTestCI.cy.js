describe('Smoke tests to cover basic functionality', {tags: ['smokeTest']}, function() {
  context('when on the UK service', function() {
    it('Main Page Validation', function() {
      cy.visit('/find_commodity');
      cy.mainPageUK();
    });
    it('Verify date pickers are working', function() {
      cy.visit('/find_commodity');
      cy.get('input[name="day"]').click();
      cy.get('input[name="day"]').clear();
      cy.get('input[name="day"]').type(21);
      cy.get('input[name="month"]').click();
      cy.get('input[name="month"]').clear();
      cy.get('input[name="month"]').type(12);
      cy.get('input[name="year"]').click();
      cy.get('input[name="year"]').clear();
      cy.get('input[name="year"]').type(2022);
      cy.searchForCommodity('3808941000');
      cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
      cy.contains('21 December 2022');
      cy.get('a[href=\'/import_export_dates?goods_nomenclature_code=3808941000').click();
      cy.datePickerPage({day: 22, month: 12, year: 2022});
      cy.contains('22 December 2022');
    });
    it('Main Page - Switching link to XI available & works', function() {
      cy.visit('/find_commodity');
      cy.get('.govuk-header')
          .contains('UK Integrated Online Tariff');
      cy.get('.govuk-main-wrapper').contains('Northern Ireland Online Tariff').click();
      cy.get('.govuk-header').contains('Northern Ireland Online Tariff');
      cy.get('.govuk-main-wrapper');
      cy.contains('UK Integrated Online Tariff').click();
      cy.get('.govuk-header').contains('UK Integrated Online Tariff');
      cy.get('.govuk-main-wrapper').contains('Northern Ireland Online Tariff');
    });
    it('United Kingdom should not be shown in EU country list', function() {
      cy.visit('/commodities/2403991000#import');
      cy.get('.govuk-tabs__panel').contains('European Union (1013)').click();
      cy.contains('European Union');
      cy.contains('United Kingdom (GB)').should('not.exist');
    });
    it('Quota numbers - 054xxx Licensed', function() {
      cy.visit('/commodities/0201100021#import');
      cy.get('.govuk-tabs__panel');
      cy.contains('Non preferential tariff quota');
      cy.get('.table-line');
      cy.contains('054002').click();
      cy.get('.tariff-info').contains('UK tariff rate quotas');
      cy.get('.close [href]').click();
    });
    it('Quota numbers - 057xxx Non-Licensed', function() {
      cy.visit('/commodities/0201100021#import');
      cy.get('.govuk-tabs__panel');
      cy.contains('Preferential tariff quota');
      cy.get('.table-line');
      cy.contains('057300').click();
      cy.get('.tariff-info').contains('Quota order number 057300');
      cy.get('.close [href]').click();
    });
    it('Search Commodity by name', function() {
      cy.visit('/find_commodity');
      cy.contains('Search for a commodity');
      cy.get('.govuk-label').contains('Search the UK Integrated Online Tariff');
      cy.searchForCommodity('gherkins');
      cy.contains('Gherkins').click();
      cy.url().should('include', '/commodities/0707009000');
    });
    it('Search Commodity by code', function() {
      cy.visit('/find_commodity');
      cy.contains('Look up commodity codes, import duties, taxes and controls');
      cy.contains('Search for a commodity');
      cy.searchForCommodity('3808941000');
      cy.contains(/Commodity .*3808941000/i);
    });
    it('Country Selection', function() {
      cy.visit('/commodities/0208909800');
      cy.searchForCountry('(XI)').contains('No results found');
      cy.searchForCountry('(AD)').contains('Andorra (AD)');
      cy.searchForCountry('(GB)').contains('No results found');
      cy.searchForCountry('(XU)').contains('No results found');
    });
    it('Change date and verify if the data shown is same for both XI and UK', function() {
      cy.visit('/find_commodity');
      cy.get('.govuk-details__summary').click();
      cy.get('input[name="day"]').click();
      cy.get('input[name="day"]').clear();
      cy.get('input[name="day"]').type(21);
      cy.get('input[name="month"]').click();
      cy.get('input[name="month"]').clear();
      cy.get('input[name="month"]').type(12);
      cy.get('input[name="year"]').click();
      cy.get('input[name="year"]').clear();
      cy.get('input[name="year"]').type(2021);
      cy.searchForCommodity('3808941000');
      cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
      cy.contains('21 December 2021');
      cy.contains('Northern Ireland Online Tariff').click();
      cy.contains('Northern Ireland Online Tariff');
      cy.contains('21 December 2021');
      cy.contains('UK Integrated Online Tariff').click();
      cy.contains('21 December 2021');
    });
    it('Quotas Search - Order Number', function() {
      cy.visit('/quota_search');
      cy.contains('Search for quotas');
      cy.get('input#order_number').click();
      cy.get('input#order_number').clear();
      cy.get('input#order_number').type('057140');
      cy.get('input[name="new_search"]').click();
      cy.contains('Quota search results');
      cy.get('.govuk-table__row').contains('057140');
    });
    it('Quotas Search - Commodity Code', function() {
      cy.visit('/quota_search');
      cy.contains('Search for quotas');
      cy.get('input#goods_nomenclature_item_id').click();
      cy.get('input#goods_nomenclature_item_id').clear();
      cy.get('input#goods_nomenclature_item_id').type('3920000000');
      cy.get('input[name="new_search"]').click();
      cy.contains('Quota search results');
      cy.get('.govuk-table__head').contains('Order number');
      cy.contains('057501').click();
      cy.get('.tariff-info').should('contain', 'Quota', '057015', 'Start date');
      cy.get('.close [href]').click();
    });
    it('Mobile - nav-bar validation iphone-6', function() {
      cy.viewport('iphone-6');
      cy.visit('/find_commodity');
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
    });
    it('Mobile - nav-bar validation samsung-note9', function() {
      cy.viewport('samsung-note9');
      cy.visit('/find_commodity');
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
    });
    it('API V2 - Commodity - validate response headers,status,content', function() {
      cy.request('/api/v2/commodities/2007993943').as('comments');
      cy.get('@comments').then(cy.validJsonAPIresponse);
    });
    it('API V2 - Heading - validate response headers,status,content', function() {
      cy.request('/api/v2/commodities/5001000000').as('comments');
      cy.get('@comments').then(cy.validJsonAPIresponse);
    });
    it('API V2 Health Check', function() {
      cy.request('/api/v2/healthcheck').then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.have.property('sidekiq').to.eq(true);
      });
    });
    it('Duty Calculator e2e - ( NI to GB ) | 101 |', function() {
      cy.visit('/duty-calculator/uk/0702000007/import-date');
      cy.contains('UK Integrated Online Tariff');
      cy.validDate();
      cy.selectDestination('gb');
      cy.originList({value: 'Northern Ireland'});
      cy.contains('There is no import duty to pay');
      cy.contains('There are no import duties applicable to the movement of goods from Northern Ireland to England, Scotland and Wales.');
      cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
      cy.contains('When will the goods be imported?');
    });
    it('Duty Calculator e2e - ( RoW to GB )204 | 🇦🇫 Afghanistan to 🇬🇧 GB | Excise code | Wine |', function() {
      cy.visit('/duty-calculator/uk/2204210600/import-date');
      cy.validDate();
      cy.selectDestination('gb');
      cy.originList({value: 'Afghanistan'});
      cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
      cy.quantity({ltr: '1', asv: '1', spr: '5'});
      cy.exciseCode('301');
      cy.confirmPage();
      cy.dutyPage();
      cy.contains('Third-country duty');
      cy.contains('Tariff preference - Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences');
    });
    it('RoW - Duty Calculator e2e - United Arab Emirates - XI', function() {
      cy.visit('/duty-calculator/uk/1701141000/import-date');
      cy.validDate();
      cy.selectDestination('xi');
      cy.otherOriginList({value: 'United Arab Emirates'});
      cy.traderScheme('yes');
      cy.finalUseNI('yes');
      cy.turnOver('more');
      cy.planned('notprocessing');
      cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
      cy.quantity({kgm: '10000', dap: '1'});
      cy.docCode({uk: 'n990'});
      cy.contains('Continue').click();
      cy.docCode({uk: 'n990'});
      cy.contains('Continue').click();
      cy.confirmPage();
      cy.dutyPage();
      cy.contains('Third-country duty');
    });
  });
  context('when on the XI service', function() {
    it('Main Page Validation', function() {
      cy.visit('/xi/find_commodity');
      cy.mainPageXI();
    });
    it('verify date pickers are working', function() {
      cy.visit('/xi/find_commodity');
      cy.get('.govuk-details__summary').click();
      cy.get('input[name="day"]').click();
      cy.get('input[name="day"]').clear();
      cy.get('input[name="day"]').type(21);
      cy.get('input[name="month"]').click();
      cy.get('input[name="month"]').clear();
      cy.get('input[name="month"]').type(12);
      cy.get('input[name="year"]').click();
      cy.get('input[name="year"]').clear();
      cy.get('input[name="year"]').type(2022);
      cy.searchForCommodity('3808941000');
      cy.get('.govuk-heading-l.commodity-header').contains(/Commodity .*3808941000/i);
      cy.contains('21 December 2022');
      cy.get('a[href=\'/xi/import_export_dates?goods_nomenclature_code=3808941000').click();
      cy.datePickerPage({day: 22, month: 12, year: 2022});
      cy.contains('22 December 2022');
    });
    it('Main Page - Switching link to UK available & works', function() {
      cy.visit('/xi/find_commodity');
      cy.get('.govuk-header').contains('Northern Ireland Online Tariff');
      cy.get('.govuk-main-wrapper').contains('UK Integrated Online Tariff').click();
      cy.get('.govuk-header').contains('UK Integrated Online Tariff');
      cy.get('.govuk-main-wrapper');
      cy.contains('Northern Ireland Online Tariff').click();
      cy.get('.govuk-header').contains('Northern Ireland Online Tariff');
      cy.get('.govuk-main-wrapper').contains('UK Integrated Online Tariff');
    });
    it('United Kingdom should NOT be shown in EU country list', function() {
      cy.visit('/xi/commodities/2403991000#import');
      cy.get('.govuk-tabs__panel');
      cy.contains('European Economic Area (2012)').click();
      cy.contains('European Union');
      cy.contains('United Kingdom (GB)').should('not.exist');
    });
    it('Search Commodity by name', function() {
      cy.visit('/xi/find_commodity');
      cy.contains('Search for a commodity');
      cy.get('.govuk-label').contains('Search the Northern Ireland Online Tariff');
      cy.searchForCommodity('gherkins');
      cy.contains('Gherkins').click();
      cy.url().should('include', '/commodities/0707009000');
    });
    it('Search Commodity by code', function() {
      cy.visit('/xi/find_commodity');
      cy.contains('Look up commodity codes, import duties, taxes and controls');
      cy.contains('Search for a commodity');
      cy.searchForCommodity('3808941000');
      cy.contains(/Commodity .*3808941000/i);
    });
    it('Country Selection', function() {
      cy.visit('/xi/commodities/0208909800');
      cy.searchForCountry('(XI)').contains('No results found');
      cy.searchForCountry('(AD)').contains('Andorra (AD)');
      cy.searchForCountry('(GB)').contains('United Kingdom (excluding Northern Ireland) (GB)');
      cy.searchForCountry('(XU)').contains('No results found');
    });
    it('Mobile - nav-bar validation iphone-6', function() {
      cy.viewport('iphone-6');
      cy.visit('/xi/find_commodity');
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
    });
    it('Mobile - nav-bar validation - samsung-note9', function() {
      cy.viewport('samsung-note9');
      cy.visit('/xi/find_commodity');
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
    });
    it('API V2 - Commodity - validate response headers,status,content', function() {
      cy.request('xi/api/v2/commodities/2007993943').as('comments');
      cy.get('@comments').then(cy.validJsonAPIresponse);
    });
    it('API V2 - Heading - validate response headers,status,content', function() {
      cy.request('xi/api/v2/commodities/5001000000').as('comments');
      cy.get('@comments').then(cy.validJsonAPIresponse);
    });
    it('API V2 Health Check', function() {
      cy.request('xi/api/v2/healthcheck').then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.have.property('sidekiq').to.eq(true);
      });
    });
    it('Duty Calculator e2e - Canada - XI | UK - yes, EU - no | Row-NI304e-delta |', function() {
      cy.visit('/duty-calculator/xi/0102291010/import-date');
      cy.validDate();
      cy.selectDestination('xi');
      cy.selectOrigin('other');
      cy.otherOriginList({value: 'Canada'});
      cy.traderScheme('yes');
      cy.finalUseNI('yes');
      cy.turnOver('more');
      cy.planned('notprocessing');
      cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
      cy.quantity({kgm: '10000'});
      cy.confirmPage();
      cy.dutyPage();
      cy.contains('Third-country duty');
      cy.contains('Third-country duty (EU)');
      cy.contains('EU import duties apply');
      cy.contains('Tariff preference - Canada');
      cy.contains('Tariff preference (UK)');
      cy.contains('UK preferential duties may be applied');
    });
    it('Duty Calculator e2e - e2e GB to NI - Meursing Code GB-NI406', function() {
      cy.visit('/duty-calculator/xi/1806909019/import-date');
      cy.contains('Northern Ireland Online Tariff');
      cy.validDate();
      cy.selectDestination('xi');
      cy.selectOrigin('gb');
      cy.traderScheme('yes');
      cy.finalUse('yes');
      cy.turnOver('more');
      cy.planned('unacceptablecommercial');
      cy.certificate('no');
      cy.euDutiesApply();
      cy.meursingCode({value: '000'});
      cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
      cy.quantity({kgm: '23.98'});
      cy.vat('20');
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
      cy.contains('Third-country duty');
      cy.contains('Third-country duty');
      cy.contains('Third-country duty (EU)');
      cy.contains('Tariff preference - United Kingdom (excluding Northern Ireland)');
      cy.contains('Claiming a waiver – Exchange rate');
    });
    it('Duty Calculator e2e - ( EU to NI ) EU-NI501', function() {
      cy.visit('/duty-calculator/xi/1212210000/import-date');
      cy.validDate();
      cy.selectDestination('xi');
      cy.selectOrigin('eu');
      cy.contains('There is no import duty to pay');
      cy.contains('There is no import duty to pay when importing');
      cy.get('.govuk-back-link').click();
      cy.contains('Which country are the goods coming from?');
      cy.contains('Continue').click();
      cy.get('.govuk-button:not(.govuk-button--secondary):not(.report-problem').click();
      cy.contains('When will the goods be imported?');
    });
  });
  context('when on the UK service - SPIMM - E2E journeys - Happy Path - Smoke Suite', function() {
    const assertData = ['Category 1 exemptions', 'Category 2 exemptions', 'Condition met', 
      'Your goods are exempt from Category 1 because you meet these conditions', 
      'Your goods are exempt from Category 2 because you meet these conditions', 'Certificate needed'];
    const assertData2 = ['Your Category 1 result is based on EU regulations', 'Your Category 2 result is based on EU regulations', 'Condition not met']
    beforeEach('Navigate from SPIMM journey start page to your goods page', () => {
      cy.visit('/check_spimm_eligibility');
      // SPIMM process start page
      cy.verifySpimmPage();
      // Start now button
      cy.clkBtnToContinue();
      // Answer eligibility questions page
      cy.verifyEligibilityNewPage('yes');
      // Continue button
      cy.clkBtnToContinue();
      // Check the category of your goods page
      cy.checkCategoryOfYourGoods();
      // Continue button
      cy.clkBtnToContinue();
    });
    // Category 1 scenarios
    // Sceanrio 1 - Direct to check your answers to Cat1 result page
    it('Verify - Green lanes - UK to NI - Category 1 - Scenario 1', function() {
      const data = ['0804500089', 'KP', 'Category 1'];
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      cy.checkYourAnswersPage(data[0], data[1], false, false, false, false, null, null, assertData[0],  assertData[1],  assertData[2]);
      // Continue button
      cy.clkBtnToContinue();
      // Result Page
      cy.verifyResultPage(data[0], data[1], data[2], null, null, assertData[3],  assertData[4],  assertData[5]);
    });
    // Sceanrio 2 - Select Cat1 exemption 'none' to get Cat1 result page
    it('Verify - Green lanes - UK to NI - Category 1 - Scenario 2', function() {
      const data = ['8708999790', 'UA', 'Category 1'];
      const cat1DocCodes = ['none', 'none', 'none', 'none'];
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list.
      cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      cy.checkYourAnswersPage(data[0], data[1], false, true, false, false, cat1DocCodes, null, assertData[0],  null,  assertData[2]);
      // Continue button
      cy.clkBtnToContinue();
      // Result Page
      cy.verifyResultPage(data[0], data[1], data[2], cat1DocCodes, null, assertData2[0],  null,  assertData2[2]);
    });
    // Category 2 scenarios
    // Scenario 1 - Direct to check your answers to Cat 2 result page
    it('Verify - Green lanes - UK to NI - Category 2 - Scenario 1', function() {
      const data = ['7606119989', 'BY', 'Category 2']
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      cy.checkYourAnswersPage(data[0], data[1], false);
      // Continue button
      cy.clkBtnToContinue();
      // Result Page
      cy.verifyResultPage(data[0], data[1], data[2]);
    });
    // Scenario 2 - Cat2 exemptions to check your answers to Cat 2 result page
    it('Verify - Green lanes - UK to NI - Category 2 - Scenario 2', function() {
      const data = ['1602320000', 'GL', 'Category 2']
      const cat2DocCodes = ['none', 'none', 'none'];
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // Tell us if your goods meet any exemptions - cat 2 and select at least one exception from each Exemptions list.
      cy.category2ExemptionsPage(data[0], data[1], cat2DocCodes, false);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      // Only one excemption is showing in the url params instead of two or three based on user selection hence skipping this test until it is resolved.
      cy.checkYourAnswersPage(data[0], data[1], false, false, true, false, null, cat2DocCodes, null, assertData[1], assertData2[2]);
      // Continue button
      cy.clkBtnToContinue();
      // Result Page
      cy.verifyResultPage(data[0], data[1], data[2], null, cat2DocCodes, null, assertData2[1], assertData2[2]);
    });
    // Scenario 2 - Cat1 exemptions and Cat2 'none' to check your answers to Cat 2 result page
    it('Verify - Green lanes - UK to NI - Category 2 - Scenario 3', function() {
      const data = ['6913909890', 'UA', 'Category 2'];
      // Exception codes that need to select to get the desire result page
      const cat1DocCodes = ['y922', 'y997', 'y984'];
      const cat2DocCodes = 'none';
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list.
      cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
      // Continue button
      cy.clkBtnToContinue();
      // Tell us if your goods meet any exemptions - cat 2 and select at least one exception from each Exemptions list.
      // Need to pass true and true to capture and build correct category url params values
      cy.category2ExemptionsPage(data[0], data[1], cat2DocCodes, true);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      // Need to pass false and true to capture and build correct category url params values
      cy.checkYourAnswersPage(data[0], data[1], false, false, false, true, cat1DocCodes, cat2DocCodes, assertData[0], assertData[1], assertData[2]);
      // Continue button
      cy.clkBtnToContinue();
      // Result Page
      cy.verifyResultPage(data[0], data[1], data[2], cat1DocCodes, cat2DocCodes, assertData[3], assertData2[1], null);
    });
    // Standard Goods scenarios
    // Scenario 1 - Direct to check your answers to Standard Goods result page
    it('Verify - Green lanes - UK to NI - Standard Goods - Scenario 1', function() {
      const data = ['9603909100', 'BY', 'Standard goods']
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      cy.checkYourAnswersPage(data[0], data[1], false);
      // Continue button
      cy.clkBtnToContinue();
      // Result Page
      cy.verifyResultPage(data[0], data[1], data[2]);
    });
    // Scenario 2 - Cat2 exemptions to Standard Goods result page
    it('Verify - Green lanes - UK to NI - Standard Goods - Scenario 2', function() {
      const data = ['1602509590', 'FO', 'Standard goods'];
      const cat2DocCodes = ['y170', 'y058', 'y900', 'y929'];
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // Tell us if your goods meet any exemptions - cat 2 and select at least one exception from each Exemptions list.
      // Need to pass false and true to capture and build correct category url params values
      cy.category2ExemptionsPage(data[0], data[1], cat2DocCodes, false);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      cy.checkYourAnswersPage(data[0], data[1], false, false, true, false, null, cat2DocCodes, null, assertData[1], assertData[2]);
      // Continue button
      cy.clkBtnToContinue();
      // Result Page
      cy.verifyResultPage(data[0], data[1], data[2], null, cat2DocCodes, null, assertData[4], null);
    });
    // Scenario 3 - Cat1 exemptions to Standard Goods result page
    it('Verify - Green lanes - UK to NI - Standard Goods - Scenario 3', function() {
      const data = ['7606119989', 'RU', 'Standard goods'];
      const cat1DocCodes = ['y874'];
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list.
      cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      cy.checkYourAnswersPage(data[0], data[1], false, true, false, false, cat1DocCodes, null, assertData[0], null, assertData[2]);
      // Continue button
      cy.clkBtnToContinue();
      // Result Page
      cy.verifyResultPage(data[0], data[1], data[2], cat1DocCodes, null, assertData[3], null, null);
    });
    // Scenario 4 - Cat1 and Cat2 exemptions to Standard Goods result page
    it('Verify - Green lanes - UK to NI - Standard Goods - Scenario 4', function() {
      const data = ['6913909890', 'UA', 'Standard goods'];
      const cat1DocCodes = ['y922', 'y997', 'y984'];
      const cat2DocCodes = ['y923'];
      // Tell us about your goods
      cy.tellUsAboutYourGoodsPage(data[0], data[1]);
      // Continue button
      cy.clkBtnToContinue();
      // We need more information about your goods - cat 1 and select at least one exception from each Exemptions list.
      cy.category1ExemptionsPage(data[0], data[1], cat1DocCodes);
      // Continue button
      cy.clkBtnToContinue();
      // Tell us if your goods meet any exemptions - cat 2 and select at least one exception from each Exemptions list.
      cy.category2ExemptionsPage(data[0], data[1], cat2DocCodes, true);
      // Continue button
      cy.clkBtnToContinue();
      // Check your answers page
      cy.checkYourAnswersPage(data[0], data[1], false, false, false, true, cat1DocCodes, cat2DocCodes, assertData[0], assertData[1], assertData[2]);
      // Continue button
      cy.clkBtnToContinue();
      // Result Page
      cy.verifyResultPage(data[0], data[1], data[2], cat1DocCodes, cat2DocCodes, assertData[3], assertData[4], null);
    });
  });
});
