const data = require('/Volumes/SD Storage/QACyprs/cypress/Data/section_01.json')

context('Validating API response with previous response stored in Json file', () => {
    it('Sections 01 page', () => {
        cy.request({
            method: 'GET',
            url: `https://www.trade-tariff.service.gov.uk/api/v2/sections/01`,
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(response)
            console.log(data)
            expect(response.body).to.deep.equal(data)
        })
    })
})