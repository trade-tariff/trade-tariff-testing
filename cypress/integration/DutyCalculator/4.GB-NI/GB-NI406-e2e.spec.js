 
// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - 🚫  Non processing - 🚫  Certified as UK Origin
// Comm code :1701141000 - item with measure units 

describe('| GB-NI406-e2e.spec | GB to NI route 🚐 06 - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - 🚫  Non processing - 🚫 Certified as UK Origin |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"] 
    for (let i =0;i<country.length;i++){
        console.log(i)
    it(`e2e GB to NI - ${country[i]}`,function(){
        //select future date 
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1701141000`)
        cy.contains('Trade Tariff Duty Calculator')
        cy.validDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        // check URL 

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

        //select United Kingdom as country of Origin       
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()

        // ✅  Trader Scheme Registered - Yes 
        cy.contains('Are you registered with the UK Trader Scheme?')
        //Select Yes, I am registered with the UK Trader Scheme
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()

        // ✅  Final use in NI - Yes 
        cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
        //Select Yes, I am importing this good into Northern Ireland for its sale to, or final use by, end-consumers located in the United Kingdom
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_final_use[final_use]']").check()
        cy.contains('Continue').click()


        // 🚫 Non processing - No
        // Select - The goods will be processed for commercial purposes other than those listed above
        cy.get("#wizard-steps-planned-processing-planned-processing-commercial-purposes-field").check()
        cy.contains('Continue').click()
        //  🚫 Certified as UK Origin
        cy.contains('Do you have a valid Certificate of Origin?')
        //Select Yes, valid Certificate of Origin
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-no-field").check()
        cy.contains('Continue').click()

        //Monetary value page 
        cy.contains('What is the monetary value of this import?')
        cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type('5000.50')
        cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('455.7533')
        cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('4545.987654')
        cy.contains('Continue').click()
                    
        // Measure amount page 
        cy.contains('Enter import quantity')
     //   cy.get('#wizard-steps-measure-amount-dtn-field').clear().type('12.50')
        cy.get('#wizard-steps-measure-amount-dtnr-field').clear().type('23.98')
     //   cy.get('#wizard-steps-measure-amount-tne-field').clear().type('72.56')
     //   cy.get('#wizard-steps-measure-amount-dap-field').clear().type('87.25')
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
        cy.contains('Final use')
        cy.contains('Processing')
        cy.contains('Certificate of origin')
        cy.contains('Customs value')
        cy.contains('Import quantity')
     //   cy.get('.govuk-summary-list__value')
        cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('1701 14 10 00')
        cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('31 December 2022')
        cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('Northern Ireland')
        cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)')
        cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('Yes')
        cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('Yes')
        cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('Commercial purposes')
        cy.get('div:nth-of-type(8) > .govuk-summary-list__value').contains('No')
        cy.get('div:nth-of-type(9) > .govuk-summary-list__value').contains('£10,002.24')
     //   cy.contains('12.50 x 100 kg')
        cy.contains('23.98 x 100 kg')
    //    cy.contains('72.56 tonnes')
     //   cy.contains('87.25 x 10,000 kg')
        cy.get('.govuk-button').click()

     //Final Page 
     cy.contains('Import duty calculation')
     cy.contains('Option 1: Third-country duty')
     cy.contains('Option 2: Tariff preference')
            
    })
}
})