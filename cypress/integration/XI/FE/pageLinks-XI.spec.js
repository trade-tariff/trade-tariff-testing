describe(' 🇪🇺 💡 Terms and Conditions, Cookies ,Privacy links - XI ',function() {
//  HOTT-192
    Cypress.config('baseUrl', Cypress.config('services')['xi'])


    it('Terms and Conditions -XI',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(3) > .govuk-footer__link')
            .contains('Terms and conditions').click()
        cy.title().should('eq','The Northern Ireland (EU) Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')
        cy.get('.govuk-main-wrapper')
              .contains('Terms and conditions')

    })

    it('Cookies -XI',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(2) > .govuk-footer__link')
            .contains('Cookies').click()
        cy.title().should('eq','The Northern Ireland (EU) Tariff: Look up commodity codes, import duty, VAT and controls - GOV.UK')
        cy.get('.govuk-main-wrapper')
            .contains('Cookies')

    })
    it('Privacy -XI',function(){
        cy.visit('/sections')
        cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link')
            .contains('Privacy').click()
        cy.get('.direction-ltr')
            .contains('Privacy notice')

    })

})
