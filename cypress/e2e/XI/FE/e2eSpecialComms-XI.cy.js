describe('🇪🇺 💡 | e2eSpecialComms-XI.spec | XI - Select Commodities and measure details |', {tags: ['config', 'xbrowser-tag']}, function() {
  it('Ferro-alloy \n' + 'Third country duty should be ad valorem 2.7%\n' +
        '\n' +
        'There is a tariff preference of 0.00% against the European Economic Area (2012)\n' +
        '\n' +
        'There are no duties that are expressed in currencies ', function() {
    cy.visit('/xi/commodities/7202118000#import');
    cy.checkCommPage('7202118000');
    cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff');
    cy.get('.103');
    cy.contains('Third country duty');
    cy.contains('2.70%');
    cy.get('#measure-3632528');
    cy.contains('European Economic Area (2012)');
    cy.contains('0.00%');
    cy.get('#measure-3165671');
    cy.contains('Tariff preference');
    cy.contains('0.00%');
  });
  it(' 🦬 Bison \n Third country duty should be a compound duty of 12.80 % + 176.80 EUR / 100 kg\n' +
        '\n' +
        'Duties are expressed in EUROs', function() {
    cy.visit('/xi/commodities/0201100021#import');
    cy.checkCommPage('0201100021');
    cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff');
    cy.get('#measure-2049567');
    cy.contains('Third country duty');
    cy.contains('12.80% + €176.80 / 100 kg');
  });
  it('  🔊 Amplifiers\n also has a supplementary unit measure of p/st', function() {
    cy.visit('/xi/commodities/8518400010#import');
    cy.checkCommPage('8518400010');
    cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff');
    cy.get('#measure-3719160');
    cy.contains('Supplementary unit');
    cy.contains('p/st');
  });
  it('China has definitive anti-dumping duties on Ceramics', function() {
    cy.visit('/xi/commodities/6907220000?country=CN#import');
    cy.get('#measure-4043894 > td.measure-type-col').contains('Definitive anti-dumping');
    cy.get('#measure-4043894 > td.measure-type-col').contains('Additional code: C505');
  });
  it(' 🍪 Sandwich biscuits\n Check that the third country duty contains Meursing-related components, e.g. check for strings EA and ADSZ\n' +
        '\n' +
        '9.00 % + EA MAX 24.20 % +ADSZ', function() {
    cy.visit('/xi/commodities/1905319100#import');
    cy.checkCommPage('1905319100');
    cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff');
    cy.get('#measure-2772110');
    cy.contains('Third country duty');
    cy.contains('9.00% + EA MAX 24.20% +ADSZ');
  });
  it('third country measure on cherry tomatoes', function() {
    cy.visit('/xi/commodities/0702000007');
    cy.checkCommPage('0702000007');
    cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff');
    cy.contains('Third country duty');
    cy.get('#measure-4011406').contains('Conditions').click();
    cy.contains('Third country duty for All countries');
    cy.contains('Meet one of the following conditions and supply the relevant document code(s) on your declaration.');
    cy.get('.info-content').contains('The price of your goods is greater than or equal to 0.00 EUR / 100 kg');
    cy.get('.close [href]').click();
  });
  it('suspension measure on Turbines', function() {
    cy.visit('/xi/commodities/8406810000#import');
    cy.checkCommPage('8406810000');
    cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff');
    cy.get('#measure-3489354');
    cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms');
    cy.get('#measure-3489354').contains('Conditions').click();
    cy.contains('Suspension - goods for certain categories of ships, boats');
    cy.contains('End use authorisation ships and platforms');
    cy.get('.close [href]').click();
  });
  it('excise duties on Cigars', function() {
    cy.visit('/xi/commodities/2402100000#import');
    cy.get('.measure-type-col').contains('Excises');
    cy.get('.measure-type-col').contains('Additional code: X615');
  });
  it('prohibition measure on plastics', function() {
    cy.visit('/xi/commodities/3921139000');
    cy.get('#measure-20101500 > td.measure-type-col > span').contains('Import prohibition');
    cy.get('#measure-20101500 > td.measure-type-col > div.residual-inset')
        .contains('Prohibition applies to goods covered under additional code: 4115');
  });
  it(' 🍷 Piquette(type of wine) \n-Has a third country duty of:\n' +
        '\n' +
        '1.30 EUR / % vol / hl MIN 7.20 EUR / hl', function() {
    cy.visit('/xi/commodities/2206001000#import');
    cy.checkCommPage('2206001000');
    cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff');
    cy.contains('Third country duty');
    cy.contains('€1.30 / percentage ABV (% vol) per 100 litre (hl) MIN €7.20 / 100 litre (hl)');
  });
});
