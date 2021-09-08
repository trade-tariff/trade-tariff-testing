
let data = require('../../../../Data/sections.json');
// let data = JSON.parse(rawdata);
context('compareSectionsV2api-XI', () => {
    it.skip('Get sessions by ID - 200', () => {
        cy.request({
            method: 'GET',
            url: `/xi/api/v2/sections`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data[0]).to.deep.equal({
                id: '1',
                type: 'section',
                attributes: {
                    id: 1,
                    numeral: 'I',
                    title: 'Live animals; animal products',
                    position: 1,
                    chapter_from: '01',
                    chapter_to: '05',
                },
            });
            console.log(response);
            console.log(data);
            expect(response.body).to.deep.equal(data);
        })
    })
})
