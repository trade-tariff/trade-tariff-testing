/* eslint-disable max-len */
describe(' 🇪🇺 💡 |pageLinks-XI.spec| Terms and Conditions, Cookies ,Privacy links - XI ', function() {
//  HOTT-192
  it('XI - Terms and Conditions-navigates to right UK page ', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__inline-list > li:nth-of-type(3) > .govuk-footer__link')
        .contains('Terms and conditions').click();
    cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
    cy.get('.govuk-main-wrapper')
        .contains('Terms and conditions');
  });
  it('XI - Terms and Conditions-navigates to right UK page ', function() {
    cy.visit('/xi/terms?day=1&month=1&year=2022');
    cy.contains('Wrong codes and penalties');
    cy.contains('It\'s your responsibility to get your commodity code and licences right, even if you use an agent.');
    cy.contains('HM Revenue and Customs (HMRC) can fine you, seize your goods and delay their release from customs if you import or export goods with the wrong codes.');
    cy.contains('Users of the Northern Ireland Online Tariff should be aware that in any case where information on this website is at variance with that contained in the appropriate legislation, the latter will represent the correct legal position.');
    cy.contains('Whilst every effort is made to ensure the accuracy of the Tariff on GOV.UK, the onus remains with the user to consult published legislation as necessary and to ensure that the correct duties are paid at importation.');
    cy.contains('In instances where the Customs Authorities are at error, the importer or exporter may still be liable for any additional duty that may be demanded as a result of that error being discovered.');
  });

  it('XI - Cookies -navigates to right XI page', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__inline-list > li:nth-of-type(2) > .govuk-footer__link')
        .contains('Cookies').click();
    cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
    cy.get('.govuk-main-wrapper')
        .contains('Cookies');
    cy.get('.govuk-breadcrumbs__list')
        .contains('Home').click();
    // cy.contains('Look up commodity codes, duty and VAT rates');;
  });
  it('XI - Privacy-navigates to right XI page ', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link')
        .contains('Privacy').click();
    cy.contains('Privacy notice');
    cy.get('.govuk-breadcrumbs__link').click();
    cy.contains('Northern Ireland Online Tariff');
  });
  // HOTT-166
  it.skip('XI - List of supplementary units and their descriptions in imports to be HIDDEN', function() {
    cy.visit('/xi/commodities/9702000010?currency=EUR#import');
    cy.get('.govuk-tabs__panel')
        .contains('What are the main types of tariffs and charges').click();
    cy.get('span#details-import-supplementary-unit-heading')
        .contains('Supplementary unit').click()
        .contains('Check a list of supplementary units and their descriptions').should('not.exist');
  });
  it.skip('XI - List of supplementary units and their descriptions in exports to be HIDDEN', function() {
    cy.visit('/xi/commodities/9702000010?currency=EUR#export');
    cy.get('span#details-export-heading')
        .contains('What are the main types of tariffs and charges').click();
    cy.get('span#details-export-supplementary-unit-heading')
        .contains('Supplementary unit')
        .click()
        .contains('Check a list of supplementary units and their descriptions').should('not.exist');
  });

  // The UK has left the EU
  it('XI - The UK has left the EU - Check the new rules for January 2021 ', function() {
    cy.visit('/xi/sections');
    cy.contains('The UK has left the EU');
    cy.contains('Check the new rules for January 2021');
    cy.get('.govuk-footer__navigation .govuk-footer__row:nth-of-type(1) [target]').should('have.attr', 'href', 'https://www.gov.uk/transition'); // no page load!
  });

  it('XI - Contact - Ask HMRC for advice on classifying your goods', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.contains('Ask HMRC for advice on classifying your goods');
    cy.get('.govuk-\\!-margin-top-5.govuk-footer__row > div:nth-of-type(1) > .govuk-footer__list > li:nth-of-type(1) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/guidance/ask-hmrc-for-advice-on-classifying-your-goods'); // no page load!
  });
  it('XI - Contact - Imports and exports: general enquiries', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.contains('Imports and exports: general enquiries');
    cy.get('.govuk-\\!-margin-top-5.govuk-footer__row > div:nth-of-type(1) > .govuk-footer__list > li:nth-of-type(2) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/government/organisations/hm-revenue-customs/contact/customs-international-trade-and-excise-enquiries'); // no page load!
  });
  it('XI - Contact - Feedback', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.contains('Feedback');
    cy.get('.govuk-\\!-margin-top-5.govuk-footer__row > div:nth-of-type(1) > .govuk-footer__list > li:nth-of-type(3) > .govuk-footer__link').should('have.attr', 'href', '/xi/feedback');
  });

  // Help Section

  it('XI - Help - Finding commodity codes for imports or exports', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.contains('Finding commodity codes for imports or exports');
    cy.get('div:nth-of-type(2) > .govuk-footer__list > li:nth-of-type(1) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/guidance/finding-commodity-codes-for-imports-or-exports');
  });
  it('XI - Help - Using the Trade Tariff tool to find a commodity code', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.contains('Using the Trade Tariff tool to find a commodity code').should('not.exist');
  });
  it('XI - Help - Import and export', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.contains('Import and export');
    cy.get('div:nth-of-type(2) > .govuk-footer__list > li:nth-of-type(2) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/topic/business-tax/import-export');
  });


  // Related information
  it('XI - Related information - UK Trade Tariff: Volume 1 – background information for importers and exporters', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.contains('UK Trade Tariff: Volume 1 – background information for importers and exporters');
    cy.get('div:nth-of-type(3) > .govuk-footer__list > li:nth-of-type(1) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/government/collections/uk-trade-tariff-volume-1');
  });

  it('XI - Related information - UK Trade Tariff: Volume 3 – procedures, codes and declaration entry details', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.contains('UK Trade Tariff: Volume 1 – background information for importers and exporters');
    cy.get('div:nth-of-type(3) > .govuk-footer__list > li:nth-of-type(2) > .govuk-footer__link').should('have.attr', 'href', 'https://www.gov.uk/government/collections/uk-trade-tariff-volume-3');
  });

  it('XI - Related information - API Documentation', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.contains('API Documentation');
    cy.get('div:nth-of-type(3) > .govuk-footer__list > li:nth-of-type(3) > .govuk-footer__link').should('have.attr', 'href', 'https://api.trade-tariff.service.gov.uk/#gov-uk-trade-tariff-api');
    cy.apiDocPage();
  });

  // OGL link
  it('XI - Open Government Licence v3.0', function() {
    cy.visit('/xi/sections');
    cy.get('span > .govuk-footer__link')
        .contains('Open Government Licence v3.0');
    cy.get('span > .govuk-footer__link').should('have.attr', 'href', 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/');
  });

  it('XI - Other pages 404 - links', function() {
    cy.visit('xi/404', {failOnStatusCode: false});
    cy.contains('Page not found');
    cy.contains('If you entered a web address please check it was correct.');
    cy.contains('You can also:');
    cy.contains('Search for a commodity').click();
    cy.contains('Look up commodity codes, import duties, taxes and controls');
    cy.contains('Northern Ireland Online Tariff');
    cy.go(-1);
    cy.contains('Browse through the goods classification').click();
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Browse the tariff');
    cy.go(-1);
    cy.contains('Use the A-Z of classified goods').click();
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('A–Z of Classified Goods');
  });

  it('XI - Country parameter lowcase validation', function() {
    cy.visit('/xi/commodities/9403903090?country=am&day=31&month=12&year=2021');
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Commodity 9403903090');
    cy.contains('Importing into Northern Ireland');
  });
});
