describe('🧮 | dcMeasureAmount.spec | Measure Amount - page |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('1.Page Validation', function () {
        cy.visit('/import-date?referred_service=uk&commodity_code=1701141000')
        cy.validDate( )
        cy.contains('Continue').click()
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()         
        cy.contains('Continue').click()
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()

        // 1.Commodity with Kilos 
        cy.visit('/measure-amount?referred_service=uk&commodity_code=1701141000')  
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
        
        //2.Commodity with litres
        cy.visit('/measure-amount?referred_service=uk&commodity_code=2208401100')     
        cy.contains('What is the volume of alcohol of the goods that you are importing?')
        cy.contains('This can be calculated by multiplying the %age alcohol by volume (ABV) by the volume. Enter the value in hectolitres (100 litres)')    
        cy.contains('What is the volume of the goods that you will be importing?')
        cy.contains('Enter the value in hectolitres (100 litres)')    

        //3.Commodity in items
        cy.visit('/measure-amount?referred_service=uk&commodity_code=9102990000')    
        cy.contains('How many items will you be importing?')
        cy.contains('Enter the number of items')

        //4.Thousands of items
        cy.visit('/measure-amount?referred_service=uk&commodity_code=0407191900')     
        cy.contains('How many items will you be importing?')
        cy.contains('Enter the value in thousands of items')
    })
    
     //error messages - nothing is entered 
     it.only('2.No Values Entered',function(){
        cy.visit('/import-date?referred_service=uk&commodity_code=1701141000')
        cy.validDate( )
        cy.contains('Continue').click()
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()         
        cy.contains('Continue').click()

         //1.Commodity with Kilos 
         cy.visit('/measure-amount?referred_service=uk&commodity_code=1701141000')
        //main page title cd 
        cy.contains('Enter import quantity')
        cy.contains('Continue').click()

        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid import quantity. Enter the value in decitonnes (100kg)')
      //  cy.contains('Enter a valid import quantity. Enter the value in decitonnes (100kg)')
     //   cy.contains('Enter a valid import quantity. Enter the value in tonnes (1,000 kg)')
      //  cy.contains('Enter a valid import quantity. Enter the value in decatonnes (10,000 kg), corrected according to polarisation')
     //   cy.get('#wizard-steps-measure-amount-dtn-error')
     //       .contains('Enter a valid import quantity. Enter the value in decitonnes (100kg)')
        cy.get('#wizard-steps-measure-amount-dtnr-error')
            .contains('Enter a valid import quantity. Enter the value in decitonnes (100kg)')
    //    cy.get('#wizard-steps-measure-amount-tne-error')
    //        .contains('Enter a valid import quantity. Enter the value in tonnes (1,000 kg)')
     //   cy.get('#wizard-steps-measure-amount-dap-error')
    //        .contains('Enter a valid import quantity. Enter the value in decatonnes (10,000 kg), corrected according to polarisation')

        //2.Commodity with litres
        cy.visit('/measure-amount?referred_service=uk&commodity_code=2208401100')
        cy.contains('Enter import quantity')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid import quantity. This can be calculated by multiplying the %age alcohol by volume (ABV) by the volume. Enter the value in hectolitres (100 litres)')
        cy.contains('Enter a valid import quantity. Enter the value in hectolitres (100 litres)')
        
        cy.get('#wizard-steps-measure-amount-asvx-error')
            .contains('Enter a valid import quantity. This can be calculated by multiplying the %age alcohol by volume (ABV) by the volume. Enter the value in hectolitres (100 litres)')
        cy.get('#wizard-steps-measure-amount-hlt-error')
            .contains('Enter a valid import quantity. Enter the value in hectolitres (100 litres)')

        //3.Commodity in items
        cy.visit('/measure-amount?referred_service=uk&commodity_code=9102990000')
        cy.contains('How many items will you be importing?')
        cy.contains('Enter the number of items')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid import quantity. Enter the number of items')   
        cy.get('#wizard-steps-measure-amount-nar-error')
            .contains('Enter a valid import quantity. Enter the number of items')
       
        //4.Commodity in thousands of items
        cy.visit('/measure-amount?referred_service=uk&commodity_code=0407191900')
        cy.contains('Enter import quantity')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Enter a valid import quantity. Enter the value in thousands of items')
        
        cy.get('#wizard-steps-measure-amount-mil-error')
            .contains('Enter a valid import quantity. Enter the value in thousands of items')
         
    })
    //error messages - wrong values entered 
    it('3.Text Entered',function(){
        cy.visit('/import-date?referred_service=uk&commodity_code=1701141000')
        cy.validDate( )
        cy.contains('Continue').click()
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()         
        cy.contains('Continue').click()

        //1.Commodity with Kilos 
        cy.visit('/measure-amount?referred_service=uk&commodity_code=1701141000')  
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

        //2.Commodity with litres
        cy.visit('/measure-amount?referred_service=uk&commodity_code=2208401100')
        cy.contains('Enter import quantity')
        cy.get('#wizard-steps-measure-amount-asvx-field').click().type('text')
        cy.get('#wizard-steps-measure-amount-hlt-field').click().type('text')

       cy.contains('Continue').click()
       cy.get('.govuk-error-summary')
       cy.contains('There is a problem')
       cy.contains('Enter a numeric import quantity. This can be calculated by multiplying the %age alcohol by volume (ABV) by the volume. Enter the value in hectolitres (100 litres)')
       cy.contains('Enter a numeric import quantity. Enter the value in hectolitres (100 litres)')
       
       cy.get('#wizard-steps-measure-amount-asvx-error')
           .contains('Enter a numeric import quantity. This can be calculated by multiplying the %age alcohol by volume (ABV) by the volume. Enter the value in hectolitres (100 litres)')
       cy.get('#wizard-steps-measure-amount-hlt-error')
           .contains('Enter a numeric import quantity. Enter the value in hectolitres (100 litres)')

         //3.Commodity in items
         cy.visit('/measure-amount?referred_service=uk&commodity_code=9102990000')
         cy.contains('How many items will you be importing?')
         cy.contains('Enter the number of items')
         cy.get('#wizard-steps-measure-amount-nar-field').click().type('text')
         cy.contains('Continue').click()
         cy.get('.govuk-error-summary')
         cy.contains('There is a problem')
         cy.contains('Enter a numeric import quantity. Enter the number of items')   
         cy.get('#wizard-steps-measure-amount-nar-error')
             .contains('Enter a numeric import quantity. Enter the number of items')
  
         //4.Commodity in thousands of items
         cy.visit('/measure-amount?referred_service=uk&commodity_code=0407191900')
         cy.contains('Enter import quantity')
         cy.get('#wizard-steps-measure-amount-mil-field').click().type('text')
         cy.contains('Continue').click()
         cy.get('.govuk-error-summary')
         cy.contains('There is a problem')
         cy.contains('Enter a numeric import quantity. Enter the value in thousands of items')
         
         cy.get('#wizard-steps-measure-amount-mil-error')
             .contains('Enter a numeric import quantity. Enter the value in thousands of items')
  
    })
     //error messages - zero values entered 
     it('4.Zeros Entered',function(){
        cy.visit('/import-date?referred_service=uk&commodity_code=1701141000')
        cy.validDate( )
        cy.contains('Continue').click()
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()         
        cy.contains('Continue').click()

         //1.Commodity with Kilos 
         cy.visit('/measure-amount?referred_service=uk&commodity_code=1701141000')  
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

        //2.Commodity with litres
        cy.visit('/measure-amount?referred_service=uk&commodity_code=2208401100')
       
        cy.contains('Enter import quantity')
        cy.get('#wizard-steps-measure-amount-asvx-field').click().type('0.00')
        cy.get('#wizard-steps-measure-amount-hlt-field').click().type('0.00')

       cy.contains('Continue').click()
       cy.get('.govuk-error-summary')
       cy.contains('There is a problem')
       cy.contains('Enter an import quantity value greater than zero. This can be calculated by multiplying the %age alcohol by volume (ABV) by the volume. Enter the value in hectolitres (100 litres)')
       cy.contains('Enter an import quantity value greater than zero. Enter the value in hectolitres (100 litres)')
       
       cy.get('#wizard-steps-measure-amount-asvx-error')
           .contains('Enter an import quantity value greater than zero. This can be calculated by multiplying the %age alcohol by volume (ABV) by the volume. Enter the value in hectolitres (100 litres)')
       cy.get('#wizard-steps-measure-amount-hlt-error')
           .contains('Enter an import quantity value greater than zero. Enter the value in hectolitres (100 litres)')

    //3.Commodity in items
    cy.visit('/measure-amount?referred_service=uk&commodity_code=9102990000')
   
    cy.contains('How many items will you be importing?')
    cy.contains('Enter the number of items')
    cy.get('#wizard-steps-measure-amount-nar-field').click().type('0')
    cy.contains('Continue').click()
    cy.get('.govuk-error-summary')
    cy.contains('There is a problem')
    cy.contains('Enter an import quantity value greater than zero. Enter the number of items')   
    cy.get('#wizard-steps-measure-amount-nar-error')
        .contains('Enter an import quantity value greater than zero. Enter the number of items')

    //4.Commodity in thousands of items
    cy.visit('/measure-amount?referred_service=uk&commodity_code=0407191900')
    
    cy.contains('Enter import quantity')
    cy.get('#wizard-steps-measure-amount-mil-field').click().type('0')
    cy.contains('Continue').click()
    cy.get('.govuk-error-summary')
    cy.contains('There is a problem')
    cy.contains('Enter an import quantity value greater than zero. Enter the value in thousands of items')
    
    cy.get('#wizard-steps-measure-amount-mil-error')
        .contains('Enter an import quantity value greater than zero. Enter the value in thousands of items')  
    })


    //Valid values entered 
    it('5.Valid values Entered',function(){
        cy.visit('/import-date?referred_service=uk&commodity_code=1701141000')
        cy.validDate( )
        cy.contains('Continue').click()
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()         
        cy.contains('Continue').click()

        //1.Commodity with Kilos 
    cy.visit('/measure-amount?referred_service=uk&commodity_code=1701141000')  
        //main page title 
    cy.contains('Enter import quantity')
    cy.get('#wizard-steps-measure-amount-dtn-field').click().type('1.01')
    cy.get('#wizard-steps-measure-amount-dtnr-field').click().type('2.02')
    cy.get('#wizard-steps-measure-amount-tne-field').click().type('3.03')
    cy.get('#wizard-steps-measure-amount-dap-field').click().type('4.04')
    cy.contains('Continue').click()

    //2.Commodity with litres
    cy.visit('/measure-amount?referred_service=uk&commodity_code=2208401100')
    cy.contains('Enter import quantity')
    cy.get('#wizard-steps-measure-amount-asvx-field').click().type('2.00')
    cy.get('#wizard-steps-measure-amount-hlt-field').click().type('500.00')
    cy.contains('Continue').click()

    //3.Commodity in items
    cy.visit('/measure-amount?referred_service=uk&commodity_code=9102990000')
    cy.contains('How many items will you be importing?')
    cy.contains('Enter the number of items')
    cy.get('#wizard-steps-measure-amount-nar-field').click().type('545454.0')
    cy.contains('Continue').click()

    //4.Commodity in thousands of items
    cy.visit('/measure-amount?referred_service=uk&commodity_code=0407191900')
    cy.contains('Enter import quantity')
    cy.get('#wizard-steps-measure-amount-mil-field').click().type('04324.545')
    cy.contains('Continue').click()
    


       
  
    })

})