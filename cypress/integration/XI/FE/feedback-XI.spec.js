/* eslint-disable max-len */
describe('🇪🇺 💡| feedback-XI | feedback link is available and user is able to send feedback)', function() {
  it('XI - All pages- Feedback link available  ', function() {
    const pages = ['/sections/1', '/chapters/01', '/headings/0101', '/commodities/0101210000'];

    for (let i = 0; i < pages.length; i++) {
      cy.visit(`${pages[i]}`);
      cy.get('.govuk-footer__navigation');
      cy.contains('Feedback');
    }
  });

  it('XI - Feedback link works ', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__navigation');
    cy.contains('Feedback')
        .click();
    cy.contains('Send your feedback');
    cy.contains('Don\'t include any personal information. This form is for submitting feedback on the website. If you have a question related to classifying a good then please contact HMRC. If you have a complaint about the phone service then please see this page.');
    // first link
    cy.get('.form-hint.govuk-hint > a:nth-of-type(1)').should('have.attr', 'href', 'https://www.gov.uk/guidance/ask-hmrc-for-advice-on-classifying-your-goods');
    // second link
    cy.get('.form-hint.govuk-hint > a:nth-of-type(2)').should('have.attr', 'href', 'https://www.gov.uk/guidance/complain-to-hm-revenue-and-customs');

    // empty message
    cy.get('input[name=\'commit\']').click();
    cy.get('.error-message');
    cy.contains('can\'t be blank');

    // cy.get('input#name').type('Random Guy 🥸 ');
    // cy.get('input#email').type('abd@12398.com');
    // cy.get('input[name=\'commit\']').click();
    // //  cy.contains('Thank you for your feedback')
  });
  it('XI - The UK has left the EU', function() {
    cy.visit('/xi/sections');
    cy.get('.govuk-footer__row');
    cy.contains('The UK has left the EU');
  });
});
