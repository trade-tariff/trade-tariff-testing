describe('📑 | dcTradeRemedies | Trade remedies page |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Page Validation', function () {
        cy.visit('uk/0702000007/import-date')
   //     cy.visit('/import-date?referred_service=uk&commodity_code=0702000007')
        cy.validDate( )
        cy.contains('Continue').click()
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()         
        cy.contains('Continue').click()
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()
        cy.visit('/trade-remedies?referred_service=uk&commodity_code=0702000007')
        
        //main page title
        cy.contains('Duties apply to this import')
        cy.contains("As this commodity attracts a trade defence measure, imports of this commodity are treated as 'at risk' under all circumstances.")

        cy.contains("Click on the 'Continue' button to enter the customs value of your import, to help to calculate the applicable import duties.")
        
        
    })
})