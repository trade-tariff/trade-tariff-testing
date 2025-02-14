// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - 🚫 Measure Units
/* 9503002110 22nd December 2021
Nepal - XI = £240.00
Nepal - NI = £247.00
Δ MFN = £7.00
*/
describe('| Row-NI304h-delta.spec.js | Turnover < £500,000 | 🔼 Delta Route', function() {
  // Ad Valorem - delta mfn < 3%

  it(`RoW 🇳🇵(Nepal) to NI | Turnover < £500,000 | Ad Valorem - delta mfn < 3% = UK|`, function() {
    cy.visit(`/duty-calculator/xi/9503002110/import-date`);
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.otherOriginList({value: 'Nepal'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 - YES
    cy.turnOver('less');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply');
  });
});
