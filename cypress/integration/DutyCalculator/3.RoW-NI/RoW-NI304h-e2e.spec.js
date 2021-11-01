/* eslint-disable max-len */
// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - 🚫 Measure Units
/* 9503002110 22nd December 2021
Nepal - XI = £240.00
Nepal - NI = £247.00
Δ MFN = £7.00
*/
describe('| Row-NI304h-delta.spec.js | Turnover < £500,000 | 🔼 Delta Route | 1.Ad Valorem 2.Measure Units 3.Quotas | Δ MFN < 3% of Import duties = UK import duties apply | ', function() {
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
    cy.wait(300);
    cy.otherOriginList({value: 'Nepal'});
    cy.wait(300);
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

    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.');
  });
  it(`RoW 🇮🇳 (India) to NI  service |Turnover < £500,000 | Measure Units |`, function() {
    cy.visit(`/duty-calculator/xi/1509102090/import-date`);
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.wait(300);
    cy.otherOriginList({value: 'India'});
    cy.wait(300);
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
    cy.quantity({dtn: '1.0'});
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    // VAT Page
    cy.vat('20');
    cy.contains('Value added tax (20.0%)');
    cy.get('.govuk-button').click();
    cy.contains('VAT');
    cy.contains('Standard rate');

    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.');

    // Case 2 : Δ MFN > 3% - EU Tariffs - Change Quantity to 20 for EU tariff
    cy.get('.govuk-back-link').click().wait(200);
    cy.get('div:nth-of-type(10) > .govuk-summary-list__actions > .govuk-link').click();
    // Import Quantity
    cy.quantity({dtn: '100.0'});
    // doc code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();

    // VAT Page
    cy.vat('20');
    cy.contains('Value added tax (20.0%)');
    cy.get('.govuk-button').click();
    cy.contains('VAT');
    cy.contains('Standard rate');

    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.');
    cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms (UK)');
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
    cy.wait(100);
    cy.otherOriginList({value: 'Australia'});
    cy.wait(100);
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 - YES
    cy.turnOver('less');

    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({dtnr: '1', tne: '1', dap: '1'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();

    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.');

    cy.contains('Option 2: Non-preferential quota 057713');
    cy.contains('UK quotas may be used, as the difference between the UK in-quota duty and the EU third-country duty is lower than 3% of the customs value of your trade.');
    cy.contains('Non Preferential Quota (UK)');

    // EU Tariffs - Change Quantity to override Quotas
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(10) > .govuk-summary-list__actions > .govuk-link').click();
    // Import Quantity
    cy.quantity({dtnr: '100', tne: '100', dap: '100'});
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'n990'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.');
  });
});