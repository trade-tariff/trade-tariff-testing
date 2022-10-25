/* eslint-disable max-len */
describe('📑 | dcTradeRemedies | Trade remedies page |', function() {
  it('GB - Page Validation', function() {
    cy.visit('/duty-calculator/uk/0304829010/import-date');
    cy.validDate();
    cy.contains('Continue').click();
    cy.get('#steps-import-destination-import-destination-xi-field').check();
    cy.contains('Continue').click();
    cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click();
    cy.contains('Continue').click();

    // main page title
    cy.contains('EU duties apply to this import');
    cy.contains('As this commodity attracts a trade defence measure, imports of this commodity are treated as \'at risk\' under all circumstances.');

  //  cy.contains('Click on the \'Continue\' button to enter the customs value of your import, to help to calculate the applicable import duties.');
  });
  it('NI - Page Validation', function() {
    cy.visit('/duty-calculator/xi/0304829010/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.otherOriginList({value: 'Turkmenistan'});
    // main page title
    cy.contains('EU duties apply to this import');
    cy.contains('As this commodity attracts a trade defence measure, imports of this commodity are treated as \'at risk\'.');

  //    cy.contains('Click on the \'Continue\' button to enter the customs value of your import, to help to calculate the applicable import duties.');
  });
});
