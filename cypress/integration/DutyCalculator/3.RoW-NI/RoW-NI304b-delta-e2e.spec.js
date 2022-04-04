/* eslint-disable max-len */
// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - ✅ Measure Units
/* 1509102090 22nd December 2021
***********************************
Case 1 : Δ MFN < 3% - UK Tariffs
Quantity 1.0
India - GB = £240.00
India - NI = £247.00
Δ MFN = £7.00
***********************************
Case 2 : Δ MFN > 3% - EU Tariffs
Quantity 20.0 - EU Tariffs
India - GB = £240.00
India - NI = £247.00
Δ MFN = £7.00
***********************************
Case 3 : Δ MFN = 3% - UK Tariffs
Quantity 10.0 , Customs Value = £987
India - GB = £240.00
India - NI = £247.00
Δ MFN = £7.00
*/
describe('| Row-NI304b-delta.spec.js | >£500,000 | 🔼 Delta Route - undergo commercial processing | Quantity | Δ MFN < 3% of Import duties = UK import duties apply , Δ MFN > 3% of Import duties = EU import duties apply | ', function() {
  it.skip(`RoW - 🇮🇳 (India) to NI  service | Measure Units |`, function() {
    cy.visit(`/duty-calculator/xi/1508101000/import-date`);
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin

    // select country from list

    cy.otherOriginList({value: 'India'});
    // // Trader Scheme
    // cy.traderScheme('yes');
    // // ✅  Final use in NI - Yes
    // cy.finalUseNI('yes');
    // // turnover <£500,000 = NO
    // cy.turnOver('more');
    // // Planned processing - acceptable2
    // cy.plannedXI('commercialprocessing');
    // // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Case 1 : Δ MFN < 3% - UK Tariffs - Import Quantity 1.0 gives UK tariffs
    cy.docCode({uk: 'none'});
    cy.contains('Continue').click();
    // // Import Quantity
    // cy.quantity({dtn: '1.0'});
    // cy.docCode({uk: 'c990'});
    // cy.contains('Continue').click();
    // // VAT Page
    // cy.vat('20');
    // cy.contains('Value added tax (20.0%)');
    // cy.get('.govuk-button').click();
    // cy.contains('VAT');
    // cy.contains('Standard rate');
    cy.confirmPage();

    // cy.contains('Option 1: Third-country duty');
    cy.contains('Option 1: Tariff preference - GSP – General Framework');
    cy.contains('A tariff preference is the rate available if a free trade agreement or another arrangement is in place between the UK and an overseas country. Goods will need to comply with the rules of origin to benefit from this rate and you will need to provide evidence of compliance with your shipment.');

    // // Case 2 : Δ MFN > 3% - EU Tariffs - Change Quantity to 20 for EU tariff
    // cy.get('.govuk-back-link').click().wait(200);
    // cy.get('div:nth-of-type(11) > .govuk-summary-list__actions > .govuk-link').click();
    // // Import Quantity
    // cy.quantity({dtn: '100.0'});
    // // doc code
    // cy.docCode({uk: 'c990'});
    // cy.contains('Continue').click();

    // // VAT Page
    // cy.vat('20');
    // cy.contains('Value added tax (20.0%)');
    // cy.get('.govuk-button').click();
    // cy.contains('VAT');
    // cy.contains('Standard rate');

    // cy.contains('Option 1: Third-country duty');
    // cy.contains('Third-country duty (EU)');
    // cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.');
  });
  it(`RoW - 🇨🇱 (Chile) to NI  service | Duplicate suffixes - removed |`, function() {
    cy.visit(`/duty-calculator/xi/1509200010/import-date`);

    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin

    // select country from list

    cy.otherOriginList({value: 'Chile'});
    
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 - NO
    cy.turnOver('more');
    // Planned processing - acceptable2
    cy.plannedXI('commercialprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Case 1 : Δ MFN < 3% - UK Tariffs - Import Quantity 1.0 gives UK tariffs
    // Import Quantity
    cy.quantity({dtn: '10.0'});
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    // VAT Page
    cy.vat('20');
    cy.confirmPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.');
  });
});
