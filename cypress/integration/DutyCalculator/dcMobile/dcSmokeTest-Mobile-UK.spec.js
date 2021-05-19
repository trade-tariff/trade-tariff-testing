
describe('🛃 📱 UK 🇬🇧 💡 | dcSmokeTest-Mobile-UK |Duty Calculator Smoke |',function() {
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
 //   let country = ["uk"] 
 //   let pagetitles = ["UK Global Online Tariff","Northern Ireland Online Tariff"]
 //   for (let i =0;i<country.length;i++){
 //       console.log(i)
    // iphone 
    it(`📱 iphone - e2e journey`, function () {
        cy.viewport('iphone-6', 'landscape')
        cy.visit(`uk/0702000007/import-date`)
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        cy.validDate()
        //destination
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        cy.selectDestination('xi')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

    //origin
        cy.selectOrigin('gb')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        // ✅ Trader Scheme Registered - Yes 
        cy.traderScheme('yes')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        // ✅  Final use in NI - Yes 
        cy.finalUse('yes')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')


        // 🚫 Non processing - No - The goods will be processed for commercial purposes other than those listed above
        cy.get("#wizard-steps-planned-processing-planned-processing-commercial-purposes-field").check()
        cy.contains('Continue').click()
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')


        //  🚫 Certified as UK Origin
        cy.certificate('no')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')


        // Monetary value page 
        cy.customsValue({monetary:'5000.50',shipping:'455.7533',cost:'4545.987654'})
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

             
        // Measure amount page 
        cy.quantity({dtn:'23.98'})
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        

        //Check your answers page 
        cy.contains('Check your answers')
        
        cy.get('.govuk-button').click()
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')


        //Final Page 
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)')
        cy.contains('Option 3: Claiming a waiver – Exchange rate')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')     
        })

//android
it(`📱 android - e2e journey `, function () {
        cy.viewport('samsung-note9')
        cy.visit(`uk/0702000007/import-date`)
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        cy.validDate()
        //destination
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        cy.selectDestination('xi')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        //origin
        cy.selectOrigin('gb')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        // ✅ Trader Scheme Registered - Yes 
        cy.traderScheme('yes')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        // ✅  Final use in NI - Yes 
        cy.finalUse('yes')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')


        // 🚫 Non processing - No - The goods will be processed for commercial purposes other than those listed above
        cy.get("#wizard-steps-planned-processing-planned-processing-commercial-purposes-field").check()
        cy.contains('Continue').click()
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')


        //  🚫 Certified as UK Origin
        cy.certificate('no')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')


        // Monetary value page 
        cy.customsValue({monetary:'5000.50',shipping:'455.7533',cost:'4545.987654'})
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

                
        // Measure amount page 
        cy.quantity({dtn:'23.98'})
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')

        //Check your answers page 
        cy.contains('Check your answers')
        
        cy.get('.govuk-button').click()
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')


        //Final Page 
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - United Kingdom (excluding Northern Ireland)')
        cy.contains('Option 3: Claiming a waiver – Exchange rate')
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff')     
    
})

})