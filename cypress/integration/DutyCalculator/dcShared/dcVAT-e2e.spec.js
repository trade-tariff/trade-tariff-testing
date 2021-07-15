describe('| 🛄 dcVAT-e2e | VAT final page calculations |', function () {
    //

    it(`UK service - 5% - Multiple VAT rates 🇮🇱 RoW-GB`, function () {
        cy.visit('/duty-calculator/uk/8716109800/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Israel' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //VAT Page
        cy.vat('5')
        cy.contains('VAT reduced rate 5%')
        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('Reduced rate')
    })
    it(`XI service - 20% - Multiple VAT rates 🇮🇱 RoW-GB`, function () {
        cy.visit('/duty-calculator/xi/8716109800/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Israel' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //VAT Page
        cy.vat('20')
        cy.contains('Value added tax (20.0%)')
        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('Standard rate')


    })
    it(`UK service - 0% - Multiple VAT rates 🇮🇱 RoW-GB`, function () {
        cy.visit('/duty-calculator/uk/8716109800/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Israel' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //VAT Page
        cy.vat('0')
        cy.contains('VAT zero rate')
        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('Zero rate')

    })
    it(`UK service - Exempt - Multiple VAT rates 🇮🇱 RoW-GB`, function () {
        cy.visit('/duty-calculator/uk/3002120000/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Israel' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //VAT Page
        cy.vat('exempt')
        cy.contains('VAT exempt')
        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('VAT exempt')

    })
    it(`UK service - No Option available - one rate  🇮🇱 RoW-GB`, function () {
        cy.visit('/duty-calculator/uk/0702000007/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Greenland' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })

        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('Zero rate')
        cy.get('.govuk-back-link').click().wait(200)
        cy.get('.govuk-back-link').click()
        cy.contains('What is the customs value of this import?')


    })
    it(`XI service - No Option available - one rate GB-NI `, function () {
        cy.visit('/duty-calculator/uk/0702000007/import-date')
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
        cy.contains('VAT')
        cy.contains('Zero rate')

        cy.get('.govuk-back-link').click().wait(200)
        cy.get('.govuk-back-link').click()
        cy.contains('Enter import quantity')

    })
    it(`XI service - Multiple VAT rates 🇮🇱 RoW-XI`, function () {
        cy.visit('/duty-calculator/uk/8716109800/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 

        cy.otherOriginList({ value: 'Israel' })
        //Trader Scheme
        cy.traderScheme('no')
        cy.euDutiesApply()
        cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
        //VAT Page
        cy.vat('20')
        cy.contains('Value added tax (20.0%)')
        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('Standard rate')
        cy.get('.govuk-back-link').click().wait(200)
        //Change to different VAT rate 
        cy.get('div:nth-of-type(7) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which VAT rate is applicable to your trade?')
        //VAT Page
        cy.vat('0')
        cy.contains('VAT zero rate')
        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('Zero rate')
        cy.get('.govuk-back-link').click().wait(200)
        //Change to different VAT rate 
        cy.get('div:nth-of-type(7) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which VAT rate is applicable to your trade?')
        //VAT Page
        cy.vat('5')
        cy.contains('VAT reduced rate 5%')
        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('Reduced rate')
    })
    it('XI service - Multiple VAT rates - GB to NI ', function () {
        //select future date 
        cy.visit(`/duty-calculator/xi/8716109800/import-date`)
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('gb')
        // ✅ Trader Scheme Registered - Yes 
        cy.traderScheme('yes')
        // ✅  Final use in NI - Yes 
        cy.finalUse('yes')
        // 🚫 Non processing - No - The goods will be processed for commercial purposes other than those listed above
        cy.get("#steps-planned-processing-planned-processing-commercial-purposes-field").check()
        cy.contains('Continue').click()
        //  🚫 Certified as UK Origin
        cy.certificate('no')
        // Monetary value page 
        cy.customsValue({ monetary: '5000.50', shipping: '455.7533', cost: '4545.987654' })

        //VAT Page
        cy.vat('20')
        cy.contains('Value added tax (20.0%)')
        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('Standard rate')
        cy.get('.govuk-back-link').click().wait(200)
        //Change to different VAT rate 
        cy.get('div:nth-of-type(10) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which VAT rate is applicable to your trade?')
        //VAT Page
        cy.vat('0')
        cy.contains('VAT zero rate')
        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('Zero rate')
        cy.get('.govuk-back-link').click().wait(200)
        //Change to different VAT rate 
        cy.get('div:nth-of-type(10) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which VAT rate is applicable to your trade?')
        //VAT Page
        cy.vat('5')
        cy.contains('VAT reduced rate 5%')
        cy.get('.govuk-button').click()
        cy.contains('VAT')
        cy.contains('Reduced rate')

        //Final Page 
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)')
        cy.contains('Option 3: Claiming a waiver – Exchange rate')

    })




})
