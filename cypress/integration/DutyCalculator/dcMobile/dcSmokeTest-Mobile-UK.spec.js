
describe('🧮 📱 UK 🇬🇧 💡 Duty Calculator Smoke ',function() {
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
   
// iphone 
    it('📱 iphone - e2e journey ', function () {
        cy.viewport('iphone-6', 'landscape')
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        //Search the tariff section
    
        cy.get('.govuk-header__menu-button').click()
        cy.contains('A-Z')
        cy.contains('Tools')
        cy.contains('Search or browse the Tariff').click()
        cy.contains('All sections')
        cy.go('back')
        cy.ValidDate()
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
        cy.contains('1704101000')
        cy.contains('Containing less than 60 % by weight of sucrose (including invert sugar expressed as sucrose')
        
        cy.contains('View commodity 1704101000').click()
        //☀️ Validate commodity page
        cy.contains('Commodity information for 1704101000')
        cy.contains('UK Global Online Tariff')
        cy.go(-1)
        cy.contains('Trade Tariff Duty Calculator')
        cy.contains('Which country are the goods dispatched from?')

    //select country of Origin from drop down 
     
    })

//android
it('📱 android - e2e journey ', function () {
    cy.viewport('samsung-note9')
    cy.visit('/')
    cy.contains('Trade Tariff Duty Calculator')

    //Search the tariff section

    cy.get('.govuk-header__menu-button').click()
    cy.contains('A-Z')
    cy.contains('Tools')
    cy.contains('Search or browse the Tariff').click()
    cy.contains('All sections')
    cy.go('back')
    cy.ValidDate()
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
    cy.contains('1704101000')
    cy.contains('Containing less than 60 % by weight of sucrose (including invert sugar expressed as sucrose')
    
    cy.contains('View commodity 1704101000').click()
    //☀️ Validate commodity page
    cy.contains('Commodity information for 1704101000')
    cy.contains('UK Global Online Tariff')
    cy.go(-1)
    cy.contains('Trade Tariff Duty Calculator')
    cy.contains('Which country are the goods dispatched from?')

    //select country of Origin from drop down 


    
})

})