describe('Monetary Value calculation page ',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycalxi'])

    it('No data entered', function () {
        cy.visit('/0101210000/customs-value')
        //main page title
        cy.contains('What is the monetary value of this import?')
        cy.contains('The import duty charged for this commodity code is dependent on the monetary value of the goods being imported.')
        cy.contains('Duties are typically levied against the full cost of the goods plus the shipping and insurance costs. If you are calculating the import value using FOB (Free on board) rather than CIF (Cost, Insurance, and Freight), then please leave the \'cost of shipping\' and \'cost of insurance\' fields empty. Read more about the valuation of imported goods for customs purposes, VAT and trade statistics.')
        //static page links
        cy.get('form#new_wizard_steps_customs_value  .govuk-link').click()
        cy.contains('Notice 252: valuation of imported goods for customs purposes, VAT and trade statistics')
        cy.go('back')
        //Explore the topic
        cy.get('.govuk-list  .govuk-link').click()
        cy.contains('Notice 252: valuation of imported goods for customs purposes, VAT and trade statistics')
        cy.go('back')


        // value in GBP of goods being imported ?
        cy.contains('What is the value in GBP of the goods being imported?')

        // shipping cost ?
        cy.contains('What is the shipping cost?')
        cy.contains('Only costs up to the place of introduction of the imported goods into the UK border need to be included.')



        //cost of insuring the goods ?
        cy.contains('What is the cost of insuring the goods?')
        cy.contains('Only insurance costs up to the place of introduction of the imported goods into the UK border need to be included.')

        //error messages - nothing is entered 
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid monetary value')

        cy.get('.govuk-error-message')
        cy.contains('Enter a valid monetary value')

        cy.reload()
        //enter non-numeric value in goods value
        cy.get('input#wizard-steps-customs-value-monetary-value-field').type('doplhins nose')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a numeric monetary value')
        cy.get('.govuk-error-message')
        cy.contains('Enter a numeric monetary value')


        //enter characters in shipping /insurance costs
        cy.get('input#wizard-steps-customs-value-monetary-value-field').clear()
        cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('puffins')
        cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('Seawise Giant')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a numeric monetary value')
        cy.get('.govuk-error-message')
        cy.contains('Enter a numeric monetary value')


/*
        //enter negative numbers 
        cy.get('input#wizard-steps-customs-value-monetary-value-field-error').clear().type('-999.00')
        cy.contains('Continue').click()

        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a numeric monetary value')
        cy.get('.govuk-error-message')
        cy.contains('Enter a numeric monetary value')

        cy.go(-1)

*/





    })
        
    })

