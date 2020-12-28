describe('🇬🇧 ⚙  🆕 UK version v2 api - legal base should be present in the API response backend API',function() {

    Cypress.config('baseUrl', Cypress.config('services')['uk'])

    it('Prove that the data remains in the JSON API (v2)', () => {
        cy.request('/api/v2/commodities/0101210000.json').then((response) => {
            expect(response).to.have.property('status', 200)
            let measure_types = response.body.included
            let found = false
            for (var i = 0; i < measure_types.length; i++) {
                if (measure_types[i].type == 'legal_act') {
                    found = true
                    break
                }
            }
            expect(found).to.be.true
        })
    })
})