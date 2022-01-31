/* eslint-disable max-len */
/* eslint-disable camelcase */
describe(' 🇬🇧 💡 | newTerminatedCommCodes-UK | New ,Terminated comm codes from 1st Jan 2021 |', function() {
  it('Terminated comm codes from 01 Jan 2021', function() {
    const termcodes_ids = Cypress.config('termcodes');

    for (let i = 0; i < termcodes_ids.length; i++) {
      cy.visit('/xi/sections');
      cy.searchForCommodity(`${termcodes_ids[i]}`);
      cy.contains('Choose the commodity code that best matches your goods to see more information. If your item is not listed by name, it may be shown under what it\'s used for, what it\'s made from or \'Other\'.');
    }
  });

  it('New comm codes starting from 01 Jan 2021', function() {
    const newcodes_ids = Cypress.config('newcodes');

    for (let i = 0; i < newcodes_ids.length; i++) {
      cy.visit('/xi/sections');
      cy.searchForCommodity(`${newcodes_ids[i]}`);
      cy.checkCommPage(`${newcodes_ids[i]}`);
    }
  });
});


