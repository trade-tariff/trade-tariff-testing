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
   cy.get('.govuk-header__content')
       .contains('Trade Tariff Duty Calculator')
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
//DC Valid date 
Cypress.Commands.add("ValidDate",()=>{
        cy.get('#wizard_steps_import_date_import_date_3i').click().clear().type('31')
        cy.get('#wizard_steps_import_date_import_date_2i').click().clear().type('12')
        cy.get('#wizard_steps_import_date_import_date_1i').click().clear().type('2022')
})

//**** AXE related commands - accessibility testing **** 
const severityIndicators = {
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
 })
 //