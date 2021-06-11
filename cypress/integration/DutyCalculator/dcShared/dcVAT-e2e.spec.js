describe('VAT final page calculations', function () {
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it(`UK service - 5% - Multiple VAT rates 🇮🇱 RoW-GB`, function () {
        cy.visit('uk/8716109800/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Israel' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //VAT Page
        cy.vat('5')
        cy.contains('VAT reduced rate 5%')
        cy.get('.govuk-button').click()
        cy.contains('VAT (UK)')
        cy.contains('Import duty (VATR)')
    })
    it(`XI service - 20% - Multiple VAT rates 🇮🇱 RoW-GB`, function () {
        cy.visit('xi/8716109800/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Israel' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //VAT Page
        cy.vat('20')
        cy.contains('Value added tax (20.0%)')
        cy.get('.govuk-button').click()
        cy.contains('VAT (UK)')
    
    })
    it(`UK service - 0% - Multiple VAT rates 🇮🇱 RoW-GB`, function () {
        cy.visit('uk/8716109800/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Israel' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //VAT Page
        cy.vat('0')
        cy.contains('VAT zero rate')
        cy.get('.govuk-button').click()
        cy.contains('VAT (UK)')
        cy.contains('Import duty (VATZ)')

    })
    it(`UK service - Exempt - Multiple VAT rates 🇮🇱 RoW-GB`, function () {
        cy.visit('uk/3002120000/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Israel' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //VAT Page
        cy.vat('exempt')
        cy.contains('VAT exempt')
        cy.get('.govuk-button').click()
        cy.contains('VAT (UK)')
        cy.contains('Import duty (VATE)')

    })
    it(`UK service - No Option available - one rate  🇮🇱 RoW-GB`, function () {
        cy.visit('uk/0702000007/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Afghanistan' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
    
        cy.get('.govuk-button').click()
        cy.contains('VAT (UK)')
        cy.contains('Import duty (VATZ)')

    })
    it.only(`XI service - No Option available - one rate GB-NI `, function () {
        cy.visit('uk/0709996010/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.quantity({ dtn: '230.98' })
        

        cy.get('.govuk-button').click()
        cy.contains('VAT (UK)')
        cy.contains('Import duty (VATZ)')

    })


})