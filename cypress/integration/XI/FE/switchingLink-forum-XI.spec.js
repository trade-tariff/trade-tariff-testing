describe('🇪🇺 💡 Switching Link & text ,Forum and related links removed  - (XI version)',function() {
    //--- HOTT-96 ,HOTT- 163 -------------
    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('1.Sections Page - Forum section removed', function () {
        cy.visit('/sections')
        cy.get('.govuk-header ')
        cy.contains('Forum').should('not.exist')
    })

    it('2.Sections Page - Switching link & text available,forum links removed', function () {
        cy.visit('/sections')
        //check header has Xi information
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //check correct text is displayed on banner
        cy.get('.tariff-breadcrumbs')
            .should('have.text','From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are not at risk of onward movement to the EU, use the Online Tariff.')
        //click on the UK link and it should navigate to UK version
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')
        // Guidance link on XI page
        cy.get('.govuk-main-wrapper')
            .contains('if your goods are not ‘at risk’ of onward movement to the EU').click()
        cy.get('.govuk-grid-row')
            .contains('Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU ')
        cy.log(cy.title())
        cy.title().should('eq','Check if you can declare goods you bring into Northern Ireland not ‘at risk’ of moving to the EU - GOV.UK')
        //return to Xi page
        cy.go('back')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')

        //other sticky links removed
        cy.get('.govuk-template')
            .should('not.have.text', 'Get guidance on this product area:')
            .should('not.have.text', 'Classification of goods')
            .should('not.have.text', 'Discuss this chapter in the forums')

    })
    it('3.Chapters Page - switching link available,forum links removed', function () {
        cy.visit('/chapters/01')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('Online Tariff').click()

        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')
        //other sticky links removed
        cy.get('.govuk-template ')
            .should('not.have.text', 'Get guidance on this product area:')
            .should('not.have.text', 'Classification of goods')
            .should('not.have.text', 'Discuss this chapter in the forums')
    })
    it('4.Headings Page - switching link available,forum links removed', function () {
        cy.visit('/headings/0101')
        //are we on the right page
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')
        //other sticky links removed
        cy.get('.govuk-template ')
            .should('not.have.text', 'Get guidance on this product area:')
            .should('not.have.text', 'Classification of goods')
            .should('not.have.text', 'Discuss this chapter in the forums')
    })
    it('5.Commodity Page',function(){
        cy.visit('/commodities/0406103010')
        //are we on the right page
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')

    })
    it('6.Tools Page',function(){
        cy.visit('/tools')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')

    })
    it('7.Quota Search Page',function(){
        cy.visit('/quota_search')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')
    })
    it('8.Certificate Search Page',function(){
        cy.visit('/certificate_search')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')
    })
    it('9.Additional Code Search Page',function(){
        cy.visit('/additional_code_search')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')
    })
    it('10.Chemical Search Page',function(){
        cy.visit('/chemical_search')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')
    })
    it('11.A-Z Page',function(){
        cy.visit('/a-z-index/a')
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('The Online Trade Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland (EU) Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland (EU) Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Online Tariff')
    })
})