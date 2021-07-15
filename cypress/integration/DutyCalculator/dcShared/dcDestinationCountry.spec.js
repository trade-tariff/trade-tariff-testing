describe('🧮 | dcDestinationCountry | Duty Calculator Desination Country selection page |', function () {

    it('Import destination GB', function () {
        cy.visit(`duty-calculator/uk/0702000007/import-date`)
        cy.contains('UK Global Online Tariff')
        cy.validDate()

        cy.contains('Which part of the UK are you importing into?')
        cy.contains('The duty you are charged may be dependent on the part of the UK to which you are importing.')

        // Select Northern Ireland
        cy.get('#steps-import-destination-import-destination-xi-field').check()
        //Verify if NI button is selected 
        cy.get('#steps-import-destination-import-destination-xi-field')
            .parent()
            .find('input')
            .should('be.checked')
        //select England ,Scotland or Wales (GB)
        cy.get('#steps-import-destination-import-destination-uk-field').check()
        //Verify if GB button is selected 
        cy.get('#steps-import-destination-import-destination-uk-field')
            .parent()
            .find('input')
            .should('be.checked')
        //continue to next page
        cy.contains('Continue').click()
        cy.contains('Which country are the goods coming from?')
        cy.go('back')
        cy.contains('Which part of the UK are you importing into?')
        //UK selection is persisted
        cy.get('#steps-import-destination-import-destination-uk-field')
            .parent()
            .find('input')
            .should('be.checked')

        cy.contains('Back').click()
        cy.contains('When will the goods be imported?')
        //date entered persists after error message only if valid format date and in past *
        cy.get('#steps_import_date_import_date_3i').should('have.value', '31')
        cy.get('#steps_import_date_import_date_2i').should('have.value', '12')
        cy.get('#steps_import_date_import_date_1i').should('have.value', '2021')


    })
    it('Import destination - Northern Ireland', function () {
        cy.visit(`duty-calculator/uk/0702000007/import-date`)
        cy.contains('UK Global Online Tariff')
        cy.validDate()

        cy.contains('Which part of the UK are you importing into?')
        cy.contains('The duty you are charged may be dependent on the part of the UK to which you are importing.')
        //Northern Ireland
        cy.get('#steps-import-destination-import-destination-xi-field').check()
        // verify NI is selected
        cy.get('#steps-import-destination-import-destination-xi-field')
            .parent()
            .find('input')
            .should('be.checked')
        //continue to next page
        cy.contains('Continue').click()
        cy.contains('Which country are the goods coming from?')

        //Back button - GDS style back link
        cy.contains('Back').click()
        cy.contains('Which part of the UK are you importing into?')
        //UK selection is persisted
        cy.get('#steps-import-destination-import-destination-xi-field')
            .parent()
            .find('input')
            .should('be.checked')

        cy.contains('Back').click()
        //date entered persists after error message only if valid format date and in past *
        cy.contains('When will the goods be imported?')

        cy.get('#steps_import_date_import_date_3i').should('have.value', '31')
        cy.get('#steps_import_date_import_date_2i').should('have.value', '12')
        cy.get('#steps_import_date_import_date_1i').should('have.value', '2021')


    })
    it('Error - No country selected', function () {
        cy.visit(`duty-calculator/uk/0702000007/import-date`)
        cy.contains('UK Global Online Tariff')
        cy.validDate()
        cy.contains('Which part of the UK are you importing into?')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Select a destination')
        cy.get('.govuk-error-message')
            .contains('Select a destination')

    })
    it('Explore the Topic : Other static page links', function () {
        cy.visit(`duty-calculator/uk/0702000007/import-date`)
        cy.contains('UK Global Online Tariff')
        cy.validDate()

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
