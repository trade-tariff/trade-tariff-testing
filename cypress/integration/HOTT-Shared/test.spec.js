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
  it.only('CommCodeTest', function() {
    cy.CommCodeHistory('8527290010');
  });
});
