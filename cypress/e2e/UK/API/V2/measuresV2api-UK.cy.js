/* eslint-disable camelcase */
describe('🇬🇧 ⚙️ | measuresV2api-UK | UK- version v2 api', function() {
  // ----Quotas to be available for UK version  -----
  it('UK - Measures - measure generating legal act - available', function() {
    cy.request('/api/v2/measures/816448')
        .then((response) => {
          cy.measures(response, 'R9219500', 'legal_act', 1, null, null);
        });
  });
  it('XI - Measures - measure generating legal act - available', function() {
    cy.request('xi/api/v2/measures/816458')
        .then((response) => {
          cy.measures(response, 'R9418000', 'legal_act', 1, null, null);
        });
  });
});
