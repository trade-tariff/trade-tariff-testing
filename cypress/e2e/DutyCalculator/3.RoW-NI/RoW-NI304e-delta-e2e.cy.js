// Preferential Tariff rates
// 1701141000 -
describe('| Row-NI304e-delta.spec.js | 🔼 Delta Route | preferential rates UK and EU  | ', function() {
  it('RoW 🇨🇦 (Canada) - XI | UK - yes, EU - no | Row-NI304e-delta |', function() {
    cy.visit('/duty-calculator/xi/0102291010/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.otherOriginList({ value: 'Canada' });
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.planned('notprocessing');
    // customs value
    cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' });
    // Import Quantity
    cy.quantity({ kgm: '10000' });
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between the UK third country duty');
    cy.dcRooLink({ country: 'Canada' });
  });

  it('RoW 🇹🇷(Turkmenistan) - XI | UK - yes, EU - yes|Qty 1 => UK ,Qty 100 => EU | Row-NI304e-delta |', function() {
    cy.visit('/duty-calculator/xi/0102291010/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    // select country from list
    cy.otherOriginList({ value: 'Turkmenistan' });
    // Trader Scheme
    cy.traderScheme('yes');
    // Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.planned('notprocessing');
    // customs value
    cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' });
    // Import Quantity
    cy.quantity({ kgm: '100' });
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between the UK third country duty');
    cy.contains('and the EU third country duty is lower than 3% of the customs value of your trade.');
    // Change quantity to 100 for EU tariffs , Delta Preferential > 3% Import Value
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(10) > .govuk-summary-list__actions > .govuk-link').click();
    // Import Quantity
    cy.quantity({ kgm: '10000' });
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between the UK third country duty');
  });
});
