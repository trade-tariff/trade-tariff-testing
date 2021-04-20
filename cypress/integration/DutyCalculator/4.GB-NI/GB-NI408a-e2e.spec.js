// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - 🚫 Trader Scheme - 🚫  Certified as UK origin
// Comm code :7202118000 - Commodity with no measure units 

describe('| GB-NI408a-e2e.spec | GB to NI route 🚐 08 - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - 🚫 Trader Scheme - 🚫  Certified as UK origin |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e GB to NI ',function(){
        //select future date 
        cy.visit('/import-date?referred_service=uk&commodity_code=7202118000')
        cy.contains('UK Global Online Tariff')
        cy.validDate()
        cy.contains('Which part of the UK are you importing into?')
        // check URL 

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

        //select United Kingdom as country of Origin       
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()

        // 🚫 Trader Scheme Registered - Yes 
        cy.contains('Are you registered with the UK Trader Scheme?')
        //Select Yes, I am registered with the UK Trader Scheme
        cy.get("div:nth-of-type(2) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()

        // 🚫 Certified as UK origin
        //Select Yes, valid Certificate of Origin
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-no-field").check()
        cy.contains('Continue').click()

        //Monetary value page 
        cy.contains('What is the monetary value of this import?')
        cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type('5000.50')
        cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('455.7533')
        cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('4545.987654')
        cy.contains('Continue').click()
        
        //Check your answers page 
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
        
     //   cy.get('.govuk-summary-list__value')
        cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('7202 11 80 00')
        cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('31 December 2022')
        cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('Northern Ireland')
        cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)')
        cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('No')
        cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('No')
        cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('£10,002.24')
        
    //confirm
         cy.get('.govuk-button').click()

    //duty page
        cy.contains('Import duty calculation')
        cy.contains('You are importing commodity')
        cy.contains('from United Kingdom (excluding Northern Ireland) on')
        cy.contains('31 December 2022')
        cy.contains('7202 11 80 00').click()
        cy.contains('Commodity information for 7202118000')
        cy.get('.govuk-back-link').click()
    //keys
     //   cy.get('.govuk-details > .govuk-details__summary')
        cy.contains('Details of your trade').click()
        cy.get('.govuk-details__text')
        cy.contains('Origin:')
        cy.contains('Commodity:')
        cy.contains('Import date:')
        cy.contains('Valuation of import:')
    //values
        cy.contains('7202 11 80 00')
        cy.contains('Other')
        cy.contains('31 December 2022')
        cy.contains('£10,002.24')
  
    //information 
    //    cy.contains('Third-country duty will apply as there is no preferential agreement in place for the import of this commodity.')
       cy.get('.govuk-table__row')
        cy.contains('Data')
        cy.contains('Calculation')
        cy.contains('Value')
    //first row
        cy.contains('Valuation for import')
        cy.contains('Value of goods + freight + insurance costs')
        cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£10,002.24')
    //import duty 
        cy.contains('Import duty Third-country duty (XI)')
        cy.contains('2.7% * £10,002.24')
        cy.get('tr:nth-of-type(2) > td:nth-of-type(3)').contains('£270.06')
    //Last row 
        cy.contains('Duty Total')
        cy.get('tr:nth-of-type(3) > td:nth-of-type(3)').contains('£270.06')

        // Exchange Rate 
        cy.request({
            method: 'GET',
            url: `https://dev.trade-tariff.service.gov.uk/api/v2/exchange_rates/`,
        }).then((response) => {
            expect(response.status).to.eq(200)  
            console.log(JSON.stringify(response.body)) 
        let exchangerate = response.body.data[49].attributes.rate
        console.log(`${exchangerate}`)
        
     //   cy.contains(`Please note - the current page uses an exchange rate of ${exchangerate} GBP to EUR.`) 
        cy.log(`${exchangerate}`)
        cy.contains('More about this exchange rate').click()
        cy.contains('The exchange rate used is derived from European Central Bank. The reference rates are usually updated around 15:00 on every working day.')
        //Final Page 
        cy.contains('Import duty calculation')
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference')

    })


    })
})