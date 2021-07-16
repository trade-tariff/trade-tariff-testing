describe('UK 🇬🇧 XI 🇪🇺 | helpSection.spec.js | validate help section |', function () {
    it('Link and page content',function(){
        cy.visit('/sections')
        cy.get('.govuk-header__content').contains('Help').click()
        cy.contains('Online Trade Tariff')
        cy.contains('Help on using the tariff')
        cy.contains('If you would like to leave feedback on this service or request additional help with your trade, then use the following links.')
        cy.contains('Get help or leave feedback')
        cy.contains('Classification guidance')
        cy.contains('CDS guidance, code and procedures')
        cy.contains('CHIEF guidance, code and procedures')
        cy.contains('Rules of origin - glossary of terms')
        //open all 
        cy.contains('Open all').click().wait(300)
        cy.contains('General classification guidance')
        //close all 
        cy.contains('Close all').click().wait(300)
        //home breadcrumb
        cy.contains('Home').click()
        cy.contains('All sections')

    })
    it.only('Get help or leave feedback', function () {
        cy.visit('/help')
        cy.contains('Get help or leave feedback').click()
        
    })
})