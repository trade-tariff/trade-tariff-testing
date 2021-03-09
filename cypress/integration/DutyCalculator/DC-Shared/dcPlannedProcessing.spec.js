describe('🧮 | dcPlannedProcessing.spec | Duty Calculator Planned Processing |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])


        it('Page Validation', function () {
            cy.visit('/1704101000/planned-processing')
        //main page title
            cy.contains('How will these goods be processed after import?')
        
            cy.contains('Your import will be treated as not at risk, and will therefore not be subject to EU import duties, if you can verify that your goods will not be subject to further processing after import, or will be processed according to strict guidelines.')
            cy.contains('The goods will be sold to an end-user without any processing')
            cy.contains('The importer had a total annual turnover of less than £500,000 in its most recent complete financial year')
            cy.contains('The goods will undergo commercial processing for one of these purposes:')
    
            cy.contains('the sale of food to end consumers in the UK')
            cy.contains('construction, where the processed goods form a permanent part of a structure that is constructed and located in NI by the importer')
            cy.contains('direct provision of health or care services by the importer in NI')
            cy.contains('not for profit activities in NI, where there is no subsequent sale of the processed good by the importer')
            cy.contains('the final use of animal feed on premises located in NI by the importer.')
            cy.contains('The goods will be processed for commercial purposes other than those listed above')
        
    })

         //error messages - nothing is entered 
         it('No Values Entered',function(){
            cy.visit('/1704101000/planned-processing')
            cy.contains('How will these goods be processed after import?')
            //main page title 
            cy.contains('Continue').click()
            cy.get('.govuk-error-summary')
            cy.contains('Select one of the available options')
            
            cy.get('#wizard-steps-planned-processing-planned-processing-error')
                .contains('Select one of the available options')
      
        })
        it('User makes a selection',function(){
            cy.visit('/1704101000/planned-processing')
            cy.contains('How will these goods be processed after import?')

            //Select - The goods will be sold to an end-user without any processing
            cy.get("#wizard-steps-planned-processing-planned-processing-without-any-processing-field").check()
            cy.contains('Continue').click()
            // selection is persisted 
            cy.go(-1)
            cy.get("#wizard-steps-planned-processing-planned-processing-without-any-processing-field")
                .parent()
                .find('input')
                .should('be.checked')
    
            //Select - The importer had a total annual turnover of less than £500,000 in its most recent complete financial year
            cy.get("#wizard-steps-planned-processing-planned-processing-annual-turnover-field").check()
            cy.contains('Continue').click()
            // selection is persisted 
            cy.go(-1)
            cy.get("#wizard-steps-planned-processing-planned-processing-annual-turnover-field")
                .parent()
                .find('input')
                .should('be.checked')

            // Select - The goods will undergo commercial processing for one of these purposes
            cy.get("#wizard-steps-planned-processing-planned-processing-commercial-processing-field").check()
            cy.contains('Continue').click()
            // selection is persisted 
            cy.go(-1)
            cy.get("#wizard-steps-planned-processing-planned-processing-commercial-processing-field")
                .parent()
                .find('input')
                .should('be.checked')

            // Select - The goods will be processed for commercial purposes other than those listed above
            cy.get("#wizard-steps-planned-processing-planned-processing-commercial-purposes-field").check()
            cy.contains('Continue').click()
            // selection is persisted 
            cy.go(-1)
            cy.get("#wizard-steps-planned-processing-planned-processing-commercial-purposes-field")
                .parent()
                .find('input')
                .should('be.checked')
        })
    
       
        it('Explore the Topic : Other static page links',function(){
            cy.visit('/1704101000/planned-processing')
            cy.contains('How will these goods be processed after import?')

            cy.contains('Explore the topic')
            cy.contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU').click()
       
            //https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland-from-1-january-2021
            cy.contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU')
            cy.go(-1)
            cy.contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU')
    
    
        })
    })