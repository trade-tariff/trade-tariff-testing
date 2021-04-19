before(() => {
   //   cy.injectAxe()
  //  cy.clearCookies()
 //   cy.viewport('iphone-x')
  //  cy.viewport('samsung-note9')

})
beforeEach(() => {
     cy.clearCookies()
  //  cy.injectAxe()
  //  cy.viewport('iphone-x')
  //  cy.viewport('samsung-note9')
})

// ******* Custom Commands *******

//UK Checks main page title , sections , content and switching link available , search section
Cypress.Commands.add("MainPageUK",()=>{
//    cy.visit('/sections')
   //check header has UK information
   cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')
    cy.title().should('eq', 'UK Global Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK')
   cy.get('.govuk-header ')
       .contains('UK Global Online Tariff')
   //check correct text is displayed on banner as per UK - If they are at risk
   cy.get('.tariff-breadcrumbs')
       .should('have.text','From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland Online Tariff.')
   //Search the tariff section
   cy.get('.govuk-label')
       .contains('Search the UK Global Online Tariff')
   cy.get('.govuk-header__link')
       .contains('Search or browse the Tariff').click()
   cy.contains('All sections')
})


//XI Checks main page title , sections , content and switching link available , search section
Cypress.Commands.add("MainPageXI",()=>{
  //  cy.visit('/sections')
    //check header has UK information
    cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')
    cy.title().should('eq', 'Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK')
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff')
    //check correct text is displayed on banner as per UK - If they are at risk
    cy.get('.tariff-breadcrumbs')
        .should('have.text','From 1 January 2021, if you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are not at risk of onward movement to the EU, use the UK Global Online Tariff.')
        cy.get('.tariff-breadcrumbs').contains('UK Global Online Tariff')
        //Search the tariff section
    cy.get('.govuk-label')
        .contains('Search the Northern Ireland Online Tariff')
    cy.get('.govuk-header__link')
        .contains('Search or browse the Tariff').click()
    cy.contains('All sections')
 })


//Duty Calculator main page
   Cypress.Commands.add("DCMainPage",()=>{
 //  cy.get('.govuk-header__content')
  //     .contains('UK Global Online Tariff')
       cy.get('.govuk-header__navigation ')
       cy.contains('Search or browse the Tariff')
       cy.contains('A-Z')
       cy.contains('Tools')
     //  cy.contains('Latest News')
       cy.get('.govuk-caption-xl')
          .contains('Calculate import duties')
      cy.get('.govuk-form-group')
         cy.contains('When will the goods be imported?')
         cy.contains('As duties and quotas change over time, it may be important to enter the proposed import date. For example, 27 3 2021')
         cy.contains('Day')
         cy.contains('Month')
         cy.contains('Year')
         cy.contains('Continue')
         cy.contains('About this commodity code')
})


//**** AXE related commands - accessibility testing **** 
/* const severityIndicators = {
    minor: '⚪',
    moderate: '🟡',
    serious: '🟠',
    critical: '🔴',
}
function callback(violations){
    violations.forEach(violation =>{
        const nodes = Cypress.$(violation.nodes.map(node=>node.target).joint(','))
        Cypress.log({
            name: `${severityIndicators[violation.impact]}) ALLY`,
            consoleProps: () => violation,
            $el: nodes,
            message: `[${violation.help}](${violation.helpUrl})`
        })

        violation.nodes.forEach(({target})=>{
            Cypress.log({
                name: '🔧',
                consoleProps: ()=> violation,
                $el: Cypress.$(target.join(',')),
                message: target
            })
        })
    })
}
Cypress.Commands.add("checkPageAlly",(path)=>{
    cy.visit(path);
    cy.injectAxe();
    cy.checkA11y(null,null,callback);
 })*/
 /*
1.Date - Done 
2.Destination
3.Origin
4.customs 
5.quantity
6.Calculate duty 
7.Duty page 

 */
//DC Valid date 
Cypress.Commands.add("validDate",()=>{
    cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type('31')
    cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type('12')
    cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type('2022')
})
//Enter Date 
Cypress.Commands.add("enterDate",(date)=>{
    cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type(date.day)
    cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type(date.month)
    cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type(date.year)
    cy.contains('Continue').click()
})
//select GB Destination
Cypress.Commands.add("selectDestinationGB",(destination)=>{
    cy.contains('Which part of the UK are you importing into?')
    cy.get('#wizard-steps-import-destination-import-destination-uk-field').check(destination)
    cy.wait(100)
    cy.contains('Continue').click()    
})

//select GB Destination
Cypress.Commands.add("selectDestinationXI",(destination)=>{
    cy.contains('Which part of the UK are you importing into?')
    cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
    cy.wait(100)
    cy.contains('Continue').click()    
})

Cypress.Commands.add("selectSourceGB",(source)=>{
    cy.contains('Which country are the goods dispatched from?')
    cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
    cy.contains('Continue').click()   
})
Cypress.Commands.add("selectSourceXI",(source)=>{
    cy.contains('Which country are the goods dispatched from?')
    cy.get('input#wizard-steps-country-of-origin-country-of-origin-eu-field').click()
    cy.contains('Continue').click()   
})
Cypress.Commands.add("traderSchemeYes",()=>{
    cy.contains('Are you registered with the UK Trader Scheme?')
    cy.get("div:nth-of-type(1) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
    cy.contains('Continue').click()
})
Cypress.Commands.add("traderSchemeNo",()=>{
    cy.contains('Are you registered with the UK Trader Scheme?')
    cy.get("div:nth-of-type(2) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
    cy.contains('Continue').click()
})
Cypress.Commands.add("certificateYes",()=>{
    cy.contains('Do you have a valid Certificate of Origin?')
    cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-yes-field").check()
    cy.contains('Continue').click()
})
Cypress.Commands.add("certificateNo",()=>{
    cy.contains('Do you have a valid Certificate of Origin?')
    cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-no-field").check()
    cy.contains('Continue').click()
})
//enter monetary value
Cypress.Commands.add("monetaryValue",(monvalue)=>{
    cy.contains('What is the monetary value of this import?')
    cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type(monvalue.monetary)
    cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type(monvalue.shipping)
    cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type(monvalue.cost)
    cy.contains('Continue').click()
})
//enter quantity
Cypress.Commands.add("quantity",(quant)=>{
    cy.contains('Enter import quantity')
    cy.get('#wizard-steps-measure-amount-dtn-field').clear().type(quant.deci)
    cy.get('#wizard-steps-measure-amount-dtnr-field').clear().type(quant.deca)
    cy.get('#wizard-steps-measure-amount-tne-field').clear().type(quant.tonne)
    cy.get('#wizard-steps-measure-amount-dap-field').clear().type(quant.dap)
    cy.contains('Continue').click()
})








