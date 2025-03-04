describe('| RoW-GB207-e2e.spec | excise codes |', function() {
  it('🛢️ Fuel | RoW 🇱🇮 Liechtenstein - 🇬🇧 GB   | 6.fuels of various types - White oils, liquid paraffin |', function() {
    cy.visit('/duty-calculator/uk/3811210027/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Liechtenstein'});
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'c119'});
    cy.contains('Continue').click();
    cy.contains('C119');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Tariff preference - Liechtenstein');
    cy.contains('Autonomous suspension under end-use');
    cy.contains('Airworthiness tariff suspension');
    cy.contains('£248.00');
    cy.contains('£200.00');
    // Case 2 - no document codes selected for measure to apply
    cy.get('.govuk-back-link').click();
    // Change Excise code to 551 - 0% excise duty
    cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click();
    // doc code
    cy.docCode({uk: 'none'});
    cy.contains('Continue').click();
    // Stopping page
    cy.dcStoppingPage();
  });

  it('🛢️ Fuel | RoW 🇱🇮 Liechtenstein - 🇬🇧 GB   | 6.fuels of various types - White oils, liquid paraffin | with Excise code', function() {
    cy.visit('/duty-calculator/uk/2710198500/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Liechtenstein'});
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Measure units
    cy.quantity({ltr: '1'});
    // additional codes
    cy.additionalCode('2700');
    // doc code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    // Case 1
    cy.contains('Which class of excise is applicable to your trade?');
    // Excise code 520
    cy.exciseCode('520');
    cy.contains('Excise additional code');
    cy.contains('520');
    cy.contains('C990');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('520 - Light oil: unrebated (unmarked) – other unrebated light oil');
    cy.contains('Tariff preference - Liechtenstein');
    cy.contains('£200.75');
    cy.contains('£200.75');
    // Case 2 - Change excise code with 0 % excise
    cy.get('.govuk-back-link').click();
    // Change Excise code to 551 - 0% excise duty
    cy.get(':nth-child(9) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Which class of excise is applicable to your trade?');
    cy.exciseCode('551');
    cy.contains('Excise additional code');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('520 - Light oil: unrebated (unmarked) – other unrebated light oil').should('not.exist');
    // Case 3 - no document codes selected for measure to apply
    cy.get('.govuk-back-link').click();
    // Change Excise code to 551 - 0% excise duty
    cy.get(':nth-child(3) > .govuk-summary-list__actions > .govuk-link').click();
    // doc code
    cy.docCode({uk: 'none'});
    cy.contains('Continue').click();
    cy.contains('Continue').click();
    cy.contains('n/a');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('0.00% * £1,000.00');
    cy.contains('Import duty (2700)');
    cy.contains('Tariff preference');
    cy.contains('0.00% * £1,000.00');
    cy.contains('Import duty (2700)');
    cy.contains('Suspension').should('not.exist');
  });
});
