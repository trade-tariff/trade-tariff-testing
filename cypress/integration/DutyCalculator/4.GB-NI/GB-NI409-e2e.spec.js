// ✅  Trade Remedies - ℹ️ 
// Comm code : 0303149011

describe('| GB-NI409-e2e.spec | GB to NI route 🚌 09 - ✅  Trade Remedies |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e GB to NI ',function(){
        //select future date 
        cy.visit('/1518009129/import-date')
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
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field__option--2')
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
        cy.get('#wizard-steps-measure-amount-tnei-field').clear().type('25.786')
        cy.contains('Continue').click()

        //Confirm Page - Page 17 
        cy.contains('Check your answers')
        cy.get('.govuk-grid-column-three-quarters')
        cy.contains('Commodity code')
        cy.contains('Date of import')
        cy.contains('Destination')
        cy.contains('Country of dispatch')
        cy.contains('Customs value')
        cy.contains('Import quantity')

        //Show Results - Page 18 


    })

})