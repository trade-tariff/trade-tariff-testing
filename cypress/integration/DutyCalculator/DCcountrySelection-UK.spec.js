describe('🧮 Duty Calculator Country selection page ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

// skip some tests if the pack gets bigger
    it('import destination GB', function () {
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type('29')
        cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type('12')
        cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type('2022')
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')


        //select England ,Scotland or Wales (GB)
        cy.get('#wizard-steps-import-destination-import-destination-1-field').check()
      //  cy.contains('Continue').click()

        //Northern Ireland
        cy.get('#wizard-steps-import-destination-import-destination-2-field').check()
   //     cy.contains('Continue').click()

    })
    it('import destination - Northern Ireland', function () {
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type('29')
        cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type('12')
        cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type('2022')
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')


        //Northern Ireland
        cy.get('#wizard-steps-import-destination-import-destination-2-field').check()
        cy.contains('Continue').click()
    })


})