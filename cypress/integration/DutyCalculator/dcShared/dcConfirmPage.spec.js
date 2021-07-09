describe('🔖 | dcConfirmPage | UK Results Page |', function () {
    //1701141000
    //

    it('Page Validation', function () {
        cy.visit('/duty-calculator/uk/1701141000/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.quantity({ dtnr: '1' })
        cy.contains('Check your answers')

        //   cy.get('.govuk-summary-list__key')
        cy.contains('Commodity code')
        cy.contains('Date of import')
        cy.contains('Destination')
        cy.contains('Coming from')
        cy.contains('Trader scheme')
        cy.contains('Certificate of origin')
        cy.contains('Customs value')
        cy.contains('Import quantity')
        //   cy.get('.govuk-summary-list__value')
        cy.contains('1701 14 10 00')
        cy.contains('31 December 2021')
        cy.contains('Northern Ireland')
        cy.contains('United Kingdom (excluding Northern Ireland')
        cy.contains('No')
        cy.contains('No')
        cy.contains('£850.00')
        cy.contains('1 x 100 kg')

        // Check Change Links
        //Commodity Information 
        cy.get('div:nth-of-type(1) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')


        // Import Date  
        cy.visit('/duty-calculator/uk/1701141000/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.quantity({ dtnr: '1' })
        cy.contains('Check your answers')

        cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('When will the goods be imported?')

        //Import Destination 
        cy.visit('/duty-calculator/uk/1701141000/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.quantity({ dtnr: '1' })
        cy.contains('Check your answers')

        cy.get('div:nth-of-type(3) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which part of the UK are you importing into?')
        // Import Origin 
        cy.visit('/duty-calculator/uk/1701141000/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.quantity({ dtnr: '1' })
        cy.contains('Check your answers')

        cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which country are the goods coming from?')

        //Trader Scheme
        cy.visit('/duty-calculator/uk/1701141000/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.quantity({ dtnr: '1' })
        cy.contains('Check your answers')

        cy.get('div:nth-of-type(5) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Are you authorised under the UK Trader Scheme?')

        //Certificate of Origin 
        cy.visit('/duty-calculator/uk/1701141000/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.quantity({ dtnr: '1' })
        cy.contains('Check your answers')

        cy.get('div:nth-of-type(6) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Do you have a valid proof of preferential origin?')
        //Customs Value 
        cy.visit('/duty-calculator/uk/1701141000/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.quantity({ dtnr: '1' })
        cy.contains('Check your answers')

        cy.get('div:nth-of-type(7) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('What is the customs value of this import?')
        //Import Quantity 
        cy.visit('/duty-calculator/uk/1701141000/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.quantity({ dtnr: '1' })
        cy.contains('Check your answers')

        cy.get('div:nth-of-type(8) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Enter import quantity')
        cy.go(-1)

        cy.contains('Check your answers')





    })

})