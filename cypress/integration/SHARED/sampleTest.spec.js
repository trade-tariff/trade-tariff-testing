describe(' 🍻 ***Test file***',function() {
    Cypress.config('baseUrl')

    it.skip('🍻🍻', function () {
        cy.request('/api/v1/commodities/0101210000.json')
            .then((response) => {
                let import_measures = response.body.import_measures
                let found = false
                for (let i = 0; i < import_measures.length; i++) {
                    console.log(import_measures[i]);
                    if (import_measures[i].hasOwnProperty('legal_acts')) {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true

                })

            })
    it('🍭 API - V2 - Headers,Status,Length,duration', function () {
        cy.request('/api/v2/commodities/2007993946').as('comments')

        cy.get('@comments')
            .then((response) => {
                //status code
                expect(response.status).to.eq(200)
                //headers
              //  expect(response).to.have.property('headers')
             //   expect(response.headers).to.include({'content-type': 'application/json; charset=utf-8'})
                //response duration less than 300
            //    expect(response).to.have.property('duration')
                expect(response.duration).to.lessThan(300)
                //body length
              //  expect(response.body.included).to.have.length(499)
            })
    })
    //2007993943
    it('🍬 UI Navigate to commodity root level ',function(){
        cy.visit('/sections')
        cy.contains(' Prepared foodstuffs; beverages, spirits and vinegar; tobacco and manufactured tobacco substitutes')
        cy.get('tr:nth-of-type(4) > .govuk-table__cell.title > a').click()
        cy.contains(' Preparations of vegetables, fruit, nuts or other parts of plants')
        cy.get('tr:nth-of-type(5) > td:nth-of-type(2) > a').click()
        cy.contains(' Jams, fruit jellies, marmalades, fruit or nut purée and fruit or nut pastes, obtained by cooking, whether or not containing added sugar or other sweetening matter')
        cy.get('tr:nth-of-type(7) > td:nth-of-type(2) > a').click()
        cy.contains('Other')
        //open all headings
        cy.get('.tariff > div > div:nth-of-type(1) > a:nth-of-type(1)').click()
        cy.wait(1000)
        //close all headings
        cy.get('.tariff > div > div:nth-of-type(1) > a:nth-of-type(2)').click()
        cy.get('.tariff > div > div:nth-of-type(1) > a:nth-of-type(1)').click()
      //  cy.get('.has_children.level-11.last-child')
        cy.get('.level-12')
         .contains('Containing less than 70 % by weight of sugar').click()
            cy.contains('Commodity information for 2007993943')



    })

})