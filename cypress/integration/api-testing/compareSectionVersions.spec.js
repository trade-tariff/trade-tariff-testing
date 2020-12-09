const data2 = require('/Volumes/SD Storage/QACyprs/cypress/Data/section_02.json')
const data1 = require('/Volumes/SD Storage/QACyprs/cypress/Data/section_01.json')

context('Validating API response with previous response stored in Json file', () => {
    it('V2 - Sections page', () => {
        cy.request({
            method: 'GET',
            url: `https://www.trade-tariff.service.gov.uk/api/v2/sections/01`,
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(response)
            console.log(data2)
            expect(response.body).to.deep.equal(data2)
        })
    })
    it('V1 - Sections page', () => {
        cy.request({
            method: 'GET',
            url: `https://www.trade-tariff.service.gov.uk/api/v1/sections/01`,
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(response)
            console.log(data1)
            expect(response.body).to.deep.equal(data1)
        })
    })
})