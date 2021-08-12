describe('🛃 | dcExciseCode.spec.js | Validate excise code on duty calculator |', function () {
  /*
  1.wine and spirits - 2204299895
  2.cider - 2206003100
  3.beer
  4.tobacco
  5.climate change levy
  6.fuels or various types
  */
  it('🍻 RoW 🇮🇱 (Israel) - XI -  Greyed out Beer excise duties | 3.beer |', function () {
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
      cy.quantity({ gp1: '1', asvx: '1' })
      cy.contains('Which class of excise is applicable to your trade?')
      cy.contains('Excise duty applies to trade in this commodity code. Select which class of excise duty applies to your trade')
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

      cy.contains('Continue').click()
      //Error Message Capture 
      cy.get('.govuk-error-summary').contains('There is a problem')
      cy.contains('Select an excise class')
      cy.get('.govuk-error-message').contains('Select an excise class')
      cy.get('.govuk-back-link').click()
      // Measure units   
      cy.quantity({ gp1: '1', asvx: '1' })
      cy.contains('Which class of excise is applicable to your trade?')
      //select a valid option 
      //Excise code 431
      cy.exciseCode('431')
      cy.contains('Excise additional code')
      cy.contains('431')
      cy.confirmPage()
      cy.dutyPage()
    })
  it('🚬 RoW 🇮🇱 (Israel) - XI  Page Validation | 4.tobacco | ', function () {

      cy.visit('/duty-calculator/uk/2402201000/import-date')

      cy.validDate()
      cy.selectDestination('xi')
      cy.selectOrigin('other')
      //select country from list 
      cy.wait(700)
      cy.otherOriginList({ value: 'Israel' })
      //EU duties apply
      cy.euDutiesApply()
      // Monetary value page 
      cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
      // Measure units   
      cy.quantity({ ret: '1', mil: '100' })
      cy.contains('Excise duty applies to trade in this commodity code. Select which class of excise duty applies to your trade')
      cy.contains("For more information on excise duty classes, please see")
      cy.contains('About this commodity code').click()
      cy.get('.govuk-details  .govuk-link').click()
      cy.contains(`Commodity information for 2402201000`)
      cy.go(-1).wait(300)
      cy.get('span#steps-excise-additional-code-hint  .govuk-link').should("have.attr", "href", "https://www.gov.uk/government/publications/uk-trade-tariff-excise-duties-reliefs-drawbacks-and-allowances/uk-trade-tariff-excise-duties-reliefs-drawbacks-and-allowances")
      cy.contains('Continue').click()
      //Error Message Capture 
      cy.get('.govuk-error-summary').contains('There is a problem')
      cy.contains('Select an excise class')
      cy.get('.govuk-error-message').contains('Select an excise class')
      cy.get('.govuk-back-link').click()
      // Measure units   
      cy.quantity({ ret: '1', mil: '100' })
      //Excise code 431
      cy.exciseCode('611')
      cy.contains('Excise additional code')
      cy.contains('611')
      cy.confirmPage()
      cy.dutyPage()
      cy.get('.govuk-back-link').click()
      //Change Excise code to 473
      cy.get('div:nth-of-type(7) > .govuk-summary-list__actions > .govuk-link').click()
      cy.contains('Which class of excise is applicable to your trade?')
      cy.exciseCode('611')
      cy.contains('Excise additional code')
      cy.contains('611')
      cy.confirmPage()
      cy.dutyPage()
    })

  it('⚡ RoW 🇮🇩 (Indonesia) - UK | 5.climate change levy |', function () {
      cy.visit('/duty-calculator/uk/2711210000/import-date')
      cy.validDate()
      cy.selectDestination('gb')
      cy.originList({ value: 'Indonesia' })
      cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
      cy.quantity({ mwh: '100' })
      //Select Document Code 
      cy.docCode({ uk: 'c990' })
      cy.contains('Continue').click()
    //Excise code 
      cy.exciseCode('99c')
      cy.confirmPage()
      cy.dutyPage()
      cy.contains('990 - Climate Change Levy (Tax code 990): gas supplied by a gas utility or any gas supplied in a gaseous state that is of a kind supplied by a gas utility Great Britain')
      cy.contains('4.65 GBP / 1000 kWh * 100.00')


  })
  it('🛢️  RoW 🇱🇮 (Liechtenstein) - XI  | 6.fuels or various types - White oils, liquid paraffin |', function () {
      cy.visit('/duty-calculator/uk/2710198500/import-date')

      cy.validDate()
      cy.selectDestination('xi')
      cy.selectOrigin('other')
      //select country from list 
      cy.wait(700)
      cy.otherOriginList({ value: 'Liechtenstein' })
      cy.wait(300)
      //Trader Scheme
      cy.traderScheme('yes')
      // ✅  Final use in NI - Yes 
      cy.finalUseNI('yes')
      //Planned processing - acceptable1 
      cy.plannedXI('acceptable1')
      //customs value
      cy.customsValue({ monetary: '500.00', shipping: '250.00', cost: '250.00' })
      // Measure units   
      cy.quantity({ ltr: '100' })
      //doc code
      cy.docCode({ uk: 'c990' })
      cy.contains('Continue').click()
      //doc code
      cy.docCode({ xi: 'y021' })
      cy.contains('Continue').click()
      cy.contains('Which class of excise is applicable to your trade?')
      //Excise code 520
      cy.exciseCode('520')
      cy.contains('Excise additional code')
      cy.contains('520')
      cy.confirmPage()
      cy.dutyPage()

    })
})