describe.skip(' 🇪🇺 💡 New ,Terminated comm codes from 1st Jan 2021', function() {
  it.skip('Terminated comm codes from 01 Jan 2021', function() {
    const termcodes_ids = Cypress.config('termcodes');
    for (let i = 0; i < termcodes_ids.length; i++) {
      cy.visit('/xi/sections');
      cy.get('.js-commodity-picker-select.js-show  input#q').click().type(`${termcodes_ids[i]}`);
      
      cy.get('input[name=\'new_search\']').click();
      cy.contains('Choose the commodity code below that best matches your goods to see more information');
    }
  });

  it('New comm codes starting from 01 Jan 2021', function() {
    const newcodes_ids = Cypress.config('newcodes');
    for (let i = 0; i < newcodes_ids.length; i++) {
      cy.visit('/xi/sections');
      cy.get('.js-commodity-picker-select.js-show  input#q').click().type(`${newcodes_ids[i]}`);
      
      cy.get('input[name=\'new_search\']').click();
      
      cy.reload();
      cy.checkCommPage(`${newcodes_ids[i]}`);
    }
  });
});


