/* eslint-disable new-cap */
describe.skip('test spec', function() {
  it('test', function() {
    const num = '0409000000';
    const m = num.substring(0, 4);
    console.log(m);
  });
  it('mainpage', function() {
    cy.visit('/sections');
    console.log(cy.title());
    cy.visit('/chapters/01');
    console.log(cy.title());

    cy.visit('/xi/sections');
    console.log(cy.title());
  //  cy.title().should('match', /UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK/i);
  });
  it('test spec', function() {
    console.log(Cypress.env('baseUrl'));
  });
  it('check comm code spacing', function() {
    cy.visit('/commodities/0409000000');
    cy.checkCommPage('0409000000');
  });
  it('UK - V2 - Headers,Status,Length,duration', function() {
    cy.request('/api/v2/commodities/2007993943').as('comments');
    cy.get('@comments').then(cy.validJsonAPIresponse);
  });

  // function hello(name) { console.log('hello' + name);
  // const hello = function(name) { console.log('hello' + name);
  // const hello = (name) => { console.log('hello' + name);

  // function(name) { console.log('hello' + name);
  // (name) => { console.log('hello' + name)
  it('custom commands test', function() {
    Helpers.sayHello('Madhu');
  });
});
