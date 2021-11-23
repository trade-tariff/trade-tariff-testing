describe('| deprecateCommNotes | Notes deprecated from commodities |', function() {
  it(`Commodity Notes not to be available on both UK and XI service`, function() {
    const country = ['uk', 'xi'];
    for ( let i =0; i<country.length; i++) {
      cy.visit(`${country[i]}/sections`);
      cy.get('.js-commodity-picker-select').click().type('balls');
      // select from suggestion drop down
      cy.get('li#q__option--0').click();
      cy.get('input[name=\'commit\']').click();
      cy.contains('Search results for ‘balls’');
      cy.contains('Notes').should('not.exist');
    }
  });
});
