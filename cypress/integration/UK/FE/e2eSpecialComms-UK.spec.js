describe('🇬🇧 💡 | e2eSpecialComms-UK | Select Commodities and measure details |', function () {
    it('Ferro-alloy \n Third country duty should be ad valorem 0.00% (known from the UK Integrated Tariff)\n' +
        '\n' +
        'There is no preference against the European Economic Area (2012)\n' +
        '\n' +
        'There are no duties that are expressed in currencies ', function () {
            cy.visit('/commodities/7202118000#import')
                .contains('Commodity information for 7202118000')
            cy.get('.govuk-header__content')
                .contains('UK Integrated Online Tariff')
            cy.get('#measure-20008997')
            cy.contains('Third country duty')
            cy.contains('0.00 %')
            cy.get('#measure-20125908')
            cy.contains('European Union (1013)')
            cy.contains('0.00 %')
        })
    it(' 🦬 Bison\n- Third country duty should be 12.00% + 147.00 GBP / 100kg (known from the UK Integrated Tariff) Duties are expressed in GBP', function () {
        cy.visit('/commodities/0201100021#import')
            .contains('Commodity information for 0201100021')
        cy.get('.govuk-header__content')
            .contains('UK Integrated Online Tariff')
        cy.get('#measure-20000065')
        cy.contains('Third country duty')
        cy.contains('12.00 % + 147.00 GBP / 100 kg')
    })
    it(' 🔊 Amplifiers\n also has a supplementary unit measure of p/st', function () {
        cy.visit('/commodities/8518400010#import')
            .contains('Commodity information for 8518400010')
        cy.get('.govuk-header__content')
            .contains('UK Integrated Online Tariff')
        cy.get('#measure-3719160')
        cy.contains('Supplementary unit')
        cy.contains('p/st')
    })
    it('Ceramic tiles \n- has anti-dumping measures for China - shows by a bold B999 against a Final anti-dumping duty measure\n' +
        '\n' +
        'Note that in the UK, the measure type will be called Final, not Definitive', function () {
            cy.visit('/commodities/6907220000?country=CN#import')
            cy.get('.govuk-header__content')
                .contains('UK Integrated Online Tariff')
            cy.get('#measure-20042370')
                .contains('Definitive anti-dumping duty Additional code: B999')
            //cy.get('#measure-20042370')
            //   .contains('Final anti-dumping duty Additional code: B999')

        })
    it(' 🍪 Sandwich biscuits\n Check that the third country duty has no Meursing-related components: it should be 8.00%', function () {
        cy.visit('/commodities/1905319100#import')
            .contains('Commodity information for 1905319100')
        cy.get('.govuk-header__content')
            .contains('UK Integrated Online Tariff')

        cy.get('#measure-20001944')
        cy.contains('Third country duty')
        cy.contains('8.00 %')
    })

    it(' 🍅 Cherry Tomatoes 🇲🇦 \n- Check that the duty is a standard ad valorem (8.00%) ,Check that there is no condition against the ad valorem third country duty,Check that there is a single quota for Morocco', function () {
        cy.visit('/commodities/0702000007?country=MA#import')
            .contains('Commodity information for 0702000007')
        cy.get('.govuk-header__content')
            .contains('UK Integrated Online Tariff')
        cy.contains('Third country duty')
        cy.contains('14.00 %')
        //  cy.get('#measure-20097244')
        cy.get('.govuk-tabs__panel')
        cy.contains('Non preferential tariff quota')
        cy.contains('Order No')
        cy.get('.table-line')
        cy.contains('050094').click()
        cy.get('.close [href]').click()
        cy.contains('050094')

    })
    it(' 🍺 Beer \n Has multiple excise lines expressed in litres,\n Identical to UK', function () {
        cy.visit('/commodities/2203001000#import')
            .contains('Commodity information for 2203001000')
        cy.get('.govuk-header__content')
            .contains('UK Integrated Online Tariff')
        // cy.get('#measure-2982608')
        cy.get('#measure-2982608')
        cy.contains('Supplementary unit')
        cy.contains('l')
        cy.get('#measure--406106')
            .contains('EXCISE - FULL, 441, IMPORTED BEER')
        cy.get('#measure--406106')
            .contains('Conditions')
            .click()
        cy.get('.tariff-info')
        cy.contains('Excises for All countries')
        cy.contains('E: The quantity or the price per unit declared, as appropriate, is equal or less than the specified maximum, or presentation of the required document')
        cy.contains('5000.00 Gross Production Apply the amount of the action (see components) 9.54 GBP / % vol')
        cy.get('.close [href]').click()
    })

    it('Turbines  \n Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms', function () {
        cy.visit('/commodities/8406810000#import')
            .contains('Commodity information for 8406810000')
        cy.get('.govuk-header__content')
            .contains('UK Integrated Online Tariff')
        cy.get('#measure-20123190')

        cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms')
        cy.get('#measure-20123190')
            .contains('Conditions').click()
        cy.get('.tariff-info')
        cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms for All countries')
        cy.contains('C990 Other certificates: End use authorisation ships and platforms (Column 8c, Annex A of Delegated Regulation (EU) 2015/2446) Apply the mentioned duty ')
        cy.get('.close [href]').click()
    })

    it(' 🚬 Cheroots\n EXCISE - FULL, 615, CIGARS duty of 305.32 GBP / kg - same as UK', function () {
        cy.visit('/commodities/2402100000#import')
            .contains('Commodity information for 2402100000')
        cy.get('.govuk-header__content')
            .contains('UK Integrated Online Tariff')
        cy.get('#measure--1010806399')
        cy.contains('EXCISE - FULL, 615, CIGARS')
        cy.contains('305.32 GBP / kg')
    })

    it(' 🍷 Piquette (type of wine) \n- Has a third country duty of:1.00 GBP/%vol/hl (check the peculiar units)', function () {
        cy.visit('/commodities/2206001000#import')
            .contains('Commodity information for 2206001000')
        cy.get('.govuk-header__content')
            .contains('UK Integrated Online Tariff')
        cy.get('#measure-20002794')
            .contains('Third country duty')
        cy.get('#measure-20002794')
            .contains('1.00 GBP / % vol/hl')
    })

})
