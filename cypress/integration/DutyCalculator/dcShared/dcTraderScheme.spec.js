describe('💷  | dcTraderScheme | UK Trader Scheme page |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Page Validation', function () {
        cy.visit(`/import-date?referred_service=uk&commodity_code=0702000007`)
        cy.contains('UK Global Online Tariff')
        cy.DCMainPage()
        cy.validDate( )
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')
        
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()


        //trader page 
        cy.contains('Are you registered with the UK Trader Scheme?')
        cy.contains('If you are importing goods or sale to, or final use by, end consumers located in the UK and you are a trader authorised under the UK Trader Scheme, then your goods may be treated as being \'not at risk\' of further movement into the EU and are not subject to EU import duties.')
        
        cy.contains('Yes, I am registered with the UK Trader Scheme')
        cy.contains('No, I am not registered with the UK Trader Scheme')
        
        //static page links
        cy.contains('If you are not yet registered with the Scheme, then ')
        cy.get('p > .govuk-link').click()
        cy.contains('Apply for authorisation for the UK Trader Scheme if you bring goods into Northern Ireland')
        cy.go('back')
    
        //Select Yes, I am registered with the UK Trader Scheme
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()

        // selection is persisted 
        cy.go(-1)
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_trader_scheme[trader_scheme]']")
            .parent()
            .find('input')
            .should('be.checked')

        //Select No,I am not registered with the UK Trader Scheme
        cy.get("div:nth-of-type(2) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.go(-1)
        cy.get("div:nth-of-type(2) > input[name='wizard_steps_trader_scheme[trader_scheme]']")
            .parent()
            .find('input')
            .should('be.checked')
        cy.go(-1)
        cy.contains('Continue').click()
    // empty values 
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Select one of the two options')
        cy.get('#wizard-steps-trader-scheme-trader-scheme-error')
            .contains('Select one of the two options')

    //static links on page 
        
        cy.contains('Explore the topic')
        cy.contains('Apply for authorisation for the UK trader scheme').click()
        cy.contains('Apply for authorisation for the UK Trader Scheme if you bring goods into Northern Ireland')
        cy.go(-1)
        cy.contains('Are you registered with the UK Trader Scheme?')


    })
})