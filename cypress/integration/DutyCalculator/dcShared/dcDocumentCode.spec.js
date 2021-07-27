describe('📄 | dcDocumentCode.spec.js | Validate Document codes on duty calculator |', function () {

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
        
        //No Error message when Document code NOT selected 
        cy.contains('Which VAT rate is applicable to your trade?')
        cy.get('.govuk-back-link').click().wait(300)

        //Select Document Code 
        cy.contains('Do you have any of the following documents?')
        cy.docCode({ uk:'c990'})
        cy.contains('Continue').click()
       
        //VAT Page
        cy.vat('0')
        cy.contains('VAT zero rate')
        cy.contains('Document(s)')
        cy.contains('C990')
        //Change to different Document Code 
        cy.get('div:nth-of-type(2) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Do you have any of the following documents?')
        //Uncheck Document Code
        cy.get(`#steps-document-code-document-code-uk-c990-field.govuk-checkboxes__input`).uncheck()
        cy.contains('Continue').click()
        //VAT Page
        cy.vat('0')
        cy.contains('VAT zero rate')
        cy.get('.govuk-grid-row').contains('Document(s)').should('not.exist')
        cy.get('.govuk-grid-row').contains('C990').should('not.exist')
    })
})