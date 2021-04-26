describe('🔖 | dcCertificateOfOrigin | UK Certificate of Origin page |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it.only('Page Validation', function () {
        cy.visit('uk/0702000007/import-date')
     //   cy.visit(`/import-date?referred_service=uk&commodity_code=0702000007`)
        cy.contains('UK Global Online Tariff')
        cy.DCMainPage()
        cy.validDate( )
        cy.contains('Continue').click()
        //Destination
        cy.contains('Which part of the UK are you importing into?')
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        // Origin
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()
        //Trader Scheme
        cy.contains('Are you registered with the UK Trader Scheme?')
        cy.get("div:nth-of-type(2) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()

        //Certificate of Origin
        cy.contains('Do you have a valid Certificate of Origin?')
        cy.contains('If you have a valid Certificate of Origin proving that your goods were materially manufactured in the UK, then you are eligible to take advantage of the 0% import duties made available under the UK / EU Trade and Cooperation Agreement.')
        
        cy.contains('Yes, I have a valid Certificate of Origin')
        cy.contains('No, I do not have a valid Certificate of Origin')
    
        //Select Yes, valid Certificate of Origin
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-yes-field").check()
        cy.contains('Continue').click()

        //selection is persisted 
        cy.go(-1)
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-yes-field")
            .parent()
            .find('input')
            .should('be.checked')

        //Select No,valid Certificate of Origin
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-no-field").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.go(-1)
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-no-field")
            .parent()
            .find('input')
            .should('be.checked')
        // No Values Selected 
        cy.go(-1)
        cy.contains('Continue').click()
        cy.contains('Do you have a valid Certificate of Origin?')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Select one of the two options')
        cy.get('#wizard-steps-certificate-of-origin-certificate-of-origin-error')
            .contains('Select one of the two options')
    })
    
})