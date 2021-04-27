describe('🛃 | dcCustomsValue | Customs / Monetary Value calculation page |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Page Validation', function () {
        cy.visit('uk/0702000007/import-date')
     //   cy.visit('uk/0407191900/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        //Customs value page
        cy.contains('What is the customs value of this import?')
        cy.contains('The amount of duty you may have to pay will depend on the customs value of your goods. The rules for arriving at the customs value are based on the World Trade Organisation (WTO) Valuation Agreement.')


        cy.contains('You can read more about the methods and how to calculate the customs value of your goods here: Notice 252: valuation of imported goods for customs purposes, VAT and trade statistics.')
        //static page links - valuation of imported goods for customs purposes, VAT and trade statistics.
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
        cy.contains('Optionally, what is the shipping cost?')
        cy.contains('Only costs up to the place of introduction of the imported goods into the UK border need to be included.')

        //cost of insuring the goods ?
        cy.contains('Optionally, what is the cost of insuring the goods?')
        cy.contains('Only insurance costs up to the place of introduction of the imported goods into the UK border need to be included.')
    })


    //error messages - nothing is entered 
    it('No Values Entered',function(){
        cy.visit('uk/0702000007/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        //Customs value page
        cy.contains('What is the customs value of this import?')
        cy.contains('Continue').click()
        
        cy.contains('There is a problem')
        cy.get('.govuk-error-summary')
        .contains('Enter a valid monetary value')

        cy.get('span#wizard-steps-customs-value-monetary-value-error').contains('Enter a valid monetary value')
        cy.get('.govuk-back-link').click()
        cy.contains('Continue').click()
        
        //enter non-numeric value in goods value
        cy.get('input#wizard-steps-customs-value-monetary-value-field').type('dolphins nose')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a numeric monetary value')
        cy.get('.govuk-error-message')
        cy.contains('Enter a numeric monetary value')
    })

        //enter characters in shipping /insurance costs and leave Goods value as blank 
    it('Enter  non-numeric values in shipping cost and insurance cost',function(){

        cy.visit('uk/0702000007/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        //Customs value page
        cy.contains('What is the customs value of this import?')
  
        cy.get('input#wizard-steps-customs-value-monetary-value-field').clear()
        cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('puffins')
        cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('Seawise Giant')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid monetary')
        cy.contains('Enter a numeric shipping cost or leave the field blank')
        cy.contains('Enter a numeric insurance cost or leave the field blank')

        //enter negative value in Goods value 
        cy.get('input#wizard-steps-customs-value-monetary-value-field-error').clear().type('-999')
        cy.get('input#wizard-steps-customs-value-shipping-cost-field-error').clear().type('-999')
        cy.get('input#wizard-steps-customs-value-insurance-cost-field-error').clear().type('-999')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a monetary value greater than zero')
        cy.contains('Enter a shipping cost value greater than or equal to zero')
        cy.contains('Enter a insurance cost value greater than or equal to zero')


        //enter zero value goods 
        cy.get('input#wizard-steps-customs-value-monetary-value-field-error').clear().type('0')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a monetary value greater than zero')
        cy.contains('Enter a shipping cost value greater than or equal to zero')
        cy.contains('Enter a insurance cost value greater than or equal to zero')


    })
    it('Enter valid goods value + £0.00 shipping and insurance costs',function(){
        
        cy.visit('uk/0702000007/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('gb')
        cy.traderScheme('no')
        cy.certificate('no')
        //Customs value page
        cy.contains('What is the customs value of this import?')
         cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type('0.01')
         cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type(' ')
         cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type(' ')
         cy.contains('Continue').click()
        cy.contains('Enter import quantity')
    })

    })
        