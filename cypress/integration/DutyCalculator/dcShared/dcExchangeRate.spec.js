describe('💷 💶 | dcExchangeRate | Validating exchange rates |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Exchange rate', function () {

        //import date
        cy.visit('uk/7202118000/import-date')
    //    cy.visit('/import-date?referred_service=uk&commodity_code=7202118000')
        cy.validDate( )
        cy.contains('Continue').click()
        //destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        //origin
      //  cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
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
        
        //confirm
        cy.get('.govuk-button').click()

        //duty page
        cy.contains('Import duty calculation')
        cy.contains('You are importing commodity')
        cy.contains('from United Kingdom (excluding Northern Ireland) on')
        cy.contains('31 December 2021')
        cy.contains('7202 11 80 00').click()
        cy.contains('Commodity information for 7202118000')
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
            url: `https://staging.trade-tariff.service.gov.uk/api/v2/exchange_rates/`,
        }).then((response) => {
            expect(response.status).to.eq(200)  
            console.log(JSON.stringify(response.body)) 
        let exchangerate = response.body.data[49].attributes.rate
        console.log(`${exchangerate}`)
        
        cy.contains(`Please note - the current page uses an exchange rate of`) 
        cy.log(parseFloat(`${exchangerate.toFixed(4)}`))
        cy.contains('More about this exchange rate').click()
        cy.contains('The exchange rate used is derived from European Central Bank. The reference rates are usually updated around 15:00 on every working day.')

    })
            
    })

})
