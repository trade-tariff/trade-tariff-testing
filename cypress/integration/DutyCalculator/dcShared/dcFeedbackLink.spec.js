/* eslint-disable max-len */
describe.skip('| dcFeedbackLink | Feedback link on Duty Calculator page |', function() {
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
      cy.contains('Send your feedback');

      cy.contains('Don\'t include any personal information. This form is for submitting feedback on the website. If you have a question related to classifying a good then please contact HMRC. If you have a complaint about the phone service then please see this page.');
      // first link
      cy.get('.form-hint.govuk-hint > a:nth-of-type(1)').should('have.attr', 'href', 'https://www.gov.uk/government/organisations/hm-revenue-customs/contact/vat-enquiries');
      // second link
      cy.get('.form-hint.govuk-hint > a:nth-of-type(2)').should('have.attr', 'href', 'https://www.gov.uk/guidance/complain-to-hm-revenue-and-customs');

      // enter some feedback
      cy.get('.govuk-textarea').type(' 👨🏻‍💻 Cypress Test - 🇬🇧 🇪🇺  feedback ');
      cy.get('input#name').type('Random Guy 🥸 ');
      cy.get('input#email').type('abd@12398.com');
      cy.get('input[name=\'commit\']').click();
      //  cy.contains('Thank you for your feedback')
    });
  }
});
