// ✅  Trade Remedies - ℹ️ 
// Comm code : 0304829010 + with measure units 

describe('| GB-NI409b-e2e.spec | GB to NI route 🚌 09 - ✅  Trade Remedies |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"] 
    let pagetitles = ["UK Global Online Tariff","Northern Ireland Online Tariff"]
    for (let i =0;i<country.length;i++){
        console.log(i)

    it(`e2e GB to NI - ${country[i]}`,function(){
        //select future date 
        cy.visit(`${country[i]}/0304829010/import-date`)
     //   cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=0304829010`)
        cy.contains(`${pagetitles[i]}`)
        cy.validDate()
        cy.contains('Which part of the UK are you importing into?')

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods coming from?')

        //select United Kingdom as country of Origin
         cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
         cy.contains('Continue').click()

        // ℹ️ Interstitial Message - EU duties apply
        cy.contains('Duties apply to this import')
        cy.get('.govuk-button').click()

         //💰 Whats the monetary value?
        cy.contains('What is the customs value of this import?')
        cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type('4567.001')
         cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('1213.43')
         cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('5.434')
         cy.contains('Continue').click()

        //Confirm Page - Page 17 
        cy.contains('Check your answers')   
        cy.contains('Commodity code')
        cy.contains('Date of import')
        cy.contains('Destination')
        cy.contains('Coming from')
        cy.contains('Customs value')
     //   cy.contains('Import quantity')
     //   Check values 
        cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('0304 82 90 10')
        cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('31 December 2021')
        cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('Northern Ireland')
        cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)')
        cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('£5,785.87')
      //  cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('25.786 tonnes') 
      cy.get('.govuk-button').click()

      //Final Page 
      cy.contains('Import duty calculation')
      cy.contains('Option 1: Third-country duty')
      cy.contains('Option 2: Tariff preference')
    })
}

})