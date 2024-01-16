describe('🇬🇧 💡 | feedback-UK | feedback link is available and user is able to send feedback |', function() {
  it('UK - All pages - Access feedback link from bottom of page ', function() {
    const pages = ['/sections/1', '/chapters/01', '/headings/0101', '/commodities/0101210000'];
    for (let i = 0; i < pages.length; i++) {
      cy.visit(`${pages[i]}`);
      cy.get('.govuk-footer__navigation');
      cy.contains('Feedback');
    }
  });
  it('UK - feedback link on help section', function() {
    cy.visit('/find_commodity');
    cy.get('li:nth-of-type(6) > .govuk-header__link').click();
    cy.contains('Help on using the tariff');
    cy.contains('Leave feedback').click();
    cy.contains('Leave feedback or suggestions for improvements to this service.').click();
    cy.contains('Give feedback on Online Trade Tariff');
  });

  it('UK - Breadcrumbs on feedback/thanks page', function() {
    cy.visit('/feedback/thanks');
    cy.get('li:nth-of-type(2) > .govuk-breadcrumbs__link').contains('Help').click();
    cy.contains('Help on using the tariff');
    cy.go('back');
    cy.get('li:nth-of-type(1) > .govuk-breadcrumbs__link').contains('Home').click();
    cy.contains('Look up commodity codes, import duties, taxes and controls');
  });
  it('UK - The UK has left the EU', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-footer__row');
    cy.contains('The UK has left the EU');
  });
});
