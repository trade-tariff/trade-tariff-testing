// 🚫 Trade Remedies - ✅ 0% MFN EU tariff
describe('| RoW-NI301-e2e.spec | RoW to Northern Ireland ', function() {
  //
  const country = ['xi'];
  for (let i = 0; i < country.length; i++) {
    it(`RoW 🇮🇱 Israel to NI ${country[i]}`, function() {
      cy.visit(`/duty-calculator/${country[i]}/1212210000/import-date`);
      // date
      cy.validDate();
      // destination
      cy.selectDestination('xi');
      // select country from list
      cy.otherOriginList({value: 'Israel'});
      // customs value
      cy.customsValue({monetary: '500.00', shipping: '100.00', cost: '250.00'});
      cy.vat('20');
      cy.confirmPage();
      cy.dutyPage();
      cy.contains(' VAT');
      cy.contains('Option 1: Third-country duty');
      cy.contains('Option 2: Tariff preference - Israel');
      cy.contains('Tariff preference (UK)');
    });
  }
});
