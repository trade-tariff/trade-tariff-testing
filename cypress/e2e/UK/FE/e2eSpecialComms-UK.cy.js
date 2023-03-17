describe('🇬🇧 💡 | e2eSpecialComms-UK | Select Commodities and measure details |', {tags: ['config', 'xbrowser-tag']}, function() {
  it('Ferro-alloy \n Third country duty should be ad valorem 0.00% (known from the UK Integrated Tariff)\n' +
        '\n' +
        'There is no preference against the European Economic Area (2012)\n' +
        '\n' +
        'There are no duties that are expressed in currencies ', function() {
    cy.visit('/commodities/7202118000');
    cy.checkCommPage('7202118000');
    cy.get('.govuk-header__content')
        .contains('UK Integrated Online Tariff');
    cy.get('#measure-20008997');
    cy.contains('Third country duty');
    cy.contains('0.00%');
  });
  it('third country duties on Bison', function() {
    cy.visit('/commodities/0201100021#import');
    cy.checkCommPage('0201100021');
    cy.get('.govuk-header__content')
        .contains('UK Integrated Online Tariff');
    cy.get('#measure-20000065');
    cy.contains('Third country duty');
    cy.contains('12.00% + £147.00 / 100 kg');
  });
  it(' 🔊 Amplifiers\n also has a supplementary unit measure of p/st', function() {
    cy.visit('/commodities/8518400010#import');
    cy.checkCommPage('8518400010');
    cy.get('.govuk-header__content')
        .contains('UK Integrated Online Tariff');
    cy.get('#measure-3719160');
    cy.contains('Supplementary unit');
    cy.contains('p/st');
  });

  it('China has definitive anti-dumping duties on Ceramics', function() {
    cy.visit('/commodities/6907220000?country=CN#import');

    cy.get('#measure-20042370 > td.measure-type-col')
        .contains('Definitive anti-dumping');

    cy.get('#measure-20042370 > td.measure-type-col')
        .contains('Additional code: B999');
  });

  it(' 🍪 Sandwich biscuits\n Check that the third country duty has no Meursing-related components: it should be 8.00%', function() {
    cy.visit('/commodities/1905319100#import');
    cy.checkCommPage('1905319100');
    cy.get('.govuk-header__content')
        .contains('UK Integrated Online Tariff');

    cy.get('#measure-20001944');
    cy.contains('Third country duty');
    cy.contains('8.00%');
  });

  it(' 🍅 Cherry Tomatoes 🇲🇦 \n- Check that Israel has a preferential tariff quota', function() {
    cy.visit('/commodities/0702000007?country=IL');
    cy.checkCommPage('0702000007');
    cy.get('.govuk-header__content')
        .contains('UK Integrated Online Tariff');
    cy.contains('Third country duty');
    cy.contains('Preferential tariff quota');
    cy.contains('051304').click();
    cy.contains('Quota order number 051304');
    cy.contains('Quota order number');
    cy.get('.close [href]').click();
  });
  it(' 🍺 Beer \n Has multiple excise lines expressed in litres,\n Identical to UK', function() {
    cy.visit('/commodities/2203001000#import');
    cy.checkCommPage('2203001000');
    cy.get('.govuk-header__content')
        .contains('UK Integrated Online Tariff');
    cy.get('#measure-2982608');
    cy.contains('Supplementary unit');
    cy.contains('l');
    cy.get('#measure--406106')
        .contains('EXCISE - FULL, 441, IMPORTED BEER');
    cy.get('#measure--406106')
        .contains('Conditions')
        .click();
    cy.get('.tariff-info');
    cy.contains('Excises for All countries');
    cy.contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
    cy.get('.tariff-info').contains('Excise duty on beer from small breweries');
    cy.get('.close [href]').click();
  });

  it('supension measure on Turbines', function() {
    cy.visit('/commodities/8406810000#import');
    cy.checkCommPage('8406810000');
    cy.get('.govuk-header__content')
        .contains('UK Integrated Online Tariff');
    cy.get('#measure-20123190');

    cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms');
    cy.get('#measure-20123190')
        .contains('Conditions').click();
    cy.get('.tariff-info');
    cy.contains('Suspension - goods for certain categories of ships, boats');
    cy.contains('End use authorisation ships and platforms');
    cy.get('.close [href]').click();
  });

  it('excise duties on Cigars', function() {
    cy.visit('/commodities/2402100000#import');

    cy.get('#measure--1012049813 > td.measure-type-col')
        .contains('Excises');

    cy.get('#measure--1012049813 > td.measure-type-col')
        .contains('Additional code: X615');
  });

  it('prohibition measure on plastics', function() {
    cy.visit('/commodities/3921139000');

    cy.get('#measure-20101500 > td.measure-type-col > span')
        .contains('Import prohibition');

    cy.get('#measure-20101500 > td.measure-type-col > div.residual-inset')
        .contains('Prohibition applies to goods covered under additional code: 4115');
  });

  it(' 🍷 Piquette (type of wine) \n- Has a third country duty of:1.00 GBP/%vol/hl (check the peculiar units)', function() {
    cy.visit('/commodities/2206001000#import');
    cy.checkCommPage('2206001000');
    cy.get('.govuk-header__content')
        .contains('UK Integrated Online Tariff');
    cy.get('#measure-20002794')
        .contains('Third country duty');
    cy.get('#measure-20002794')
        .contains('£1.00 / percentage ABV (% vol) per 100 litre (hl)');
  });
  it(' 🐸 Frogs legs \n ', function() {
    cy.visit('/commodities/0208907000#import');
    cy.checkCommPage('0208907000');
    cy.get('.govuk-header__content')
        .contains('UK Integrated Online Tariff');
  } );
});
