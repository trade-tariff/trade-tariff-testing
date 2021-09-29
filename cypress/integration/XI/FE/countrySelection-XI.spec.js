describe('🇪🇺 💡 |countrySelection-XI | Country Selection - hjid tests |', function() {
  it('XI Country Selection -import ', function() {
    cy.visit('/xi/commodities/0208909800#import');
    // XI Present
    cy.get('input#search_country').click().clear().wait(500).type('XI').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('Northern Ireland (XI)');

    // Andora should be present
    cy.get('input#search_country').click().clear().wait(500).type('AD');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Andorra (AD)');
    //  GB Present
    cy.get('input#search_country').click().clear().wait(500).type('GB').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('United Kingdom (excluding Northern Ireland) (GB)');


    // no XU
    cy.get('input#search_country').click().clear().wait(500).type('XU').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');
  });
  it('XI Country Selection -export ', function() {
    cy.visit('/xi/commodities/0208909800#export');
    // XI Present
    cy.get('input#search_country').click().clear().wait(500)
        .type('XI').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('Northern Ireland (XI)');

    // Andora should be present
    cy.get('input#search_country').click().clear().wait(500).type('AD');
    cy.get('[id=\'search_country__listbox\']')
        .contains('Andorra (AD)');
    //  GB Present
    cy.get('input#search_country').click().clear().wait(500).type('GB').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('United Kingdom (excluding Northern Ireland) (GB)');


    // no XU
    cy.get('input#search_country').click().clear().wait(500).type('XU').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');
  });
  // XI Present
  // GB Present
  // no XU
  it.skip('🇭🇹 Haiti exclusion 🚫 - CARIFORUM', function() {
    const commoditycodes_ids = ['0707000599', '0302311000', '8902001000', '9603210000', '7901121000', '6602000010', '4901910000'];
    const measurecodes_ids = ['20079770', '20079766', '20079851', '20079857', '20079841', '20079829', '20079812'];
    for (let i = 0; i < commoditycodes_ids.length; i++) {
      cy.visit(`/commodities/${commoditycodes_ids[i]}#import`);
      cy.contains('CARIFORUM (1033)').click();
      cy.get(`#measure-${measurecodes_ids[i]}-children-geographical-areas`)
          .contains('Haiti (HT)').should('not.exist');
    }
  });
});


