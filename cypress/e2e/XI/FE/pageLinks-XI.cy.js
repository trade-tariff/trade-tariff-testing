
describe(' 🇪🇺 💡 |pageLinks-XI.spec| Terms and Conditions, Cookies ,Privacy links - XI ', function() {
//  HOTT-192
  it('XI - Terms and Conditions-navigates to right UK page ', function() {
    cy.visit('/xi/sections');
    cy.get('a[href^="/xi/terms"]').contains('Terms and conditions').click();
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
    cy.get('a[href^="/xi/cookies/policy"]')
        .contains('Cookies').click();
    cy.title().should('matches', /Northern Ireland Online Tariff: Look up commodity codes, duty and VAT rates - GOV.UK/i);
    cy.get('.govuk-main-wrapper')
        .contains('Cookies');
    cy.get('.govuk-breadcrumbs__list')
        .contains('Home').click();
  });
  it('XI - Privacy-navigates to right XI page ', function() {
    cy.visit('/xi/sections');
    cy.get('a[href^="/xi/privacy"]')
        .contains('Privacy').click();
    cy.contains('Privacy notice');
    cy.get('.govuk-breadcrumbs__link').click();
    cy.contains('Northern Ireland Online Tariff');
  });
  // The UK has left the EU
  it('XI - The UK has left the EU - Check the new rules for January 2021 ', function() {
    cy.visit('/xi/sections');
    cy.contains('The UK has left the EU');
    cy.get('a[href^="https://www.gov.uk/transition"]').contains('Check the new rules for January 2021');
  });

  it('XI - Contact - Ask HMRC for advice on classifying your goods', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.get('a[href^="https://www.gov.uk/guidance/ask-hmrc-for-advice-on-classifying-your-goods"]')
        .contains('Ask HMRC for advice on classifying your goods');
  });
  it('XI - Contact - Imports and exports: general enquiries', function() {
    const link = 'https://www.gov.uk/government/organisations/hm-revenue-customs/contact/customs-international-trade-and-excise-enquiries';
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.get(`a[href^="${link}"]`).contains('Imports and exports: general enquiries');
  });
  it('XI - Contact - Feedback', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.get('a[href^="/xi/feedback"]').contains('Feedback');
  });

  // Help Section

  it('XI - Help - Finding commodity codes for imports or exports', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.get('a[href^="https://www.gov.uk/guidance/finding-commodity-codes-for-imports-or-exports"]')
        .contains('Finding commodity codes for imports or exports');
  });
  it('XI - Help - Using the Trade Tariff tool to find a commodity code', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.contains('Using the Trade Tariff tool to find a commodity code').should('not.exist');
  });
  it('XI - Help - Import and export', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.get('a[href^="https://www.gov.uk/topic/business-tax/import-export"]').contains('Import and export');
  });


  // Related information
  it('XI - Related information - UK Trade Tariff: Volume 1 – background information for importers and exporters', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.get('a[href^="https://www.gov.uk/government/collections/uk-trade-tariff-volume-1"]')
        .contains('UK Trade Tariff: Volume 1 – background information for importers and exporters');
  });

  it('XI - Related information - UK Trade Tariff: Volume 3 – procedures, codes and declaration entry details', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.get('a[href^="https://www.gov.uk/government/collections/uk-trade-tariff-volume-3"]')
        .contains('UK Trade Tariff: Volume 3 – procedures, codes and declaration entry details');
  });

  it('XI - Related information - API Documentation', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.get('a[href^="https://api.trade-tariff.service.gov.uk/#gov-uk-trade-tariff-api"]').contains('API Documentation');
    cy.apiDocPage();
  });

  // OGL link
  it('XI - Open Government Licence v3.0', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__list');
    cy.get('a[href^="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"]')
        .contains('Open Government Licence v3.0').click();
  });

  it('XI - Other pages 404 - links', function() {
    cy.visit('xi/404', {failOnStatusCode: false});
    cy.contains('Page not found');
    cy.contains('If you entered a web address please check it was correct.');
    cy.contains('You can also:');
    cy.contains('Search for a commodity').click();
    cy.contains('Look up commodity codes, import duties, taxes and controls');
    cy.contains('Northern Ireland Online Tariff');
    cy.go('back');
    cy.contains('Browse through the goods classification').click();
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Browse the tariff');
    cy.go('back');
    cy.contains('Use the A-Z of classified goods').click();
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('A–Z of Classified Goods');
  });

  it('XI - Country parameter lower case validation', function() {
    cy.visit('/xi/commodities/9403903090?country=am&day=31&month=12&year=2021');
    cy.contains('Northern Ireland Online Tariff');
    cy.contains('Commodity 9403903090');
    cy.contains('Importing into Northern Ireland');
  });
});
