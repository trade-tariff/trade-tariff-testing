describe('🧮 Duty Calculator Desination Country selection page ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

// skip some tests if the pack gets bigger
    it('Import destination GB', function () {
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')

        // Select Northern Ireland
        cy.get('#wizard-steps-import-destination-import-destination-2-field').check()
        //Verify if NI button is selected 
        cy.get('#wizard-steps-import-destination-import-destination-2-field')
            .parent()
            .find('input')
            .should('be.checked')

           
        //select England ,Scotland or Wales (GB)
        cy.get('#wizard-steps-import-destination-import-destination-1-field').check()
        //Verify if GB button is selected 
        cy.get('#wizard-steps-import-destination-import-destination-1-field')
            .parent()
            .find('input')
            .should('be.checked')
            //continue to next page
          cy.contains('Continue').click()
          cy.contains('Which country are the goods dispatched from?')
          cy.go('back')
            cy.contains('Which part of the UK are you importing into?')
            //UK selection is persisted
            cy.get('#wizard-steps-import-destination-import-destination-1-field')
            .parent()
            .find('input')
            .should('be.checked')

        // check back button takes user back to date selection and date is persisted ?
       // cy.go('back')
        //Back button - GDS style back link
        cy.contains('Back').click()
        cy.contains('When will the goods be imported?')
        //date entered persists after error message only if valid format date and in past *
        cy.get('#wizard_steps_import_date_import_date_3i') .should('have.value', '31')
        cy.get('#wizard_steps_import_date_import_date_2i') .should('have.value', '12')
        cy.get('#wizard_steps_import_date_import_date_1i') .should('have.value', '2022')


    })
    it('Import destination - Northern Ireland', function () {
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')

        //Northern Ireland
        cy.get('#wizard-steps-import-destination-import-destination-2-field').check()
        // verify NI is selected
        cy.get('#wizard-steps-import-destination-import-destination-2-field')
            .parent()
            .find('input')
            .should('be.checked')
            //continue to next page
          cy.contains('Continue').click()
          cy.contains('Which country are the goods dispatched from?')
            //  cy.go('back')
          //Back button - GDS style back link
            cy.contains('Back').click()
            cy.contains('Which part of the UK are you importing into?')
            //UK selection is persisted
            cy.get('#wizard-steps-import-destination-import-destination-2-field')
            .parent()
            .find('input')
            .should('be.checked')

        // check back button takes user back to date selection and date is persisted ?

        //  cy.go('back')
        //Back button - GDS style back link
        cy.contains('Back').click()
        cy.contains('When will the goods be imported?')
        //date entered persists after error message only if valid format date and in past *
        cy.get('#wizard_steps_import_date_import_date_3i') .should('have.value', '31')
        cy.get('#wizard_steps_import_date_import_date_2i') .should('have.value', '12')
        cy.get('#wizard_steps_import_date_import_date_1i') .should('have.value', '2022')


    })
    it('Error - No country selected',function(){
        cy.visit('/')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
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
        cy.ValidDate()
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

})