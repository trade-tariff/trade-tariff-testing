/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable max-len */


beforeEach(() => {
  cy.clearCookies();
});

Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  const space = Cypress.env('SPACE');
  const basicAuthEnabled = Cypress.env(`${space}_BASIC_AUTH`) === true ||
    Cypress.env(`${space}_BASIC_AUTH`) === 'true';

  options = options || {};

  if (basicAuthEnabled) {
    options.auth = {
      username: Cypress.env(`${space}_BASIC_USERNAME`),
      password: Cypress.env(`${space}_BASIC_PASSWORD`),
    };
  }

  return originalFn(url, options);
});

Cypress.Commands.overwrite('request', (originalFn, urlOrOptions) => {
  const space = Cypress.env('SPACE');
  const basicAuthEnabled = Cypress.env(`${space}_BASIC_AUTH`) === true ||
    Cypress.env(`${space}_BASIC_AUTH`) === 'true';

  let options = {};

  if (urlOrOptions instanceof Object) {
    options = urlOrOptions;
  } else {
    options = {url: urlOrOptions};
  }

  if (basicAuthEnabled) {
    options.auth = {
      username: Cypress.env(`${space}_BASIC_USERNAME`),
      password: Cypress.env(`${space}_BASIC_PASSWORD`),
    };
  }

  return originalFn(options);
});

// ******* Custom Commands *******

Cypress.Commands.add('datePickerPage', (date) => {
  cy.contains('When are you planning to trade the goods?');
  cy.get('input[name=\'import_export_date[import_date(3i)]\']').click().clear().type(date.day);
  cy.get('input[name=\'import_export_date[import_date(2i)]\']').click().clear().type(date.month);
  cy.get('input[name=\'import_export_date[import_date(1i)]\']').click().clear().type(date.year);
  cy.contains('Update date').click();
});

Cypress.Commands.add('countryPickerpage', (country) => {
  cy.contains('Select a country');
  cy.get('input#trading-partner-country-field').click().clear().type(country.value);
  cy.contains('Select country').click();
});

// validate commodity page heading
Cypress.Commands.add('checkCommPage', (commcode) => {
  cy.contains(new RegExp(`Commodity .*${commcode}`, 'i'));
});

// validate headings page
Cypress.Commands.add('checkHeadingsPage', (headingsCode) => {
  cy.contains(new RegExp(`Heading .*${headingsCode}`, 'i'));
});

