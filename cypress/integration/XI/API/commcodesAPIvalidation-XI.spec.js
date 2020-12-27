Cypress.config('baseUrl', Cypress.config('services')['xi'])

context('🇪🇺 ⚙️ XI -Validate API response for commodities on V1 and V2 ', () => {
    it('XI - Validate API response for V2', () => {
        let fixture_timestamp = Cypress.config('fixtures_timestamp');
        let commodity_ids = Cypress.config('commcodes');

        for (let i = 0; i < commodity_ids.length; i++) {
            cy.readFile(`cypress/Data/xi/v2/${commodity_ids[i]}-${fixture_timestamp}.json`).then((fixture) => {
                cy.request({
                    method: 'GET',
                    url: `/api/v2/commodities/${commodity_ids[i]}`
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    console.log(JSON.stringify(fixture))
                    console.log(JSON.stringify(response.body))
                    expect(response.body).to.deep.equal(fixture)
                })
            })
        }
    })

    it('XI - Validate API response for V1', () => {
        let fixture_timestamp = Cypress.config('fixtures_timestamp');
        let commodity_ids = Cypress.config('commcodes');

        for (let i = 0; i < commodity_ids.length; i++) {
            cy.readFile(`cypress/Data/xi/v1/${commodity_ids[i]}-${fixture_timestamp}.json`).then((fixture) => {
                cy.request({
                    method: 'GET',
                    url: `/api/v1/commodities/${commodity_ids[i]}`
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    console.log(fixture)
                    expect(response.body).to.deep.equal(fixture)
                })
            })
        }
    })

})