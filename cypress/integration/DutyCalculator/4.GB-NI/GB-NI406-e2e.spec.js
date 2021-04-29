 
// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - 🚫  Non processing - 🚫  Certified as UK Origin
// Comm code :1701141000 - item with measure units 

describe('| GB-NI406-e2e.spec | GB to NI route 🚐 06 - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - 🚫  Non processing - 🚫 Certified as UK Origin |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"]
    let pagetitles = ["UK Global Online Tariff","Northern Ireland Online Tariff"] 
    for (let i =0;i<country.length;i++){
        console.log(i)
    it(`e2e GB to NI - ${country[i]}`,function(){
        //select future date 
        cy.visit(`${country[i]}/1701141000/import-date`)
     //   cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1701141000`)
        cy.contains(`${pagetitles[i]}`)
         //date
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
         cy.get("#wizard-steps-planned-processing-planned-processing-commercial-purposes-field").check()
         cy.contains('Continue').click()

         //  🚫 Certified as UK Origin
         cy.certificate('no')

        // Monetary value page 
        cy.customsValue({monetary:'5000.50',shipping:'455.7533',cost:'4545.987654'})
              
        // Measure amount page 
        cy.quantity({dtnr:'23.98'})
      

        //Check your answers page 
        cy.contains('Check your answers')
        cy.get('.govuk-grid-column-three-quarters')
     //   cy.get('.govuk-summary-list__key')
        cy.contains('Commodity code')
        cy.contains('Date of import')
        cy.contains('Destination')
        cy.contains('Coming from')
        cy.contains('Trader scheme')
        cy.contains('Final use')
        cy.contains('Processing')
        cy.contains('Certificate of origin')
        cy.contains('Customs value')
        cy.contains('Import quantity')
     //   cy.get('.govuk-summary-list__value')
        cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('1701 14 10 00')
        cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('31 December 2021')
        cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('Northern Ireland')
        cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)')
        cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('Yes')
        cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('Yes')
        cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('Commercial purposes')
        cy.get('div:nth-of-type(8) > .govuk-summary-list__value').contains('No')
        cy.get('div:nth-of-type(9) > .govuk-summary-list__value').contains('£10,002.24')
     
        cy.contains('23.98 x 100 kg')
    
        cy.get('.govuk-button').click()

     //Final Page 
     cy.contains('Option 1: Third-country duty')
     cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)')
     cy.contains('Option 3: Claiming a waiver – Exchange rate')
            
    
    
    

    })
}
})