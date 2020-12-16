describe('UK version v2 api - legal base should be present in the backend API response  API',function() {

    Cypress.config('baseUrl', 'https://dev.trade-tariff.service.gov.uk/uk')

    it('v2 - 200, legal base is present', () => {
        cy.request('/api/v2/commodities/0101210000.json').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body.included[285]).to.have.property('type', 'legal_act')
        })
    })
})