describe('|dcVAT-e2e|VAT final page calculations|', function () {
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
    it.only(`UK service - No Option available - one rate  🇮🇱 RoW-GB`, function () {
        cy.visit('uk/0702000007/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Greenland' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
    
        cy.get('.govuk-button').click()
        cy.contains('VAT (UK)')
        cy.contains('Import duty (VATZ)')
        cy.get('.govuk-back-link').click().wait(200)
        cy.get('.govuk-back-link').click()
        cy.contains('What is the customs value of this import?')


    })
    it.only(`XI service - No Option available - one rate GB-NI `, function () {
        cy.visit('uk/0702000007/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.otherOriginList({ value: 'Greenland' })
        cy.traderScheme('no')
        cy.contains('EU duties apply to this import')
        cy.get('.govuk-button').click()
      //  cy.certificate('no')
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.quantity({ dtn: '230.98' })
        cy.get('.govuk-button').click()
        cy.contains('VAT (XI)')
        cy.contains('Import duty (VATZ)')
        
        cy.get('.govuk-back-link').click().wait(200)
        cy.get('.govuk-back-link').click()
        cy.contains('Enter import quantity')

    })


})