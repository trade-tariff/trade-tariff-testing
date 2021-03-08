describe('🧮 | dcPlannedProcessing.spec | Duty Calculator Planned Processing |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])


        it.only('Page Validation', function () {
            cy.visit('/1704101000/planned-processing')
        //main page title
            cy.contains('How will these goods be processed after import?')
        
            cy.contains('Your import will be treated as not at risk, and will therefore not be subject to EU import duties, if you can verify that your goods will not be subject to further processing after import, or will be processed according to strict guidelines.')
            cy.contains('The goods will be sold to an end-user without any processing')
            cy.contains('The importer had a total annual turnover of less than £500,000 in its most recent complete financial year')
            cy.contains('The importer had a total annual turnover of less than £500,000 in its most recent complete financial year:')
            cy.contains('the sale of food to end consumers in the UK','construction, where the processed goods form a permanent part of a structure that is constructed and located in NI by the importer','direct provision of health or care services by the importer in NI','not for profit activities in NI, where there is no subsequent sale of the processed good by the importer','the final use of animal feed on premises located in NI by the importer.')
        
    })

         //error messages - nothing is entered 
         it('No Values Entered',function(){
            cy.visit('/1704101000/planned-processing')
            cy.contains('How will these goods be processed after import?')
            //main page title 
            cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
            cy.contains('Continue').click()
            cy.get('.govuk-error-summary')
            cy.contains('There is a problem')
            cy.contains('Select one of the two options')
            cy.get('#wizard-steps-final-use-final-use-error')
                .contains('Select one of the two options')
      
        })
        it('User makes a selection',function(){
            cy.visit('/0702000007/final-use')
            //main page title
            cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
            //Select eYes, I am importing this good into Northern Ireland for its sale to, or final use by, end-consumers located in the United Kingdom
            cy.get("div:nth-of-type(1) > input[name='wizard_steps_final_use[final_use]']").check()
            cy.contains('Continue').click()
    
            // selection is persisted 
            cy.go(-1)
            cy.get("div:nth-of-type(1) > input[name='wizard_steps_final_use[final_use]']")
                .parent()
                .find('input')
                .should('be.checked')
    
            //Select No, this import will not be for final use in the United Kingdom
            cy.get("div:nth-of-type(2) > input[name='wizard_steps_final_use[final_use]']").check()
            cy.contains('Continue').click()
            // selection is persisted 
            cy.go(-1)
            cy.get("div:nth-of-type(2) > input[name='wizard_steps_final_use[final_use]']")
                .parent()
                .find('input')
                .should('be.checked')
    
    
        })
    
       
        it('Explore the Topic : Other static page links',function(){
            cy.visit('/0702000007/final-use')
            //main page title
            cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
            
            cy.contains('Explore the topic')
            cy.contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU').click()
       
            //https://www.gov.uk/guidance/trading-and-moving-goods-in-and-out-of-northern-ireland-from-1-january-2021
            cy.contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU')
            cy.go(-1)
            cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
    
    
        })
    })