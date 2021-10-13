/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
describe('| retainDateAPI | retain as of on commodity headings API', function() {
  it('UK - V2 - commodity heading API', function() {
    const comms = ['0409000000', '0510000000', '8804000000', '2509000000', '2802000000', '3101000000', '3914000000', '4004000000', '4812000000', '5001000000', '4112000000', '4705000000'];
    for (let i=0; i<comms.length; i++) {
      const heading = comms[i].substring(0, 4);
      cy.request({
        url: `/api/v2/commodities/${comms[i]}?as_of=2022-06-01`,
        followRedirect: false, // turn off following redirects
      }).then((resp) => {
        expect(resp.status).to.eq(301);
        expect(resp.redirectedToUrl).to.eq(`${Cypress.config().baseUrl}/api/v2/headings/${heading}?as_of=2022-06-01`);
      });
    }
  });
  it('XI - V2 - commodity heading API', function() {
    const comms = ['0409000000', '0510000000', '8804000000', '2509000000', '2802000000', '3101000000', '3914000000', '4004000000', '4812000000', '5001000000', '4112000000', '4705000000'];
    const map1 = comms.map((comm) => comm.substring(0, 4));
    for (let i=0; i<comms.length; i++) {
      cy.request({
        url: `xi/api/v2/commodities/${comms[i]}?as_of=2022-06-01`,
        followRedirect: false, // turn off following redirects
      }).then((resp) => {
        expect(resp.status).to.eq(301);
        expect(resp.redirectedToUrl).to.eq(`${Cypress.config().baseUrl}/xi/api/v2/headings/${map1[i]}?as_of=2022-06-01`);
      });
    }
  });
  it('UK - V1 - commodity heading API', function() {
    const comms = ['0409000000', '0510000000', '8804000000', '2509000000', '2802000000', '3101000000', '3914000000', '4004000000', '4812000000', '5001000000', '4112000000', '4705000000'];
    for (let i=0; i<comms.length; i++) {
      const heading = comms[i].substring(0, 4);
      cy.request({
        url: `/api/v1/commodities/${comms[i]}?as_of=2022-06-01`,
        followRedirect: false, // turn off following redirects
      }).then((resp) => {
        expect(resp.status).to.eq(301);
        expect(resp.redirectedToUrl).to.eq(`${Cypress.config().baseUrl}/api/v1/headings/${heading}?as_of=2022-06-01`);
      });
    }
  });
  it('XI - V1 - commodity heading API', function() {
    const comms = ['0409000000', '0510000000', '8804000000', '2509000000', '2802000000', '3101000000', '3914000000', '4004000000', '4812000000', '5001000000', '4112000000', '4705000000'];
    const map1 = comms.map((comm) => comm.substring(0, 4));
    for (let i=0; i<comms.length; i++) {
      cy.request({
        url: `xi/api/v1/commodities/${comms[i]}?as_of=2022-06-01`,
        followRedirect: false, // turn off following redirects
      }).then((resp) => {
        expect(resp.status).to.eq(301);
        expect(resp.redirectedToUrl).to.eq(`${Cypress.config().baseUrl}/xi/api/v1/headings/${map1[i]}?as_of=2022-06-01`);
      });
    }
  });
});
