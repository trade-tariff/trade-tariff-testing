/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
describe('test spec - mini tests', {tags: 'miniTestTag'}, function() {
  it.skip('test', function() {
    const num = '0409000000';
    const m = num.substring(0, 4);
    console.log(m);
    const heading = '3101';
    const n = (heading+ '000000');
    console.log(n);
    //  cy.contains(`Commodity ${headings[j]}`+ '000000');
  });
  it.skip('mainpage', function() {
    cy.visit('/sections');
    console.log(cy.title());
    cy.visit('/chapters/01');
    console.log(cy.title());

    cy.visit('/xi/sections');
    console.log(cy.title());
  //  cy.title().should('match', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it.skip('test spec', function() {
    console.log(Cypress.env('baseUrl'));
  });
  it.skip('check comm code spacing', function() {
    cy.visit('/commodities/0409000000');
    cy.checkCommPage('0409000000');
  });
  it.skip('UK - V2 - Headers,Status,Length,duration', function() {
    cy.request('/api/v2/commodities/2007993943').as('comments');
    cy.get('@comments').then(cy.validJsonAPIresponse);
  });

  // function hello(name) { console.log('hello' + name);
  // const hello = function(name) { console.log('hello' + name);
  // const hello = (name) => { console.log('hello' + name);

  // function(name) { console.log('hello' + name);
  // (name) => { console.log('hello' + name)
  it.skip('custom commands test', function() {
    Helpers.sayHello('Madhu');
  });
  it.skip('new main page', function() {
    cy.visit('/sections');
    cy.commPage();
    cy.newsBannerUK();
    cy.visit('xi/sections');
    cy.newsBannerXI();
  });
  it.skip('context selector', function() {
    cy.visit('/chapters/02');
    cy.contextSelector();
    cy.visit('/headings/0202');
    cy.contextSelector();
  });
  it.skip('page titles', function() {
    cy.visit('/sections');
    console.log(cy.title());
    cy.visit('/browse');
    console.log(cy.title());
    cy.visit('/tools');
    console.log(cy.title());
  });
  it.skip('test tags', function() {
    cy.visit('/import_export_dates');
    cy.datePickerPage({day: 22, month: 12, year: 2022});
  });
  it.skip('Search Tariff on other pages', function() {
    const pages = ['sections', 'browse', 'find_commodity', 'sections/6'];
    for (let i=0; i<pages.length; i++) {
      cy.visit(`/${pages[i]}`);
      cy.searchForCommodity('3808941000');
      cy.checkCommPage('3808941000');
    }
  });
  it.skip('CommCodeTest', function() {
    cy.CommCodeHistory('8527290010', {day: '22', month: '02', year: '2022'});
  });
  it.skip('Heading Test', function() {
    cy.headingsHistory('8803', {day: '22', month: '02', year: '2022'});
  });
  it('title', function() {
    cy.visit('/browse');
    cy.searchForCommodity2('tomatoes');
    console.log(cy.title());
    // Edible vegetables and certain roots and tubers - UK Integrated Online Tariff - GOV.UK
  });
  it.skip('RoO block', function() {
    cy.visit('/commodities/1508101000?country=IN#rules-of-origin');
    cy.RoOContent({commCode: '1508101000', country: 'India'});
  });
  it.skip('RoO 2', function() {
    const commCode = '1508101000';
    const newCode = RegExp(`.*${commCode}`, 'i');
    const newCode1 = (`${commCode}`);
    console.log(newCode1);

    // cy.contains(`There are no product-specific rules for commodity ${newCode}`);
  // cy.contains(new RegExp(`There are no product-specific rules for commodity .*${options.commCode}`, 'i'));
  });
  it('GRI Test', function() {
    cy.visit('/commodities/0702000007#footnotes');
    cy.groiContent();
    cy.visit('/chapters/15');
    cy.groiContent();
  });
});
