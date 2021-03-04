describe('🔖 | dcCertificateOfOrigin | UK Certificate of Origin page |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['dutycal']) 

    it('Page Validation', function () {
        cy.visit('/0702000007/certificate-of-origin')
        //main page title
        cy.contains('Do you have a valid Certificate of Origin?')
        cy.contains('If you have a valid Certificate of Origin proving that your goods were materially manufactured in the UK, then you are eligible to take advantage of the 0% import duties made available under the UK / EU Trade and Cooperation Agreement.')
        
        cy.contains('Yes, I have a valid Certificate of Origin')
        cy.contains('No, I do not have a valid Certificate of Origin')
        
    })
    it('User makes a selection',function(){
        cy.visit('/0702000007/certificate-of-origin')
        //main page title
        cy.contains('Do you have a valid Certificate of Origin?')
        //Select Yes, valid Certificate of Origin
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-yes-field").check()
        cy.contains('Continue').click()

        // selection is persisted 
        cy.go(-1)
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-yes-field")
            .parent()
            .find('input')
            .should('be.checked')

        //Select No,valid Certificate of Origin
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-no-field").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.go(-1)
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-no-field")
            .parent()
            .find('input')
            .should('be.checked')

    })

    //error messages - nothing is entered 
    it('No Values Entered',function(){
        cy.visit('/0702000007/certificate-of-origin')
        //main page title
        cy.contains('Do you have a valid Certificate of Origin?')
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Select one of the two options')
        cy.get('#wizard-steps-certificate-of-origin-certificate-of-origin-error')
            .contains('Select one of the two options')
    })
    
})