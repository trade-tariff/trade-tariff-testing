// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - 🚫 Final use in NI - 🚫  Certified as UK origin
// Comm code :1701141000

describe('GB-NI404-e2e.spec|GB to NI route 04-Trade Remedies-0% MFN EU-Trader Scheme-Final use in NI-Certified as UK origin', function() {
  const country = ['uk'];
  const pagetitles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];
  for (let i = 0; i < country.length; i++) {
    console.log(i);

    it(`e2e GB to NI - ${country[i]}`, function() {
      // select future date
      cy.visit(`/duty-calculator/${country[i]}/1701141000/import-date`);
      //  cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1701141000`)
      cy.contains(`${pagetitles[i]}`);
      // valid date
      cy.validDate();

      // destination XI
      cy.selectDestination('xi');

      // origin GB
      cy.selectOrigin('gb');

      // ✅ Trader Scheme Registered - Yes
      cy.traderScheme('yes');

      // 🚫 Final use in NI
      cy.finalUse('no');

      // 🚫 Certified as UK origin
      cy.certificate('no');

      // interstitial page
      cy.dutiesApply1();

      // customs value
      cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});

      // quantity
      cy.quantity({kgm: '2300.98'});

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
      cy.contains('Certificate of origin');
      cy.contains('Customs value');
      cy.contains('Import quantity');
      // check values entered
      cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('1701 14 10 00');
      cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('N990');
      cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('31 December 2023');
      cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Northern Ireland');
      cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
      cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('Yes');
      cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('No');
      cy.get('div:nth-of-type(8) > .govuk-summary-list__value').contains('No');
      cy.get('div:nth-of-type(9) > .govuk-summary-list__value').contains('£10,002.24');
      cy.contains('2300.98 kilograms');
      cy.get('.govuk-button').click();

      // Final Page
      cy.contains('Option 1: Third-country duty');
      cy.contains('Third-country duty (EU)');
      cy.contains('Zero rate');
      cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
      cy.contains('Option 3: Claiming a waiver – Exchange rate');
    });
    it(`e2e GB to NI - Meursing Code `, function() {
      // select future date
      cy.visit(`/duty-calculator/xi/1806909019/import-date`);
      cy.contains('Northern Ireland Online Tariff');
      // valid date
      cy.validDate();

      // destination XI
      cy.selectDestination('xi');

      // origin GB
      cy.selectOrigin('gb');

      // ✅ Trader Scheme Registered - Yes
      cy.traderScheme('yes');

      // 🚫 Final use in NI
      cy.finalUse('no');

      // 🚫 Certified as UK origin
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
  }
});
