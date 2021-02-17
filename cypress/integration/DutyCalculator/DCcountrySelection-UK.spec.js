describe('🧮 Duty Calculator Country selection page ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

// skip some tests if the pack gets bigger
    it(' ➕📅  Valid Date', function () {
        cy.visit('/')
        cy.get('#wizard_steps_import_date_import_date_3i').click().type('29')
        cy.get('#wizard_steps_import_date_import_date_2i').click().type('07')
        cy.get('#wizard_steps_import_date_import_date_1i').click().type('2021')
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
    })
})