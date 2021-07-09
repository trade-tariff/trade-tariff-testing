describe.skip('🇪🇺 💡| feedback-XI | feedback link is available and user is able to send feedback)',function() {
    it('XI - All pages- Feedback link available  ', function () {

        let pages = ['/sections/1', '/chapters/01', '/headings/0101','/commodities/0101210000',]

        for (let i = 0; i < pages.length; i++) {
            cy.visit(`${pages[i]}`)
            cy.get('.govuk-footer__navigation')
            cy.contains('Feedback')
        }
    })

    it('XI - Feedback link works ', function () {
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__navigation')
        cy.contains('Feedback')
            .click()
        cy.contains('Send your feedback')
        //empty message
        cy.get('input[name=\'commit\']').click()
        cy.get('.error-message')
        cy.contains('can\'t be blank')

        //enter some feedback
        cy.get('.govuk-textarea').type("👩🏻‍💻 Cypress Test - 🇪🇺  feedback ")
        
        
                cy.get('input#name').type('Random Guy 🥸 ')
        cy.get('input#email').type('abd@12398.com')
        cy.get('input[name=\'commit\']').click()
        //  cy.contains('Thank you for your feedback')


    })
    it('XI - The UK has left the EU',function(){
        cy.visit('/xi/sections')
        cy.get('.govuk-footer__row')
        cy.contains('The UK has left the EU')
    })


})
