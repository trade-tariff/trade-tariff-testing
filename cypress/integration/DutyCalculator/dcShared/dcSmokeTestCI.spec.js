/* eslint-disable max-len */
describe('| dcSmokeTestCI.spec | Duty Calculator smoke test |', function() {
  // Duty Calculator tests
  it(`🚀 UK 🇬🇧 - Duty Calculator e2e - ( NI to GB )| 102 |`, function() {
    cy.visit('/duty-calculator/uk/1516209821/import-date');
    //   cy.visit('/commodities/1516209821')
    cy.validDate();
    cy.contains('Which part of the UK are you importing into?');
    // select England ,Scotland or Wales (GB)
    cy.selectDestination('gb');
    cy.contains('Which country are the goods coming from?');
    cy.contains('The duty you are charged may be dependent on the country from which the goods are coming.');
    cy.contains('Where are the goods coming from?');
    cy.contains('When autocomplete results are available, use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.');

    // select country from list
    cy.originList({value: 'Northern Ireland'});

    cy.contains('There is no import duty to pay');
    cy.contains('There are no import duties applicable to the movement of goods from Northern Ireland to England, Scotland and Wales.');
    cy.contains('Find out more about trading and moving goods in and out of Northern Ireland (opens in a new window).');
    cy.get('.govuk-grid-row .govuk-link').should('have.attr', 'href', 'https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland');
    // Back Button on page
    cy.get('.govuk-back-link').click();
    cy.contains('Which country are the goods coming from?');
    cy.contains('Continue').click();
    // Start again button
    cy.get('.govuk-button').click();
    cy.contains('When will the goods be imported?');
  });
  it(`🚀 UK 🇬🇧 Duty Calculator - RoW to GB 🇦🇫 Afghanistan to 🇬🇧 GB | 204 |`, function() {
    // select future date
    cy.visit(`/duty-calculator/uk/3926909790/import-date`);
    cy.wait(500);
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Afghanistan'});
    cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
    //  cy.quantity({tne:'1',dtnr:'1',dap:'1'})
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
  it('🚀 XI 🇪🇺 - Duty Calculator e2e - RoW 🇦🇩 (Andorra) - XI 304i| UK Tariffs apply with Meursing code 7000 ,EU Tariffs apply with Meursing code 7049 |', function() {
    cy.visit('/duty-calculator/xi/1905311100/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.wait(100);
    cy.otherOriginList({value: 'Andorra'});
    cy.wait(100);
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

  it(`🚀 XI 🇪🇺 - Duty Calculator e2e - ( GB to NI ) | 406 |`, function() {
    cy.visit('/duty-calculator/xi/1701141000/import-date');

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
    // 🚫 Non processing - No - The goods will be processed for commercial purposes other than those listed above
    cy.get('#steps-planned-processing-planned-processing-commercial-purposes-field').check();
    cy.contains('Continue').click();
    //  🚫 Certified as UK Origin
    cy.certificate('no');
    // Monetary value page
    cy.dutiesApply1();
    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
    // Measure amount page
    cy.quantity({dtnr: '23.98'});
    // doc code
    cy.docCode({xi: 'n990'});
    cy.contains('Continue').click();
    // Check your answers page
    cy.contains('Check your answers');

    //   cy.get('.govuk-summary-list__key')
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
    cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('01 January 2022');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Northern Ireland');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
    cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('Yes');
    cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('Yes');
    cy.get('div:nth-of-type(9) > .govuk-summary-list__value').contains('Commercial purposes');
    cy.get('div:nth-of-type(10) > .govuk-summary-list__value').contains('No');
    cy.get('div:nth-of-type(11) > .govuk-summary-list__value').contains('£10,002.24');

    cy.contains('23.98 x 100 kg');
    cy.get('.govuk-button').click();

    // Final Page
    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
    cy.contains('Option 3: Claiming a waiver – Exchange rate');
  });
  it(`🚀 XI 🇪🇺 - Duty Calculator e2e - ( EU to NI )`, function() {
    cy.visit('/duty-calculator/xi/1212210000/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('eu');
    cy.contains('There is no import duty to pay');
    cy.contains('There is no import duty to pay when importing goods into Northern Ireland from a European Union member state.');

    // Back Button on page
    cy.get('.govuk-back-link').click();
    cy.contains('Which country are the goods coming from?');
    cy.contains('Continue').click();
    // Start again button
    cy.get('.govuk-button').click();
    cy.contains('When will the goods be imported?');
  });

  it('RoW 🇦🇷 Argentina to NI | add codes + doc codes |', function() {
    cy.visit('/duty-calculator/xi/1516209821/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list
    cy.wait(700);
    cy.otherOriginList({value: 'Argentina'});
    cy.wait(700);
    // Duties Apply
    cy.euDutiesApply();
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Import Quantity
    cy.quantity({tnei: '1000'});
    // Additional Codes

    cy.additionalCode({xi: 'C999'});
    cy.additionalCode({xi: 'C496'});
    // Document Codes
    cy.docCode({xi: 'c990'});
    cy.contains('Continue').click();
    // Document Codes
    cy.docCode({xi: 'd017'});
    cy.contains('Continue').click();

    // VAT Page
    cy.vat('0');
    cy.contains('VAT zero rate');
    cy.contains('Additional code(s)');
    cy.contains('C999, C496');
    cy.contains('Document(s)');
    cy.contains('C990, D017');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('You are importing commodity 1516 20 98 21 (C999, C496) from Argentina on 01 January 2022.');
    cy.contains('Option 1: Third-country duty');
    cy.contains('10.90% * £1,000.00');
    cy.contains('172.20 EUR / 1000 kg/biodiesel * 1000.00');
    cy.contains('Option 2: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms');
    cy.contains('0.00% * £1,000.00');
    cy.contains('172.20 EUR / 1000 kg/biodiesel * 1000.00');
    // go back to previous page to change doc code
    cy.get('.govuk-back-link').click().wait(300);
    // Change to different Document Code
    cy.get('div:nth-of-type(3) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Do you have any of the following documents?');
    // Change doc codes and validate results reflected in calculations
    // select none of the above Code

    // Document Codes
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    // Document Codes
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    // VAT Page
    cy.vat('0');
    cy.contains('VAT zero rate');
    cy.contains('Additional code(s)');
    cy.contains('C999, C496');
    cy.contains('Document(s)');
    cy.contains('n/a');
    cy.confirmPage();
    cy.dutyPage();

    cy.contains('You are importing commodity 1516 20 98 21 (C999, C496) from Argentina on 01 January 2022.');
    cy.contains('Option 1: Third-country duty');
    cy.contains('10.90% * £1,000.00');
    cy.contains('Import duty (C999)');
    cy.contains('Definitive anti-dumping duty (EU)');
    cy.contains('172.20 EUR / 1000 kg/biodiesel * 1000.00');
    cy.contains('Import duty (C496)');
    cy.contains('Definitive countervailing duty (EU)');
    cy.contains('25.00% * £1,000.00');
    cy.contains('Option 2: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms').should('not.exist');
  });
});
