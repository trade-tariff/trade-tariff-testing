/* eslint-disable max-len */
describe('🇬🇧 💡 | pages-UK.spec | Main Page - headers ,sections  - (UK version)|', function() {
  // --- Headings to be changed for UK -------------

  // Page Title
  it('UK - Header text - sections page', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-header').should('be.visible', 'UK Integrated Online Tariff');
  });
  // Gov Logo
  it('UK - GOV.UK logo ', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-header').should('be.visible', 'GOV.UK');
  });
  it('UK - find_commodity page', function() {
    cy.visit('/find_commodity');
    cy.contains('The UK Integrated Online Tariff');
    cy.contains('Look up commodity codes, import duties, taxes and controls');
    cy.contains('Are you importing goods into Northern Ireland?');
    cy.contains('Search for a commodity');
    cy.contains('The UK Integrated Online Tariff helps you to:');
    cy.contains('find commodity codes for imports into or exports out of the UK');
    cy.contains('find the taxes and duties that apply to those imports');
    cy.contains('find out which certificates and licences apply to the import of your goods');
    cy.contains('The first step is to find the commodity that you are importing or exporting.');
    cy.contains('Enter the name of the goods or a commodity code');
    cy.contains('Commodity codes are 10-digit numbers that classify goods so you can fill in declarations and other paperwork. You must use the right commodity code.');
    cy.contains('Alternatively, you can browse the goods classification or look for your product in the A-Z.');
  });
  it('UK - Browse page ', function() {
    cy.visit('/browse');
    cy.browsePage();
    cy.contains(' Live animals; animal products').click();
    cy.contains('Section I - Live animals; animal products');
    cy.contains('Section I contains 5 chapters. Choose the chapter that best matches your goods.');
    cy.contains('There are important section notes for this part of the tariff:');
    cy.title().should('eq', 'Live animals; animal products - UK Integrated Online Tariff - GOV.UK');
    // validate home breadcrumb
    cy.get('.govuk-breadcrumbs__link').contains('Browse').click();
    cy.contains('Browse the tariff');
    cy.get('.govuk-breadcrumbs__link').contains('Home').click();
    cy.contains('Look up commodity codes, import duties, taxes and controls');
  });
  it('UK - Sections page ', function() {
    cy.visit('/sections/12');
    cy.contains('UK Integrated Online Tariff');
    cy.contains('Section XII - Footwear, headgear, umbrellas, sun umbrellas, walking-sticks, seat-sticks, whips, riding-crops and parts thereof; prepared feathers and articles made therewith; artificial flowers; articles of human hair');
    cy.contains('Section XII contains 4 chapters. Choose the chapter that best matches your goods.');
  });
  it('UK - Chapter page ', function() {
    cy.visit('/chapters/98');
    cy.contains('Choose the heading that best matches your goods');
    cy.get('.govuk-summary-list').contains('Chapter');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.get('.govuk-summary-list').contains('Date of trade');
    cy.contains('Chapter 98 contains 1 heading. Choose the heading that best matches your goods.');

    cy.contains('Component parts of complete industrial plant in the framework of external trade (Commission Implementing Regulation (EU) 2020/1197 of 30 July 2020)').click();
    cy.contains('There are 96 commodities in this category. Choose the commodity code that best matches your goods to see more information. If your item is not listed by name, it may be shown under what it\'s used for, what it\'s made from or \'Other\'.');
  });
  it('UK - Heading page', function() {
    const headings = ['4301', '4802'];
    const comms = ['5', '18'];
    for ( let i=0; i<headings.length; i++) {
      cy.visit(`/headings/${headings[i]}`);
      cy.get('.govuk-summary-list').contains('Heading');
      cy.get('.govuk-summary-list').contains('Classification');
      cy.get('.govuk-summary-list').contains('Date of trade');

      cy.contains(`There are ${comms[i]} commodities in this category. Choose the commodity code that best matches your goods to see more information. If your item is not listed by name, it may be shown under what it\'s used for, what it\'s made from or \'Other\'.`);
    }
  });
  it('UK - Commodity page - with Supp units', function() {
    cy.visit('/commodities/6401929000');
    cy.get('.govuk-summary-list').contains('Commodity');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.contains('With uppers of plastics');
    cy.get('.govuk-summary-list').contains('Supplementary unit');
    cy.get('.govuk-summary-list').contains('Number of pairs (pa)');
    cy.get('.govuk-summary-list').contains('Date of trade');
    cy.get('.govuk-summary-list').contains('What are supplementary units?').click();
    cy.contains('Supplementary units are used when an additional measurement unit is needed on customs declarations. For example: the quantity of the products as well as the weight in kilograms.');
  });
  it('UK - Search the Tariff section', function() {
    cy.visit('/find_commodity');
    cy.contains('Search the UK Integrated Online Tariff');
    cy.searchForCommodity('9919000060');
    cy.checkCommPage('9919000060');
  });
  it('UK - A-Z section', function() {
    cy.visit('/find_commodity');
    cy.get('li:nth-of-type(3) > .govuk-header__link').click();
    cy.contains('A–Z of Classified Goods');
  });
  it('UK - Tools section', function() {
    cy.visit('/find_commodity');
    cy.get('li:nth-of-type(4) > .govuk-header__link').click();
    cy.contains('Certificates, licences and documents');
    cy.contains('Additional codes');
    cy.contains('Chemicals');
    cy.get('.govuk-list')
        .contains('Search for tariff quotas, including daily updated balances.');
    cy.get('.govuk-list')
        .contains('Search for certificates, licences and other document codes.');
    cy.get('.govuk-list')
        .contains('Search for additional codes. Additional codes are used on the tariff for a number of purposes to help you to classify goods accurately on your customs declaration.');
    cy.get('.govuk-list')
        .contains('Search the tariff for footnotes');
    cy.get('.govuk-list')
        .contains('Search the tariff for chemicals by ');
  });
  it('UK - News section', function() {
    cy.visit('/find_commodity');
    cy.get('li:nth-of-type(5) > .govuk-header__link').click();
    cy.contains('Latest news');
  });
  // HOTT-164
  it('UK - Remove the link to the EU website for looking up measures, geographical areas and regulations - Main Page ', function() {
    cy.visit('/find_commodity');
    cy.contains('API Documentation');
    // cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.be.visible')
    cy.contains('Integrated tariff of the European Community (TARIC) database').should('not.exist');
  });
  it('UK - Notes tab ', function() {
    cy.visit('/commodities/4101203000');
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
  it('UK - News Banner', function() {
    cy.visit('/find_commodity');
    cy.newsBannerUK();
  });
  it('UK - export tab', function() {
    cy.visit('/commodities/0702000007?country=#export');
    // without selecting any country
    cy.contains('Exporting from the UK');
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
    //  cy.contains('Measures for Italy');
    cy.contains('Find information about how to move goods from the UK to Italy.');
    cy.contains('Check how to export commodity 0702000007 to Italy (link opens in new tab)');
    cy.get('p:nth-of-type(3) > a[target=\'_blank\']').should('have.attr', 'href', 'https://www.check-duties-customs-exporting-goods.service.gov.uk/summary?d=IT&ds=gtp&tab=tree&pc=0702000007');

    // Non EU country selected
    cy.searchForCountry('Andorra').type('{enter}');
    cy.contains('Exporting from the UK');
    cy.contains('Find information about how to move goods from the UK to the rest of the world.');
    cy.contains('Check how to export commodity goods (link opens in new tab)');
    cy.get('p:nth-of-type(3) > a[target=\'_blank\']').should('have.attr', 'href', 'https://www.check-duties-customs-exporting-goods.service.gov.uk');
  });
  it('UK - import tab', function() {
    cy.visit('commodities/0702000007?day=10&month=12&year=2022#import');
    cy.contains('Importing into the UK');
    cy.contains('To check how to import commodity 0702000007, select the country from which you are importing.');
    cy.get('.tariff-inset-information [href]').click();
    cy.countryPickerpage({value: 'Argentina'});
    cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('Argentina');

    cy.get('.autocomplete__wrapper').contains('Argentina (AR)');
    cy.get('a#tab_import').click();
    // check link after country selection
    cy.contains('Now you have identified your commodity code, you can check how to import commodity 0702000007 from Argentina.');
    cy.get('p:nth-of-type(2) > .govuk-link').should('have.attr', 'href', 'https://check-how-to-import-export-goods.service.gov.uk/manage-this-trade/check-licences-certificates-and-other-restrictions?commodity=0702000007&destinationCountry=GB&goodsIntent=bringGoodsToSell&importDateDay=10&importDateMonth=12&importDateYear=2022&importDeclarations=yes&importOrigin=&originCountry=AR&tradeType=import&userTypeTrader=true');
  });
});
