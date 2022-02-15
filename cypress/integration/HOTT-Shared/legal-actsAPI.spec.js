/* eslint-disable max-len */
// validate legal acts
describe('| legal-actsAPI.spec.js |  | legal acts API checks  |', function() {
  it('UK - V2 API check  ', function() {
    cy.request({
      method: 'GET',
      url: '/api/v2/commodities/4302200000',
    }).then((response) => {
      expect(response.status).to.eq(200);
      //    console.log(JSON.stringify(response.body))
      expect(response.body).not.to.be.null;
      expect(response.body.included[281].attributes).to.have.property('regulation_url')
          .contains('https://www.legislation.gov.uk/uksi/2019/16');
      expect(response.body.included[281]).to.have.property('id')
          .contains('A1900160');
    });
  });
  it('XI - V2 API check  ', function() {
    cy.request({
      method: 'GET',
      url: '/xi/api/v2/commodities/9403601000',
    }).then((response) => {
      expect(response.status).to.eq(200);
      //   console.log(JSON.stringify(response.body))
      expect(response.body).not.to.be.null;
      expect(response.body.included[293].attributes).to.have.property('regulation_url')
          .contains('http://eur-lex.europa.eu/search.html?whOJ=NO_OJ%3D303,YEAR_OJ%3D2012,PAGE_FIRST%3D0001&DB_COLL_OJ=oj-l&type=advanced&lang=en');
      console.log(response.body.included[280]);
      expect(response.body.included[293]).to.have.property('id')
          .contains('R1209782');
    });
  });
});
