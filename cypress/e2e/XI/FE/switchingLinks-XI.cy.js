describe('switching links xi', function() {
  it('Find commodity Page', function() {
    cy.visit('/xi/find_commodity');
    cy.get('.govuk-header').contains('Northern Ireland Online Tariff');
    cy.get('.govuk-label').contains('Search the Northern Ireland Online Tariff');
    cy.contains('If you’re bringing goods into Northern Ireland');
    cy.get('.govuk-main-wrapper').contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header').contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff').click();
    cy.get('.govuk-header').contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper').contains('UK Integrated Online Tariff');
  });

  it('Chapters Page', function() {
    cy.visit('/xi/chapters/01');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();

    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });

  it('Headings Page', function() {
    cy.visit('/xi/headings/0101');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });
  it('Commodity Page', function() {
    cy.visit('/xi/commodities/0406103010');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });
  it('Tools Page', function() {
    cy.visit('/xi/tools');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });
  it('🚫 No Switching link on Meursing Code finder Page', function() {
    cy.visit('xi/meursing_lookup/steps/start');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff').should('not.exist');
  });
  it('Certificate Search Page', function() {
    cy.visit('/xi/certificate_search');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });
  it('Additional Code Search Page', function() {
    cy.visit('/xi/additional_code_search');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });
  it('Chemical Search Page', function() {
    cy.visit('/xi/chemical_search');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });
  it('A-Z Page', function() {
    cy.visit('/xi/a-z-index/a');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });
  it('Help Page', function() {
    cy.visit('/xi/help');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });

  it('Privacy Page', function() {
    cy.visit('/xi/privacy');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });

  it('Cookies policy Page', function() {
    cy.visit('/xi/cookies/policy');
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('Switch to')
        .contains('UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
    cy.get('.govuk-main-wrapper');
    cy.contains('Northern Ireland Online Tariff')
        .click();
    cy.get('.govuk-header')
        .contains('Northern Ireland Online Tariff');
    cy.get('.govuk-main-wrapper')
        .contains('UK Integrated Online Tariff');
    cy.get('.tariff-breadcrumbs.js-tariff-breadcrumbs').contains('You are viewing the Northern Ireland Online Tariff.');
    cy.get('.switch-service-control').contains('Switch to the UK Integrated Online Tariff').click();
    cy.get('.govuk-header')
        .contains('UK Integrated Online Tariff');
  });
});
