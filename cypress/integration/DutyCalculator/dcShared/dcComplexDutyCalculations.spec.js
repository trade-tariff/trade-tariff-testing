describe('| dcComplexDutyCalculations | calculating complex duties |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Calculate compound duties ', function () {

        //import date
        cy.visit('/import-date?referred_service=uk&commodity_code=2903898045')
        cy.validDate( )
        cy.contains('Continue').click()
        //destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        //origin
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()
        //trader scheme
        //  cy.get("div:nth-of-type(2) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.get('.govuk-button').click()
        //certificate
        //   cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-no-field").check()
        // cy.contains('Continue').click()
        //monetary value
        cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type('500.00')
        cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('250.00')
        cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('250.00')
        cy.contains('Continue').click()
        //measure amount
        cy.get('#wizard-steps-measure-amount-dtn-field').click().type('1.0')
        cy.contains('Continue').click()
        //confirm
        cy.get('.govuk-button').click()

        //duty page
        cy.contains('Import duty calculation')
        cy.contains('You are importing commodity')
        cy.contains('from United Kingdom (excluding Northern Ireland) on')
        cy.contains('31 December 2021')
        cy.contains('2401 10 35 10').click()
        cy.contains('Commodity information for 2401103510')
        cy.go(-1)
        //keys
        cy.get('.govuk-details > .govuk-details__summary')
        cy.contains('Details of your trade').click()
        cy.get('.govuk-details__text')
        cy.contains('Origin:')
        cy.contains('Commodity:')
        cy.contains('Import date:')
        cy.contains('Valuation of import:')
        //values
    
        //information 
     //   cy.contains('Third-country duty will apply as there is no preferential agreement in place for the import of this commodity.')
        cy.get('.govuk-table__row')
        cy.contains('Data')
        cy.contains('Calculation')
        cy.contains('Value')
        //first row


        // Exchange Rate 
        cy.request({
            method: 'GET',
            url: `https://dev.trade-tariff.service.gov.uk/api/v2/exchange_rates/`,
        }).then((response) => {
            expect(response.status).to.eq(200)  
            console.log(JSON.stringify(response.body)) 
        let exchangerate = response.body.data[49].attributes.rate
        console.log('exchangerate')
        
        cy.contains(`Please note - the current page uses an exchange rate of ${exchangerate} GBP to EUR.`) 
        cy.log(`${exchangerate}`)
        cy.contains('More about this exchange rate').click()
        cy.contains('The exchange rate used is derived from European Central Bank. The reference rates are usually updated around 15:00 on every working day.')

    })
            
    })

})
