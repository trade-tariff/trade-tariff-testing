describe('OTT API Testing - Sections Page v2',()=> {

    Cypress.config('baseUrl','https://www.trade-tariff.service.gov.uk/api/v2')
    it('sections page - response code 200', () => {
        cy.request('/sections').then((response) => {
            expect(response).to.have.property('status', 200)
        })
    })

    it(' sections page - response not null',() =>{
        cy.request('/sections').then((response)=>{
            expect(response.body).to.not.be.null
        })
    })

    it('sections page - returns JSON data',() =>{
        cy.request('/sections')
            .its('headers')
            .its('content-type')
            .should('include','application/json')
    })

})

