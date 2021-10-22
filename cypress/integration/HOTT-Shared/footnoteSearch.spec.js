/* eslint-disable max-len */
describe('🇪🇺 🇬🇧 💡| footnoteSearch.spec.js | footnote Search UK and XI services |', function() {
  it('Footnote Search | dropdown | with results', function() {
    cy.visit('/footnote_search');
    const codes = ['01', 'CD', 'CA', 'TR', 'DU', 'EU', 'EX', 'DS', 'MH', 'MG'];
    for ( let i = 0; i < codes.length; i++) {
      //    cy.get('select#type').select('01 - UK tax type, to distinguish which applies by tax type when several Excise measures on commodity')
      cy.get('select#type').select(`${codes[i]}`);
      cy.get('form#new_search > input[name=\'new_search\']').click();
      cy.wait(300);
      cy.contains('Footnote search results');
    }
  });

  it('Footnote Search | dropdown | No results', function() {
    cy.visit('/footnote_search');
    const codes = ['02', 'WR'];
    for (let i = 0; i < codes.length; i++) {
      //    cy.get('select#type').select('01 - UK tax type, to distinguish which applies by tax type when several Excise measures on commodity')
      cy.get('select#type').select(`${codes[i]}`);
      cy.get('form#new_search > input[name=\'new_search\']').click();
      cy.wait(300);
      cy.contains('There are no matching results');
    }
  });
});

