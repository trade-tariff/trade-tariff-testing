// meursing code delta route
/* eslint-disable max-len */

// 1905311100 Merusing code 7000 = UK , Meursing code 7049 = EU
// Andorra - Delta mfn < 3% for 7000 , >3% for 7049
describe('| RoW-NI304i-delta-meursing-e2e.spec.js | 🔼 Delta Route with Meursing | | ', function() {
  it('RoW 🇦🇩 (Andorra) - XI | UK Tariffs apply with Meursing code 7000 ,EU Tariffs apply with Meursing code 7049 |', function() {
    cy.visit('/duty-calculator/xi/1905311100/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin

    // select country from list

    cy.otherOriginList({value: 'Andorra'});

    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    // turnover <£500,000 - NO
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('notprocessing');
    cy.meursingCode({value: '000'});
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({dtn: '1'});
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('8.00% * £1,000.00');
    cy.contains('A ‘Third country’ duty is the tariff charged where there isn’t a trade agreement or a customs union available. It can also be referred to as the Most Favoured Nation (MFN) rate.');

    cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.');
    cy.contains('Option 2: Tariff preference - Andorra');
    cy.contains('Tariff preference (EU)');
    // change meursing code to 7049

    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(9) > .govuk-summary-list__actions > .govuk-link').click();
    cy.meursingCode({value: '049'});
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    // Import Quantity
    cy.quantity({dtn: '1'});
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty and the EU third country duty exceeds 3% of the customs value of your trade.');
    cy.contains('Option 2: Tariff preference - Andorra');
    cy.contains('Tariff preference (EU)');
    cy.contains('9.00 % + EA MAX 24.20 % +ADSZ');
  });
});
