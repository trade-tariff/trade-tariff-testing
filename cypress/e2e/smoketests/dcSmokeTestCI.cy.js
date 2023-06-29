describe('Duty Calculator smoke tests', {tags: ['smokeTest']}, function() {
  it('🚀 UK 🇬🇧 - Duty Calculator e2e - ( NI to GB )| 102 |', function() {
    cy.visit('/duty-calculator/uk/1516209821/import-date');
    cy.validDate();
    cy.contains('Which part of the UK are you importing into?');
    cy.selectDestination('gb');
    cy.contains('Which country are the goods coming from?');
    cy.contains('The duty you are charged may be dependent on the country from which the goods are coming.');
    cy.contains('Where are the goods coming from?');
    cy.contains('When autocomplete results are available');
    cy.originList({value: 'Northern Ireland'});

    cy.contains('There is no import duty to pay');
    cy.contains('There are no import duties applicable to the movement of goods from Northern Ireland to England, Scotland and Wales.');
    cy.contains('Find out more about trading and moving goods in and out of Northern Ireland (opens in a new window).');
    cy.get('.govuk-grid-row .govuk-link').should(
        'have.attr',
        'href',
    );
    cy.get('.govuk-back-link').click();
    cy.contains('Which country are the goods coming from?');
    cy.contains('Continue').click();
    cy.get('.govuk-button').click();
    cy.contains('When will the goods be imported?');
  });

  it('🚀 UK 🇬🇧 Duty Calculator - RoW to GB 🇦🇫 Afghanistan to 🇬🇧 GB | 204 |', function() {
    cy.visit('/duty-calculator/uk/3926909790/import-date');

    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Afghanistan'});
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
    cy.contains('Option 2: Tariff preference - Developing Countries Trading Scheme (DCTS) - Comprehensive Preferences');
    cy.contains('Option 4: Suspension - goods for certain categories of ships');
    cy.contains('Option 3: Airworthiness tariff suspension');
  });

  it('🚀 XI 🇪🇺 - Duty Calculator e2e - RoW 🇦🇩 (Andorra) - XI 304i | Meursing code 7000', function() {
    cy.visit('/duty-calculator/xi/1905311100/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.otherOriginList({value: 'Andorra'});
    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');
    cy.plannedXI('notprocessing');
    cy.meursingCode({value: '000'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    cy.quantity({kgm: '1000'});
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (UK)');
    cy.contains('8.00% * £1,000.00');
    cy.contains('A ‘Third country’ duty is the tariff charged');

    cy.contains('UK import duties apply, as the difference between the UK third country duty');
    cy.contains('Option 2: Tariff preference - Andorra');
    cy.contains('Tariff preference (EU)');

    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(9) > .govuk-summary-list__actions > .govuk-link').click();
    cy.meursingCode({value: '049'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});

    cy.quantity({kgm: '1000'});
    cy.vat('20');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('Third-country duty (EU)');
    cy.contains('EU import duties apply, as the difference between the UK third country duty');
    cy.contains('Option 2: Tariff preference - Andorra');
    cy.contains('Tariff preference (EU)');
    cy.contains('9.00 % + EA MAX 24.20 % +ADSZ');
  });

  it('🚀 XI 🇪🇺 - Duty Calculator e2e - ( GB to NI ) | 406 |', function() {
    cy.visit('/duty-calculator/xi/1701141000/import-date');

    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('gb');
    cy.traderScheme('yes');
    cy.finalUse('yes');

    cy.turnOver('more');
    cy.get('#steps-planned-processing-planned-processing-commercial-purposes-field').check();
    cy.contains('Continue').click();
    cy.certificate('no');
    cy.dutiesApply1();
    cy.customsValue({monetary: '5000.50', shipping: '455.7533', cost: '4545.987654'});
    cy.quantity({kgm: '23.98'});
    cy.docCode({xi: 'n990'});
    cy.contains('Continue').click();
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
    cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('1701 14 10 00');
    cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Northern Ireland');
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)');
    cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('Yes');
    cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('Yes');
    cy.get('div:nth-of-type(9) > .govuk-summary-list__value').contains('Commercial purposes');
    cy.get('div:nth-of-type(10) > .govuk-summary-list__value').contains('No');
    cy.get('div:nth-of-type(11) > .govuk-summary-list__value').contains('£10,002.24');

    cy.contains('23.98 kilograms');
    cy.get('.govuk-button').click();

    cy.contains('Option 1: Third-country duty');
    cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)');
    cy.contains('Option 3: Claiming a waiver – Exchange rate');
  });

  it('🚀 XI 🇪🇺 - Duty Calculator e2e - ( EU to NI )', function() {
    cy.visit('/duty-calculator/xi/1212210000/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('eu');
    cy.contains('There is no import duty to pay');
    cy.contains('There is no import duty to pay when importing goods into Northern Ireland from a European Union member state.');

    cy.get('.govuk-back-link').click();
    cy.contains('Which country are the goods coming from?');
    cy.contains('Continue').click();
    cy.get('.govuk-button').click();
    cy.contains('When will the goods be imported?');
  });
});
