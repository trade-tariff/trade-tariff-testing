describe('🇪🇺 💡 ⚙️ quotas Search -XI services)',function() {
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('⚙️ 🚫 API - XI quota search page 404', function () {
        cy.request({method: 'GET', url: '/api/v2/quota_search', failOnStatusCode: false}).as('comments')
        cy.get('@comments')
            .then((response) => {
                expect(response.status).to.eq(404)
            })
    })
    it('💡 🚫 Quotas search should not exist on tools page ',function(){
            cy.visit('/tools')
            !cy.get('.govuk-list')
                .contains('Quotas').should('not.exist')

        })
})
