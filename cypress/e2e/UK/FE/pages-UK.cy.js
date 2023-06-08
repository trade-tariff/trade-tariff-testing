describe('🇬🇧 💡 | pages-UK.spec | Main Page - headers ,sections  - (UK version)|', function() {
  it('UK - Header text - sections page', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-header').should('be.visible', 'UK Integrated Online Tariff');
  });

  it('UK - GOV.UK logo ', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-header').should('be.visible', 'GOV.UK');
  });

  it('UK - find_commodity page', function() {
    cy.visit('/find_commodity');
    cy.mainPageUK();
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
    cy.contains('Section XII - Footwear');
    cy.contains('Section XII contains 4 chapters.');
  });

  it('UK - Chapter page ', function() {
    cy.visit('/chapters/97');
    cy.contains('Choose the heading that best matches your goods');
    cy.get('.govuk-summary-list').contains('Chapter');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.get('.govuk-summary-list').contains('Date of trade');
    cy.contains('Chapter 97 contains 6 headings. Choose the heading that best matches your goods.');
    cy.contains('There are important notes for classifying your goods shown further down this page');
  });

  it('UK - Heading page', function() {
    const headings = ['4301', '4802'];
    const comms = ['5', '18'];
    for ( let i=0; i<headings.length; i++) {
      cy.visit(`/headings/${headings[i]}`);
      cy.get('.govuk-summary-list').contains('Heading');
      cy.get('.govuk-summary-list').contains('Classification');
      cy.get('.govuk-summary-list').contains('Date of trade');
      cy.contains(`There are ${comms[i]} commodities in this category.`);
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
    cy.contains('Supplementary units are used');
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
    cy.get('.govuk-list').contains('Search for tariff quotas');
    cy.get('.govuk-list').contains('Search for certificates');
    cy.get('.govuk-list').contains('Search for additional codes.');
    cy.get('.govuk-list').contains('Search the tariff for footnotes');
    cy.get('.govuk-list').contains('Search the tariff for chemicals');
  });

  it('UK - News section', function() {
    cy.visit('/find_commodity');
    cy.get('li:nth-of-type(5) > .govuk-header__link').click();
    cy.contains('Trade tariff news bulletin');
  });

  it('UK - Notes tab ', function() {
    cy.visit('/commodities/4101203000');
    // Footnotes Tab
    cy.get('a#tab_footnotes').click();
    cy.contains('Notes for commodity 4101203000');
    cy.contains('TN701');
  });

  it('UK - News Banner', function() {
    cy.visit('/find_commodity');
    cy.get('div.latest-news-banner h2').contains('Are you importing goods into Northern Ireland?');
    cy.get('div.latest-news-banner a').contains('of onward movement').click();
    cy.url().should(
        'eq',
        'https://www.gov.uk/guidance/check-if-you-can-declare-goods-you-bring-into-northern-ireland-not-at-risk-of-moving-to-the-eu',
    );
  });

  it('UK - export tab', function() {
    cy.visit('/commodities/0702000007?country=#export');
    // without selecting any country
    cy.contains('Exporting from the UK');
    cy.contains('The commodity code for exporting and Intrastat reporting is 07020000');
    cy.get('#export > div').contains('Check duties and customs procedures for exporting goods');
    cy.contains('Find information about how to move goods from the UK to the rest of the world.');

    cy.contains('Use this service to check:');
    cy.contains('rules and restrictions');
    cy.contains('tax and duty rates');
    cy.contains('what exporting documents you need');
    // links on page
    cy.get('a[href^=\'https://www.gov.uk/intrastat\']').contains('Intrastat reporting');

    // EU country selected
    cy.searchForCountry('Italy').type('{enter}');
    //  cy.contains('Measures for Italy');
    cy.contains('Find information about how to move goods from the UK to Italy.');
    cy.get('a[href^=\'https://www.check-duties-customs-exporting-goods.service.gov.uk/summary?d=IT&ds=gtp&tab=tree&pc=0702000007\']')
        .contains('Check how to export commodity 0702000007 to Italy (link opens in new tab)');

    // Non EU country selected
    cy.searchForCountry('Andorra').type('{enter}');
    cy.contains('Exporting from the UK');
    cy.contains('Find information about how to move goods from the UK to the rest of the world.');
    cy.contains('Check how to export commodity goods (link opens in new tab)');
    cy.get('a[href^=\'https://www.check-duties-customs-exporting-goods.service.gov.uk\']')
        .contains('Check how to export commodity goods (link opens in new tab)');
  });
  it('UK - import tab', function() {
    cy.visit('commodities/0702000007?day=10&month=12&year=2022#import');
    cy.contains('Importing into the UK');
    cy.get('a[href^=\'/trading_partners\']').click();
    cy.countryPickerpage({value: 'Argentina'});
    cy.get('.govuk-summary-list__value').contains('Argentina').should('be.visible');

    cy.get('.autocomplete__wrapper').contains('Argentina (AR)');
    cy.get('a#tab_import').click();
  });
  it('UK - Rules of origin - duty drawback - help page', {tags: ['notProduction']}, function() {
    cy.visit('/help/rules_of_origin/duty_drawback');
    cy.contains('UK Integrated Online Tariff');
    cy.contains('Guide to rules of origin');
    cy.contains('Duty drawback');
    cy.contains('What is duty drawback');
    cy.contains('Duty drawback - an example');
    cy.contains('Agreements which include a duty drawback provision');
    cy.contains('UK-Albania Partnership, Trade and Cooperation Agreement');

    cy.get('tr > td > ul > li > a')
        .should(
            'have.attr',
            'href',
            'https://www.gov.uk/government/collections/uk-albania-partnership-trade-and-cooperation-agreement',
        );

    cy.contains('View origin reference document');

    cy.get('tr > td > ul > li:nth-child(2) > a').should(
        'have.attr',
        'href',
        '/roo_origin_reference_documents/211228_ORD_Albania_V1.1.odt',
    );

    cy.contains('Generalised Scheme of Preferences (GSP)');
    cy.contains('View agreement details');

    cy.get('tr:nth-child(22) > td:nth-child(2) > ul > li > a').should(
        'have.attr',
        'href',
        'https://www.gov.uk/government/publications/trading-with-developing-nations',
    );

    cy.contains('Rules of origin glossary');
    cy.get('.govuk-grid-column-one-third > div > nav > ul > li:nth-child(1) > a').should('have.attr', 'href', '/glossary');
    cy.get('.govuk-grid-column-one-third > div > nav > ul > li:nth-child(2)').contains('Duty drawback');
    cy
        .get('.govuk-grid-column-one-third > div > nav > ul > li:nth-child(2) > a')
        .should(
            'have.attr',
            'href',
            '/help/rules_of_origin/duty_drawback',
        );
  });
});
