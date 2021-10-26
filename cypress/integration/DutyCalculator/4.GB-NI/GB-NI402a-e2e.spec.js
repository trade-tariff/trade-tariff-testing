/* eslint-disable max-len */
// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ✅ Non processing
// Comm code :0702000007

describe('| GB-NI402a-e2e.spec | GB to NI route 🚐 02  - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ✅ Non processing |', function() {
  //
  const country = ['uk', 'xi'];
  const pagetitles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];

  for (let i = 0; i < country.length; i++) {
    console.log(i);

    it(`e2e GB to NI 🧁  - ${country[i]}`, function() {
      // select future date
      cy.visit(`/duty-calculator/${country[i]}/0702000007/import-date`);
      //  cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=0702000007`)
      cy.contains(`${pagetitles[i]}`);
      cy.validDate();

      cy.contains('Which part of the UK are you importing into?');
      // check URL

      // select NI as country of destination
      cy.get('#steps-import-destination-import-destination-xi-field').check();
      cy.contains('Continue').click();
      cy.wait(100);
      cy.contains('Which country are the goods coming from?');

      // select United Kingdom as country of Origin
      cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click();
      cy.contains('Continue').click();

      // ✅  Trader Scheme Registered - Yes
      cy.traderScheme('yes');

      // ✅  Final use in NI - Yes
      cy.finalUse('yes');
      // turnover page
      cy.turnOver('less');

      cy.contains('There is no import duty to pay');
      cy.contains('There is no import duty to pay because:');
      cy.contains('You are transporting goods from England, Scotland or Wales to Northern Ireland');
      cy.contains('You are a member of the UK Trader Scheme');
      cy.contains('Your import is for sale to, or final use by, end-consumers located in Northern Ireland');
      cy.contains('The importer had a total annual turnover of less than £500,000 in its most recent complete financial year');
      cy.contains('You may be called upon to provide proof of your membership of the UK Trader Scheme and that your goods are not going to be subject to further processing.');
      cy.wait(100);

      // selection is persisted
      cy.go(-1);
      cy.get('input#steps-annual-turnover-annual-turnover-yes-field')
          .parent()
          .find('input')
          .should('be.checked');

      cy.contains('Continue').click();
      cy.wait(100);
      cy.contains('Start again').click();
      cy.contains('When will the goods be imported?');
    });
  }
});
