// 
describe.skip('| dcEUNIcountries | EU to Northern Ireland - All EU countries |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e EU to NI all EU countries ',function(){
        cy.visit('/import-date?referred_service=uk&commodity_code=1212210000')
        cy.validDate( )
        cy.contains('Continue').click()
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')
        //Northern Ireland
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
        .click().clear().wait(100)
        .type('Northern Ireland').wait(100).click()
        cy.contains('Continue').click()
        cy.contains('There is no import duty to pay')
        cy.contains("There is no import duty to pay when importing goods into Northern Ireland from GB when the EU's third country duty is 0.00%.")
        cy.go(-1)

        cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
        .click().clear().wait(100)
        .type('Ireland').wait(100).click()
        cy.get("[id=wizard-steps-country-of-origin-country-of-origin-field__option--1]").click()
        cy.contains('Continue').click()
        cy.contains('There is no import duty to pay')
        cy.contains('There is no import duty to pay when importing goods into Northern Ireland from a European Union member state.')  
        cy.go(-1)

        //select Eu countries and validate  
        let EU_countries = ["Austria", "Belgium", "Bulgaria", "Cyprus", "Czechia", "Germany", "Denmark", "Estonia", "European Union", "Finland", "France", "Greece", "Croatia", "Hungary",  "Italy", "Lithuania", "Luxembourg", "Latvia", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Sweden", "Slovenia", "Slovakia"]

        for (let i=0;i< EU_countries.length;i++){

            cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
            .click().clear().wait(100)
            .type(`${EU_countries[i]}`).wait(100).click()
            cy.contains('Continue').click()
            cy.contains('There is no import duty to pay')
            cy.contains('There is no import duty to pay when importing goods into Northern Ireland from a European Union member state.')
            cy.go(-1)


        }
               

    })
})