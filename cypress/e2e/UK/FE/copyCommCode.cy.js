describe('🇬🇧 💡 | copyCommCode | Copy comm code UK and XI  |', function() {
  it.skip('Copy commod code and paste ', function() {
    cy.visit('commodities/0201100021');
    // copy comm code
    cy.contains('Copy commodity code');
    cy.get('span#copy_comm_code').click();
    cy.contains('Code copied');
    // pasting copied comm code
    cy.visit('/browse');
    cy.get('.js-commodity-picker-select.js-show  input#q').trigger('contextmenu');
    //   .invoke('val', 'pasted text').trigger('input')
    //     cy.get('input[name=\'new_search\']').click()
    //     cy.wait(500)
    //     cy.checkCommPage('0201100021')
  });
});
