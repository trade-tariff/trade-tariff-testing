/* eslint-disable max-len */

// date , commodity ,destination,origin to be persisted on back links
// back button from date page should take to STW page ( to be confirmed )
describe('dcSTW-CHIEG.spec |duty calculator link to STW and CHIEG services|', function() {
  //
  it('1.EU-GB | Customs value |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=0702000007&country_of_origin=FR&import_date=2021-12-21&import_destination=UK');
    cy.contains('What is the customs value of this import?');
    cy.contains('About this commodity code').click();
    cy.get('.govuk-details__text');
    cy.contains('Commodity code');
    cy.contains('0702000007');
    cy.customsValue({monetary: '500', shipping: '250', cost: '250'});
    cy.contains('0702 00 00 07');
    cy.contains('21 December 2021');
    cy.contains('England, Scotland or Wales (GB)');
    cy.contains('France');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Details of your trade');
    cy.contains('21 December 2021');
  });

  it('2.NI-GB | There is no import duty to pay |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=0702000007&country_of_origin=XI&import_date=2021-01-01&import_destination=UK');
    cy.noDuty();
  });

  it('3.ROW-GB | Customs value |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=3926909790&country_of_origin=AF&import_date=2021-01-01&import_destination=UK');
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    cy.additionalCode({uk: '2601'});
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    cy.docCode({uk: 'c119'});
    cy.contains('Continue').click();
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains(' VAT');
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - GSP – Least Developed Countries');
    cy.contains('Option 4: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms');
    cy.contains('Option 3: Airworthiness tariff suspension');
  });

  it('4.EU-XI | There is no import duty to pay |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=0702000007&country_of_origin=FI&import_date=2021-01-01&import_destination=XI');
    cy.noDuty();
  });

  it('5.ROW-XI | Are you authorised under the UK Trader Scheme? |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=6307909200&country_of_origin=SG&import_date=2021-01-01&import_destination=XI');
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // Planned processing - acceptable3
    cy.plannedXI('acceptable3');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // additional codes
    cy.additionalCode({uk: '2600'});
    // doc code
    cy.docCode({uk: 'c119'});
    cy.contains('Continue').click();

    // Import Quantity 1.0 gives UK tariffs
    cy.vat('20');
    cy.confirmPage();
    cy.contains('6307 90 92 00 (2600)');

    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.');
  });

  it.skip('6.GB-XI | Are you authorised under the UK Trader Scheme? |', function() {
    cy.visit('/duty-calculator/prefill?commodity_code=0304829010&country_of_origin=GB&import_date=2021-12-31&import_destination=XI');
/*
    // ℹ️ Interstitial Message - EU duties apply
    cy.contains('Duties apply to this import');
    cy.get('.govuk-button').click();
*/
    // 💰 Whats the monetary customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

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
    cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('31 December 2021');
    cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('Northern Ireland');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('£5,785.87');
    //  cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('25.786 tonnes')
    cy.get('.govuk-button').click();


    // Final Page + Copy text
    cy.contains('Import duty calculation');
    cy.contains('Option 1: Third-country duty');
    cy.contains('A ‘Third country’ duty is the tariff charged where there isn’t a trade agreement or a customs union available. It can also be referred to as the Most Favoured Nation (MFN) rate.');
    cy.contains('Option 2: Tariff preference');
    cy.contains('A tariff preference is the rate available if a free trade agreement or another arrangement is in place between the UK and an overseas country. Goods will need to comply with the rules of origin to benefit from this rate and you will need to provide evidence of compliance with your shipment.');
    cy.contains(' Option 3: Claiming a waiver – Exchange rate');
    cy.contains('A claim for a customs duty waiver for duty on goods that would otherwise incur “at risk” tariffs is provided as “de minimis aid”. The maximum allowance for most sectors is €200,000 across a rolling three tax year period. This allowance includes all de minimis aid you have claimed over a 3 tax year period.');
    cy.contains('This type of aid is measured in euros, so it is important to convert any aid received in pound sterling into euros. You can use this exchange rate tool to calculate the applicable euro equivalent of the value of the aid for the month you were awarded the aid.');
  });
});
