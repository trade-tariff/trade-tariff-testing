describe('🧮 | dcMeasureAmount.spec | Measure Amount - page |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Page Validation', function () {
        cy.visit('/1701141000/measure-amount')
        // 1701141000 For refining
        cy.contains('Enter import quantity')
        cy.contains('The duties payable on this commodity are dependent on the quantity, weight or volume of goods that you are importing. Enter the units of the goods that you are importing in the boxes below.')

        cy.contains('What is the weight of the goods you will be importing?')
        cy.contains('Enter the value in decitonnes (100kg)')    

        cy.contains('What is the weight net of the standard quality of the goods you will be importing?')
        cy.contains('Enter the value in decitonnes (100kg)')    

        cy.contains('What is the weight of the goods you will be importing?')
        cy.contains('Enter the value in tonnes (1,000 kg)')    

        cy.contains('What is the weight of the goods you will be importing?')
        cy.contains('Enter the value in decatonnes (10,000 kg), corrected according to polarisation')    

        // try other commodities for different error messages 

    })
     //error messages - nothing is entered 
     it('No Values Entered',function(){
        cy.visit('/1701141000/measure-amount')
        //main page title cd 
        cy.contains('Enter import quantity')
        cy.contains('Continue').click()

        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid import quantity. Enter the value in decitonnes (100kg)')
        cy.contains('Enter a valid import quantity. Enter the value in decitonnes (100kg)')
        cy.contains('Enter a valid import quantity. Enter the value in tonnes (1,000 kg)')
        cy.contains('Enter a valid import quantity. Enter the value in decatonnes (10,000 kg), corrected according to polarisation')
        cy.get('#wizard-steps-measure-amount-dtn-error')
            .contains('Enter a valid import quantity. Enter the value in decitonnes (100kg)')
        cy.get('#wizard-steps-measure-amount-dtnr-error')
            .contains('Enter a valid import quantity. Enter the value in decitonnes (100kg)')
        cy.get('#wizard-steps-measure-amount-tne-error')
            .contains('Enter a valid import quantity. Enter the value in tonnes (1,000 kg)')
        cy.get('#wizard-steps-measure-amount-dap-error')
            .contains('Enter a valid import quantity. Enter the value in decatonnes (10,000 kg), corrected according to polarisation')
  
    })
    //error messages - wrong values entered 
    it('Text Entered',function(){
        cy.visit('/1701141000/measure-amount')
        //main page title 
        cy.contains('Enter import quantity')

        cy.get('#wizard-steps-measure-amount-dtn-field').click().type('text')
        cy.get('#wizard-steps-measure-amount-dtnr-field').click().type('text')
        cy.get('#wizard-steps-measure-amount-tne-field').click().type('text')
        cy.get('#wizard-steps-measure-amount-dap-field').click().type('text')

        cy.contains('Continue').click()

        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a numeric import quantity. Enter the value in decitonnes (100kg)')
        cy.contains('Enter a numeric import quantity. Enter the value in decitonnes (100kg)')
        cy.contains('Enter a numeric import quantity. Enter the value in tonnes (1,000 kg)')
        cy.contains('Enter a numeric import quantity. Enter the value in decatonnes (10,000 kg), corrected according to polarisation')
        cy.get('#wizard-steps-measure-amount-dtn-error')
            .contains('Enter a numeric import quantity. Enter the value in decitonnes (100kg)')
        cy.get('#wizard-steps-measure-amount-dtnr-error')
            .contains('Enter a numeric import quantity. Enter the value in decitonnes (100kg)')
        cy.get('#wizard-steps-measure-amount-tne-error')
            .contains('Enter a numeric import quantity. Enter the value in tonnes (1,000 kg)')
        cy.get('#wizard-steps-measure-amount-dap-error')
            .contains('Enter a numeric import quantity. Enter the value in decatonnes (10,000 kg), corrected according to polarisation')
  
    })
     //error messages - zero values entered 
     it('Zeros Entered',function(){
        cy.visit('/1701141000/measure-amount')
        //main page title 
        cy.contains('Enter import quantity')

        cy.get('#wizard-steps-measure-amount-dtn-field').click().type('0')
        cy.get('#wizard-steps-measure-amount-dtnr-field').click().type('0')
        cy.get('#wizard-steps-measure-amount-tne-field').click().type('0')
        cy.get('#wizard-steps-measure-amount-dap-field').click().type('0')

        cy.contains('Continue').click()

        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter an import quantity value greater than zero. Enter the value in decitonnes (100kg)')
        cy.contains('Enter an import quantity value greater than zero. Enter the value in decitonnes (100kg)')
        cy.contains('Enter an import quantity value greater than zero. Enter the value in tonnes (1,000 kg)')
        cy.contains('Enter an import quantity value greater than zero. Enter the value in decatonnes (10,000 kg), corrected according to polarisation')
        cy.get('#wizard-steps-measure-amount-dtn-error')
            .contains('Enter an import quantity value greater than zero. Enter the value in decitonnes (100kg)')
        cy.get('#wizard-steps-measure-amount-dtnr-error')
            .contains('Enter an import quantity value greater than zero. Enter the value in decitonnes (100kg)')
        cy.get('#wizard-steps-measure-amount-tne-error')
            .contains('Enter an import quantity value greater than zero. Enter the value in tonnes (1,000 kg)')
        cy.get('#wizard-steps-measure-amount-dap-error')
            .contains('Enter an import quantity value greater than zero. Enter the value in decatonnes (10,000 kg), corrected according to polarisation')
  
    })
    //Valid values entered 
    it.only('Valid values Entered',function(){
        cy.visit('/1701141000/measure-amount')
        //main page title 
        cy.contains('Enter import quantity')

        cy.get('#wizard-steps-measure-amount-dtn-field').click().type('1.01')
        cy.get('#wizard-steps-measure-amount-dtnr-field').click().type('2.02')
        cy.get('#wizard-steps-measure-amount-tne-field').click().type('3.03')
        cy.get('#wizard-steps-measure-amount-dap-field').click().type('4.04')

        cy.contains('Continue').click()
       
  
    })

})