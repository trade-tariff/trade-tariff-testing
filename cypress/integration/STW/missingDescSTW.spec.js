describe('missingDescSTW.spec | Gracefully handle when DIT misses adding descriptions to commodities', function() {
  const comms = ['7001009100', '6903100000', '6802100000', '6903901000', '7001009100', '6802100000'];

  for (let i =0; i<comms.length; i++) {
    it(`UK & XI - Commodity UI checks ${comms[i]} for 01-01-2022`, function() {
      cy.visit(`/commodities/${comms[i]}?as_of=2022-01-01`);
      cy.contains(`Commodity information for ${comms[i]}`);
      cy.visit(`xi/commodities/${comms[i]}?as_of=2022-01-01`);
      cy.contains(`Commodity information for ${comms[i]}`);
    });
    it(`UK & XI - Commodity API checks for ${comms[i]} for 01-01-2022`, function() {
      cy.request(`api/v2/commodities/${comms[i]}?as_of=2022-01-01`)
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
            expect(response).to.have.property('duration');
            expect(response.duration).to.lessThan(10000);
          });
      cy.request(`xi/api/v2/commodities/${comms[i]}?as_of=2022-01-01`)
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'});
            expect(response).to.have.property('duration');
            expect(response.duration).to.lessThan(10000);
          });
    });
  }
});
