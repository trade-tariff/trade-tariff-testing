describe('📄 | dcDocumentCode.spec.js | Validate Document codes on duty calculator |', function () {
//Scenario - document code c990 is associated with 0% suspensions on XI and no document will lead to measure not applicable 
    it('Page Validation - RoW (Canada) - XI ', function () {
        cy.visit('/duty-calculator/xi/1516209830/import-date')
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(700)
        cy.otherOriginList({ value: 'Canada' })
        //EU duties apply 
        cy.euDutiesApply()
        // Monetary value page 
        cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })

        //Document Codes - Page validation 
        cy.contains('Do you have any of the following documents?')
        cy.contains('You may be able to reduce the duty applicable if you possess and can present one of the following documents.')
        cy.contains('Continue').click()
        
        // Error message when Document code NOT selected 
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Specify a valid option')
        cy.get('.govuk-error-message')
            .contains('Specify a valid option')
        cy.get('.govuk-back-link').click().wait(300)
        cy.contains('Continue').click()
        cy.docCode({ xi: 'none' })
        cy.contains('Continue').click()
        cy.contains('Which VAT rate is applicable to your trade?')
        cy.get('.govuk-back-link').click().wait(300)

        //Select Document Code 
        cy.contains('Do you have any of the following documents?')
        cy.docCode({ xi:'c990'})
        cy.contains('Continue').click()
       
        //VAT Page
        cy.vat('0')
        cy.contains('VAT zero rate')
        cy.contains('Document(s)')
        cy.contains('C990')
        cy.get('.govuk-button').click()
        //Validate calculations based on document code selected 
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - Canada')
        cy.contains('Option 3: Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms')
        cy.contains('Suspension - goods for certain categories of ships, boats and other vessels and for drilling or production platforms (EU)')

        //go back to previous page to change doc code 
        cy.get('.govuk-back-link').click().wait(300)
        //Change to different Document Code 
        cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Do you have any of the following documents?')
        //select none of the above Code
        cy.docCode({ xi: 'none' })
        cy.contains('Continue').click()
        //VAT Page
        cy.vat('0')
        cy.contains('VAT zero rate')
        cy.get('.govuk-grid-row').contains('Document(s)')
        cy.contains('n/a')
        cy.get('.govuk-grid-row').contains('C990').should('not.exist')
        cy.get('.govuk-button').click()
        //Validate calculations based on document code selected
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - Canada')
        
    })
})