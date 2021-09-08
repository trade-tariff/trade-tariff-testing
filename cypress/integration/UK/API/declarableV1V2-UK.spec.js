
context('🇬🇧 ⚙️ UK - add declarable on V1 and V2 and set true/false for STW ', () => {
    
    it(' Validate API response for V2 | commodities |', () => {
        cy.request({
            method: 'GET',
            url: '/api/v2/commodities/0202201011'
        }).then((response) => {
            expect(response.status).to.eq(200);
            //console.log(JSON.stringify(response.body))
            expect(response.body).not.to.be.null
            expect(response.body.data.attributes).to.have.property('declarable').to.be.true
        })
    })
    it(' Validate API response for V2 | headings |', () => {
        cy.request({
            method: 'GET',
            url: '/api/v2/headings/1501'
        }).then((response) => {
            expect(response.status).to.eq(200);
            //console.log(JSON.stringify(response.body))
            expect(response.body).not.to.be.null
            expect(response.body.data.attributes).to.have.property('declarable').to.be.false
        })
    })
    it(' Validate API response for V2 | headings which are also commodities |', () => {
        cy.request({
            method: 'GET',
            url: '/api/v2/commodities/9206000000'
        }).then((response) => {
            expect(response.status).to.eq(200);
            //console.log(JSON.stringify(response.body))
            expect(response.body).not.to.be.null
            expect(response.body.data.attributes).to.have.property('declarable').to.be.true
        })
    })

    it(' Validate API response for V1 | commodities |', () => {
        cy.request({
            method: 'GET',
            url: '/api/v1/commodities/0202201011'
        }).then((response) => {
            expect(response.status).to.eq(200);
            //console.log(JSON.stringify(response.body))
            expect(response.body).not.to.be.null
            expect(response.body).to.have.property('declarable').to.be.true   
        })
    })
    it(' Validate API response for V1 | headings |', () => {
        cy.request({
            method: 'GET',
            url: '/api/v1/headings/1501'
        }).then((response) => {
            expect(response.status).to.eq(200);
            //console.log(JSON.stringify(response.body))
            expect(response.body).not.to.be.null
            expect(response.body).to.have.property('declarable').to.be.false
        })
    })
    it(' Validate API response for V1 | headings which are also commodities |', () => {
        cy.request({
            method: 'GET',
            url: '/api/v1/commodities/9206000000'
        }).then((response) => {
            expect(response.status).to.eq(200);
            //console.log(JSON.stringify(response.body))
            expect(response.body).not.to.be.null
            expect(response.body).to.have.property('declarable').to.be.true
        })
    })
})