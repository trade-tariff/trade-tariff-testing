describe.skip('| dcTest | 💷 💶  exchange rate test |',function(){
  it('API response for GBP',function(){
    cy.request({
      method: 'GET',
      url: `https://dev.trade-tariff.service.gov.uk/api/v2/exchange_rates/`
    }).then((response) => {
      console.log(JSON.stringify(response.body))
      expect(response.status).to.eq(200)
      expect(response.data).not.null
      expect(response.body.data[49].id).to.eq('GBP')
      expect(response.body.data[49].attributes.rate).not.null
      //debugger;
      console.log(response.body.data[49].attributes.rate.toFixed(2))
    })     
  })
})
