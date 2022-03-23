// ✅  Trade Remedies - ℹ️
describe('| RoW-NI302-e2e.spec | RoW to Northern Ireland ', function() {
  const country = ['uk'];
  for (let i = 0; i < country.length; i++) {
    it(`RoW 🇹🇷 Tukey to NI ${country[i]}`, function() {
      cy.visit(`/duty-calculator/${country[i]}/8714911031/import-date`);
      // date
      cy.validDate();
      // destination
      cy.selectDestination('xi');
      // select country from list
      cy.otherOriginList({value: 'China'});
      // Duties apply
      cy.euDutiesApply();
      // customs value
      cy.customsValue({monetary: '500.00', shipping: '250.00', cost: '250.00'});
      // additional code
      cy.additionalCode({xi: '8005'});

      cy.confirmPage();
      cy.dutyPage();
      cy.contains('Option 1: Third-country duty');
      cy.contains('4.70% * £1,000.00');
      // cy.contains('6.70% * £1,000.00');
      // cy.contains('Option 2: Tariff preference - Turkey');
      // cy.contains('0.00% * £1,000.00');
      // cy.contains('6.70% * £1,000.00');
    });
  }
});
