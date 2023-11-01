describe('💷  | dcTraderScheme | UK Internal Market Scheme page |', function() {
  it('RoW - GB Page Validation', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');
    //    cy.visit(`/import-date?referred_service=uk&commodity_code=0702000007`)
    cy.contains('UK Integrated Online Tariff');
    cy.dcMainPage();
    cy.validDate();
    cy.contains('Continue').click();
    cy.contains('Which part of the UK are you importing into?');
    cy.get('#steps-import-destination-import-destination-xi-field').check();
    cy.contains('Continue').click();
    cy.contains('Which country are the goods coming from?');

    cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click();
    cy.contains('Continue').click();

    // trader page
    cy.contains('Are you authorised under the UK Internal Market Scheme?');
    cy.contains('If you are moving goods into Northern Ireland which are for sale to, or final use by, ');
    cy.contains('end consumers located in the UK and you are authorised under the UK Internal Market Scheme, then you may declare');
    cy.contains('your goods as being \'not at risk\' where the requirements are met. ');
    cy.contains('A \'not at risk\' good entering Northern Ireland from Great Britain will not be subject to duty.');

    cy.contains('Yes, I am authorised under the UK Internal Market Scheme');
    cy.contains('No, I am not authorised under the UK Internal Market Scheme');

    // static page links
    cy.contains('If you are not yet authorised, then you can find out more about applying for ');
    cy.contains('authorisation for the UK Internal Market Scheme.');
    cy.get('p > .govuk-link').click();
    cy.contains('Get authorised to declare goods you bring into Northern Ireland \'not at risk’ of of moving to the EU,');
    cy.contains('so that EU duty will not be payable on those goods.');
    cy.go('back');

    // Select Yes, I am registered with the UK Internal Market Scheme
    cy.get('div:nth-of-type(1) > input[name=\'steps_trader_scheme[trader_scheme]\']').check();
    cy.contains('Continue').click();

    // selection is persisted
    cy.go('back');
    cy.get('div:nth-of-type(1) > input[name=\'steps_trader_scheme[trader_scheme]\']')
        .parent()
        .find('input')
        .should('be.checked');

    // Select No,I am not registered with the UK Internal Market Scheme
    cy.get('div:nth-of-type(2) > input[name=\'steps_trader_scheme[trader_scheme]\']').check();
    cy.contains('Continue').click();
    // selection is persisted
    cy.go('back');
    cy.get('div:nth-of-type(2) > input[name=\'steps_trader_scheme[trader_scheme]\']')
        .parent()
        .find('input')
        .should('be.checked');
    cy.go('back');
    cy.contains('Continue').click();
    // empty values
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Select one of the two options');
    cy.get('#steps-trader-scheme-trader-scheme-error')
        .contains('Select one of the two options');

    // static links on page
    cy.contains('Find out more about the Windsor Framework');
    cy.contains('Apply for authorisation for the UK Internal Market Scheme').click();
    cy.contains('Windsor Framework unveiled to fix problems of the Northern Ireland Protocol');
  });
  it('RoW - NI Page Validation', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');
    // date
    cy.validDate();
    // destination
    cy.selectDestination('xi');
    // origin
    cy.selectOrigin('other');
    // select country from list

    cy.otherOriginList({value: 'Greenland'});

    // Trader Scheme
    cy.contains('Are you authorised under the UK Internal Market Scheme?');
    cy.contains('If you are moving goods into Northern Ireland which are for sale to, or final use by, ');
    cy.contains('end consumers located in the UK and you are authorised under the UK Internal Market Scheme, then you may declare');
    cy.contains('your goods as being \'not at risk\' where the requirements are met. ');
    cy.contains('A \'not at risk\' good entering Northern Ireland from Great Britain will not be subject to duty.');
    cy.contains('Yes, I am authorised under the UK Internal Market Scheme');
    cy.contains('No, I am not authorised under the UK Internal Market Scheme');
    // empty values
    cy.contains('Continue').click();
    cy.get('.govuk-error-summary');
    cy.contains('There is a problem');
    cy.contains('Select one of the two options');
    cy.get('#steps-trader-scheme-trader-scheme-error')
        .contains('Select one of the two options');

    // Select Yes, I am registered with the UK Internal Market Scheme
    cy.traderScheme('yes');
    // selection is persisted
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(1) > input[name=\'steps_trader_scheme[trader_scheme]\']')
        .parent()
        .find('input')
        .should('be.checked');

    // Select No,I am not registered with the UK Internal Market Scheme
    cy.traderScheme('no');
    // selection is persisted

    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(2) > input[name=\'steps_trader_scheme[trader_scheme]\']')
        .parent()
        .find('input')
        .should('be.checked');
    // static links on page
    cy.contains('Find out more about the Windsor Framework');
    cy.contains('Apply for authorisation for the UK Internal Market Scheme').click();
    cy.contains('Windsor Framework unveiled to fix problems of the Northern Ireland Protocol');
  });
  it('NI - Page Validation for UKIMS or UKTS before 30 Sept 2023', function() {
    cy.visit('/duty-calculator/uk/0702000007/import-date');
    cy.enterDate({day: '19', month: '09', year: '2023'});
    cy.contains('Continue').click();

    cy.contains('Which part of the UK are you importing into?');
    cy.get('#steps-import-destination-import-destination-xi-field').check();
    cy.contains('Continue').click();
    cy.contains('Which country are the goods coming from?');

    cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click();
    cy.contains('Continue').click();

    // trader page
    cy.contains('Were you authorised under the UK Trader Scheme (UKTS) or the UK Internal Market Scheme (UKIMS)?');
    cy.contains('If you were moving goods into Northern Ireland which are for sale to, or final use by, ');
    cy.contains('end consumers located in the UK and you were authorised under the UK Trader Scheme or the UK Internal Market Scheme, ');
    cy.contains('then you may declare your goods as being \'not at risk\' where the requirements are met. ');
    cy.contains('A \'not at risk\' good entering Northern Ireland from Great Britain will not be subject to duty.');

    cy.contains('Yes, I was authorised under the UK Trader Scheme or UK Internal Market Scheme at the time of the trade');
    cy.contains('No, I was not authorised under the UK Trader Scheme or UK Internal Market Scheme at the time of the trade');
    cy.contains('Please note that UK Internal Market scheme trades cannot benefit from expanded processing rules before 30 September 2023');
    cy.contains('Trades before this date will use the UK Trader Scheme rules on processing');

    // Select Yes, I am registered with the UK Trader Scheme (UKTS) or the UK Internal Market Scheme (UKIMS)
    cy.traderScheme('yes');
    // selection is persisted
    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(1) > input[name=\'steps_trader_scheme[trader_scheme]\']')
        .parent()
        .find('input')
        .should('be.checked');

    // Select No,I am not registered with the UK Trader Scheme (UKTS) or the UK Internal Market Scheme (UKIMS)
    cy.traderScheme('no');
    // selection is persisted

    cy.get('.govuk-back-link').click();
    cy.get('div:nth-of-type(2) > input[name=\'steps_trader_scheme[trader_scheme]\']')
        .parent()
        .find('input')
        .should('be.checked');
  });
});
