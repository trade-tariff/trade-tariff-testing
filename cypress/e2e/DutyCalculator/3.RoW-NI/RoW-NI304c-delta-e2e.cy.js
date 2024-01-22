/* eslint-disable max-len */
// 🚫 Trade Remedies - 🚫 0% MFN EU tariff - ✅ Measure Units
// 1509102090 22nd December 2021
// Multiple Additional Codes
describe('| Row-NI304c-delta.spec.js |turnover > £500,000 |  🔼 Delta Route - Acceptable route -will not be subject to processing in Northern Ireland | Multiple Additional Codes | ', function() {
  it('RoW 🇸🇬 (Singapore) to NI | 🔼 Delta Route - Acceptable route -will not be subject to processing in Northern Ireland | UK = 2 , XI = 0', function() {
    cy.visit('/duty-calculator/xi/3926909790/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin

    // select country from list
    cy.otherOriginList({value: 'Singapore'});

    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 - NO
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.planned('notprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // additional codes
    cy.additionalCode('2700');
    // doc code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'c119'});
    cy.contains('Continue').click();

    // Import Quantity 1.0 gives UK tariffs
    cy.vat('20');
    cy.confirmPage();
    cy.contains('3926 90 97 90 (2700)');

    cy.contains('Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.');
    cy.contains('Airworthiness tariff suspension (UK)');
  });
  it(`RoW 🇸🇲 (San Marino) to NI | turnover > £500,000 | 🔼 Delta Route - Acceptable route -will not be subject to processing in Northern Ireland | UK = 0 , XI = 2|`, function() {
    cy.visit(`/duty-calculator/xi/2906110000/import-date`);

    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    // select country from list
    cy.otherOriginList({value: 'San Marino'});

    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 - NO
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.planned('notprocessing');
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // additional codes
    cy.additionalCode('2501');
    // doc code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();

    cy.confirmPage();
    cy.contains('2906 11 00 00 (2501)');

    cy.contains('Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.');

    cy.contains('Tariff preference - San Marino');
    cy.contains('UK preferential duties may be applied, as the difference between the UK preferential duty and the EU preferential duty is lower than 3% of the customs value of your trade.');
    cy.contains('Tariff preference (UK)');

    cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms');
    cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms (UK)');
    cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.');

    // check for other additional code 2500 with 0%
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click();
    // additional codes
    cy.additionalCode('2500');
    // doc code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.contains('2906 11 00 00 (2500)');

    cy.contains('Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.');

    cy.contains('Tariff preference - San Marino');
    cy.contains('UK preferential duties may be applied, as the difference between the UK preferential duty and the EU preferential duty is lower than 3% of the customs value of your trade.');
    cy.contains('Tariff preference (UK)');

    cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms');
    cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms (UK)');
    cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.');
  });
});
