describe('🛃 | dcExciseCode.spec.js | Validate excise code on duty calculator |', function() {
  it('🚬 RoW 🇮🇩 (Indonesia) - XI  Cigarettes containing tobacco | 4.tobacco | ', function() {
    cy.visit('/duty-calculator/uk/2402201000/import-date');
    cy.validDate();
    cy.selectDestination('xi');
    cy.selectOrigin('other');

    cy.otherOriginList({value: 'Indonesia'});
    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');
    cy.plannedXI('unacceptablecommercial');
    cy.euDutiesApply();
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({ret: '1000', mil: '1.5'});
    cy.contains('Excise duty applies to trade in this commodity code. Select which class of excise duty applies to your trade');
    cy.contains('For more information on excise duty classes, please see');
    cy.contains('About this commodity code').click();
    cy.get('.govuk-details  .govuk-link').click();
    cy.checkCommPage(`2402201000`);
    cy.go(-1);
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary').contains('There is a problem');
    cy.contains('Select an excise class');
    cy.get('.govuk-error-message').contains('Select an excise class');
    cy.get('.govuk-back-link').click();
    cy.quantity({ret: '1000', mil: '1.5'});
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
    cy.docCode({uk: 'c990'});
    cy.contains('Continue').click();
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

    cy.otherOriginList({value: 'Liechtenstein'});

    cy.traderScheme('yes');
    cy.finalUseNI('yes');
    cy.turnOver('more');
    cy.plannedXI('unacceptablecommercial');
    cy.euDutiesApply();
    cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
    cy.quantity({ltr: '100'});
    cy.docCode({xi: 'n990'});
    cy.contains('Continue').click();
    cy.docCode({xi: 'c119'});
    cy.contains('Continue').click();
    cy.docCode({xi: 'y021'});
    cy.contains('Continue').click();
    cy.contains('Which class of excise is applicable to your trade?');
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
    cy.get('div:nth-of-type(12) > .govuk-summary-list__actions > .govuk-link').click();
    cy.contains('Which class of excise is applicable to your trade?');
    cy.exciseCode('551');
    cy.contains('Excise additional code');
    cy.confirmPage();
    cy.dutyPage();
    cy.contains('520 - Light oil: unrebated (unmarked) – other unrebated light oil').should('not.exist');

    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click();
    cy.docCode({xi: 'none'});
    cy.contains('Continue').click();
    cy.dcStoppingPage();
  });
});
