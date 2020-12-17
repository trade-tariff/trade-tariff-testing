describe('🇬🇧⚙️ UK-version v2 api Quotas , P&R suppression ',function() {

    //----------------Quotas to be suppressed for XI -------------
  //  Cypress.config('baseUrl')
    Cypress.config('baseUrl','https://www.trade-tariff.service.gov.uk')

    it('1.Quotas:046 Tariff quota/ceiling', function () {
        cy.request('/api/v2/commodities/6301909021#import.json')
            .then((response) => {
                let measure_types = response.body.included
                let found = false
                for (let i = 0; i < measure_types.length; i++) {
                    if (measure_types[i].description == 'quota') {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true
            })
    })
})