describe('| dcSmokeTestCI.spec | Duty Calculator smoke test |', function () {
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

// Duty Calculator tests
it(`🚀 UK 🇬🇧 - Duty Calculator e2e - ( NI to GB )`, function () {
    cy.visit('/uk/0702000007/import-date')
    cy.validDate()
    cy.selectDestination('gb')
    cy.originList({ value: 'Northern Ireland' })

})
it(`🚀 UK 🇬🇧 - Duty Calculator e2e - ( RoW to GB )204`, function () {
    cy.visit('/uk/0702000007/import-date')
    cy.validDate()
    cy.selectDestination('gb')
    cy.originList({ value: 'Singapore' })

})
it(`🚀 XI 🇪🇺 - Duty Calculator e2e - ( GB to NI ) 406`, function () {
    cy.visit('/xi/0702000007/import-date')
    cy.validDate()
    cy.selectDestination('xi')
    cy.selectOrigin('uk')

})
it(`🚀 XI 🇪🇺 - Duty Calculator e2e - ( EU to NI )`, function () {
    cy.visit('/xi/0702000007/import-date')
    cy.validDate()
    cy.selectDestination('xi')
    cy.selectOrigin('eu')

})
})
