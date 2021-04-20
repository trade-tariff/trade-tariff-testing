
describe('🧮 📱 UK 🇬🇧 💡 | dcSmokeTest-Mobile-UK |Duty Calculator Smoke |',function() {
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"] 
    for (let i =0;i<country.length;i++){
        console.log(i)
    // iphone 
    it(`📱 iphone - e2e journey ${country[i]}`, function () {
        cy.viewport('iphone-6', 'landscape')
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=0702000007`)
        cy.contains('UK Global Online Tariff')
        //Search the tariff section
    
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff').click()
        cy.contains('All sections')
        cy.go('back')
        cy.validDate()
        cy.contains('Which part of the UK are you importing into?')

        //Northern Ireland
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.get('#wizard-steps-import-destination-import-destination-xi-field')
            .parent()
            .find('input')
            .should('be.checked')
            cy.contains('Continue').click()
            cy.contains('Which country are the goods dispatched from?')

        //About this commodity code
    
        cy.get('.govuk-details > .govuk-details__summary')
        cy.contains('About this commodity code').click()
        cy.get('.govuk-details__text')
        cy.contains('Commodity code')
        cy.contains('0702000007')
        cy.contains('Cherry tomatoes')
        
        cy.contains('View commodity 0702000007').click()
        //☀️ Validate commodity page
        cy.contains('Commodity information for 0702000007')
        cy.contains('UK Global Online Tariff')
        cy.go(-1)
        cy.contains('UK Global Online Tariff')
        cy.contains('Which country are the goods dispatched from?')

    //select country of Origin from drop down 
     
    })

//android
it(`📱 android - e2e journey ${country[i]} `, function () {
    cy.viewport('samsung-note9')
    cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=0702000007`)
    cy.contains('UK Global Online Tariff')

    //Search the tariff section

    cy.get('.govuk-header__menu-button').click()
    cy.contains('A-Z')
    cy.contains('Tools')
    cy.contains('Search or browse the Tariff').click()
    cy.contains('All sections')
    cy.go('back')
    cy.validDate()
    cy.contains('Continue').click()
    cy.contains('Which part of the UK are you importing into?')

    //Northern Ireland
    cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
    cy.get('#wizard-steps-import-destination-import-destination-xi-field')
        .parent()
        .find('input')
        .should('be.checked')
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

    //About this commodity code
    
    cy.get('.govuk-details > .govuk-details__summary')
    cy.contains('About this commodity code').click()
    cy.get('.govuk-details__text')
    cy.contains('Commodity code')
    cy.contains('0702000007')
    cy.contains('Cherry tomatoes')
    
    cy.contains('View commodity 0702000007').click()
    //☀️ Validate commodity page
    cy.contains('Commodity information for 0702000007')
    cy.contains('UK Global Online Tariff')
    cy.go(-1)
    cy.contains('UK Global Online Tariff')
    cy.contains('Which country are the goods dispatched from?')

    //select country of Origin from drop down 

    
})
    }

})