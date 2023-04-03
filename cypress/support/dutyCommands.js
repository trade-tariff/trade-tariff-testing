// Duty Cal link on commodity
Cypress.Commands.add('dutyCalLink', (commCode)=>{
  cy.checkCommPage(commCode);
  cy.get('.measure-inset > p:nth-of-type(2) > a').click();
  cy.contains('When will the goods be imported?');
});

// Duty Calculator main page
Cypress.Commands.add('DCMainPage', ()=>{
  cy.get('.govuk-header__navigation ');
  cy.contains('Browse');
  cy.contains('A-Z');
  cy.contains('Tools');
  cy.get('.govuk-caption-xl')
      .contains('Calculate import duties');
  cy.get('.govuk-form-group');
  cy.contains('When will the goods be imported?');
  cy.contains('As duties and quotas change over time');
  cy.contains('Day');
  cy.contains('Month');
  cy.contains('Year');
  cy.contains('Continue');
  cy.contains('About this commodity code');
});
// DC Valid date
Cypress.Commands.add('validDate', ()=>{
  cy.contains('When will the goods be imported?');
  cy.title().should('eq', 'When will the good be imported - Online Tariff Duty calculator');
  cy.get('#steps_import_date_import_date_3i').click().clear().type('31');
  cy.get('#steps_import_date_import_date_2i').click().clear().type('12');
  cy.get('#steps_import_date_import_date_1i').click().clear().type('2023');
  cy.contains('Continue').click();
});
// Enter Date
Cypress.Commands.add('enterDate', (date)=>{
  cy.contains('When will the goods be imported?');
  cy.get('#steps_import_date_import_date_3i').click().clear().type(date.day);
  cy.get('#steps_import_date_import_date_2i').click().clear().type(date.month);
  cy.get('#steps_import_date_import_date_1i').click().clear().type(date.year);
  cy.contains('Continue').click();
});

Cypress.Commands.add('selectDestination', (destination)=>{
  cy.contains('Which part of the UK are you importing into?');
  cy.title().should('eq', 'Which part of the UK are you importing into - Online Tariff Duty calculator');
  if (destination === 'xi') {
    cy.get('#steps-import-destination-import-destination-xi-field').check();
  } else {
    cy.get('#steps-import-destination-import-destination-uk-field').check();
  }
  cy.contains('Continue').click();
});
Cypress.Commands.add('selectOrigin', (origin)=>{
  cy.contains('Which country are the goods coming from?');
  cy.title().should('eq', 'Which country are the goods dispatched from - Online Tariff Duty calculator');
  if (origin === 'gb') {
    cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click();
  } else if (origin === 'eu') {
    cy.get('input#steps-country-of-origin-country-of-origin-eu-field').click();
  } else {
    cy.get('input#steps-country-of-origin-country-of-origin-other-field').click();
  }
  cy.contains('Continue').click();
});

Cypress.Commands.add('originList', (origin)=>{
  cy.contains('Where are the goods coming from?');
  cy.title().should('eq', 'Which country are the goods dispatched from - Online Tariff Duty calculator');
  cy.get('#steps-country-of-origin-country-of-origin-field')
      .click().clear().type(origin.value);
  cy.contains('Continue').click();
});
Cypress.Commands.add('otherOriginList', (otherorigin) => {
  cy.contains('Where are the goods coming from?');
  cy.title().should('eq', 'Which country are the goods dispatched from - Online Tariff Duty calculator');
  cy.get('input#steps-country-of-origin-country-of-origin-other-field').click();
  cy.get('#steps-country-of-origin-other-country-of-origin-field').click().clear().type(otherorigin.value);
  cy.contains('Continue').click();
});
Cypress.Commands.add('dutiesApply', ()=>{
  cy.contains('Duties apply to this import');
  cy.title().should('eq', 'Duties apply to this import - Online Tariff Duty calculator');
  cy.get('.govuk-button').click();
});
Cypress.Commands.add('euDutiesApply', () => {
  cy.contains('EU duties apply to this import');
  cy.title().should('eq', 'EU duties apply to this import - Online Tariff Duty calculator');
  cy.get('.govuk-button').click();
});
Cypress.Commands.add('dutiesApply1', ()=>{
  cy.contains('EU duties apply to this import');
  cy.title().should('eq', 'Duties apply to this import - Online Tariff Duty calculator');
  cy.get('.govuk-button').click();
});
Cypress.Commands.add('meursingCode', (mcode)=>{
  cy.contains('Enter a \'Meursing code\' to work out applicable duties');
  cy.title().should('eq', 'Enter a \'Meursing Code\' for this commodity - Online Tariff Duty calculator');
  cy.get('#steps-meursing-additional-code-meursing-additional-code-field').click().clear().type(mcode.value);
  cy.get('.govuk-button').click();
});
// Duties apply to this import - Online Tariff Duty calculator
Cypress.Commands.add('traderScheme', (selection)=>{
  cy.contains('Are you authorised under the UK Trader Scheme?');
  cy.title().should('eq', 'Are you authorised under the UK Trader Scheme - Online Tariff Duty calculator');
  if (selection === 'yes') {
    cy.get('div:nth-of-type(1) > input[name=\'steps_trader_scheme[trader_scheme]\']').check();
  } else {
    cy.get('div:nth-of-type(2) > input[name=\'steps_trader_scheme[trader_scheme]\']').check();
  }
  cy.contains('Continue').click();
});

