// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - 🚫 UK Trader Scheme
describe('| RoW-NI306-e2e.spec | RoW (Greenland) to Northern Ireland ', function() {
  //
  it('RoW 🇬🇱 to NI', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.wait(700);
    cy.otherOriginList({value: 'Greenland'});
    // Trader Scheme
    cy.traderScheme('no');
    // Duties Apply
    cy.euDutiesApply();
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({dtn: '230.98'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - OCTs (Overseas Countries and Territories)');
    cy.contains('Third-country duty (EU)');
    cy.contains('Tariff preference (EU)');
  });
  it('RoW 🇨🇳 China to XI', function() {
    cy.visit('/duty-calculator/uk/8421999099/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.wait(500);
    cy.otherOriginList({value: 'China'});
    cy.wait(500);
    // Trader Scheme
    cy.traderScheme('no');
    // Duties Apply
    cy.euDutiesApply();
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Import Quantity
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');

    // change options
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(6) > .govuk-summary-list__actions > .govuk-link').click();
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('no');
    // Planned processing - commercial
    //  cy.plannedXI('commercial');
    // Duties Apply
    cy.euDutiesApply();
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Import Quantity
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');

    // change options
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(6) > .govuk-summary-list__actions > .govuk-link').click();
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <500,000 - no 
    cy.turnOver('more');
    // Planned processing - commercial
    cy.plannedXI('unacceptablecommercial');
    // Duties Apply
    cy.euDutiesApply();
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    // Import Quantity
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
  });
});
