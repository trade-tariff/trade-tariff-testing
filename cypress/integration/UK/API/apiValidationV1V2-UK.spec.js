describe('🇬🇧 ⚙️ | apiValidationV1V2-UK | UK Basic API checks |', () => {
    // V2 API *****************************************************
    it('UK - V2 - Should return a valid payload and Schema should match', function () {
        cy.request('/api/v2/commodities/7202118000').then($response => {
            expect($response.status).to.eq(200)
            cy.task('validateJsonSchema', {
                data: $response.body,
                verbose: true,
                schemaFile: './cypress/Data/uk/v2/7202118000-2021-01-07.json',
            }).should('equal', null)
        })
    })

    it('UK - V2 - Headers,Status,Length,duration', function () {
        cy.request('/api/v2/commodities/2007993943').as('comments')

        cy.get('@comments')
            .then((response) => {
                //status code
                expect(response.status).to.eq(200)
                //headers
                expect(response).to.have.property('headers')
                expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'})
                //response duration less than 300
                expect(response).to.have.property('duration')
                expect(response.duration).to.lessThan(3600)
                //body length
                expect(response.body.included).to.have.length(487)
            })
    })
    it('🚫 UK - V2 - Error codes - 404', function () {
        cy.request({method: 'GET', url: '/api/v2/commodities/08052200110000', failOnStatusCode: false}).as('comments')
        cy.get('@comments')
            .then((response) => {
                expect(response.status).to.eq(404)
            })
    })
    // V1 API *****************************************************
    it('UK - V1 - Should return a valid payload and Schema should match', function () {
        cy.request('/api/v1/commodities/7202118000').then($response => {
            expect($response.status).to.eq(200)
            cy.task('validateJsonSchema', {
                data: $response.body,
                verbose: true,
                schemaFile: './cypress/Data/uk/v1/7202118000-2021-01-07.json',
            }).should('equal', null)
        })
    })

    it('UK - V1 - Headers,Status,Length,duration', function () {
        cy.request('/api/v1/commodities/2007993943').as('comments')

        cy.get('@comments')
            .then((response) => {
                //status code
                expect(response.status).to.eq(200)
                //headers
                expect(response).to.have.property('headers')
                expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'})
                //response duration less than 2000
                expect(response).to.have.property('duration')
                expect(response.duration).to.lessThan(3600)
                //body length
            //    expect(response.body.included).to.have.length(481)
            })
    })
    it('🚫 UK - V1 - Error codes - 404', function () {
        cy.request({method: 'GET', url: '/api/v1/commodities/08052200110000', failOnStatusCode: false}).as('comments')
        cy.get('@comments')
            .then((response) => {
                expect(response.status).to.eq(404)
            })
    })
    
})
