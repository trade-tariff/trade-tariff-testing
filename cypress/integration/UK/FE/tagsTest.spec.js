describe.skip('[WIP]','🚀  UK 🇬🇧 💡 | Test1-UK | Smoke test to cover basic functionality on UK services |',function() {
    // Cypress.config('baseUrl', Cypress.config('services')['uk'])
    Cypress.config('baseUrl')

    it('🚀 UK Routing - Correct page + Legal base does not exist ', function () {
        cy.visit('/commodities/0101210000#import')
    })
})