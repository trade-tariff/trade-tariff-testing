/* eslint-disable max-len */
// More than one Measure amounts
describe('| Row-NI304d-delta.spec.js | | Turnover > £500,000 | 🔼 Delta Route - not be subject to processing - route 1️⃣ | | more than one measure amounts on UK and XI service | ', function() {
  //
  it('RoW 🇦🇪 (United Arab Emirates) - XI | Row-NI304d-delta | Turnover > £500,000 | 🔼 Delta Route - not be subject to processing - route 1️⃣ |', function() {
    cy.visit('/duty-calculator/uk/1701141000/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    // select country from list
    cy.otherOriginList({value: 'United Arab Emirates'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({dtnr: '10000', tne: '1', dap: '1'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Option 1: Third-country duty');
    // cy.contains('Third-country duty (UK)');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.');
  });
});
