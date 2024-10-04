 
// More than one Measure amounts
// Delta Route - not be subject to processing - route 1️⃣
describe('| Row-NI304d-delta.spec.js | | Turnover > £500,000 |', function() {
  it('RoW 🇦🇪 (United Arab Emirates) - XI | Row-NI304d-delta | Turnover > £500,000 |', function() {
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
    cy.planned('notprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({kgm: '10000', dap: '1'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
  });
});
