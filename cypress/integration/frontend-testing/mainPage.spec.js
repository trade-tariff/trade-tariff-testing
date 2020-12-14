describe('Main Page - start ',function() {

    it('Main page ', function () {
        cy.visit('https://www.gov.uk/trade-tariff')
        cy.wait(1000)
        cy.get('p#get-started > a[role=\'button\']').contains('Start now').should('be.visible').click()
        cy.url().should('include', 'sections', {timeout: 5000})
        cy.contains('All sections')
        cy.wait(1000)

    })

})