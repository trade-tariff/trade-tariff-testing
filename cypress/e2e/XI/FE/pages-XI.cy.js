describe('🇪🇺 💡 | pages-XI.spec.js | Main Page ,headings ,sections - (XI version) |', function() {
  it('XI - Header text - Page- sections - Northern Ireland Online Tariff', function() {
    cy.visit('/xi/sections');
    cy.contains('Northern Ireland Online Tariff');
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
    cy.contains('Section XII - Footwear');
    cy.contains('Section XII contains 4 chapters. Choose the chapter that best matches your goods.');
  });
  it('XI - Chapter page ', function() {
    cy.visit('xi/chapters/97');
    cy.contains('Choose the heading that best matches your goods');
    cy.get('.govuk-summary-list').contains('Chapter');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.get('.govuk-summary-list').contains('Date of trade');
    cy.contains('Chapter 97 contains 6 headings. Choose the heading that best matches your goods.');
    cy.contains('There are important notes for classifying your goods shown further down this page');
  });
  it('XI - Heading page', function() {
    cy.visit('xi/headings/4301');
    cy.get('.govuk-summary-list').contains('Heading');
    cy.get('.govuk-summary-list').contains('Classification');
    cy.get('.govuk-summary-list').contains('Date of trade');
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
        .contains('Search for additional codes.');
    cy.get('.govuk-list')
        .contains('Search the tariff for footnotes');
    cy.get('.govuk-list')
        .contains('Search the tariff for chemicals by ');
  });

  it('XI - News section', function() {
    cy.visit('xi/find_commodity');
    cy.get('li:nth-of-type(5) > .govuk-header__link').click();
    cy.contains('Trade tariff news bulletin');
  });

  it('XI - Notes tab ', function() {
    cy.visit('/xi/commodities/4101203000');
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
    cy.get('p:nth-of-type(3) > a[target=\'_blank\']').should(
        'have.attr',
        'href',
        'https://www.check-duties-customs-exporting-goods.service.gov.uk/summary?d=IT&ds=gtp&tab=tree&pc=0702000007',
    );

    // Non EU country selected
    cy.searchForCountry('Andorra').type('{enter}');
    cy.contains('Exporting from Northern Ireland');
    cy.contains('Find information about how to move goods from the UK to the rest of the world.');
    cy.contains('Check how to export commodity goods (link opens in new tab)');
    cy.get('p:nth-of-type(3) > a[target=\'_blank\']').should(
        'have.attr',
        'href',
        'https://www.check-duties-customs-exporting-goods.service.gov.uk',
    );
  });
  it('XI - import tab', function() {
    cy.visit('xi/commodities/0706901000?day=10&month=12&year=2022#import');
    cy.contains('Importing into Northern Ireland');
  });
  it('XI - Rules of origin - duty drawback - help page', {tags: ['notProduction']}, function() {
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
    cy.get('.govuk-grid-column-one-third > div > nav > ul > li:nth-child(2) > a').should(
        'have.attr',
        'href',
        '/xi/help/rules_of_origin/duty_drawback',
    );
  });
});
