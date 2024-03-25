describe('| dcFeedbackLink | Feedback link on Duty Calculator page |', function() {
  //
  const country = ['uk'];
  for (let i = 0; i < country.length; i++) {
    console.log(i);

    it(`Feedback link on ${country[i]} services`, function() {
      // select future date
      cy.visit(`duty-calculator/${country[i]}/7202118000/import-date`);
      cy.contains('UK Integrated Online Tariff');
      cy.contains('.govuk-tag', 'FEEDBACK').should('exist');
      cy.contains('.govuk-link', 'feedback').should('exist');
      cy.contains('Tell us what you think - your feedback will help us improve.');
      cy.get('.feedback-useful-banner');
      cy.contains('is this page useful?');
      cy.get('.govuk-phase-banner__text > .govuk-link').click();
      cy.contains('Give feedback on Online Trade Tariff');
      cy.contains('Tell us how to improve our service. ');
      cy.contains('Feedback is anonymous. Do not include any personal information.');
      // first link
      cy.get('.form-hint > a:nth-of-type(1)').should('have.attr', 'href', 'mailto:online.tariff.feedback@hmrc.gov.uk');
      // enter some feedback
      cy.get('.govuk-textarea').type(' 👨🏻‍💻 Cypress Test - 🇬🇧 🇪🇺 DC feedback ');
      cy.get('form#new_feedback > .govuk-button').click();
      cy.contains('Feedback submitted');
      cy.contains('Thank you for your valuable feedback.');
    });
  }
});