Cypress.Commands.add('certificate', (selection)=>{
  cy.contains('Do you have a valid proof of preferential origin?');
  cy.title().should('eq', 'Do you have a valid proof of origin - Online Tariff Duty calculator');
  if (selection === 'yes') {
    cy.get('input#steps-certificate-of-origin-certificate-of-origin-yes-field').check();
  } else {
    cy.get('input#steps-certificate-of-origin-certificate-of-origin-no-field').check();
  }
  cy.contains('Continue').click();
});
// enter monetary value
Cypress.Commands.add('customsValue', (monvalue)=>{
  cy.contains('What is the customs value of this import?');
  cy.title().should('eq', 'What is the customs value of this import - Online Tariff Duty calculator');
  cy.get('input#steps-customs-value-monetary-value-field').clear().type(monvalue.monetary);
  cy.get('input#steps-customs-value-shipping-cost-field').clear().type(monvalue.shipping);
  cy.get('input#steps-customs-value-insurance-cost-field').clear().type(monvalue.cost);
  cy.contains('Continue').click();
});
// enter quantity
Cypress.Commands.add('quantity', (measureUnits)=>{
  cy.contains('Enter import quantity');
  cy.title().should('eq', 'Enter import quantity - Online Tariff Duty calculator');
  for (const [key, value] of Object.entries(measureUnits)) {
    cy.get(`#steps-measure-amount-${key}-field`).clear().type(value);
  }
  cy.contains('Continue').click();
});

// final use UK
Cypress.Commands.add('finalUse', (value)=>{
  cy.title().should('eq', 'Are your goods for final use in the UK - Online Tariff Duty calculator');
  cy.contains('Are your goods for sale to, or final use by, end-consumers located in the United Kingdom?');
  if (value === 'yes') {
    cy.get('div:nth-of-type(1) > input[name=\'steps_final_use[final_use]\']').check();
  } else {
    cy.get('div:nth-of-type(2) > input[name=\'steps_final_use[final_use]\']').check();
  }
  cy.contains('Continue').click();
});
// final use NI
Cypress.Commands.add('finalUseNI', (value) => {
  cy.contains('Are your goods for sale to, or final use by, end-consumers located in Northern Ireland?');
  cy.title().should('eq', 'Are your goods for final use in the UK - Online Tariff Duty calculator');
  if (value === 'yes') {
    cy.get('div:nth-of-type(1) > input[name=\'steps_final_use[final_use]\']').check();
  } else {
    cy.get('div:nth-of-type(2) > input[name=\'steps_final_use[final_use]\']').check();
  }
  cy.contains('Continue').click();
});

Cypress.Commands.add('confirmPage', ()=>{
  cy.contains('Check your answers');
  cy.title().should('eq', 'Check your answers - Online Tariff Duty calculator');
  cy.get('.govuk-button').click();
});

Cypress.Commands.add('dutyPage', ()=>{
  cy.contains('Import duty calculation');
  cy.title().should('eq', 'Import duty calculation - Online Tariff Duty calculator');
});
Cypress.Commands.add('noDuty', (_options)=>{
  cy.contains('There is no import duty to pay');
  cy.title().should('eq', 'There is no import duty to pay - Online Tariff Duty calculator');
});
Cypress.Commands.add('exchangeRate', ()=>{
  cy.contains('Please note - the current page uses an exchange rate of ');
});

Cypress.Commands.add('additionalCode', (addcode)=>{
  cy.contains('Describe your goods in more detail');
  cy.title().should('eq', 'Describe your goods in more detail - Online Tariff Duty Calculator');

  for (const [key, value] of Object.entries(addcode)) {
    cy.get(`select#steps-additional-code-additional-code-${key}-field`).select(value);
  }
  cy.contains('Continue').click();
});

Cypress.Commands.add('turnOver', (options)=>{
  cy.contains('What was your annual turnover in the most recent complete financial year?');
  if (options === 'less') {
    cy.get('input#steps-annual-turnover-annual-turnover-yes-field').check();
  } else if (options === 'more') {
    cy.get('input#steps-annual-turnover-annual-turnover-no-field').check();
  }
  cy.contains('Continue').click();
});

