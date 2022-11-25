/* eslint-disable max-len */
describe('🇪🇺 💡 | pages-XI.spec.js | Main Page ,headings ,sections - (XI version) |', function() {
  // --- HOTT-82 -------------
  // Page Title
  it('XI - Header text - Page- sections - Northern Ireland Online Tariff', function() {
    cy.visit('/xi/sections');
    cy.contains('Northern Ireland Online Tariff');
  });
  // Gov Logo
  it('XI - Header text - GOV.UK logo ', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-header').should('be.visible', 'GOV.UK');
  });
  it('XI - find_commodity page', function() {
    cy.visit('xi/find_commodity');
    cy.mainPageXI();
  });
  it('XI - Browse page ', function() {
    cy.visit('xi/browse');
    cy.browsePage();
    cy.contains(' Live animals; animal products').click();
    cy.contains('Section I - Live animals; animal products');
    cy.contains('Section I contains 5 chapters. Choose the chapter that best matches your goods.');
    cy.contains('There are important section notes for this part of the tariff:');
    cy.title().should('eq', 'Live animals; animal products - Northern Ireland Online Tariff - GOV.UK');
    // validate home breadcrumb
    cy.get('.govuk-breadcrumbs__link').contains('Browse').click();
    cy.contains('Browse the tariff');
    cy.get('.govuk-breadcrumbs__link').contains('Home').click();
    cy.contains('Look up commodity codes, import duties, taxes and controls');
  });
  it('XI - Sections page ', function() {
    cy.visit('xi/sections/12');
    cy.contains('UK Integrated Online Tariff');
    cy.contains('Section XII - Footwear, headgear, umbrellas, sun umbrellas, walking-sticks, seat-sticks, whips, riding-crops and parts thereof; prepared feathers and articles made therewith; artificial flowers; articles of human hair');
    cy.contains('Section XII contains 4 chapters. Choose the chapter that best matches your goods.');
  });
  it('XI - Chapter page ', function() {
    cy.visit('xi/chapters/98');
    cy.contains('Choose the heading that best matches your goods');
    cy.get('.govuk-summary-list').contains('Chapter');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.get('.govuk-summary-list').contains('Date of trade');
    cy.contains('Chapter 98 contains 1 heading. Choose the heading that best matches your goods.');

    cy.contains('Component parts of complete industrial plant in the framework of external trade (Commission Implementing Regulation (EU) 2020/1197 of 30 July 2020)').click();
    cy.contains('There are 96 commodities in this category. Choose the commodity code that best matches your goods to see more information. If your item is not listed by name, it may be shown under what it\'s used for, what it\'s made from or \'Other\'.');
  });
  it('XI - Heading page', function() {
    const headings = ['4301', '4802', '1702'];
    const comms = ['5', '18', '26'];
    for ( let i=0; i<headings.length; i++) {
      cy.visit(`xi/headings/${headings[i]}`);
      cy.get('.govuk-summary-list').contains('Heading');
      cy.get('.govuk-summary-list').contains('Classification');
      cy.get('.govuk-summary-list').contains('Date of trade');
      cy.contains(`There are ${comms[i]} commodities in this category. Choose the commodity code that best matches your goods to see more information. If your item is not listed by name, it may be shown under what it\'s used for, what it\'s made from or \'Other\'.`);
    }
  });
  it('XI - Commodity page - without Supp units', function() {
    cy.visit('xi/commodities/6406109010');
    cy.get('.govuk-summary-list').contains('Commodity');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.contains('Hand-made');
    cy.get('.govuk-summary-list').contains('Supplementary unit');
    cy.get('.govuk-summary-list').contains('No supplementary unit required.');
    cy.get('.govuk-summary-list').contains('Date of trade');
    cy.get('.govuk-summary-list').contains('What are supplementary units?').click();
    cy.contains('Supplementary units are used when an additional measurement unit is needed on customs declarations. For example: the quantity of the products as well as the weight in kilograms.');
  });

  it('XI - Search the Tariff section', function() {
    cy.visit('/xi/sections');
    cy.contains('Search the Northern Ireland Online Tariff');
    cy.searchForCommodity('9919000060');
    cy.checkCommPage('9919000060');
  });
  it('XI - A-Z section', function() {
    cy.visit('/xi/sections');
    cy.get('li:nth-of-type(3) > .govuk-header__link').click();
    cy.contains('A–Z of Classified Goods');
  });
  it('XI - Tools section', function() {
    cy.visit('/xi/sections');
    cy.get('li:nth-of-type(4) > .govuk-header__link').click();
    cy.contains('Certificates, licences and documents');
    cy.contains('Additional codes');
    cy.contains('Chemicals');
    cy.get('.govuk-list')
        .contains('Search for certificates, licences and other document codes.');
    cy.get('.govuk-list')
        .contains('Search for additional codes. Additional codes are used on the tariff for a number of purposes to help you to classify goods accurately on your customs declaration.');
    cy.get('.govuk-list')
        .contains('Search the tariff for footnotes');
    cy.get('.govuk-list')
        .contains('Search the tariff for chemicals by ');
  });
  it('XI - News section', function() {
    cy.visit('xi/find_commodity');
    cy.get('li:nth-of-type(5) > .govuk-header__link').click();
    cy.contains('Latest news');
  });

  // HOTT-164
  it('XI - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer');
    cy.contains('API Documentation');
    //   cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.be.visible')
    cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist');
  });
  it('XI - Notes tab ', function() {
    cy.visit('/xi/commodities/4101203000');

    cy.contains('TN701').should('not.be.visible');
    // Import Tab
    cy.get('a#tab_import').click();
    cy.contains('TN701').should('not.be.visible');
    // Export Tab
    cy.get('a#tab_export').click();
    cy.contains('TN701').should('not.be.visible');
    // Footnotes Tab
    cy.get('a#tab_footnotes').click();
    cy.contains('Notes for commodity 4101203000');
    cy.contains('TN701');
  });
  it('XI - News Banner', function() {
    cy.visit('xi/sections');
    cy.newsBannerXI();
  });
  it('XI - export tab', function() {
    cy.visit('xi/commodities/0702000007?country=#export');
    // without selecting any country
    cy.contains('Exporting from Northern Ireland');
    cy.contains('The commodity code for exporting and Intrastat reporting is 07020000');
    cy.contains('Check duties and customs procedures for exporting goods');
    cy.contains('Find information about how to move goods from the UK to the rest of the world.');

    cy.contains('Use this service to check:');
    cy.contains('rules and restrictions');
    cy.contains('tax and duty rates');
    cy.contains('what exporting documents you need');
    // links on page
    cy.get('div#export > p:nth-of-type(1) > a[target=\'_blank\']')
        .contains('Intrastat reporting')
        .should('have.attr', 'href', 'https://www.gov.uk/intrastat');

    // EU country selected
    cy.searchForCountry('Italy').type('{enter}');
    cy.contains('Exporting from Northern Ireland');
    cy.contains('Find information about how to move goods from the UK to Italy.');
    cy.contains('Check how to export commodity 0702000007 to Italy (link opens in new tab)');
    cy.get('p:nth-of-type(3) > a[target=\'_blank\']').should('have.attr', 'href', 'https://www.check-duties-customs-exporting-goods.service.gov.uk/summary?d=IT&ds=gtp&tab=tree&pc=0702000007');

    // Non EU country selected
    cy.searchForCountry('Andorra').type('{enter}');
    cy.contains('Exporting from Northern Ireland');
    cy.contains('Find information about how to move goods from the UK to the rest of the world.');
    cy.contains('Check how to export commodity goods (link opens in new tab)');
    cy.get('p:nth-of-type(3) > a[target=\'_blank\']').should('have.attr', 'href', 'https://www.check-duties-customs-exporting-goods.service.gov.uk');
  });
  it('XI - import tab', function() {
    cy.visit('xi/commodities/0706901000?day=10&month=12&year=2022#import');
    cy.contains('Importing into Northern Ireland');
    // this block exists on UK but not on XI from conversation with Matt and Will
    // cy.contains('To check how to import commodity 0706901000, select the country from which you are importing.');
    // cy.get('.tariff-inset-information [href]').click();
    // cy.countryPickerpage({value: 'Argentina'});
    // cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('Argentina');
    // cy.get('.autocomplete__wrapper').contains('Argentina (AR)');
    // cy.get('a#tab_import').click();
    // // check link after country selection
    // cy.contains('Now you have identified your commodity code, you can check how to import commodity 0702000007 from Argentina.');
    // cy.get('p:nth-of-type(2) > .govuk-link').should('have.attr', 'href', 'https://check-how-to-import-export-goods.service.gov.uk/manage-this-trade/check-licences-certificates-and-other-restrictions?commodity=0702000007&destinationCountry=GB&goodsIntent=bringGoodsToSell&importDateDay=10&importDateMonth=12&importDateYear=2022&importDeclarations=yes&importOrigin=&originCountry=AR&tradeType=import&userTypeTrader=true');
  });
  it.only('XI - Rules of origin - duty drawback - help page', {tags: ['notProduction']}, function() {
    cy.visit('/xi/help/rules_of_origin/duty_drawback');
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Guide to rules of origin');
    cy.contains('Duty drawback');
    cy.contains('What is duty drawback');
    cy.contains('Duty drawback - an example');
    cy.contains('Agreements which include a duty drawback provision');
    cy.get('.govuk-grid-column-one-third > div > nav > ul > li:nth-child(1)').contains('Rules of origin glossary');
    cy.get('.govuk-grid-column-one-third > div > nav > ul > li:nth-child(1) > a').should('have.attr', 'href', '/xi/glossary');
    cy.get('.govuk-grid-column-one-third > div > nav > ul > li:nth-child(2)').contains('Duty drawback');
    cy.get('.govuk-grid-column-one-third > div > nav > ul > li:nth-child(2) > a').should('have.attr', 'href', '/xi/help/rules_of_origin/duty_drawback');
  });
});
