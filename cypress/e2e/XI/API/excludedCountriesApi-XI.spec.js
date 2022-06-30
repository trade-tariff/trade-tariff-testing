describe('🇪🇺 | excludedCountriesApi-XI | HOTT-887 | GB excluded countries 1008 list for measure 735 |', function() {
  it.skip('XI - V2 API check  ', function() {
    cy.request({
      method: 'GET',
      url: '/xi/api/v2/commodities/9701910000#export',
    }).then((response) => {
      expect(response.status).to.eq(200);
      console.log(JSON.stringify(response.body));
      expect(response.body).not.to.be.null;
      // expect(response.body.included[311].relationships.measure_type.data).to.have.property('id').contains('735');
      expect(response.body.included[311].relationships.excluded_countries.data[0]).to.have.property('id')
          .contains('GB');
    });
  });
  it('XI - Front end validation', function() {
    cy.visit('/xi/commodities/9701210000#export');
    cy.get('.735').contains('Export control on cultural goods');
    cy.get('#measure-3088491').contains('United Kingdom (excluding Northern Ireland)');
    cy.get('input#search_country').click().clear().wait(500).type('(GB)').wait(500);
    cy.get('[id=\'search_country__listbox\']')
        .contains('United Kingdom (excluding Northern Ireland) (GB)').click().wait(500);
    cy.contains('Export control on cultural goods').should('not.exist');
  });
});
