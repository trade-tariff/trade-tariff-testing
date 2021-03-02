// rework on this !! 
describe.skip('EU to Northern Ireland - All EU countries ',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e EU to NI all EU countries ',function(){
        cy.visit('/1704101000/import-destination')
        cy.contains('Trade Tariff Duty Calculator')
    
        cy.contains('Which part of the UK are you importing into?')

       //select England ,Scotland or Wales (GB)
       cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
       cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

        //select Eu countries and validate  
        let EU_countries = ["Ireland","Austria", "Belgium", "Bulgaria", "Cyprus", "Czechia", "Germany", "Denmark", "Estonia", "European Union", "Finland", "France", "Greece", "Croatia", "Hungary", "Ireland", "Italy", "Lithuania", "Luxembourg", "Latvia", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Sweden", "Slovenia", "Slovakia"]

        for (let i=0;i< EU_countries.length;i++){

            cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
            .click().clear().wait(500)
            .type(`${EU_countries[i]}`).wait(500).click(3)
          //  cy.get("[id='wizard-steps-country-of-origin-country-of-origin-field__listbox']")
          //  cy.get("ul#wizard-steps-country-of-origin-country-of-origin-field__listbox > li[role='option']")
          //  .contains(`${EU_countries[i]}`)
           // .select(`${EU_countries[i]}`)
          
            cy.contains('Continue').click()
            cy.contains('There is no import duty to pay')
            cy.contains('There is no import duty to pay when importing goods into Northern Ireland from a European Union member state.')
            cy.go(-1)


        }

        
        

    })
})