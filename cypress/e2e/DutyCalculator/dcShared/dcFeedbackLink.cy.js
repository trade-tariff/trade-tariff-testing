describe('| dcFeedbackLink | Feedback link on Duty Calculator page |', function() {
  //
  const country = ['uk'];
  for (let i = 0; i < country.length; i++) {
    console.log(i);

    it(`Feedback link on ${country[i]} services`, function() {
      // select future date
      cy.visit(`duty-calculator/${country[i]}/7202118000/import-date`);
      //  cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=0702000007`)
      cy.contains('UK Integrated Online Tariff');
      cy.contains('This is a Beta service - your feedback will help us to improve it.');
      cy.get('.govuk-phase-banner__text > .govuk-link').click();
      cy.contains('Give feedback on Online Trade Tariff');

      cy.contains('Tell us how to improve our service. ');
      cy.contains('Feedback is anonymous. Do not include any personal information. ');

      // first link
      cy.get('.form-hint > a:nth-of-type(1)')
          .should('have.attr', 'href', '/help');

      // enter some feedback
      cy.get('.govuk-textarea').type(' 👨🏻‍💻 Cypress Test - 🇬🇧 🇪🇺 DC feedback ');
      cy.get('form#new_feedback > .govuk-button').click();
      cy.contains('Feedback submitted');
      cy.contains('Thank you for your valuable feedback.');
    });
  }
});
