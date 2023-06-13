// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - 🚫 Measure Units
/* 9503002110 22nd December 2021
Nepal - XI = £240.00
Nepal - NI = £247.00
Δ MFN = £7.00
*/
describe('| Row-NI304a--delta.spec.js | Turnover > £500k | Delta Route - not processing | MFN < 3% of UK import duties apply', function() {
  // Ad Valorem - delta mfn < 3%

  it(`RoW 🇳🇵(Nepal) to NI | Ad Valorem - delta mfn < 3% = UK|`, function() {
    cy.visit(`/xi/commodities/9503002110/`);
    cy.dutyCalLink(9503002110);
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');

    // select country from list
    cy.otherOriginList({value: 'Nepal'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 - NO
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between the UK third country duty and ');
    cy.contains('the EU third country duty is lower than 3% of the customs value of your trade.');
  });

  // Ad Valorem - delta mfn 3%
  it('RoW 🇧🇹 (Bhutan) - XI | Ad Valorem - delta mfn < 3% = UK |', function() {
    // 0303531000
    const comm = ['9503002110'];
    for (let i = 0; i < comm.length; i++) {
      cy.visit(`/duty-calculator/uk/${comm[i]}/import-date`);
      // date
      cy.validDate();
      // destination
      cy.selectDestination('xi');

      //
      // select country from list
      //
      cy.otherOriginList({value: 'Bhutan'});

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
      cy.confirmPage();
      cy.dutyPage();

      cy.contains('Option 1: Third-country duty');
      cy.contains('Third-country duty (UK)');
      cy.contains('UK import duties apply, as the difference between the UK third country duty and ');
      cy.contains('the EU third country duty is lower than 3% of the customs value of your trade.');
      cy.dcRooLink2();
    }
  });
  // Ad Valorem - delta mfn 3%
  it('RoW 🇱🇰 (Sri lanka) - XI | Ad Valorem - delta mfn > 3% = EU |', function() {
    cy.visit(`/duty-calculator/uk/5905003000/import-date`);
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');

    //
    // select country from list
    //
    cy.otherOriginList({value: 'Sri lanka'});

    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    //  turnover <£500,000 - NO
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // doc code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'c119'});
    cy.contains('Continue').click();
    cy.contains('C119, C990');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - GSP – Enhanced Framework');
    cy.contains('Option 3: Suspension - goods for certain categories of ships, boats and other vessels and ');
    cy.contains('for drilling or production platforms');
    cy.contains('Option 4: Airworthiness tariff suspension');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and ');
    cy.contains('the EU third country duty exceeds 3% of the customs value of your trade.');
  });
  it('RoW 🇹🇭 (Thailand) - XI | Ad Valorem - delta mfn > 3% = EU |', function() {
    cy.visit(`/duty-calculator/uk/1302120000/import-date`);
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');

    //
    // select country from list
    //
    cy.otherOriginList({value: 'Thailand'});

    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    //  turnover <£500,000 - NO
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.vat('0');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and ');
    cy.contains('the EU third country duty exceeds 3% of the customs value of your trade.');
  });
});