Cypress.Commands.add('plannedXI', (options)=>{
  cy.contains('How will these goods be processed after they are moved into Northern Ireland?');
  cy.title().should('eq', 'How will your goods be processed - Online Tariff Duty calculator');
  if (options === 'notprocessing') {
    cy.get('input#steps-planned-processing-planned-processing-without-any-processing-field').check();
  } else if (options === 'commercialprocessing') {
    cy.get('input#steps-planned-processing-planned-processing-commercial-processing-field').check();
  } else if (options === 'unacceptablecommercial') {
    cy.get('input#steps-planned-processing-planned-processing-commercial-purposes-field').check();
  }
  cy.contains('Continue').click();
});

Cypress.Commands.add('vat', (options)=>{
  cy.contains('Which VAT rate is applicable to your trade?');
  cy.title().should('eq', 'Which VAT rate is applicable to your trade - Online Tariff Duty Calculator');
  if (options === '5') {
    cy.get('input#steps-vat-vat-vatr-field').click();
    cy.contains('Continue').click();
  } else if (options === '0') {
    cy.get('input#steps-vat-vat-vatz-field').click();
    cy.contains('Continue').click();
  } else if (options === '20') {
    cy.get('input#steps-vat-vat-vat-field').click();
    cy.contains('Continue').click();
  } else {
    cy.get('input#steps-vat-vat-vate-field').click();
    cy.contains('Continue').click();
  }
});
Cypress.Commands.add('exciseCode', (excode) => {
  cy.contains('Which class of excise is applicable to your trade?');
  cy.title().should('eq', 'Which class of excise is applicable to your trade - Online Tariff Duty Calculator');
  cy.get(`#steps-excise-additional-code-${excode}-field`).check();
  cy.contains('Continue').click();
});
// Document Codes
Cypress.Commands.add('docCode', (dcode)=>{
  cy.contains('Do you have any of the following documents?');
  cy.title().should('eq', 'Do you have any of the following documents - Online Tariff Duty Calculator');
  for (const [key, value] of Object.entries(dcode)) {
    cy.get(`#steps-document-code-document-code-${key}-${value}-field.govuk-radios__input`).check();
  }
});

Cypress.Commands.add('storeMonetaryExchangeRates', () => {
  cy.request({
    method: 'GET',
    url: `https://www.trade-tariff.service.gov.uk/xi/api/v2/monetary_exchange_rates/`,
  }).then((response) => {
    const exchangeRates = response.body.data;
    exchangeRates.sort((exchangeRateA, exchangeRateB) => {
      exchangeRateA.validity_start_date - exchangeRateB.validity_start_date;
    });

    Cypress.env('monetaryExchangeRates', exchangeRates);
  });
});

Cypress.Commands.add('getExchangeRateForImportDate', (importDateString) => {
  const importDate = new Date(importDateString);
  const importYear = importDate.getFullYear();
  const importMonth = importDate.getMonth();

  const applicableExchangeRates = Cypress.env('monetaryExchangeRates');

  let applicableExchangeRate = applicableExchangeRates.find((exchangeRate) => {
    const startDate = new Date(exchangeRate.attributes.validity_start_date);

    return startDate.getFullYear() === importYear && startDate.getMonth() === importMonth;
  });

  if (!applicableExchangeRate) {
    const lastExchangeRateIndex = applicableExchangeRates.length - 1;

    applicableExchangeRate = applicableExchangeRates[lastExchangeRateIndex];
  }

  return cy.wrap(applicableExchangeRate);
});
Cypress.Commands.add('dcRooLink', (options)=>{
  cy.contains(`Product-specific rules for commodity`);
  cy.get('details:nth-of-type(2)  .govuk-details__summary-text').click();
  cy.contains(`originating in the UK or ${options.country}.`);
  cy.contains('If there are alternative rules, your product needs to comply with only one of them.');
});
Cypress.Commands.add('dcRooLink2', (_options)=>{
  cy.contains(`Product-specific rules for commodity`);
  cy.get('details:nth-of-type(2)  .govuk-details__summary-text').click();
  cy.contains(`There are no product-specific rules for commodity`);
});
// amend this custom command to return comm code and link ?
Cypress.Commands.add('dcStoppingPage', (_options)=>{
  cy.title().should('eq', 'Declared subheading not allowed - Online Tariff Duty calculator');
  cy.contains('Declared subheading not allowed');
  cy.contains('You have chosen a commodity code ');
  cy.contains('for which you do not have the necessary documentation to proceed.');
  cy.contains('What\'s next');
  cy.contains('Go back to the previous screen and ');
  cy.contains('select the correct document code');
  cy.contains('Try another commodity code');
});


