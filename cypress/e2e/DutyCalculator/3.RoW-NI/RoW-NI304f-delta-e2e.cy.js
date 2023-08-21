/* eslint-disable max-len */
// Suspensions in delta route - old commodity 2903898045
// 2904990055

describe('| Row-NI304f-delta.spec.js | 🔼 Delta Route - Acceptable route 2️⃣ | Suspensions rates UK and EU  | ', function() {
  it('RoW 🇵🇪 (Peru) - XI | 112 Autonomous tariff suspension | UK Tariff |', function() {
    cy.visit('/duty-calculator/xi/2904990055/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin

    // select country from list

    cy.otherOriginList({value: 'Peru'});

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
    // doc code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('A ‘Third country’ duty is the tariff charged where there isn’t a trade agreement or a customs union available. It can also be referred to as the Most Favoured Nation (MFN) rate.');

    cy.contains(' Tariff preference - Peru');
    cy.contains('Tariff preference (UK)');
    cy.contains('UK preferential duties may be applied, as the difference between the UK preferential duty and the EU preferential duty is lower than 3% of the customs value of your trade.');


    cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms');
    cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms (UK)');
    cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.');
  });
  // 7606119125
  it('RoW 🇦🇩 (Andorra) - XI | 115 Autonomous suspension under end-use | UK Tariff |', function() {
    cy.visit('/duty-calculator/xi/3824999252/import-date');
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
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // doc code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({uk: 'c119'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({xi: 'n990'});
    cy.contains('Continue').click();
    cy.contains('C119, C990, N990');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('UK import duties apply, as the difference between the UK third country duty and the EU third country duty is lower than 3% of the customs value of your trade.');

    cy.contains(' Tariff preference - Andorra');
    cy.contains('Tariff preference (UK)');
    cy.contains('UK preferential duties may be applied, as the difference between the UK preferential duty and the EU preferential duty is lower than 3% of the customs value of your trade.');

    cy.contains('Autonomous tariff suspension');

    cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms');
    cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.');

    cy.contains('Airworthiness tariff suspension');
    cy.contains('UK suspensions may be applied, as the difference between the UK suspension duty and the EU suspension duty is lower than 3% of the customs value of your trade.');
  });
});
