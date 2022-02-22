/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
before(() => {
//   cy.injectAxe()
  //  cy.clearCookies()
  //   cy.viewport('iphone-x')
  //  cy.viewport('samsung-note9')

});
beforeEach(() => {
  cy.clearCookies();
  //  cy.injectAxe()
  //  cy.viewport('iphone-x')
  //  cy.viewport('samsung-note9')
});
// ******* Custom Commands *******

// date picker page
Cypress.Commands.add('datePickerPage', (date)=>{
  cy.contains('When are you planning to trade the goods?');
  cy.get('input[name=\'import_export_date[import_date(3i)]\']').click().clear().type(date.day);
  cy.get('input[name=\'import_export_date[import_date(2i)]\']').click().clear().type(date.month);
  cy.get('input[name=\'import_export_date[import_date(1i)]\']').click().clear().type(date.year);
  cy.contains('Update date').click();
});
Cypress.Commands.add('countryPickerpage', (country)=>{
  cy.contains('Select a country');
  cy.get('input#trading-partner-country-field').click().clear().type(country.value);
  cy.contains('Select country').click();
});
// validate commodity page heading
Cypress.Commands.add('checkCommPage', (commcode)=>{
//  cy.contains('Commodity ' +commcode);
  // cy.contains(/Commodity .*3808941000/i);
  cy.contains(new RegExp(`Commodity .*${commcode}`, 'i'));
});
// validate headings page
Cypress.Commands.add('checkHeadingsPage', (headingsCode)=>{
  cy.contains(new RegExp(`Heading .*${headingsCode}`, 'i'));
});

// UK Checks main page title , sections , content and switching link available , search section
Cypress.Commands.add('mainPageUK', ()=>{
  // check header has UK information
  cy.contains('Look up commodity codes, import duties, taxes and controls'); ;
  cy.title().should('matches', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  cy.get('.govuk-header ')
      .contains('UK Integrated Online Tariff');
  // check correct text is displayed on banner as per UK - If they are at risk
  //  cy.contains('If you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland Online Tariff.');
  // Search the tariff section
  cy.get('.govuk-label')
      .contains('Search the UK Integrated Online Tariff');
  cy.contains('Search for a commodity');
  cy.contains('Enter the name of the goods or a commodity code');
});


// XI Checks main page title , sections , content and switching link available , search section
Cypress.Commands.add('mainPageXI', ()=>{
  // check header has UK information
  cy.contains('Look up commodity codes, import duties, taxes and controls'); ;
  cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
  cy.get('.govuk-header ')
      .contains('Northern Ireland Online Tariff');
  // check correct text is displayed on banner as per UK - If they are at risk
  // cy.contains('If you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are not at risk of onward movement to the EU, use the UK Integrated Online Tariff.');
  cy.get('.govuk-label')
      .contains('Search the Northern Ireland Online Tariff');
  cy.contains('Search for a commodity');
  cy.contains('Enter the name of the goods or a commodity code');
});


Cypress.Commands.add('browsePage', ()=>{
  cy.contains('Browse the tariff');
  cy.contains('The goods classification contains 21 sections, listed below. Choose the section that best matches your goods to see the HS chapters that are contained in the section.');
});
Cypress.Commands.add('commPage', ()=>{
  cy.contains('Look up commodity codes, import duties, taxes and controls');
  cy.title().should('matches', /UK Integrated Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
});
Cypress.Commands.add('newsBannerUK', ()=>{
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
Cypress.Commands.add('newsBannerXI', ()=>{
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
Cypress.Commands.add('contextSelector', ()=>{
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
Cypress.Commands.add('globalSearchForCommodity', (searchString) => {
  cy.get('input#tariff-search-banner__q').click().type(searchString).wait(200);
  cy.get('input[name=\'submit_search\']').click();
});


Cypress.Commands.add('waitForCountrySearchResults', () => {
  cy.get('ul#search_country__listbox').should('be.visible');
});

Cypress.Commands.add('searchForCountry', (searchString) => {
  cy.get('input#search_country').click().clear().type(searchString);
  cy.waitForCountrySearchResults();
  return cy.get('ul#search_country__listbox li');
});
Cypress.Commands.add('mobileMenu', ()=>{
  cy.get('.govuk-header__menu-button').click();
  cy.contains('Search');
  cy.contains('Browse');
  cy.contains('A-Z');
  cy.contains('Tools');
  cy.contains('Updates');
  cy.contains('Help');
  cy.get('.govuk-header__menu-button').click();
});
Cypress.Commands.add('CommCodeHistory', (commCode, date)=>{
  let dateParams = '';
  if (date) {
    dateParams = `?day=${date.day}&month=${date.month}&year=${date.year}`;
  }
  cy.visit({url: `/commodities/${commCode}${dateParams}`, failOnStatusCode: false});
  cy.checkCommPage(commCode);
});
Cypress.Commands.add('headingsHistory', (headingsCode, date)=>{
  let dateParams = '';
  if (date) {
    dateParams = `?day=${date.day}&month=${date.month}&year=${date.year}`;
  }
  cy.visit({url: `/headings/${headingsCode}${dateParams}`, failOnStatusCode: false});
  cy.checkHeadingsPage(headingsCode);
});
