describe('💷 💶  exchange rate test ',function(){

it('API response for GBP',function(){
    cy.request({
        method: 'GET',
        url: `https://dev.trade-tariff.service.gov.uk/api/v2/exchange_rates/`,
    }).then((response) => {
     //   expect(response.status).to.eq(200)
        
        console.log(JSON.stringify(response.body))
        console.log(response)
   
        expect(response.rates.GBP).not.null
        

    })

})
})