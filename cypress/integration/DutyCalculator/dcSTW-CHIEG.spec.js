// duty calculator link to STW and CHIEG services
describe('dcSTW-CHIEG.spec', function() {
  it('1.EU->GB ', function() {
    cy.visit('//duty-calculator/prefill?commodity_code=0702000007&country_of_origin=FR&import_date=2021-12-21&import_destination=UK');
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
});
