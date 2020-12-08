describe('HOTT API Testing',()=> {

    Cypress.config('baseUrl', 'https://www.trade-tariff.service.gov.uk/api/v2/commodities')

    it('1.Get - read main page response not null', () => {
        cy.request('/0702000007').then((response) => {
            expect(response.body).to.not.be.null
        })
    })
    it('2.GET - read main page response code 200', () => {
        cy.request('/0702000007').then((response) => {
            expect(response).to.have.property('status', 200)
        })
    })
})
