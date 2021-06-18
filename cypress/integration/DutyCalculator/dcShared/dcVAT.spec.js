describe('Multiple VAT rate validations', function () {
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    it(`UK service - Page Validation - Multiple VAT rates 🇮🇱 RoW-GB`, function () {
        cy.visit('uk/8716109800/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Israel' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        //VAT Page 
        cy.contains('Which VAT rate is applicable to your trade?')
        cy.contains('There are 3 VAT rates applicable to the trade in this commodity code. Select which rate applies to your trade. For guidance on applicable VAT rates, please see the document VAT rates on different goods and services (opens in new browser window).')
        cy.contains('VAT reduced rate 5%')
        cy.contains('VAT zero rate')
        cy.contains('Value added tax (20.0%)')
        // empty values 
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Select one of the available options')
        cy.get('#wizard-steps-vat-vat-error')
            .contains('Select one of the available options')
        //check for VAT link on page 
        cy.get("span#wizard-steps-vat-vat-hint > a[target='_blank']").should("have.attr", "href", "https://www.gov.uk/guidance/rates-of-vat-on-different-goods-and-services");

        //make selection - VAT reduced rate 5%
        cy.get('input#wizard-steps-vat-vat-field-error').click()
        cy.contains('Continue').click()
        cy.contains('Applicable VAT rate')
        cy.contains('VAT reduced rate 5%')
        //Change vat rate 
        cy.get('div:nth-of-type(6) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which VAT rate is applicable to your trade?')
        // selection is persisted     
        cy.get('input#wizard-steps-vat-vat-vatr-field')
            .parent()
            .find('input')
            .should('be.checked')

        cy.get('input#wizard-steps-vat-vat-vatr-field').click()
        cy.contains('Continue').click()
        cy.contains('Applicable VAT rate')
        cy.contains('VAT reduced rate 5%')
        //Using Back link 
        cy.get('.govuk-back-link').click().wait(300)
        cy.contains('Which VAT rate is applicable to your trade?')
        //Select second option - VAT zero rate
        cy.get('input#wizard-steps-vat-vat-vatz-field').click()
        cy.contains('Continue').click()
        cy.contains('Applicable VAT rate')
        cy.contains('VAT zero rate')
        //Using Back link 
        cy.get('.govuk-back-link').click().wait(300)
        cy.contains('Which VAT rate is applicable to your trade?')
        // selection is persisted 
        cy.get('input#wizard-steps-vat-vat-vatz-field')
            .parent()
            .find('input')
            .should('be.checked')
        //Select third option - Value added tax (20.00%)
        cy.get('input#wizard-steps-vat-vat-vat-field').click()
        cy.contains('Continue').click()
        cy.contains('Applicable VAT rate')
        cy.contains('Value added tax (20.0%)')
        //Using Back link 
        cy.get('.govuk-back-link').click().wait(300)
        cy.contains('Which VAT rate is applicable to your trade?')
        // selection is persisted 
        cy.get('input#wizard-steps-vat-vat-vat-field')
            .parent()
            .find('input')
            .should('be.checked')

        //Change vat rate 
        cy.get('input#wizard-steps-vat-vat-vatr-field').click()
        cy.contains('Continue').click()
        cy.get('div:nth-of-type(6) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which VAT rate is applicable to your trade?')
    })

    it(`XI service - Page Validation - Multiple VAT rates 🇮🇱 RoW-GB`, function () {
        cy.visit('xi/2934999090/import-date')
        cy.validDate()
        cy.selectDestination('gb')
        cy.originList({ value: 'Israel' })
        cy.customsValue({ monetary: '500.00', shipping: '100.00', cost: '250.00' })
        cy.additionalCode({ code: '2501' })
        //VAT Page 
        cy.contains('Which VAT rate is applicable to your trade?')
        cy.contains('There are 2 VAT rates applicable to the trade in this commodity code. Select which rate applies to your trade. For guidance on applicable VAT rates, please see the document VAT rates on different goods and services (opens in new browser window).')
        cy.contains('VAT zero rate')
        cy.contains('Value added tax (20.0%)')
        // empty values 
        cy.contains('Continue').click()
        cy.get('.govuk-error-summary')
        cy.contains('There is a problem')
        cy.contains('Select one of the available options')
        cy.get('#wizard-steps-vat-vat-error')
            .contains('Select one of the available options')
    })
})