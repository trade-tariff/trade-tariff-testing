// 🇻🇳 Vietnam to  🇬🇧 GB
// Comm code :0702000007 - no Measure Units
// explain what this test will achieve

describe('|RoW-GB201-e2e.spec |🍅 - 🇻🇳 Vietnam to 🇬🇧 GB  | 201-e2e.spec | ', function() {
  //
  const country = ['uk', 'xi'];
  const pagetitles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];

  for (let i = 0; i < country.length; i++) {
    console.log(i);

    it(`e2e RoW to GB - 🇻🇳 Vietnam to 🇬🇧 GB - ${country[i]}`, function() {
      // select future date
      cy.visit(`/duty-calculator/${country[i]}/0702000007/import-date`);
      cy.contains(`${pagetitles[i]}`);
      cy.validDate();
      // select GB as country of destination
      cy.selectDestination('gb');
      // select country from list
      cy.originList({value: 'Vietnam'});
      // Monetary value page
      cy.customsValue({monetary: '500', shipping: '250', cost: '250'});
      // Check your answers page
      cy.contains('Check your answers');
      //  cy.get('.govuk-grid-column-three-quarters')
      //   cy.get('.govuk-summary-list__key')
      cy.contains('Commodity code');
      cy.contains('Date of import');
      cy.contains('Destination');
      cy.contains('Coming from');
      cy.contains('Customs value');
      //
      cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('0702 00 00 07');
      cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('31 May 2022');
      cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('England, Scotland or Wales (GB)');
      cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Vietnam');
      cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('£1,000.00');

      // confirm
      cy.get('.govuk-button').click();

      // Final Page - duty page
      cy.contains('Import duty calculation');
      cy.contains('You are importing commodity');
      cy.contains('from Vietnam on 31 May 2022.');

      cy.contains('Details of your trade').click();
      cy.get('.govuk-details__text');
      cy.contains('Origin:');
      cy.contains('Commodity:');
      cy.contains('Import date:');
      cy.contains('Valuation of import:');
      // values
      cy.contains('0702 00 00 07');
      cy.contains('Cherry tomatoes');
      cy.contains('31 May 2022');
      cy.contains('£1,000.00');

      // information
      cy.contains('Details of your trade');
      cy.get('.govuk-table__row');
      cy.contains('Data');
      cy.contains('Calculation');
      cy.contains('Value');
      // first row
      cy.contains('Valuation for import');
      cy.contains('Value of goods + freight + insurance costs');
      cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£1,000.00');
      // import duty
      cy.contains('Import duty Tariff preference (UK)');
      cy.contains('Duty Total');
      cy.contains('8.00% * £1,000.00');
      cy.get('tr:nth-of-type(3) > td:nth-of-type(3)').contains('£0.00');
      // Final Page
      cy.contains('Import duty calculation');
      cy.contains('You are importing commodity 0702 00 00 07 from Vietnam on 31 May 2022.');
      cy.contains('Option 1: Third-country duty');
      cy.contains('Option 2: Tariff preference - Vietnam');
    });
  }
});
