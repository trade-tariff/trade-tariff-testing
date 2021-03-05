describe('🇪🇺 💡 | e2eSpecialComms-XI.spec | XI - Select Commodities and measure details |',function() {
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('Ferro-alloy \n' +'Third country duty should be ad valorem 2.7%\n' +
        '\n' +
        'There is a tariff preference of 0.0% against the European Economic Area (2012)\n' +
        '\n' +
        'There are no duties that are expressed in currencies ', function () {
        cy.visit('/commodities/7202118000#import')
            .contains('Commodity information for 7202118000')
        cy.get('.govuk-header__content')
            .contains('Northern Ireland Online Tariff')
          cy.get('.103')
            cy.contains('Third country duty')
            cy.contains('2.70 %')
        cy.get('#measure-3632528')
            cy.contains('European Economic Area (2012)')
            cy.contains('0.00 %')
        cy.get('#measure-3165671')
            cy.contains('Tariff preference')
            cy.contains('0.00 %')
    })
    it(' 🦬 Bison \n Third country duty should be a compound duty of 12.80 % + 176.80 EUR / 100 kg\n' +
        '\n' +
        'Duties are expressed in EUROs',function(){
        cy.visit('/commodities/0201100021#import')
            .contains('Commodity information for 0201100021')
        cy.get('.govuk-header__content')
            .contains('Northern Ireland Online Tariff')
        cy.get('#measure-2049567')
            cy.contains('Third country duty')
            cy.contains('12.80 % + 176.80 EUR / 100 kg')
    })
    it('  🔊 Amplifiers\n also has a supplementary unit measure of p/st',function(){
        cy.visit('/commodities/8518400010#import')
            .contains('Commodity information for 8518400010')
        cy.get('.govuk-header__content')
            .contains('Northern Ireland Online Tariff')
        cy.get('#measure-3719160')
        cy.contains('Supplementary unit')
        cy.contains('p/st')
    })

    it('Ceramic tiles \n has anti-dumping measures for China\n' +
        '\n' +
        'Shown by a bold B999 against a Definitive anti-dumping duty measure',function(){
        cy.visit('/commodities/6907220000?country=CN#import')
        cy.get('.govuk-header__content')
            .contains('Northern Ireland Online Tariff')
        cy.get('#measure-3600805')
            .contains('Definitive anti-dumping duty Additional code: B999')

    })
    it(' 🍪 Sandwich biscuits\n Check that the third country duty contains Meursing-related components, e.g. check for strings EA and ADSZ\n' +
        '\n' +
        '9.00 % + EA MAX 24.20 % +ADSZ',function(){
        cy.visit('/commodities/1905319100#import')
            .contains('Commodity information for 1905319100')
        cy.get('.govuk-header__content')
            .contains('Northern Ireland Online Tariff')
        cy.get('#measure-2772110')
            cy.contains('Third country duty')
            cy.contains('9.00 % + EA MAX 24.20 % +ADSZ')
    })

    it(' 🍅 Cherry Tomatoes \n Check that there is no directly assigned third country duty\n' +
        '\n' +
        'Check that on clicking on the conditions link, that a conditions popup appears that has a table with 7 rows in it: creative license to do what you need on this one.\n' +
        '\n' +
        'Check that there are no quotas at all' +
        '\n' ,function(){
        cy.visit('/commodities/0702000007#import')
            .contains('Commodity information for 0702000007')
        cy.get('.govuk-header__content')
            .contains('Northern Ireland Online Tariff')
        cy.get('#measure-3788666')
        cy.contains('Third country duty')
        cy.get('#measure-3788666')
          .contains('Conditions')
            .click()
        cy.get('.tariff-info')
            cy.contains('Third country duty for All countries')
            cy.contains('Greater than or equal to 84.60 EUR / 100 kg Apply the amount of the action 8.80 %')
            cy.contains('Greater than or equal to 82.90 EUR / 100 kg Apply the amount of the action 8.80 % + 1.70 EUR / 100 kg')
            cy.contains('Greater than or equal to 81.20 EUR / 100 kg Apply the amount of the action 8.80 % + 3.40 EUR / 100 kg')
            cy.contains('Greater than or equal to 79.50 EUR / 100 kg Apply the amount of the action 8.80 % + 5.10 EUR / 100 kg')
            cy.contains('Greater than or equal to 77.80 EUR / 100 kg Apply the amount of the action 8.80 % + 6.80 EUR / 100 kg')
            cy.contains('Greater than or equal to 0.00 EUR / 100 kg Apply the amount of the action 8.80 % + 29.80 EUR / 100 kg')
        cy.get('.close [href]').click()
    })


    it(' 🍻 Beer\n Has multiple excise lines expressed in litres,\n Identical to UK',function(){
        cy.visit('/commodities/2203001000#import')
            .contains('Commodity information for 2203001000')
        cy.get('.govuk-header__content')
            .contains('Northern Ireland Online Tariff')
        cy.get('#measure-2982608')
         .contains('Supplementary unit')
        cy.get('#measure-2982608')
         .contains('l')
        cy.get('.DCA')
            .contains('EXCISE - FULL, 431, WINE BASED BEVERAGE OF LESS THAN 1.2% VOL')
    })

    it('Turbines \n Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms',function() {
        cy.visit('/commodities/8406810000#import')
            .contains('Commodity information for 8406810000')
        cy.get('.govuk-header__content')
            .contains('Northern Ireland Online Tariff')
        cy.get('#measure-3489354')
        cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms')
        cy.get('#measure-3489354')
            .contains('Conditions').click()
        cy.get('.tariff-info')
        cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms for All countries')
        cy.contains('C990 Other certificates: End use authorisation ships and platforms (Column 8c, Annex A of Delegated Regulation (EU) 2015/2446) Apply the mentioned duty ')
        cy.get('.close [href]').click()
    })

    it(' 🚬 Cheroots\n EXCISE - FULL, 615, CIGARS duty of 305.32 GBP / kg - same as UK',function(){
        cy.visit('/commodities/2402100000#import')
                .contains('Commodity information for 2402100000')
        cy.get('.govuk-header__content')
                .contains('Northern Ireland Online Tariff')
        cy.get('.FAE')
            cy.contains('EXCISE - FULL, 615, CIGARS')
            cy.contains('305.32 GBP / kg')
        })

    it(' 🍷 Piquette(type of wine) \n-Has a third country duty of:\n' +
        '\n' +
        '1.30 EUR / % vol / hl MIN 7.20 EUR / hl',function(){
        cy.visit('/commodities/2206001000#import')
            .contains('Commodity information for 2206001000')
        cy.get('.govuk-header__content')
            .contains('Northern Ireland Online Tariff')
        cy.get('#measure-2052957')
        cy.contains('Third country duty')
        cy.contains('1.30 EUR / % vol/hl MIN 7.20 EUR / hl')
    })

})