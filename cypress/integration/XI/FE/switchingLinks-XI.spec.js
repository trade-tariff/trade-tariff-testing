describe('🇪🇺 💡 |switchingLinks-XI.spec|Switching Link & text ,Forum and related links removed  - (XI version)',function() {
    //--- HOTT-96 ,HOTT- 163 -------------
    it('Sections Page - Switching link & text available,forum links removed', function () {
        cy.visit('/xi/sections')
        //check header has Xi information
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-label').contains('Search the Northern Ireland Online Tariff')
        //check correct text is displayed on banner
        cy.get('.tariff-breadcrumbs')
            .should('have.text','If you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are not at risk of onward movement to the EU, use the UK Integrated Online Tariff.')
        //click on the UK link and it should navigate to UK version
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('UK Integrated Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland Online Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff')
        // Guidance link on XI page
        cy.get('.govuk-main-wrapper')
        .contains('if your goods are not ‘at risk’ of onward movement to the EU').click()
    cy.contains("Declaring goods you bring into Northern Ireland 'not at risk’ of moving to the EU")
    
    cy.log(cy.title())
    cy.title().should('eq',"Declaring goods you bring into Northern Ireland 'not at risk’ of moving to the EU - GOV.UK")
    //return to UK page
        cy.go('back')
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')

        //other sticky links removed
        cy.get('.govuk-template')
            .should('not.have.text', 'Get guidance on this product area:')
            .should('not.have.text', 'Classification of goods')
            .should('not.have.text', 'Discuss this chapter in the forums')

    })
    it('Chapters Page - switching link available,forum links removed', function () {
        cy.visit('/xi/chapters/01')
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('UK Integrated Online Tariff').click()

        cy.get('.govuk-header ')
            .contains('UK Integrated Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland Online Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff')
        //other sticky links removed
        cy.get('.govuk-template ')
            .should('not.have.text', 'Get guidance on this product area:')
            .should('not.have.text', 'Classification of goods')
            .should('not.have.text', 'Discuss this chapter in the forums')
    })
    it('Headings Page - switching link available,forum links removed', function () {
        cy.visit('/xi/headings/0101')
        //are we on the right page
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('UK Integrated Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('UK Integrated Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland Online Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff')
        //other sticky links removed
        cy.get('.govuk-template ')
            .should('not.have.text', 'Get guidance on this product area:')
            .should('not.have.text', 'Classification of goods')
            .should('not.have.text', 'Discuss this chapter in the forums')
    })
    it('Commodity Page',function(){
        cy.visit('/xi/commodities/0406103010')
        //are we on the right page
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('UK Integrated Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('UK Integrated Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland Online Tariff')
            .click()
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff')

    })
    it('Tools Page',function(){
        cy.visit('/xi/tools')
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('UK Integrated Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('UK Integrated Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland Online Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff')

    })
    it.skip('Quota Search Page',function(){
        cy.visit('/xi/quota_search')
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('UK Integrated Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('UK Integrated Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland Online Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff')
    })
    it('Certificate Search Page',function(){
        cy.visit('/xi/certificate_search')
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('UK Integrated Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('UK Integrated Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland Online Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff')
    })
    it('Additional Code Search Page',function(){
        cy.visit('/xi/additional_code_search')
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('UK Integrated Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('UK Integrated Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland Online Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff')
    })
    it('Chemical Search Page',function(){
        cy.visit('/xi/chemical_search')
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('UK Integrated Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('UK Integrated Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland Online Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff')
    })
    it('A-Z Page',function(){
        cy.visit('/xi/a-z-index/a')
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        //UK switch link
        cy.get('.govuk-main-wrapper')
            .contains('Switch to')
            .contains('UK Integrated Online Tariff').click()
        cy.get('.govuk-header ')
            .contains('UK Integrated Online Tariff')
        //click on the XI link and it should navigate to XI version
        cy.get('.govuk-main-wrapper')
        cy.contains('Northern Ireland Online Tariff')
            .click()
        //Back to XI page
        cy.get('.govuk-header ')
            .contains('Northern Ireland Online Tariff')
        cy.get('.govuk-main-wrapper')
            .contains('UK Integrated Online Tariff')
    })
})
