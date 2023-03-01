// 🚫 Trade Remedies - ✅ 0% MFN EU tariff - ✅ Not at Risk - Import Duty 0%
// Comm Code : 1212210000

describe('| GB-NI401-e2e.spec | GB to NI route 🚎 01 - 🚫 Trade Remedies - ✅ 0% MFN EU tariff - ✅ Not at Risk - Import Duty 0% |', function() {
  const country = ['uk', 'xi'];
  const pagetitles = ['UK Integrated Online Tariff', 'Northern Ireland Online Tariff'];

  for (let i = 0; i < country.length; i++) {
    console.log(i);

    it(`e2e GB to NI 🌾 - ${country[i]} `, function() {
      // select future date
      cy.visit(`/duty-calculator/${country[i]}/1212210000/import-date`);
      //   cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1212210000`)
      cy.contains(`${pagetitles[i]}`);
      // date
      cy.validDate();
      // destination
      cy.selectDestination('xi');
      // origin
      cy.selectOrigin('gb');

      // Not at Risk , Import duty is 0% - ** Show Results **
      cy.contains('There is no import duty to pay');
      cy.contains('There is no import duty to pay when importing goods into Northern Ireland from GB when the EU\'s third country duty is 0.00%.');
      // Start again

      cy.contains('Start again').click();
      cy.contains('When will the goods be imported?');
    });
  }
});
