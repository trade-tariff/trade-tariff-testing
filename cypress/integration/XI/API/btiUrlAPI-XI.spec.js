context('🇪🇺 ⚙️ XI - Update bti URL on V1 and V2 ', () => {
  it('XI - Validate API response for V2', () => {
    cy.request({
      method: 'GET',
      url: '/xi/api/v2/commodities/0202201011',
    }).then((response) => {
      expect(response.status).to.eq(200);
      //       console.log(JSON.stringify(response.body))
      expect(response.body).not.to.be.null;
      expect(response.body.data.attributes).to.have.property('bti_url')
          .contains('https://www.gov.uk/guidance/check-what-youll-need-to-get-a-legally-binding-decision-on-a-commodity-code');
    });
  });
  it('XI - Validate API response for V1', () => {
    cy.request({
      method: 'GET',
      url: '/xi/api/v1/commodities/0202201011',
    }).then((response) => {
      expect(response.status).to.eq(200);
      console.log(JSON.stringify(response.body));
      expect(response.body).not.to.be.null;
      expect(response.body).to.have.property('bti_url')
          .contains('https://www.gov.uk/guidance/check-what-youll-need-to-get-a-legally-binding-decision-on-a-commodity-code');
    });
  });
});
