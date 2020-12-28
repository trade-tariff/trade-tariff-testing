const data1 = require('../../Data/section_01.json')
const data2 = require('../../Data/section_02.json')

context('Validating API response with previous response stored in Json file', () => {

    it('V1 - Sections page', () => {
        cy.request({
            method: 'GET',
            url: `https://www.dev.trade-tariff.service.gov.uk/xi/api/v1/sections/01`,
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(response)
            console.log(data1)
            expect(response.body).to.deep.equal(data1)
        })
    })
    it('V2 - Sections page', () => {
        cy.request({
            method: 'GET',
            url: `https://www.dev.trade-tariff.service.gov.uk/xi/api/v2/sections/01`,
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(response)
            console.log(data2)
            expect(response.body).to.deep.equal(data2)
        })
    })
})