// UK Checks main page title , sections , content and switching link available , search section
Cypress.Commands.add('mainPageUK', () => {
  // check header has UK information
  cy.contains('Look up commodity codes, import duties, taxes and controls');
  cy.title().should('matches', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  cy.get('.govuk-header')
      .contains('UK Integrated Online Tariff');
  // Search the tariff section
  cy.get('.govuk-heading-m').contains('Search for a commodity');
  cy.contains('Commodity codes are internationally recognised reference numbers. A commodity code describes a specific product when importing or exporting goods. You will use this code on any customs declarations.');
  cy.contains('browse the goods classification').click();
  cy.contains('Browse the tariff');
  cy.go(-1);
  cy.contains('look for your product in the A-Z.').click();
  cy.contains('look for your product in the A-Z.');
});

// XI Checks main page title , sections , content and switching link available , search section
Cypress.Commands.add('mainPageXI', () => {
  // check header has UK information
  cy.contains('Look up commodity codes, import duties, taxes and controls');
  cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
  cy.get('.govuk-header')
      .contains('Northern Ireland Online Tariff');
  cy.contains('Search for a commodity');
  cy.contains('Commodity codes are internationally recognised reference numbers. A commodity code describes a specific product when importing or exporting goods. You will use this code on any customs declarations.');
  cy.contains('browse the goods classification').click();
  cy.contains('Browse the tariff');
  cy.go(-1);
  cy.contains('look for your product in the A-Z.').click();
  cy.contains('look for your product in the A-Z.');
});

Cypress.Commands.add('browsePage', () => {
  cy.contains('Browse the tariff');
  cy.contains('The goods classification contains 21 sections, listed below. Choose the section that best matches your goods to see the HS chapters that are contained in the section.');
});

Cypress.Commands.add('commPage', () => {
  cy.contains('Look up commodity codes, import duties, taxes and controls');
  cy.title().should('matches', /UK Integrated Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
});

Cypress.Commands.add('newsBannerUK', () => {
  cy.contains('Are you importing goods into Northern Ireland?');
  // check correct text is displayed on banner as per UK - If they are at risk
  // link to not at risk
  cy.get('div[role=\'region\'] p > a:nth-of-type(1)').click();
  cy.contains('Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU');
  cy.go(-1);
  cy.contains('If you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate ');
  cy.contains('if your goods are not ‘at risk’ of onward movement to the EU');
  cy.contains('If they are at risk of onward movement to the EU, use the');
});

Cypress.Commands.add('newsBannerXI', () => {
  cy.contains('Are your goods at risk of onward movement to the EU?');
  // check correct text is displayed on banner as per UK - If they are at risk
  // link to not at risk
  cy.get('div[role=\'region\'] p > a:nth-of-type(1)').click();
  cy.contains('Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU');
  cy.go(-1);
  cy.contains('If you’re bringing goods into Northern Ireland from outside the UK and the EU, your import may be subject to EU import duty rates');
  cy.contains('if your goods are ‘at risk’ of onward movement to the EU');
  cy.contains('. If they are not at risk of onward movement to the EU, use the ');
});

Cypress.Commands.add('specialBanner', () => {
  cy.contains('New guidance has been published in regard to additional duties on goods originating in Russia and Belarus.');
  cy.get('header[role=\'banner\'] a[target=\'_blank\']').should('have.attr', 'href', 'https://www.gov.uk/guidance/additional-duties-on-goods-originating-in-russia-and-belarus');
});

Cypress.Commands.add('contextSelector', () => {
  cy.get('.govuk-table__body').contains('Classification');
  cy.get('.govuk-table__body').contains('Date of trade');
});

Cypress.Commands.add('waitForCommoditySearchResults', () => {
  cy.get('ul#q__listbox li:not(.autocomplete__option--no-results)').should('be.visible');
});

Cypress.Commands.add('searchForCommodity', (searchString) => {
  cy.get('.js-commodity-picker-select:last').click().type(searchString);
  cy.waitForCommoditySearchResults();
  //  cy.get('input[name=\'new_search\']').click();
  cy.get('input[name=\'commit\']').click();
  //  cy.get('input[name=\'new_search\']').click();
});

Cypress.Commands.add('searchForCommodity2', (searchString) => {
  cy.get('.js-commodity-picker-select:last').click().type(searchString);
  cy.waitForCommoditySearchResults();
  return cy.get('input[name=\'new_search\']').click();
  // cy.get('input[name=\'commit\']').click();
});

Cypress.Commands.add('searchWithSearchField', (searchString) => {
  cy.get('input#q').click().type(searchString);
  cy.waitForCommoditySearchResults();
  cy.get('input[name=\'new_search\']').click();
});

Cypress.Commands.add('globalSearchForCommodity', (searchString) => {
  cy.get('.tariff-search-banner__toggle').click();
  cy.get('input#tariff-search-banner__q').click().type(searchString).wait(200);
  cy.get('input[name=\'submit_search\']').click();
});


Cypress.Commands.add('waitForCountrySearchResults', () => {
  cy.get('ul#trading_partner_country__listbox').should('be.visible');
});

Cypress.Commands.add('searchForCountry', (searchString) => {
  cy.get('input#trading_partner_country').click().clear().type(searchString);
  cy.waitForCountrySearchResults();
  return cy.get('ul#trading_partner_country__listbox li');
});

Cypress.Commands.add('mobileMenu', () => {
  cy.get('.govuk-header__menu-button').click();
  cy.contains('Search');
  cy.contains('Browse');
  cy.contains('A-Z');
  cy.contains('Tools');
  cy.contains('News');
  cy.contains('Help');
  cy.get('.govuk-header__menu-button').click();
});

Cypress.Commands.add('CommCodeHistory', (commCode, date) => {
  let dateParams = '';
  if (date) {
    dateParams = `?day=${date.day}&month=${date.month}&year=${date.year}`;
  }
  cy.visit(`/commodities/${commCode}${dateParams}`, {failOnStatusCode: false});
  cy.checkCommPage(commCode);
});

Cypress.Commands.add('headingsHistory', (headingsCode, date) => {
  let dateParams = '';
  if (date) {
    dateParams = `?day=${date.day}&month=${date.month}&year=${date.year}`;
  }
  cy.visit(`/headings/${headingsCode}${dateParams}`, {failOnStatusCode: false});
  cy.checkHeadingsPage(headingsCode);
});

Cypress.Commands.add('RoOContent', (options) => {
  cy.contains(`Preferential rules of origin`);
});

Cypress.Commands.add('groiContent', () => {
  cy.contains('General Rules for the Interpretation of goods').click();
  cy.contains('Classification of goods in the Tariff shall be governed by the following principles:');
});

Cypress.Commands.add('certificateSearch', () => {
  cy.contains('Search for a certificate, licence or document');
  cy.contains('Search for certificates, licences and other document codes and the commodities which reference them. Document codes may be needed to complete your import or export declaration.');
  cy.contains('Certificate type');
  cy.contains('Certificate code');
  cy.contains('Enter the 3 digit certificate code');
  cy.contains('Description');
  cy.contains('Enter key terms from the certificate description');
});

Cypress.Commands.add('code999L', () => {
  cy.get('.info-content').contains('Customs Declaration Service (CDS) Licence Waiver');
  cy.get('.info-content').contains('The use of 999L allows a CDS waiver code to be declared for prohibited and restricted goods, allowing declarants to confirm that the goods are not subject to specific licencing measures. You must enter ‘CDS Waiver’ in the additional documentation field for this commodity item.');
  cy.get('.info-content').contains('This waiver cannot be used for goods that are imported/exported or moved to/from Northern Ireland.');
});

Cypress.Commands.add('commodityImportGuidance', () => {
  cy.get('#import-measure-references').should('contain', 'CDS guidance');
  cy.get('#import-measure-references').should('not.contain', 'CHIEF guidance');
});

Cypress.Commands.add('commodityExportGuidance', () => {
  cy.get('#export-measure-references').should('contain', 'CDS guidance');
  cy.get('#export-measure-references').should('contain', 'CHIEF guidance');
});

// Validate API Document page
Cypress.Commands.add('apiDocPage', () => {
  cy.visit('https://api.trade-tariff.service.gov.uk/#gov-uk-trade-tariff-api');
  cy.get('#gov-uk-trade-tariff-api').contains('GOV.UK Trade Tariff API');
});

Cypress.Commands.add('quotaSearch', (options) => {
  cy.visit('/quota_search');
  cy.contains('Search for quotas');
  cy.get('input#order_number').click().clear().type(options.ordernumber);
  cy.get('input#goods_nomenclature_item_id').click().clear().type(options.commcode);
  cy.get('input#geographical_area_id').click().clear().type(options.country);
  cy.get('input#day').click().clear().type(options.day);
  cy.get('input#month').click().clear().type(options.month);
  cy.get('input#year').click().clear().type(options.year);
  cy.get('select#critical').select(options.critical);
  cy.get('select#status').select(options.status);
});

Cypress.Commands.add('verifySuspensions', (country, commCode, titles, measureTypeId, prefCode) => {
  cy.visit(`${country}/commodities/${commCode}#suspensions`);
  cy.contains(`${titles}`);
  cy.contains('Suspensions').click();
  cy.get('#suspensions').contains('Suspensions');
  cy.get('.small-table.measures.govuk-table > tbody > tr').each(($elm, index, $list) => {
    const t = $elm.text();
    if (t.includes('Autonomous tariff suspension')) {
      if (`${country}` === 'xi') {
        cy.get(`.table-line a[href^="/${country}/measure_types/${measureTypeId}/preference_codes/${prefCode}?geographical_area_id=1011"]`).contains('Autonomous tariff suspension');
      } else {
        cy.get(`.table-line a[href^="${country}/measure_types/${measureTypeId}/preference_codes/${prefCode}?geographical_area_id=1011"]`).contains('Autonomous tariff suspension');
      }
    } else if (t.includes('Preferential suspension')) {
      cy.get('#measure-3223900 > .measure-type-col > .table-line > a').should('have.attr', 'href', `/${country}/measure_types/${measureTypeId}/preference_codes/${prefCode}?geographical_area_id=XC`).contains('Preferential suspension');
    }
  });
});

Cypress.Commands.add('openPopup', {prevSubject: true}, (subject) => {
  cy.wrap(subject).click();
  return cy.get('.info-content').should('be.visible');
});

Cypress.Commands.add('closePopup', () => {
  cy.get('.close [href]').should('be.visible').click();
  cy.get('#mask').should('not.exist'); // wait for popup to close
});

Cypress.Commands.add('pickTradingPartner', (tradingPartner) => {
  cy.get('input#trading_partner_country')
      .click()
      .clear()
      .wait(500)
      .type(tradingPartner)
      .wait(500)
      .type('{enter}')
      .wait(500);
});
