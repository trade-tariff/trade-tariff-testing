describe('💷  | dcTraderScheme | UK Trader Scheme page |', function () {

    //

    it('RoW - GB Page Validation', function () {
        cy.visit('/duty-calculator/uk/0702000007/import-date')
        //    cy.visit(`/import-date?referred_service=uk&commodity_code=0702000007`)
        cy.contains('UK Integrated Online Tariff')
        cy.DCMainPage()
        cy.validDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        cy.get('#steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods coming from?')

        cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()

        //trader page 
        cy.contains('Are you authorised under the UK Trader Scheme?')
        cy.contains("If you are moving goods into Northern Ireland which are for sale to, or final use by, end consumers located in the UK and you are authorised under the UK Trader Scheme, then you may declare your goods as being 'not at risk' where the requirements are met. A not ‘at risk’ good entering Northern Ireland from Great Britain will not be subject to duty.")

        cy.contains('Yes, I am authorised under the UK Trader Scheme')
        cy.contains('No, I am not authorised under the UK Trader Scheme')

        //static page links
        cy.contains('If you are not yet authorised, then you can find out more about applying for authorisation for the UK Trader Scheme. ')
        cy.get('p > .govuk-link').click()
        cy.contains('Apply for authorisation for the UK Trader Scheme if you bring goods into Northern Ireland')
        cy.go('back')

        //Select Yes, I am registered with the UK Trader Scheme
        cy.get("div:nth-of-type(1) > input[name='steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()

        // selection is persisted 
        cy.go(-1)
        cy.get("div:nth-of-type(1) > input[name='steps_trader_scheme[trader_scheme]']")
            .parent()
            .find('input')
            .should('be.checked')

        //Select No,I am not registered with the UK Trader Scheme
        cy.get("div:nth-of-type(2) > input[name='steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.go(-1)
        cy.get("div:nth-of-type(2) > input[name='steps_trader_scheme[trader_scheme]']")
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
        cy.get('#steps-trader-scheme-trader-scheme-error')
            .contains('Select one of the two options')

        //static links on page 
        cy.contains('Explore the topic')
        cy.contains('Apply for authorisation for the UK trader scheme').click()
        cy.contains('Apply for authorisation for the UK Trader Scheme if you bring goods into Northern Ireland')

    })
    it('RoW - NI Page Validation', function () {
        cy.visit('/duty-calculator/uk/0702000007/import-date')
        //date
        cy.validDate()
        //destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(700)
        cy.otherOriginList({ value: 'Greenland' })
        cy.wait(700)
        //Trader Scheme
        cy.contains('Are you authorised under the UK Trader Scheme?')
        cy.contains("If you are moving goods into Northern Ireland which are for sale to, or final use by, end consumers located in the UK and you are authorised under the UK Trader Scheme, then you may declare your goods as being 'not at risk' where the requirements are met. A not ‘at risk’ good entering Northern Ireland from Great Britain will not be subject to duty.")
        cy.contains('Yes, I am authorised under the UK Trader Scheme')
        cy.contains('No, I am not authorised under the UK Trader Scheme')
        // empty values 
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Select one of the two options')
        cy.get('#steps-trader-scheme-trader-scheme-error')
            .contains('Select one of the two options')

        //Select Yes, I am registered with the UK Trader Scheme
        cy.traderScheme('yes')
        // selection is persisted     
        cy.get('.govuk-back-link').click().wait(300)
        cy.get("div:nth-of-type(1) > input[name='steps_trader_scheme[trader_scheme]']")
            .parent()
            .find('input')
            .should('be.checked')

        //Select No,I am not registered with the UK Trader Scheme
        cy.traderScheme('no')
        // selection is persisted 

        cy.get('.govuk-back-link').click().wait(300)
        cy.get("div:nth-of-type(2) > input[name='steps_trader_scheme[trader_scheme]']")
            .parent()
            .find('input')
            .should('be.checked')
        //static links on page 
        cy.contains('Explore the topic')
        cy.contains('Apply for authorisation for the UK trader scheme').click()
        cy.contains('Apply for authorisation for the UK Trader Scheme if you bring goods into Northern Ireland')


    })
})
