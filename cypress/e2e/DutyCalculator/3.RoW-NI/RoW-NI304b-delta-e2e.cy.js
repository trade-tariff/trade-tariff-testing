 
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
    cy.planned('commercialprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Case 1 : Δ MFN < 3% - UK Tariffs - Import Quantity 1.0 gives UK tariffs
    // Import Quantity
    cy.quantity({kgm: '100.0'});
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    // VAT Page
    cy.vat('20');
    cy.confirmPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.');
  });
});
