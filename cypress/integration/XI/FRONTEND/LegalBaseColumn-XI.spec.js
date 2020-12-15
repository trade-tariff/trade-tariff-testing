describe('Hide Legal base Column - (XI version) *** Change URLs *** ',function() {
//HOT-58 Suppressing Legal Base Column for XI
// front end
    Cypress.config('baseUrl','https://dev.trade-tariff.service.gov.uk')

    it.skip('1.Imports measures tab on XI - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#import')
     //   cy.get('.govuk-tabs__panel').should('be.visible', 'Legal base')
     //   cy.get('govuk-tabs__panel').should('not.have.text', 'Legal base')
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })

    it.skip('2.Exports measures tab on XI - commodity 0101210000', function () {
        cy.visit('/commodities/0101210000#export')
        cy.wait(1000)
        cy.get('.govuk-tabs__panel').should('not.have.value', 'Legal base')
    })
//API testing
    //version v1 - legal base should be present in the API response

    })
    it('v2 - response code 200', () => {
        cy.request('/api/v2/commodities/0101210000.json').then((response) => {
           expect(response).to.have.property('status', 200)
            expect(response.body.included[285]).to.have.property('type', 'legal_act')
        })
    })