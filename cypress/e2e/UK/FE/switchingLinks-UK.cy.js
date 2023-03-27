describe('switching links uk', function() {
  it('Find commodity page', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.contains('If you’re bringing goods into Northern Ireland');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');

    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('if your goods are not ‘at risk’ of onward movement to the EU').click();
    cy.contains('Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU');

    cy.title().should('eq', 'Declaring goods you bring into Northern Ireland \'not at risk’ of moving to the EU - GOV.UK');
    cy.go('back');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });

  it('Browse page', function() {
    cy.visit('/browse');
    cy.contains('Browse the tariff');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.contains('Browse the tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });

  it('Chapters page', function() {
    cy.visit('/chapters/01');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });

  it('Headings page', function() {
    cy.visit('/headings/0101');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');


    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });

  it('Commodity page', function() {
    cy.visit('/commodities/0406103010');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });
  it('Tools page', function() {
    cy.visit('/tools');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });
  it('Certificate Search page', function() {
    cy.visit('/certificate_search');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });
  it('Additional Code Search page', function() {
    cy.visit('/additional_code_search');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });
  it('Chemical Search page', function() {
    cy.visit('/chemical_search');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });
  it('A-Z page', function() {
    cy.visit('/a-z-index/a');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });
  it('Help page', function() {
    cy.visit('/help');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });

  it('Privacy page', function() {
    cy.visit('/privacy');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });

  it('Cookies policy page', function() {
    cy.visit('/cookies/policy');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });

  it('T & C  page', function() {
    cy.visit('/terms');
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('UK Integrated Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Northern Ireland Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the UK Integrated Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the Northern Ireland Online Tariff').click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
  });
});
