describe('💷  UK Trader Scheme page ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Page Validation', function () {
        cy.visit('/0702000007/trader-scheme')
        //main page title
        cy.contains('Are you registered with the UK Trader Scheme?')
        cy.contains('If you are importing goods or sale to, or final use by, end consumers located in the UK and you are a trader authorised under the UK Trader Scheme, then your goods may be treated as being \'not at risk\' of further movement into the EU and are not subject to EU import duties.')
        
        cy.contains('Yes, I am registered with the UK Trader Scheme')
        cy.contains('No, I am not registered with the UK Trader Scheme')
        
        //static page links
        cy.contains('If you are not yet registered with the Scheme, then ')
        cy.get('p > .govuk-link').click()
        cy.contains('Apply for authorisation for the UK Trader Scheme if you bring goods into Northern Ireland')
        cy.go('back')
    })
    it('User makes a selection',function(){
        cy.visit('/0702000007/trader-scheme')
        //main page title
        cy.contains('Are you registered with the UK Trader Scheme?')
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




    })

    //error messages - nothing is entered 
    it('No Values Entered',function(){
        cy.visit('/0702000007/trader-scheme')
        //main page title
        cy.contains('Are you registered with the UK Trader Scheme?')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Select one of the two options')
        cy.get('#wizard-steps-trader-scheme-trader-scheme-error')
            .contains('Select one of the two options')

    
    })
    it('Explore the Topic : Other static page links',function(){
        cy.visit('/0702000007/trader-scheme')
        //main page title
        cy.contains('Are you registered with the UK Trader Scheme?')
        
        cy.contains('Explore the topic')
        cy.contains('Apply for authorisation for the UK trader scheme').click()

       
        //https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland-from-1-january-2021
        cy.contains('Apply for authorisation for the UK Trader Scheme if you bring goods into Northern Ireland')
        cy.go(-1)
        cy.contains('Are you registered with the UK Trader Scheme?')


    })
})