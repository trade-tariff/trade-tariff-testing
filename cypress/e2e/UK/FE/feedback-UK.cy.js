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
    cy.contains('Send your feedback');
  });

  it('UK - Feedback link works - Edge cases ', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-footer__navigation');
    cy.contains('Feedback')
        .click();
    cy.contains('Send your feedback');
    cy.contains('Don\'t include any personal information. This form is for submitting feedback on the website. If you have a question related to classifying a good then please contact HMRC. If you have a complaint about the phone service then please see this page.');
    // first link
    cy.get('.form-hint.govuk-hint > a:nth-of-type(1)').should('have.attr', 'href', 'https://www.gov.uk/guidance/ask-hmrc-for-advice-on-classifying-your-goods');
    // second link
    cy.get('.form-hint.govuk-hint > a:nth-of-type(2)').should('have.attr', 'href', 'https://www.gov.uk/guidance/complain-to-hm-revenue-and-customs');

    // empty message - error message
    cy.get('form#new_feedback > .govuk-button').click();
    cy.get('p#feedback-message-error').contains('Enter your feedback');
    cy.contains('You have 500 characters remaining');

    // message character count
    cy.get('.govuk-textarea').type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

    // email char length , validity
    cy.get('input#feedback-name-field').click().type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    cy.get('input#feedback-email-field').click().type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    cy.get('form#new_feedback > .govuk-button').click();
    cy.get('p#feedback-message-error').contains('The feedback must be 500 characters or fewer');
    cy.contains('You have 1 character too many');
    cy.get('#feedback-name-error').contains('The name must be 100 characters or fewer');
    cy.get('#feedback-email-error').contains('The email must be 100 characters or fewer');

    cy.get('input#feedback-email-field-error').click().clear().type('a');
    cy.get('form#new_feedback > .govuk-button').click();
    cy.contains('Enter an email address in the correct format, like name@example.com');

    // enter some feedback - check confirmation message
    cy.visit('/feedback');
    cy.get('.govuk-textarea').type(' 👨🏻‍💻 Cypress Test - 🇬🇧 feedback - UK');
    cy.get('input#feedback-name-field').type('Random Guy 🥸 ');
    cy.get('input#feedback-email-field').type('abcd@12345.com');
    cy.get('form#new_feedback > .govuk-button').click();
    cy.contains('Thank you for your feedback');
    cy.contains('We will get back to you shortly.');
  });
  // validate breadcrumbs
  it('UK - Breadcrumbs on feedback/thanks page', function() {
    cy.visit('/feedback/thanks');
    cy.get('li:nth-of-type(2) > .govuk-breadcrumbs__link').contains('Help').click();
    cy.contains('Help on using the tariff');
    cy.go(-1);
    cy.get('li:nth-of-type(1) > .govuk-breadcrumbs__link').contains('Home').click();
    cy.contains('Look up commodity codes, import duties, taxes and controls');
  });
  it('UK - The UK has left the EU', function() {
    cy.visit('/find_commodity');
    cy.get('.govuk-footer__row');
    cy.contains('The UK has left the EU');
  });
});
