describe('🛃 | dcExciseCode.spec.js | Validate excise code on duty calculator |',function(){

    it('Page Validation - RoW (Israel) - XI ', function () {
    //    cy.visit('/duty-calculator/uk/2710198500/import-date')
        cy.visit('/duty-calculator/uk/2203001000/import-date')
    
        cy.validDate()
        cy.selectDestination('xi')
        cy.selectOrigin('other')
        //select country from list 
        cy.wait(700)
        cy.otherOriginList({ value: 'Israel' })
    
        // Monetary value page 
        cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
        cy.contains('There are multiple excise duties that could be applied to trade in this commodity code. Select which class of excise duty applies to your trade')
        cy.contains("For more information on excise duty classes, please see")
        cy.contains('About this commodity code').click()
        cy.get('.govuk-details  .govuk-link').click()
        cy.contains(`Commodity information for 2203001000`)
        cy.go(-1).wait(300)
        cy.get('span#steps-excise-additional-code-hint  .govuk-link').should("have.attr", "href","https://www.gov.uk/government/publications/uk-trade-tariff-excise-duties-reliefs-drawbacks-and-allowances/uk-trade-tariff-excise-duties-reliefs-drawbacks-and-allowances")
        cy.contains('Continue').click()
      //Error Message Capture 
        cy.get('.govuk-error-summary').contains('There is a problem')
        cy.contains('Select an excise class')
        cy.get('.govuk-error-message').contains('Select an excise class')
        cy.get('.govuk-back-link').click()
        cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
      //Excise code 431
        cy.exciseCode('431')
        cy.contains('Excise additional code')
        cy.contains('431')
        cy.confirmPage()
        cy.dutyPage()
        cy.get('.govuk-back-link').click()
      //Change Excise code to 473
        cy.get('div:nth-of-type(6) > .govuk-summary-list__actions > .govuk-link').click()
        cy.contains('Which class of excise is applicable to your trade?')
        cy.exciseCode('473')
        cy.contains('Excise additional code')
        cy.contains('473')
        cy.confirmPage()
        cy.dutyPage()
    })
    it.only('Greyed out Beer excise duties',function(){
      cy.visit('/duty-calculator/uk/2203001000/import-date')

      cy.validDate()
      cy.selectDestination('xi')
      cy.selectOrigin('other')
      //select country from list 
      cy.wait(700)
      cy.otherOriginList({ value: 'Israel' })

      // Monetary value page 
      cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
      // Measure units   
      cy.quantity({ gp1: '1', asvx: '1'})
      cy.contains('Which class of excise is applicable to your trade?')
      cy.contains('There are multiple excise duties that could be applied to trade in this commodity code. Select which class of excise duty applies to your trade')
      cy.contains("Please note that the work to calculate the")
      cy.contains("Small Breweries' Relief (SBR)")
      cy.contains("is in development and will be available shortly.")
      cy.get('p:nth-of-type(2) > .govuk-link').should('have.attr', 'href', 'https://www.gov.uk/government/publications/excise-notice-226-beer-duty/excise-notice-226-beer-duty--2#small-brewery-beer')

      cy.contains("For more information on excise duty classes, please see")
      cy.contains("UK Trade: excise, duties, reliefs, drawbacks and allowances (opens in new browser window)")
      cy.get('p:nth-of-type(3) > .govuk-link').should('have.attr', 'href', 'https://www.gov.uk/government/publications/uk-trade-tariff-excise-duties-reliefs-drawbacks-and-allowances/uk-trade-tariff-excise-duties-reliefs-drawbacks-and-allowances')

      cy.contains('431 - Alcoholic beverage with a strength not exceeding 1.2% ABV')
      cy.get("div:nth-of-type(1) > input[name='steps_excise[additional_code]']").should('not.be.disabled')
      cy.contains('440 - Beer made in the UK – small brewery beer eligible to reduced rates (variable rate, that is, annual production more than 5,000 hectolitres but not exceeding for 60,000 hectolitres)')
      cy.get("div:nth-of-type(2) > input[name='steps_excise[additional_code]']").should('be.disabled')
      

    })
})