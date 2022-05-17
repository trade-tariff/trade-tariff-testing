/* eslint-disable max-len */
// validate legal acts
describe('| legal-actsAPI.spec.js |  | legal acts API checks  |', function() {
  it('UK - V2 API check ', function() {
    cy.request('/api/v2/commodities/4302200000')
        .then((response) => {
          cy.hasLegalActs(response, 'R9703380', 'http://eur-lex.europa.eu/search.html?whOJ=NO_OJ%3D61,YEAR_OJ%3D1997,PAGE_FIRST%3D0001&DB_COLL_OJ=oj-l&type=advanced&lang=en');
        });
  });
  it('XI - V2 API check ', function() {
    cy.request('xi/api/v2/commodities/9403601000')
        .then((response) => {
          cy.hasLegalActs(response, 'R9822610', 'http://eur-lex.europa.eu/search.html?whOJ=NO_OJ%3D292,YEAR_OJ%3D1998,PAGE_FIRST%3D0001&DB_COLL_OJ=oj-l&type=advanced&lang=en');
        });
  });
});
