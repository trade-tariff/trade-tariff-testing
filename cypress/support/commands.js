beforeEach(() => {
  cy.clearCookies();
});

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const goodsNomenclatureLinkRegex = /\/(headings|subheadings|commodities)\/[0-9]{4}(?:-[0-9]{2})?/;

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

Cypress.Commands.add('datePickerPage', (date) => {
  const importDateInput = (index) => `input[name='import_export_date[import_date(${index}i)]']`;

  cy.get(importDateInput(3)).click().clear().type(date.day);
  cy.get(importDateInput(2)).click().clear().type(date.month);
  cy.get(importDateInput(1)).click().clear().type(date.year);

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
  cy.contains('Commodity codes are internationally');
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
  cy.contains('Commodity codes are internationally recognised reference numbers.');
  cy.contains('browse the goods classification').click();
  cy.contains('Browse the tariff');
  cy.go(-1);
  cy.contains('look for your product in the A-Z.').click();
  cy.contains('look for your product in the A-Z.');
});

Cypress.Commands.add('browsePage', () => {
  cy.contains('Browse the tariff');
  cy.contains('The goods classification contains 21 sections');
});

Cypress.Commands.add('commPage', () => {
  cy.contains('Look up commodity codes, import duties, taxes and controls');
  cy.title().should('matches', /UK Integrated Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
});

Cypress.Commands.add('specialBanner', () => {
  cy.contains('New guidance has been published in regard to additional duties on goods originating in Russia and Belarus.');
  cy.get('header[role=\'banner\'] a[target=\'_blank\']')
      .should(
          'have.attr',
          'href',
          'https://www.gov.uk/guidance/additional-duties-on-goods-originating-in-russia-and-belarus',
      );
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
  // We submit by clicking the first result
  cy.get('#q__option--0').click();
});

Cypress.Commands.add('searchForCommodity2', (searchString) => {
  cy.get('.js-commodity-picker-select:last').click().type(searchString);
  cy.waitForCommoditySearchResults();
  return cy.get('input[name=\'new_search\']').click();
});

Cypress.Commands.add('searchWithSearchField', (searchString) => {
  cy.get('input#q').click().type(searchString);
  cy.waitForCommoditySearchResults();
  cy.get('input[name=\'new_search\']').click();
});

Cypress.Commands.add('globalSearchForCommodity', (searchString) => {
  cy.get('.tariff-search-banner__toggle').click();
  cy.get('input#tariff-search-banner__q').click().type(searchString);
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

Cypress.Commands.add('RoOContent', (_options) => {
  cy.contains(`Preferential rules of origin`);
});

Cypress.Commands.add('groiContent', () => {
  cy.contains('General Rules for the Interpretation of goods').click();
  cy.contains('Classification of goods in the Tariff shall be governed by the following principles:');
});

Cypress.Commands.add('certificateSearch', () => {
  cy.contains('Search for a certificate, licence or document');
  cy.contains('Search for certificates, licences');
  cy.contains('Certificate type');
  cy.contains('Certificate code');
  cy.contains('Enter the 3 digit certificate code');
  cy.contains('Description');
  cy.contains('Enter key terms from the certificate description');
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
  cy.get('.small-table.measures.govuk-table > tbody > tr').each(($elm, _index, _$list) => {
    const t = $elm.text();
    if (t.includes('Autonomous tariff suspension')) {
      if (`${country}` === 'xi') {
        cy.get(
            `.table-line a[href^="/${country}/measure_types/${measureTypeId}/preference_codes/${prefCode}?geographical_area_id=1011"]`,
        ).contains('Autonomous tariff suspension');
      } else {
        cy.get(
            `.table-line a[href^="${country}/measure_types/${measureTypeId}/preference_codes/${prefCode}?geographical_area_id=1011"]`,
        ).contains('Autonomous tariff suspension');
      }
    } else if (t.includes('Preferential suspension')) {
      cy.get('#measure-3223900 > .measure-type-col > .table-line > a').should(
          'have.attr',
          'href',
          `/${country}/measure_types/${measureTypeId}/preference_codes/${prefCode}?geographical_area_id=XC`,
      ).contains('Preferential suspension');
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
      .type(tradingPartner)
      .type('{enter}');
});

Cypress.Commands.add('checkValidityPeriodsCount', (expectedCount) => {
  const dateLineRegex = new RegExp(`[0-9]{1,2}\\s(${months.join('|')})\\s[0-9]{4}\\s+to\\s+[0-9]{1,2}\\s(${months.join('|')})\\s[0-9]{4}`);

  cy.get('ul > li').filter((_index, li) => {
    return dateLineRegex.test(li.innerText);
  }).should('have.length', expectedCount);
});

Cypress.Commands.add('checkDerivingGoodsNomenclaturesCount', (expectedCount) => {
  const dateRegex = new RegExp(`^[0-9]{1,2}\\s(${months.join('|')})\\s[0-9]{4}$`);

  cy.get('thead').find('th').as('headerColumns');
  cy.get('tbody').find('td').as('bodyColumns');

  cy.get('@headerColumns').eq(0).should('have.text', 'Classification');
  cy.get('@headerColumns').eq(1).should('have.text', 'Description');
  cy.get('@headerColumns').eq(2).should('have.text', 'Transfer date');

  cy.get('@bodyColumns').eq(0).find('a')
      .should('have.attr', 'href')
      .and('match', goodsNomenclatureLinkRegex);

  cy.get('@bodyColumns').eq(1).should('not.be.empty');
  cy.get('@bodyColumns').eq(2).contains(dateRegex);

  cy.get('.govuk-table__row').should('have.length', expectedCount + 1);
});

Cypress.Commands.add('checkAdditionalCodeSearchResultsHaveGoodsNomenclatures', () => {
  cy.get('article table thead').find('th').as('headerColumns');
  cy.get('article table tbody').find('td').as('bodyColumns');

  cy.get('@headerColumns').eq(0).should('have.text', 'Name');
  cy.get('@headerColumns').eq(1).should('have.text', 'Code');


  cy.get('@bodyColumns').eq(0).find('a')
      .should('have.attr', 'href')
      .and('match', goodsNomenclatureLinkRegex);

  cy.get('@bodyColumns').eq(0).find('a').should('not.be.empty');
  cy.get('@bodyColumns').eq(1).should('not.be.empty');

  cy.get('article table .govuk-table__row').should('have.length.gt', 0);
});

Cypress.Commands.add('fetchCookie', (name) => {
  cy.getCookie(name).then((cookie) => {
    let cookieValue = null;
    if (cookie) {
      cookieValue = cookie.value;
      cookieValue = decodeURIComponent(cookieValue);
      cookieValue = JSON.parse(cookieValue);
    }

    return cookieValue;
  });
});
