describe('🛃 | dcExciseCode.spec.js | Validate excise code on duty calculator |', function() {
  /*
  1.wine and spirits - 2204299895
  2.cider - 220603100
  3.beer -
  4.tobacco - 2402201000
  5.climate change levy - 2711210000
  6.fuels or various types - 2710198500
  */
  it('🍻 RoW 🇮🇱 (Israel) - XI | Greyed out Beer excise duties | 3.beer |', function() {
    cy.visit('/duty-calculator/uk/2203001000/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('other');
    // select country from list
    cy.otherOriginList({value: 'Israel'});
    // Monetary value page
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Measure units
    cy.quantity({asv: '40', ltr: '45'});
    cy.contains('Which class of excise is applicable to your trade?');
    cy.contains('Excise duty applies to trade in this commodity code. Select which class of excise duty applies to your trade');

    cy.contains('For more information on excise duty classes, please see');
    cy.contains('UK Trade: excise, duties, reliefs, drawbacks and allowances (opens in new browser window)');

    cy.contains('431 - Alcoholic beverage with a strength not exceeding 1.2% ABV');
    cy.get('div:nth-of-type(1) > input[name=\'steps_excise[additional_code]\']').should('not.be.disabled');
    cy.contains('440 - Beer made in the UK – small brewery beer eligible to reduced rates (variable rate, that is, annual production more');
    cy.get('div:nth-of-type(2) > input[name=\'steps_excise[additional_code]\']').should('be.disabled');
    cy.get('div:nth-of-type(3) > input[name=\'steps_excise[additional_code]\']').should('be.disabled');

    cy.contains('Continue').click();
    // Error Message Capture
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Select an excise class');
    cy.get('.govuk-error-message').contains('Select an excise class');
    cy.get('.govuk-back-link').click();
    // Measure units
    cy.quantity({asv: '40', ltr: '45'});
    cy.contains('Which class of excise is applicable to your trade?');
    // select a valid option
    // Excise code 431
    cy.exciseCode('431');
    cy.contains('Excise additional code');
    cy.contains('431');
    cy.confirmPage();
    cy.dutyPage();
  });
  it('🚬 RoW 🇮🇩 (Indonesia) - XI  Cigarettes containing tobacco | 4.tobacco | ', function() {
    cy.visit('/duty-calculator/uk/2402201000/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('other');
    // select country from list

    cy.otherOriginList({value: 'Indonesia'});
    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('unacceptablecommercial');
    // EU duties apply
    cy.euDutiesApply();
    // Monetary value page
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Measure units
    cy.quantity({ret: '1000', mil: '1.5'});
    cy.contains('Excise duty applies to trade in this commodity code. Select which class of excise duty applies to your trade');
    cy.contains('For more information on excise duty classes, please see');
    cy.contains('About this commodity code').click();
    cy.get('.govuk-details  .govuk-link').click();
    cy.checkCommPage(`2402201000`);
    cy.go(-1);
    cy.contains('Continue').click();
    // Error Message Capture
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Select an excise class');
    cy.get('.govuk-error-message').contains('Select an excise class');
    cy.get('.govuk-back-link').click();
    // Measure units
    cy.quantity({ret: '1000', mil: '1.5'});
    // Excise code 431
    cy.exciseCode('611');
    cy.contains('Excise additional code');
    cy.contains('611');
    cy.confirmPage();
    cy.dutyPage();
  });

  it('⚡ RoW 🇮🇩 (Indonesia) - UK | 5.climate change levy |', function() {
    cy.visit('/duty-calculator/uk/2711210000/import-date');
    cy.validDate();
    cy.selectDestination('gb');
    cy.originList({value: 'Indonesia'});
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({mwh: '100'});
    // Select Document Code
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
    // Excise code
    cy.exciseCode('99c');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('990 - Climate Change Levy (Tax code 990): gas supplied by a gas utility or any gas supplied in a gaseous state');
    cy.contains('6.72 GBP / 1000 kWh');
  });
  it('🛢️  RoW 🇱🇮 (Liechtenstein) - XI  | 6.fuels or various types - White oils, liquid paraffin |', function() {
    cy.visit('/duty-calculator/uk/3811210027/import-date');

    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('other');
    // select country from list

    cy.otherOriginList({value: 'Liechtenstein'});

    // Trader Scheme
    cy.traderScheme('yes');
    // ✅  Final use in NI - Yes
    cy.finalUseNI('yes');
    cy.turnOver('more');
    // Planned processing - acceptable1
    cy.plannedXI('unacceptablecommercial');
    cy.euDutiesApply();
    // customs value
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    // Measure units
    cy.quantity({ltr: '100'});
    // doc code
    cy.docCode({xi: 'n990'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({xi: 'c119'});
    cy.contains('Continue').click();
    // doc code
    cy.docCode({xi: 'y021'});
    cy.contains('Continue').click();
    cy.contains('Which class of excise is applicable to your trade?');
    // Excise code 520
    cy.exciseCode('520');
    cy.contains('Excise additional code');
    cy.contains('520');
    cy.contains('C119, N990, Y021');
    cy.confirmPage();

    cy.dutyPage();
    cy.contains('Option 1: Third-country duty');
    cy.contains('520 - Light oil: unrebated (unmarked) – other unrebated light oil');
    cy.contains('Option 2: Tariff preference - European Economic Area');
    cy.contains('Option 3: Autonomous suspension under end-use');
    cy.contains('Option 4: Airworthiness tariff suspension');

    cy.get('.govuk-back-link').click();
    // Change Excise code to 551 - 0% excise duty
    cy.get('div:nth-of-type(12) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Which class of excise is applicable to your trade?');
    cy.exciseCode('551');
    cy.contains('Excise additional code');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('520 - Light oil: unrebated (unmarked) – other unrebated light oil').should('not.exist');

    cy.get('.govuk-back-link').click();
    // Change Excise code to 551 - 0% excise duty
    cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click();
    // doc code
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.dcStoppingPage();
  });
});
