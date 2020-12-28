const data1 = require('../../Data/headings_01.json')
const data2 = require('../../Data/headings_02.json')

context('Validating API response with previous response stored in Json file', () => {

    it('V1 - Sections page', () => {
        cy.request({
            method: 'GET',
            url: `https://dev.trade-tariff.service.gov.uk/xi/api/v1/headings/5203#import`,
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
            url: `https://dev.trade-tariff.service.gov.uk/xi/api/v2/headings/5203#import`,
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(response)
            console.log(data2)
            expect(response.body).to.deep.equal(data2)
        })
    })
})
