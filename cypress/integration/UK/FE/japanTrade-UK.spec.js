describe.skip('🇬🇧💡 🇯🇵 | JapanTrade-UK | Future date - Japan Trade Agreement from 1st Feb 2022 |', function() {
  // Special trade agreements
  it('🇯🇵 Japan trade deal with UK before 1st Feb 2022 4.7% , after 3.80% ', function() {
    // Tariff preference rate till 1st February 2022
    cy.visit('/commodities/0301190000?b=n&country=JP&day=31&month=1&year=2022#import');
    cy.get('.small-table');
    cy.contains('Japan (JP)');
    cy.contains('Tariff preference');
    cy.contains('4.70 %');
    //   cy.contains('01 Feb 2021');
    //   cy.contains('to 31 Jan 2022');
    // cy.contains('31/01/2022');

    // Tariff preference rate after 1st February 2022
    cy.visit('/commodities/0301190000?b=n&country=JP&day=1&month=2&year=2022#import');
    cy.get('.small-table');
    cy.contains('Japan (JP)');
    cy.contains('Tariff preference');
    cy.contains('3.80 %');
    //    cy.contains('01 Feb 2022');
    //    cy.contains('to 31 Jan 2023');
  });
});
