describe('🇬🇧 ⚙️ UK version v1 api - legal base should be present in the backend API response  API',function() {

    Cypress.config('baseUrl', 'https://dev.trade-tariff.service.gov.uk')

    it('Prove that the data remains in the JSON API (v1) ', () => {
        cy.request('/api/v1/commodities/0101210000.json').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).not.to.be.null

            let import_measures = response.body.import_measures
            let found = false
            for (let i = 0; i < import_measures.length; i++) {
                console.log(import_measures[i]);
                if (import_measures[i].hasOwnProperty('legal_acts')) {
                    found = true
                    break
                }
            }
            expect(found).to.be.true

        })
        })
    })
