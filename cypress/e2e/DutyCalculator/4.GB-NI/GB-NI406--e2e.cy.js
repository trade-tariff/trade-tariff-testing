// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ⬆️ turnover > £500,000 - 🚫  Non processing - 🚫  Certified as UK Origin
// Comm code :1701141000 - item with measure units

describe('| GB-NI406--e2e.spec | EU Duties apply | GB to NI route 06 - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ⬆️ turnover > £500,000 - 🚫  Non processing - 🚫 Certified as UK Origin |', function() {
  //
  const country = ['uk'];
  const pagetitles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];
  for (let i = 0; i < country.length; i++) {
    console.log(i);
    it(`e2e GB to NI - ${country[i]}`, function() {
      // select future date
      cy.visit(`/${country[i]}/commodities/1701141000`);
      cy.dutyCalLink('1701141000');
      cy.contains(`${pagetitles[i]}`);
      // date
      cy.validDate();
      // destination
      cy.selectDestination('xi');
      // origin
      cy.selectOrigin('gb');
      // ✅ Trader Scheme Registered - Yes
      cy.traderScheme('yes');
      // ✅  Final use in NI - Yes
      cy.finalUse('yes');
      // ⬆️ turnover > £500,000
      cy.turnOver('more');

      // 🚫 Non processing - No - The goods will be processed for commercial purposes other than // 🚫 Non processing - No
      cy.plannedXI('unacceptablecommercial');
      //  🚫 Certified as UK Origin
      cy.certificate('no');
      // interstitial page
      cy.dutiesApply1();

      // Monetary value page
      cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
      // Measure amount page
      cy.quantity({kgm: '2398'});
      // doc code
      cy.docCode({xi: 'n990'});
      cy.contains('Continue').click();
      // Check your answers page
      cy.contains('Check your answers');

      cy.contains('Commodity code');
      cy.contains('Date of import');
      cy.contains('Destination');
      cy.contains('Coming from');
      cy.contains('Trader scheme');
      cy.contains('Final use');
      cy.contains('Processing');
      cy.contains('Certificate of origin');
      cy.contains('Customs value');
      cy.contains('Import quantity');
      //   cy.get('.govuk-summary-list__value')
      cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('1701 14 10 00');
      cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('31 October 2022');
      cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Northern Ireland');
      cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
      cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('Yes');
      cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('Yes');
      cy.get('div:nth-of-type(8) > .govuk-summary-list__value').contains('£500,000 or more');

      cy.get('div:nth-of-type(9) > .govuk-summary-list__value').contains('Commercial purposes');
      cy.get('div:nth-of-type(10) > .govuk-summary-list__value').contains('No');
      cy.get('div:nth-of-type(11) > .govuk-summary-list__value').contains('£10,002.24');

      cy.contains('2398 kilograms');

      cy.get('.govuk-button').click();

      // Final Page
      cy.contains('Option 1: Third-country duty');
      cy.contains('Third-country duty (EU)');
      cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
      cy.contains('Tariff preference (EU)');
      cy.contains('Option 3: Claiming a waiver – Exchange rate');
    });
  }
  it(`e2e GB to NI - Meursing Code GB-NI406`, function() {
    // select future date
    cy.visit(`/duty-calculator/xi/1806909019/import-date`);
    cy.contains('Northern Ireland Online Tariff');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('gb');
    // ✅ Trader Scheme Registered - Yes
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUse('yes');
    // ⬆️ turnover > £500,000
    cy.turnOver('more');

    // 🚫 Non processing - No - The goods will be processed for commercial purposes other than // 🚫 Non processing - No
    cy.plannedXI('unacceptablecommercial');
    //  🚫 Certified as UK Origin
    cy.certificate('no');

    // interstitial page
    cy.dutiesApply1();
    cy.meursingCode({value: '000'});

    // customs value
    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});

    // quantity
    cy.quantity({kgm: '23.98'});
    cy.vat('20');

    // Check your answers page
    cy.contains('Check your answers');

    cy.contains('Commodity code');
    cy.contains('Date of import');
    cy.contains('Destination');
    cy.contains('Coming from');
    cy.contains('Trader scheme');
    cy.contains('Final use');
    cy.contains('Certificate of origin');
    cy.contains('Customs value');
    cy.contains('Import quantity');

    cy.confirmPage();

    // Final Page
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');

    cy.contains('Option 3: Claiming a waiver – Exchange rate');
  });
});
