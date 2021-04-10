describe('🔖 | dcConfirmPage | UK Results Page |',function() {
//1701141000
    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Page Validation', function () {


    //import date
        cy.visit('/import-date?referred_service=uk&commodity_code=1701141000')
        cy.validDate( )
        cy.contains('Continue').click()
//destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
//origin
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()
//trader scheme
        cy.get("div:nth-of-type(2) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()
//certificate
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-no-field").check()
        cy.contains('Continue').click()
//monetary value
        cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type('5000.50')
        cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('455.7533')
        cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('4545.987654')
        cy.contains('Continue').click()
//measure amount
        cy.get('#wizard-steps-measure-amount-dtnr-field').clear().type('12.50')
        cy.contains('Continue').click()
//confirm
     //   cy.get('.govuk-button').click()
    
    //Monetary value page 
    //    cy.contains('What is the monetary value of this import?')
    //    cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type('5000.50')
    //    cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('455.7533')
    //    cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('4545.987654')
    //    cy.contains('Continue').click()
    //Import Quantity
    //    cy.contains('Enter import quantity')
    //    cy.get('#wizard-steps-measure-amount-dtn-field').clear().type('12.50')
    //    cy.get('#wizard-steps-measure-amount-dtnr-field').clear().type('23.98')
    //    cy.get('#wizard-steps-measure-amount-tne-field').clear().type('72.56')
    //    cy.get('#wizard-steps-measure-amount-dap-field').clear().type('87.25')
    //    cy.contains('Continue').click()
            
        cy.contains('Check your answers')
        cy.get('.govuk-grid-column-three-quarters')
     //   cy.get('.govuk-summary-list__key')
        cy.contains('Commodity code')
        cy.contains('Date of import')
        cy.contains('Destination')
        cy.contains('Country of dispatch')
        cy.contains('Trader scheme')
        cy.contains('Certificate of origin')
        cy.contains('Customs value')
        cy.contains('Import quantity')
     //   cy.get('.govuk-summary-list__value')
        cy.contains('1701 14 10 00')
        cy.contains('31 December 2022')
        cy.contains('Northern Ireland')
        cy.contains('United Kingdom (excluding Northern Ireland')
        cy.contains('No')
        cy.contains('No')
        cy.contains('£10,002.24')
        cy.contains('12.50 x 100 kg')
      //  cy.contains('23.98 x 100 kg')
     //   cy.contains('72.56 tonnes')
     //   cy.contains('87.25 x 10,000 kg')
    // Check Change Links
        cy.get('div:nth-of-type(1) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
        cy.go(-1)

        cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('When will the goods be imported?')
        cy.go(-1)
        
        cy.get('div:nth-of-type(3) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which part of the UK are you importing into?')
        cy.go(-1)
        
        cy.get('div:nth-of-type(4) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which country are the goods dispatched from?')
        cy.go(-1)
        
        cy.get('div:nth-of-type(5) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Are you registered with the UK Trader Scheme?')
        cy.go(-1)
        
        cy.get('div:nth-of-type(6) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Do you have a valid Certificate of Origin?')
        cy.go(-1)
        
        cy.get('div:nth-of-type(7) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('What is the monetary value of this import?')
        cy.go(-1)

        cy.get('div:nth-of-type(8) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Enter import quantity')
        cy.go(-1)
            
        cy.contains('Check your answers')
        

        
        
        
    })

})