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
    cy.contains('.govuk-link', 'feedback').should('not.exist')
  });

  it.only('XI - Breadcrumbs on feedback/thanks page', function() {
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

  it('XI - All pages - Display new Feedback Banner @ top of OTT and excludes on Feedback Page', function() {
    const pages = ['/xi/sections/1', '/xi/chapters/01', '/xi/headings/0101', '/xi/commodities/0101210000'];
    for (let i = 0; i < pages.length; i++) {
      cy.visit(`${pages[i]}`);
      cy.get('.govuk-tag');
      cy.contains('Feedback');
      cy.contains('.govuk-link', 'feedback').should('exist')
    }
  });
});
