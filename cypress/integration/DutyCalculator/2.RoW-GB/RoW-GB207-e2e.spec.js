describe('| RoW-GB207-e2e.spec | excise codes |', function() {
  it(` 🚬 Cheroots | RoW 🇳🇴 Norway to 🇬🇧 GB  | 4.tobacco - Cheroots |`, function() {
    cy.visit(`duty-calculator/uk/2402100000/import-date`);

    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Norway'});
    cy.customsValue({monetary: '900.00', shipping: '50.00', cost: '50.00'});
    cy.quantity({kgm: '1'});
    cy.exciseCode('615');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - Norway');
    cy.contains('615 - Cigars');
  });

  it('🛢️ Fuel | RoW 🇱🇮 Liechtenstein - 🇬🇧 GB   | 6.fuels or various types - White oils, liquid paraffin |', function() {
    cy.visit('/duty-calculator/uk/3811210027/import-date');

    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Liechtenstein'});
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Measure units
    cy.quantity({ltr: '1'});
    // // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'c119'});
    cy.contains('Continue').click();
    // Case 1
    cy.contains('Which class of excise is applicable to your trade?');
    // Excise code 520
    cy.exciseCode('520');
    cy.contains('Excise additional code');
    cy.contains('520');
    cy.contains('C119');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('520 - Light oil: unrebated (unmarked) – other unrebated light oil');
    cy.contains('Option 2: Tariff preference - Liechtenstein');
    cy.contains('Option 3: Autonomous suspension under end-use');
    cy.contains('Option 4: Airworthiness tariff suspension');
    // Case 2 - Change excise code with 0 % excise
    cy.get('.govuk-back-link').click();
    // Change Excise code to 551 - 0% excise duty
    cy.get('div:nth-of-type(8) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Which class of excise is applicable to your trade?');
    cy.exciseCode('551');
    cy.contains('Excise additional code');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('520 - Light oil: unrebated (unmarked) – other unrebated light oil').should('not.exist');
    // Case 3 - no document codes selected for measure to apply
    cy.get('.govuk-back-link').click();
    // Change Excise code to 551 - 0% excise duty
    cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click();
    // doc code
    cy.docCode({uk: 'none'});
    cy.contains('Continue').click();
    // Stopping page
    cy.dcStoppingPage();
  });
});
