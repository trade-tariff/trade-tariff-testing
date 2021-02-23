describe('🧮 🇪🇺 Duty Calculator Country selection page ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycalxi'])

// skip some tests if the pack gets bigger
    it('Import destination GB', function () {
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type('29')
        cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type('12')
        cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type('2022')
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')


        //select England ,Scotland or Wales (GB)
        cy.get('#wizard-steps-import-destination-import-destination-gb-field').check()

        cy.get('#wizard-steps-import-destination-import-destination-gb-field')
            .parent()
            .find('input')
            .should('be.checked')
        //  cy.contains('Continue').click()


        //Northern Ireland
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.get('#wizard-steps-import-destination-import-destination-xi-field')
            .parent()
            .find('input')
            .should('be.checked')
            cy.contains('Continue').click()
            cy.contains('Which country are the goods dispatched from?')

        // check back button takes user back to date selection and date is persisted ?


    })
    it('Import destination - Northern Ireland', function () {
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type('29')
        cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type('12')
        cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type('2022')
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


        // check back button takes user back to date selection and date is persisted ?

    })
    it('Error - No country selected',function(){
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type('29')
        cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type('12')
        cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type('2022')
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Select a destination')
        cy.get('.govuk-error-message')
            .contains('Select a destination')

    })
    it('Explore the Topic : Other static page links',function(){
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        // replace date selection with second page in URL
        cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type('29')
        cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type('12')
        cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type('2022')
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')

        cy.contains('Explore the topic')
        cy.contains('Import goods into the UK: step by step').click()
        //https://www.gov.uk/import-goods-into-uk
        cy.contains('Import goods into the UK: step by step')
        cy.go('back')

        cy.contains('Trading and moving goods in and out of Northern Ireland').click()
        //https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland-from-1-january-2021
        cy.contains('Trading and moving goods in and out of Northern Ireland')
        cy.go(-1)
        cy.contains('Which part of the UK are you importing into?')


    })
    it.skip('Navigate to next page - Country of Origin  ',function(){

    })

})