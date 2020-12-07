describe('HOTT API Testing',()=> {

    Cypress.config('baseUrl','https://www.trade-tariff.service.gov.uk/api/v2')
    //response code 200
    it('1 .main page response code 200', () => {
        cy.request('/sections').then((response) => {
            expect(response).to.have.property('status', 200)
        })
    })

    //response content is not null
    it('2. main page response not null',() =>{
        cy.request('/sections').then((response)=>{
            expect(response.body).to.not.be.null
        })
    })

//response content type
    it('3.returns a JSON data',() =>{
        cy.request('/sections')
            .its('headers')
            .its('content-type')
            .should('include','application/json')
    })


})

