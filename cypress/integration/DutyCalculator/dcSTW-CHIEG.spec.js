
// date , commodity ,destination,origin to be persisted on back links
// back button from date page should take to STW page ( to be confirmed )
describe('dcSTW-CHIEG.spec |duty calculator link to STW and CHIEG services|', function() {
  //
  it('1.EU-GB | Customs value |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=0702000007&country_of_origin=FR&import_date=2021-12-21&import_destination=UK');
    cy.contains('What is the customs value of this import?');
    cy.contains('About this commodity code').click();
    cy.get('.govuk-details__text');
    cy.contains('Commodity code');
    cy.contains('0702000007');
    cy.customsValue({monetary: '500', shipping: '250', cost: '250'});
    cy.contains('0702 00 00 07');
    cy.contains('21 December 2021');
    cy.contains('England, Scotland or Wales (GB)');
    cy.contains('France');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Details of your trade');
    cy.contains('21 December 2021');
  });
  it.only('2.NI-GB | There is no import duty to pay |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=0702000007&country_of_origin=XI&import_date=2021-01-01&import_destination=UK');
    cy.get('.govuk-back-link').click()
    
  });
  it('3.ROW-GB | Customs value |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=0702000007&country_of_origin=NI&import_date=2021-01-01&import_destination=UK');
  });
  it('4.EU-XI | There is no import duty to pay |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=0702000007&country_of_origin=FI&import_date=2021-01-01&import_destination=XI');
  });
  it('5.ROW-XI | Are you authorised under the UK Trader Scheme? |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=0702000007&country_of_origin=NI&import_date=2021-01-01&import_destination=XI');
  });
  it('6.GB-XI | Are you authorised under the UK Trader Scheme? |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=0702000007&country_of_origin=GB&import_date=2021-01-01&import_destination=XI');
  });
});
