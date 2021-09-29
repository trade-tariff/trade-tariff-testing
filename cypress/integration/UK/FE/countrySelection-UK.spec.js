/* eslint-disable camelcase */
describe('🇬🇧 💡 | countrySelection-UK | Country Selection - hjid tests |', function() {
  it('UK Country Selection - imports ', function() {
    cy.visit('/commodities/0208909800#import');
    // no XI
    cy.get('input#search_country').click().clear().wait(500).type('(XI)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');

    // Andorra should be present
    cy.get('input#search_country').click().clear().wait(500).type('AD').wait(700);
    cy.get('[id=\'search_country__listbox\']')
        .contains('Andorra (AD)');

    // no GB - United Kingdom (excluding Northern Ireland) (GB)
    cy.get('input#search_country').click().clear().wait(500).type('(GB)').wait(900);
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');

    // no XU
    cy.get('input#search_country').click().clear().wait(500).type('XU').wait(500);
    cy.get('[id=\'search_country__listbox\']')
    //  .contains('United Kingdom (excluding Northern Ireland) (GB)').should('not.exist')
        .contains('No results found');
  });
  it('UK Country Selection - exports ', function() {
    cy.visit('/commodities/0208909800#export');
    // no XI
    cy.get('input#search_country').click().clear().wait(500).type('(XI)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');

    // Andorra should be present
    cy.get('input#search_country').click().clear().wait(500).type('AD').wait(700);
    cy.get('[id=\'search_country__listbox\']')
        .contains('Andorra (AD)');

    // no GB - United Kingdom (excluding Northern Ireland) (GB)
    cy.get('input#search_country').click().clear().wait(500).type('(GB)').wait(900);
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');

    // no XU
    cy.get('input#search_country').click().clear().wait(500).type('XU').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('No results found');
  });

  it('🇭🇹 Haiti exclusion 🚫 - CARIFORUM', function() {
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
