describe('🇪🇺 💡| feedback-XI | feedback link is available and user is able to send feedback)', function() {
  it('XI - All pages- Feedback link available  ', function() {
    const pages = ['/xi/sections/1', '/xi/chapters/01', '/xi/headings/0101', '/xi/commodities/0101210000'];

    for (let i = 0; i < pages.length; i++) {
      cy.visit(`${pages[i]}`);
      cy.get('.govuk-footer__navigation');
      cy.contains('Feedback');
    }
  });
  it('XI - feedback link on help section', function() {
    cy.visit('/xi/find_commodity');
    cy.get('li:nth-of-type(6) > .govuk-header__link').click();
    cy.contains('Help on using the tariff');
    cy.contains('Leave feedback').click();
    cy.contains('Leave feedback or suggestions for improvements to this service.').click();
    cy.contains('Give feedback on Online Trade Tariff');
    cy.contains('.govuk-link', 'feedback').should('not.exist');
  });

  it('XI - Breadcrumbs on feedback/thanks page', function() {
    cy.visit('/xi/feedback/thanks');
    cy.get('li:nth-of-type(2) > .govuk-breadcrumbs__link').contains('Help').click();
    cy.contains('Help on using the tariff');
    cy.go('back');
    cy.get('li:nth-of-type(1) > .govuk-breadcrumbs__link').contains('Home').click();
    cy.contains('Look up commodity codes, import duties, taxes and controls');
  });

  it('XI - The UK has left the EU', function() {
    cy.visit('/xi/find_commodity');
    cy.get('.govuk-footer__row');
    cy.contains('The UK has left the EU');
  });

  it('XI - All pages - Display new Feedback Banner @ top of OTT excludes Feedback Page', function() {
    const pages = ['/xi/sections/1', '/xi/chapters/01', '/xi/headings/0101', '/xi/commodities/0101210000'];
    for (let i = 0; i < pages.length; i++) {
      cy.visit(`${pages[i]}`);
      cy.get('.govuk-tag');
      cy.contains('FEEDBACK');
      cy.contains('.govuk-link', 'feedback').should('exist');
    }
  });
  it('XI - All pages - Display new Feedback Changes @ bottom of OTT excludes Feedback Page', function() {
    const pages = ['/xi/sections/1', '/xi/chapters/01', '/xi/headings/0101', '/xi/commodities/0101210000'];
    for (let i = 0; i < pages.length; i++) {
      cy.visit(`${pages[i]}`);
      cy.get('.feedback-useful-banner');
      cy.contains('is this page useful?');
      cy.contains('div > li >.govuk-button', 'Yes').should('have.attr', 'href', '/xi/feedback?page_useful=yes');
      cy.contains('div > li >.govuk-button', 'No').should('have.attr', 'href', '/xi/feedback?page_useful=no');
      cy.contains('div > li >.govuk-button', 'Report a problem with this page').should('have.attr', 'href', '/xi/feedback');
    }
  });
  it('XI - All pages - Access Feedback page from feedback useful banner - Yes button @ bottom of OTT excludes Feedback Page', function() {
    const pages = ['/xi/find_commodity', '/xi/browse', '/xi/a-z-index/a', '/xi/tools', '/xi/news', '/xi/help', '/xi/sections/1',
      '/xi/chapters/01', '/xi/headings/0101', '/xi/commodities/0101210000'];
    for (let i = 0; i < pages.length; i++) {
      cy.visit(`${pages[i]}`);
      cy.get('.feedback-useful-banner');
      cy.contains('is this page useful?');
      cy.contains('div > li >.govuk-button', 'Yes').should('have.attr', 'href', '/xi/feedback?page_useful=yes').click();
      cy.contains('Northern Ireland Online Tariff');
      cy.contains('Give feedback on Online Trade Tariff');
      cy.contains('.feedback-useful-banner', 'is this page useful?').should('not.exist');
    }
  });
  it('XI - All pages - Access Feedback page from feedback useful banner - No button @ bottom of OTT excludes Feedback Page', function() {
    const pages = ['/xi/find_commodity', '/xi/browse', '/xi/a-z-index/a', '/xi/tools', '/xi/news', '/xi/help', '/xi/sections/1', 
      '/xi/chapters/01', '/xi/headings/0101', '/xi/commodities/0101210000'];
    for (let i = 0; i < pages.length; i++) {
      cy.visit(`${pages[i]}`);
      cy.get('.feedback-useful-banner');
      cy.contains('is this page useful?');
      cy.contains('div > li >.govuk-button', 'No').should('have.attr', 'href', '/xi/feedback?page_useful=no').click();
      cy.contains('Northern Ireland Online Tariff');
      cy.contains('Give feedback on Online Trade Tariff');
      cy.contains('.feedback-useful-banner', 'is this page useful?').should('not.exist');
    }
  });
  it(`New Feedback Page Design`, function() {
      cy.visit(`/xi/feedback`);
      cy.contains('.govuk-tag', 'FEEDBACK').should('not.exist');
      cy.contains('.govuk-link', 'feedback').should('not.exist');
      cy.contains('Northern Ireland Online Tariff');
      cy.contains('Give feedback on Online Trade Tariff');
      cy.contains('Tell us how to improve our service. ');
      cy.contains('Feedback is anonymous. Do not include any personal information. ');
      cy.get('.form-hint > a:nth-of-type(1)').should('have.attr', 'href', '/xi/help');
      cy.get('.govuk-textarea').type(' 👨🏻‍💻 Cypress Test - 🇬🇧 🇪🇺 feedback ');
      cy.get('form#new_feedback > .govuk-button').click();
      cy.contains('Feedback submitted');
      cy.contains('Thank you for your valuable feedback.');
      cy.contains('What happens next');
      cy.contains('We’ve sent your feedback to the Online Trade Tariff team');
      cy.contains('.govuk-tag', 'FEEDBACK').should('exist');
      cy.contains('.govuk-link', 'feedback').should('exist');
      cy.contains('Tell us what you think - your feedback will help us improve.');
      cy.get('.feedback-useful-banner');
      cy.contains('is this page useful?');
      cy.contains('div > li >.govuk-button', 'Yes').should('have.attr', 'href', '/xi/feedback?page_useful=yes');
      cy.contains('div > li >.govuk-button', 'No').should('have.attr', 'href', '/xi/feedback?page_useful=no');
      cy.contains('div > li >.govuk-button', 'Report a problem with this page').should('have.attr', 'href', '/xi/feedback');
  });
});
