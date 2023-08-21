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
  it(`RoW 🇮🇳 (India) to NI  service |Turnover < £500,000 | Measure Units |`, function() {
    cy.visit(`/duty-calculator/xi/1509200010/import-date`);
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.otherOriginList({value: 'India'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 = YES
    cy.turnOver('less');

    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Case 1 : Δ MFN < 3% - UK Tariffs - Import Quantity 1.0 gives UK tariffs
    // Import Quantity
    cy.quantity({kgm: '100.0'});
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    // VAT Page
    cy.vat('20');
    cy.contains('Value added tax (20.0%)');
    cy.get('.govuk-button').click();
    cy.contains('VAT');
    cy.contains('Standard rate');

    cy.contains('Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between');

    // Case 2 : Δ MFN > 3% - EU Tariffs - Change Quantity to 20 for EU tariff
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(10) > .govuk-summary-list__actions > .govuk-link').click();
    // Import Quantity
    cy.quantity({kgm: '20000.0'});
    // doc code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();

    // VAT Page
    cy.vat('20');
    cy.contains('Value added tax (20.0%)');
    cy.get('.govuk-button').click();
    cy.contains('VAT');
    cy.contains('Standard rate');

    cy.contains('Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the');
    cy.contains('Suspension - goods for certain categories of ships');
  });
  it('RoW 🇦🇺 (Australia) - XI | Turnover < £500,000 | EU Tariffs apply without Quotas |', function() {
    cy.visit('/duty-calculator/xi/1701141000/import-date');
    // Delta mfn =
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.otherOriginList({value: 'Australia'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 - YES
    cy.turnOver('less');

    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({kgm: '100', tne: '1', dap: '1'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'l001'});
    cy.contains('Continue').click();

    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('UK import duties apply, as the difference');

    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(10) > .govuk-summary-list__actions > .govuk-link').click();
    // Import Quantity
    cy.quantity({kgm: '100000', tne: '100', dap: '100'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'l001'});
    cy.contains('Continue').click();

    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply');
  });
});
