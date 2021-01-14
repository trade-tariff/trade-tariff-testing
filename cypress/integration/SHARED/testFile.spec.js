
describe('🇬🇧 💡 Test File)',function() {
    Cypress.config('baseUrl')


    it.skip('GOV.UK Logo', function () {
        cy.visit('/sections')
    //    cy.get('.govuk-header__logotype-text')
            cy.get('.govuk-header ')
                cy.contains('GOV.UK').click()
         cy.wait(2000)
        cy.get('.get-started.group')
            .contains('Start now')
    })


    it.skip('Contact - Link 1', function () {
        cy.visit('/sections')
        //    cy.get('.govuk-header__logotype-text')
        cy.get('.govuk-footer__list')
        cy.contains('Ask HMRC for advice on classifying your goods').click()
        cy.wait(2000)
        cy.switchToTab('https://www.gov.uk/guidance/ask-hmrc-for-advice-on-classifying-your-goods')

            cy.contains('Guidance')
            cy.contains('Ask HMRC for help classifying your goods')
    })

// https://www.gov.uk/guidance/ask-hmrc-for-advice-on-classifying-your-goods

})
