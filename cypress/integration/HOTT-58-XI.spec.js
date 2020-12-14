describe('Hide Legal base Column - (XI version) *** Change URLs *** ',function() {

    it('1.Imports measures tab on XI - commodity 0101210000', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/0101210000#import')
        cy.get('.govuk-tabs__panel')
            .contains('Legal base').should('be.visible')
    })
    it('2.Exports measures tab on XI - commodity 0101210000', function () {
        cy.visit('https://www.trade-tariff.service.gov.uk/commodities/0101210000#export')
        cy.wait(1000)
        cy.get('div#export > .govuk-table.measures.small-table th[title=\'Opens in a new window\']')
            .should('be.visible')
            .contains('Legal base')
    })
})
