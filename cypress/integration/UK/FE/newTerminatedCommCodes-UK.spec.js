/* eslint-disable max-len */
/* eslint-disable camelcase */
describe(' 🇬🇧 💡 | newTerminatedCommCodes-UK | New ,Terminated comm codes from 1st Jan 2021 |', function() {
  it('Terminated comm codes from 01 Jan 2021', function() {
    const termcodes_ids = Cypress.config('termcodes');

    for (let i = 0; i < termcodes_ids.length; i++) {
      cy.visit('/sections');
      cy.searchForCommodity(`${termcodes_ids[i]}`);
      cy.contains('The commodity code you entered could not be found for the date selected. The code is present for the dates shown below.');
    }
  });

  it('New comm codes starting from 01 Jan 2021', function() {
    const newcodes_ids = Cypress.config('newcodes');

    for (let i = 0; i < newcodes_ids.length; i++) {
      cy.visit('/sections');
      cy.searchForCommodity(`${newcodes_ids[i]}`);
      cy.checkCommPage(`${newcodes_ids[i]}`);
    }
  });
});


