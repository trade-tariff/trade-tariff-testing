/* eslint-disable max-len */
// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - 🚫 Trader Scheme - 🚫  Certified as UK origin
// Comm code :1701141000

describe('| GB-NI408b-e2e.spec | GB to NI route 🚐 08 - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - 🚫 Trader Scheme - 🚫  Certified as UK origin |', function() {
  //
  const country = ['xi'];
  const pagetitles = ['Northern Ireland Online Tariff'];
  for (let i = 0; i < country.length; i++) {
    console.log(i);

    it(`🖊️ e2e GB to NI - ${country[i]}`, function() {
      // select future date
      cy.visit(`/duty-calculator/${country[i]}/1701141000/import-date`);
      //    cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1701141000`)
      cy.contains(`${pagetitles[i]}`);
      // date
      cy.validDate();
      // destination
      cy.selectDestination('xi');
      // origin
      cy.selectOrigin('gb');
      // 🚫 Trader Scheme Registered - No
      cy.traderScheme('no');

      // 🚫 Certified as UK Origin
      cy.certificate('no');
      // interstitial page
      cy.dutiesApply1();


      // Monetary value page
      cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
      // quantity
      cy.quantity({dtnr: '230.98'});

      cy.docCode({xi: 'n990'});
      cy.contains('Continue').click();

      // Check your answers page
      cy.contains('Check your answers');

      cy.contains('Commodity code');
      cy.contains('Date of import');
      cy.contains('Destination');
      cy.contains('Coming from');
      cy.contains('Trader scheme');
      cy.contains('Certificate of origin');
      cy.contains('Customs value');
      cy.contains('Import quantity');
      //   cy.get('.govuk-summary-list__value')
      cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('1701 14 10 00');
      cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('01 January 2022');
      cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Northern Ireland');
      cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
      cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('No');
      cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('No');
      cy.get('div:nth-of-type(8) > .govuk-summary-list__value').contains('£10,002.24');

      cy.contains('230.98 x 100 kg');


      // confirm
      cy.get('.govuk-button').click();

      // Final Page - duty page
      cy.contains('Import duty calculation');
      cy.contains('You are importing commodity');
      cy.contains('from United Kingdom (excluding Northern Ireland) on');
      cy.contains('01 January 2022');
      cy.contains('1701 14 10 00').click();
      cy.checkCommPage('1701141000');
      cy.go(-1);
      // keys
      cy.contains('Details of your trade').click();
      cy.get('.govuk-details__text');
      cy.contains('Origin:');
      cy.contains('Commodity:');
      cy.contains('Import date:');
      cy.contains('Valuation of import:');
      // values
      cy.contains('1701 14 10 00');
      cy.contains('For refining');
      cy.contains('01 January 2022');
      cy.contains('£10,002.24');

      // information
      cy.contains('Details of your trade');
      cy.get('.govuk-table__row');
      cy.contains('Data');
      cy.contains('Calculation');
      cy.contains('Value');
      // first row
      cy.contains('Valuation for import');
      cy.contains('Value of goods + freight + insurance costs');
      cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£10,002.24');
      // import duty
      cy.contains('Import duty Third-country duty (EU)');
      cy.contains('Import quantity');
      cy.contains('230.98 x 100 kg');
      cy.contains('33.90 EUR / 100 kg std qual * 230.98');

      cy.contains('Duty Total');
      // Final Page
      cy.contains('Option 1: Third-country duty');
      cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
      cy.contains('Option 3: Claiming a waiver – Exchange rate');
      cy.exchangeRate();
    });
  }
});
