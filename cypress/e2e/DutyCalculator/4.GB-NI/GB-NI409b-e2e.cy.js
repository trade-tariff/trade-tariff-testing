// ✅  Trade Remedies - ℹ️
// Comm code : 0304829010 + with measure units

import dayjs from 'dayjs';

const currentDate = dayjs().format('DD MMMM YYYY');

describe('| GB-NI409b-e2e.spec | GB to NI route 🚌 09 - ✅  Trade Remedies + Copy text |', function() {
  //
  const country = ['xi'];
  const pagetitles = ['Northern Ireland Online Tariff'];
  for (let i = 0; i < country.length; i++) {
    console.log(i);

    it(`e2e GB to NI - ${country[i]}`, function() {
      // select future date
      cy.visit(`/duty-calculator/${country[i]}/0304829010/import-date`);

      cy.contains(`${pagetitles[i]}`);
      cy.validDate();
      cy.contains('Which part of the UK are you importing into?');

      // select NI as country of destination
      cy.get('#steps-import-destination-import-destination-xi-field').check();
      cy.contains('Continue').click();
      cy.contains('Which country are the goods coming from?');

      // select United Kingdom as country of Origin
      cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click();
      cy.contains('Continue').click();

      // ℹ️ Interstitial Message - EU duties apply
      // interstitial page
      cy.dutiesApply1();


      // 💰 Whats the monetary value?
      cy.contains('What is the customs value of this import?');
      cy.get('input#steps-customs-value-monetary-value-field').clear().type('4567.001');
      cy.get('input#steps-customs-value-shipping-cost-field').clear().type('1213.43');
      cy.get('input#steps-customs-value-insurance-cost-field').clear().type('5.434');
      cy.contains('Continue').click();

      // Confirm Page - Page 17
      cy.contains('Check your answers');
      cy.contains('Commodity code');
      cy.contains('Date of import');
      cy.contains('Destination');
      cy.contains('Coming from');
      cy.contains('Customs value');
      //   cy.contains('Import quantity')
      //   Check values
      cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('0304 82 90 10');
      cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains(`${currentDate}`);
      cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('Northern Ireland');
      cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
      cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('£5,785.87');
      //  cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('25.786 tonnes')
      cy.get('.govuk-button').click();


      // Final Page + Copy text
      cy.contains('Import duty calculation');
      cy.contains('Option 1: Third-country duty');
      cy.contains('A ‘Third country’ duty is the tariff charged where there isn’t a trade agreement or');
      cy.contains('a customs union available. It can also be referred to as the Most Favoured Nation (MFN) rate.');
      cy.contains('Option 2: Tariff preference');
      cy.contains('A tariff preference is the rate available if a free trade agreement or another arrangement');
      cy.contains('is in place between the UK and an overseas country. Goods will need to comply with the rules of origin');
      cy.contains('to benefit from this rate and you will need to provide evidence of compliance with your shipment.');
      cy.contains('Option 3: Claiming a waiver – Exchange rate');
      cy.contains('A claim for a customs duty waiver for duty on goods');
      cy.contains('that would otherwise incur “at risk” tariffs is provided as “de minimis aid”.');
      cy.contains('The maximum allowance for most sectors is €200,000 across a rolling three tax year period.');
      cy.contains('This allowance includes all de minimis aid you have claimed over a 3 tax year period.');
      cy.contains('This type of aid is measured in euros, so it is important to convert any aid received in pound sterling into euros.');
      cy.contains('You can use this exchange rate tool to calculate the applicable euro equivalent');
      cy.contains('of the value of the aid for the month you were awarded the aid.');
    });
  }
});
