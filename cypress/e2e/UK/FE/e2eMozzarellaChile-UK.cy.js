describe('🇬🇧 💡 | e2eMozzarellaChile-UK | importing Mozzarella 🧀  from Chile 🇨🇱 |', function() {
  it('Search and import cheese from Chile ', function() {
    cy.visit('/find_commodity');
    // cy.contains('Look up commodity codes, duty and VAT rates');;
    cy.searchForCommodity('0406103010');
    cy.title().should('contains', '0406103010');
    cy.checkCommPage('0406103010');
    // 'Chapter notes is visible', function () {
    cy.get('.govuk-main-wrapper');
    cy.contains('Chapter notes');
    // Select Import button', () => {
    cy.get('a#tab_import').click();
    cy.get('.govuk-main-wrapper')
        .contains('Importing into the UK');


    // Select Chile from All countries list', () => {
    cy.get('input#trading_partner_country').click().clear().wait(500)
        .type('Chile').wait(500)
        .type('{enter}');


    // Third country duty  measure has value 154.00 GBP / 100 kg', function () {
    cy.visit('/commodities/0406103010?country=CL#import');
    cy.get('.small-table.measures.govuk-table')
        .contains('154.00 GBP / 100 kg');

    // hott-189 - expand further with otehr commodities and order numbers
    // Preferential tariff quota order No:051924 is visible', function () {
    cy.get('.small-table.measures.govuk-table')
        .contains('Preferential tariff quota');
    cy.get('#measure-20071014')
        .contains('051924').click();
    //  cy.get('[href=\'\\#import-3408148-order-number-094591\']').click()
    cy.get('.tariff-info')
        .contains('Quota order number 051924');
    cy.get('.close [href]').click();

    // 'Footnotes is visible', function () {
    cy.get('.govuk-main-wrapper')
        .contains('Footnotes');
  });
});
