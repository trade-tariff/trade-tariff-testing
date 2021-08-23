Given('I am on XI Trade Tariff main page',()=>{
        cy.visit('/xi/sections')
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.tariff-breadcrumbs')
            .should('have.text','From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are not at risk of onward movement to the EU, use the Online Tariff.')
    })
    When('I click on switch link on XI page',()=>{
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff').click()
    })

    Then('UK version of Trade Tariff page is displayed',()=>{
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        cy.get('.tariff-breadcrumbs')
            .should('have.text','From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland (EU) Tariff.')
    })

    When('I click on switch link on UK page',()=>{
        cy.get('.govuk-main-wrapper')
            .contains('Northern Ireland Online Tariff').click()
    })


    Then('XI version of Trade Tariff page is displayed',()=>{
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.tariff-breadcrumbs ')
            .should('have.text','From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are not at risk of onward movement to the EU, use the UK Integrated Online Tariff.')
    })

    When('I select guidance link on XI page',()=>{
        cy.get('.govuk-main-wrapper')
            .contains('if your goods are not ‘at risk’ of onward movement to the EU').click()
    })
    Then('Guidance Page is displayed',()=>{
        cy.get('.govuk-grid-row')
            .contains(' Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU')
        cy.title().should('eq','Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU from 1 January 2021 - GOV.UK')
    })











When('',()=>{

})
