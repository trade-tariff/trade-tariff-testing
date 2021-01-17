const data1 = require('../../Data/headings_01.json')
const data2 = require('../../Data/headings_02.json')

context('Validating API response with previous response stored in Json file', () => {
    Cypress.config('baseUrl')
    it.skip('V1 - Sections page', () => {
        cy.request({
            method: 'GET',
            url: `/api/v1/headings/5203#import`,
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(JSON.stringify(data1))
            console.log(JSON.stringify(response.body))
            console.log(response)
            console.log(data1)
            expect(response.body).to.deep.equal(data1)

            cy.task('validateJsonSchema', {
                data:           $response.body,
                verbose:        true,
                schemaFile:     data1,
            }).should('equal', null)
        })
    })
    it.skip('V2 - Sections page', () => {
        cy.request({
            method: 'GET',
            url: `/api/v2/headings/5203#import`,
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(response)
            console.log(data2)
            expect(response.body).to.deep.equal(data2)
        })
    })
})
