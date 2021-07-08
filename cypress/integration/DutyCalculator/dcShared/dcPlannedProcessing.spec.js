describe('🧮 | dcPlannedProcessing.spec | Duty Calculator Planned Processing |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('Page Validation - RoW-GB ', function () {
        cy.visit('uk/1701141000/import-date')
    
        cy.validDate()
        //NI Destination
        cy.selectDestination('xi')
        //United Kingdom as country of Origin       
        cy.selectOrigin('gb')
        // Trader Scheme Registered - Yes 
        cy.traderScheme('yes')
        // Final use in NI - Yes 
        cy.finalUse('yes')

        cy.contains('How will these goods be processed after they are moved into Northern Ireland?')
        cy.contains('If your goods are for sale to, or final use by, end consumers in the United Kingdom, you may be able to declare goods as not ‘at risk’, and pay no duty on those goods. You will not be able to declare your goods not ‘at risk’, if your goods are for commercial processing in Northern Ireland, unless they meet one of the exemptions.')
        cy.contains('If the importer had a total annual turnover of less than £500,000 in its most recent complete financial year, then select this option to move on')
        cy.contains('Alternatively, if the turnover exceeds this threshold, please select one of the following three options to identify the processing that will be carried on the goods on arrival in Northern Ireland.')
        cy.contains('The goods will undergo commercial processing for one of these purposes:')

        cy.contains('the sale of food to end consumers in the UK')
        cy.contains('construction, where the processed goods form a permanent part of a structure that is constructed and located in NI by the importer')
        cy.contains('direct provision of health or care services by the importer in NI')
        cy.contains('not for profit activities in NI, where there is no subsequent sale of the processed good by the importer')
        cy.contains('the final use of animal feed on premises located in NI by the importer.')
        cy.contains('The goods will be processed for commercial purposes other than those listed above')
    
    //no values entered - error message    
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('Select one of the available options')
        
        cy.get('#steps-planned-processing-planned-processing-error')
            .contains('Select one of the available options')

        // 1 .Select - The goods will be sold to an end-user without any processing
        cy.get("#steps-planned-processing-planned-processing-without-any-processing-field").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.get('.govuk-back-link').click().wait(300)
        cy.get("#steps-planned-processing-planned-processing-without-any-processing-field")
            .parent()
            .find('input')
            .should('be.checked')

        //2.Select - The importer had a total annual turnover of less than £500,000 in its most recent complete financial year
        cy.get("#steps-planned-processing-planned-processing-annual-turnover-field").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.get('.govuk-back-link').click().wait(300)
        cy.get("#steps-planned-processing-planned-processing-annual-turnover-field")
            .parent()
            .find('input')
            .should('be.checked')

        // 3.Select - The goods will undergo commercial processing for one of these purposes
        cy.get("#steps-planned-processing-planned-processing-commercial-processing-field").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.get('.govuk-back-link').click().wait(300)
        cy.get("#steps-planned-processing-planned-processing-commercial-processing-field")
            .parent()
            .find('input')
            .should('be.checked')

        //4. Select - The goods will be processed for commercial purposes other than those listed above
        cy.get("#steps-planned-processing-planned-processing-commercial-purposes-field").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.get('.govuk-back-link').click().wait(300)
        cy.get("#steps-planned-processing-planned-processing-commercial-purposes-field")
            .parent()
            .find('input')
            .should('be.checked')
    //explore the topic
        cy.contains('Explore the topic')
        cy.contains('Additional requirements for when you bring goods into Northern Ireland for processing').click()
        cy.go(-1)
        cy.contains('Apply to pay less duty on goods you import for specific uses').click()    
        cy.contains('Apply to pay less duty on goods you import for specific uses')
    })
    it('Page Validation - RoW-NI ', function () {
        cy.visit('xi/1701141000/import-date')

        cy.validDate()
        //NI Destination
        cy.selectDestination('xi')
        //origin
        cy.selectOrigin('other')
        //select country from list
        //origin RoW 
        cy.otherOriginList({ value: 'Morocco' })
        // Trader Scheme Registered - Yes 
        cy.traderScheme('yes')
        // Final use in NI - Yes 
        cy.finalUseNI('yes')

        cy.contains('How will these goods be processed after they are moved into Northern Ireland?')
        cy.contains('If your goods are for sale to, or final use by, end consumers in the United Kingdom, you may be able to declare goods as not ‘at risk’, and pay no duty on those goods. You will not be able to declare your goods not ‘at risk’, if your goods are for commercial processing in Northern Ireland, unless they meet one of the exemptions.')
        cy.contains('If the importer had a total annual turnover of less than £500,000 in its most recent complete financial year, then select this option to move on')
        cy.contains('Alternatively, if the turnover exceeds this threshold, please select one of the following three options to identify the processing that will be carried on the goods on arrival in Northern Ireland.')
        cy.contains('The goods will undergo commercial processing for one of these purposes:')

        cy.contains('the sale of food to end consumers in the UK')
        cy.contains('construction, where the processed goods form a permanent part of a structure that is constructed and located in NI by the importer')
        cy.contains('direct provision of health or care services by the importer in NI')
        cy.contains('not for profit activities in NI, where there is no subsequent sale of the processed good by the importer')
        cy.contains('the final use of animal feed on premises located in NI by the importer.')
        cy.contains('The goods will be processed for commercial purposes other than those listed above')

        //no values entered - error message    
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('Select one of the available options')

        cy.get('#steps-planned-processing-planned-processing-error')
            .contains('Select one of the available options')

        // 1 .Select - The goods will be sold to an end-user without any processing
        cy.get("#steps-planned-processing-planned-processing-without-any-processing-field").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.get('.govuk-back-link').click().wait(300)
        cy.get("#steps-planned-processing-planned-processing-without-any-processing-field")
            .parent()
            .find('input')
            .should('be.checked')

        //2.Select - The importer had a total annual turnover of less than £500,000 in its most recent complete financial year
        cy.get("#steps-planned-processing-planned-processing-annual-turnover-field").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.get('.govuk-back-link').click().wait(300)
        cy.get("#steps-planned-processing-planned-processing-annual-turnover-field")
            .parent()
            .find('input')
            .should('be.checked')

        // 3.Select - The goods will undergo commercial processing for one of these purposes
        cy.get("#steps-planned-processing-planned-processing-commercial-processing-field").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.get('.govuk-back-link').click().wait(300)
        cy.get("#steps-planned-processing-planned-processing-commercial-processing-field")
            .parent()
            .find('input')
            .should('be.checked')

        //4. Select - The goods will be processed for commercial purposes other than those listed above
        cy.get("#steps-planned-processing-planned-processing-commercial-purposes-field").check()
        cy.contains('Continue').click()
    /*    
        // selection is persisted 
        cy.get('.govuk-back-link').click().wait(300)
        cy.get("#steps-planned-processing-planned-processing-commercial-purposes-field")
            .parent()
            .find('input')
            .should('be.checked')
    */
        cy.go(-3)
        //explore the topic
        cy.contains('Explore the topic')
        cy.contains('Additional requirements for when you bring goods into Northern Ireland for processing').click()
        cy.go(-1)
        cy.contains('Apply to pay less duty on goods you import for specific uses').click()
        cy.contains('Apply to pay less duty on goods you import for specific uses')
    })
    })
