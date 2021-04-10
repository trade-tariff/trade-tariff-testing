describe('🧮 | dcDutyPage | Duties Calculated - page |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Final Duty Calculation page', function () {

//import date
    cy.visit('/import-date?referred_service=uk&commodity_code=7202118000')
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
    cy.contains('Continue').click()
//confirm
    cy.get('.govuk-button').click()

//duty page
    cy.contains('Import duty calculation')
    cy.contains('You are importing commodity')
    cy.contains('from United Kingdom (excluding Northern Ireland) on')
    cy.contains('31 December 2022')
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
    cy.contains('7202 11 80 00')
    cy.contains('Other')
    cy.contains('31 December 2022')
    cy.contains('£10,002.24')
  
//information 
    cy.contains('Third-country duty')
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




    })
})
