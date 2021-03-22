// ✅  Trade Remedies - ℹ️ 
// Comm code : 0303149011 + no measure units 

describe('| GB-NI409a-e2e.spec | GB to NI route 🚌 09 - ✅  Trade Remedies |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"] 
    for (let i =0;i<country.length;i++){
        console.log(i)

    it(`e2e GB to NI - ${country[i]}`,function(){
        //select future date 
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=0303149011`)
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

        //select United Kingdom as country of Origin
         //select country from list       
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
         .click().clear().wait(500)
         .type('United Kingdom').wait(500)
        
         .click()
        cy.contains('Continue').click()

        // ℹ️ Interstitial Message - EU duties apply
        cy.contains('EU duties apply to this import')
        cy.get('.govuk-button').click()

         //💰 Whats the monetary value?
        cy.contains('What is the monetary value of this import?')
        cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type('4567.001')
         cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('1213.43')
         cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('5.434')
         cy.contains('Continue').click()

        // ⚖️ How many kilos/litres ? Page 12
        cy.contains('Enter import quantity')
        cy.contains('The duties payable on this commodity are dependent on the quantity, weight or volume of goods that you are importing. Enter the units of the goods that you are importing in the boxes below.')   
        cy.contains('Continue').click()

        //Confirm Page - Page 17 
        cy.contains('Check your answers')
        cy.contains('Commodity code')
        cy.contains('Date of import')
        cy.contains('Destination')
        cy.contains('Country of dispatch')
        cy.contains('Customs value')
        
     //   Check values 
        cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('0303 14 90 11')
        cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('31 December 2022')
        cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('United Kingdom (Northern Ireland)')
        cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom')       
        cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('£5785.865000000001')     
        cy.contains('Calculate import duties').click()

    //Final Page 


    })
}

})