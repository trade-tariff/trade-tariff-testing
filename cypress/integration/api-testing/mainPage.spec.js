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

//it('4.Response body contains specific text',function(){
//         expect(response.body.data[0]).to.deep.equal({
//             "id": "1",
//             "type": "section",
//             "attributes": {
//                 "id": 1,
//                 "numeral": "I",
//                 "title": "Live animals; animal products",
//                 "position": 1,
//                 "chapter_from": "01",
//                 "chapter_to": "05",
//
//         })