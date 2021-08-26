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
   //check header has UK information
   cy.contains('UK Integrated Online Tariff: look up commodity codes, duty and VAT rates')
    cy.title().should('eq', 'UK Integrated Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK')
   cy.get('.govuk-header ')
       .contains('UK Integrated Online Tariff')
   //check correct text is displayed on banner as per UK - If they are at risk
   cy.get('.tariff-breadcrumbs')
       .should('have.text','If you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are at risk of onward movement to the EU, use the Northern Ireland Online Tariff.')
   //Search the tariff section
   cy.get('.govuk-label')
       .contains('Search the UK Integrated Online Tariff')
   cy.get('.govuk-header__link')
       .contains('Search or browse the Tariff').click()
   cy.contains('All sections')
})


//XI Checks main page title , sections , content and switching link available , search section
Cypress.Commands.add("MainPageXI",()=>{
    //check header has UK information
    cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')
    cy.title().should('eq', 'Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates - GOV.UK')
    cy.get('.govuk-header ')
        .contains('Northern Ireland Online Tariff')
    //check correct text is displayed on banner as per UK - If they are at risk
    cy.get('.tariff-breadcrumbs')
        .should('have.text','If you’re bringing goods into Northern Ireland from outside the UK and the EU, you will pay the UK duty rate if your goods are not ‘at risk’ of onward movement to the EU. If they are not at risk of onward movement to the EU, use the UK Integrated Online Tariff.')
        cy.get('.tariff-breadcrumbs').contains('UK Integrated Online Tariff')
        //Search the tariff section
    cy.get('.govuk-label')
        .contains('Search the Northern Ireland Online Tariff')
    cy.get('.govuk-header__link')
        .contains('Search or browse the Tariff').click()
    cy.contains('All sections')
 })


//Duty Calculator main page
   Cypress.Commands.add("DCMainPage",()=>{
    cy.get('.govuk-header__navigation ')
    cy.contains('Search or browse the Tariff')
    cy.contains('A-Z')
    cy.contains('Tools')
    //  cy.contains('Latest News')
    cy.get('.govuk-caption-xl')
        .contains('Calculate import duties')
    cy.get('.govuk-form-group')
        cy.contains('When will the goods be imported?')
        cy.contains('As duties and quotas change over time, it may be important to enter the proposed import date. Enter a date from 1st January 2021 or later in the format 27 3 2021.')
        cy.contains('Day')
        cy.contains('Month')
        cy.contains('Year')
        cy.contains('Continue')
        cy.contains('About this commodity code')
})

//DC Valid date 
Cypress.Commands.add("validDate",()=>{
    cy.contains('When will the goods be imported?')
    cy.get('#steps_import_date_import_date_3i').click().clear().type('31')
    cy.get('#steps_import_date_import_date_2i').click().clear().type('12')
    cy.get('#steps_import_date_import_date_1i').click().clear().type('2021')
    cy.contains('Continue').click()
})
//Enter Date 
Cypress.Commands.add("enterDate",(date)=>{
    cy.contains('When will the goods be imported?')
    cy.get('#steps_import_date_import_date_3i').click().clear().type(date.day)
    cy.get('#steps_import_date_import_date_2i').click().clear().type(date.month)
    cy.get('#steps_import_date_import_date_1i').click().clear().type(date.year)
    cy.contains('Continue').click()
})

Cypress.Commands.add("selectDestination",(destination)=>{
    cy.contains('Which part of the UK are you importing into?')
    if (destination === 'xi') {
      cy.get('#steps-import-destination-import-destination-xi-field').check()
    } else {
      cy.get('#steps-import-destination-import-destination-uk-field').check()
    }
    cy.wait(100)
    cy.contains('Continue').click()
})

Cypress.Commands.add("selectOrigin",(origin)=>{
    cy.contains('Which country are the goods coming from?')
    if(origin === 'gb'){
        cy.get('input#steps-country-of-origin-country-of-origin-gb-field').click()
    }
    else if(origin === 'eu') {
        cy.get('input#steps-country-of-origin-country-of-origin-eu-field').click()
    }
    else {
        cy.get('input#steps-country-of-origin-country-of-origin-other-field').click()
    }
    cy.contains('Continue').click()   
})

Cypress.Commands.add("originList",(origin)=>{
    cy.contains('Which country are the goods coming from?')
    cy.get('#steps-country-of-origin-country-of-origin-field')
    .click().clear().type(origin.value).wait(500)
    cy.contains('Continue').click()
})
Cypress.Commands.add("otherOriginList", (otherorigin) => {
    cy.contains('Which country are the goods coming from?')
    cy.get('#steps-country-of-origin-other-country-of-origin-field').click().clear().type(otherorigin.value).wait(500)
    cy.contains('Continue').click()
})
Cypress.Commands.add("dutiesApply",()=>{
    cy.contains('Duties apply to this import')
    cy.wait(100)
    cy.get('.govuk-button').click()
})
Cypress.Commands.add("euDutiesApply", () => {
    cy.contains('EU duties apply to this import')
    cy.wait(100)
    cy.get('.govuk-button').click()
})

Cypress.Commands.add("traderScheme",(selection)=>{
    cy.contains('Are you authorised under the UK Trader Scheme?')
    if(selection === 'yes'){
        cy.get("div:nth-of-type(1) > input[name='steps_trader_scheme[trader_scheme]']").check()
    }
    else{
        cy.get("div:nth-of-type(2) > input[name='steps_trader_scheme[trader_scheme]']").check()
    }  
    cy.contains('Continue').click()
})

Cypress.Commands.add("certificate",(selection)=>{
    cy.contains('Do you have a valid proof of preferential origin?')
    if(selection === 'yes'){
        cy.get("input#steps-certificate-of-origin-certificate-of-origin-yes-field").check()
    }
    else
    {
        cy.get("input#steps-certificate-of-origin-certificate-of-origin-no-field").check()
    }
    cy.contains('Continue').click()
})
//enter monetary value
Cypress.Commands.add("customsValue",(monvalue)=>{
    cy.contains('What is the customs value of this import?')
    cy.get('input#steps-customs-value-monetary-value-field').clear().type(monvalue.monetary)
    cy.get('input#steps-customs-value-shipping-cost-field').clear().type(monvalue.shipping)
    cy.get('input#steps-customs-value-insurance-cost-field').clear().type(monvalue.cost)
    cy.contains('Continue').click()
})
//enter quantity
Cypress.Commands.add("quantity",(measureUnits)=>{
    cy.contains('Enter import quantity')
    for (let [key, value] of Object.entries(measureUnits)) {
      cy.get(`#steps-measure-amount-${key}-field`).clear().type(value)
    }
    cy.contains('Continue').click()
  })

  //final use UK
Cypress.Commands.add("finalUse",(value)=>{
    cy.contains('Are your goods for sale to, or final use by, end-consumers located in the United Kingdom?')
    if (value === 'yes'){
        cy.get("div:nth-of-type(1) > input[name='steps_final_use[final_use]']").check()    
    }else{
        cy.get("div:nth-of-type(2) > input[name='steps_final_use[final_use]']").check()
    }
    cy.contains('Continue').click()
})
//final use NI
Cypress.Commands.add("finalUseNI", (value) => {
    cy.contains('Are your goods for sale to, or final use by, end-consumers located in the Northern Ireland?')
    if (value === 'yes') {
        cy.get("div:nth-of-type(1) > input[name='steps_final_use[final_use]']").check()
    } else {
        cy.get("div:nth-of-type(2) > input[name='steps_final_use[final_use]']").check()
    }
    cy.contains('Continue').click()
})
Cypress.Commands.add("confirmPage",()=>{
    cy.contains('Check your answers')
    cy.get('.govuk-button').click()
    cy.wait(200)
})

Cypress.Commands.add("dutyPage",()=>{
    cy.wait(200)
    cy.contains('Import duty calculation')
})

Cypress.Commands.add('exchangeRate',()=>{
    cy.contains('Please note - the current page uses an exchange rate of ') 
   
})

Cypress.Commands.add('additionalCode',(addcode)=>{
    cy.contains('Describe your goods in more detail')

    for (let [key, value] of Object.entries(addcode)) {
        cy.get(`select#steps-additional-code-additional-code-${key}-field`).select(value)
    }
    cy.contains('Continue').click()
})

Cypress.Commands.add('plannedXI',(options)=>{
    cy.contains('How will these goods be processed after they are moved into Northern Ireland?')
    if (options === 'acceptable1') {
        cy.get("input#steps-planned-processing-planned-processing-annual-turnover-field").check()
    } else if (options === 'acceptable2'){
        cy.get("input#steps-planned-processing-planned-processing-without-any-processing-field").check()
    } else if (options === 'acceptable3') {
        cy.get("input#steps-planned-processing-planned-processing-without-any-processing-field").check()
    }
    else {
        cy.get("input#steps-planned-processing-planned-processing-commercial-purposes-field").check()
    }

    cy.contains('Continue').click()
})

Cypress.Commands.add('vat',(options)=>{
    cy.contains('Which VAT rate is applicable to your trade?')
    if(options === '5'){
        cy.get('input#steps-vat-vat-vatr-field').click()
        cy.contains('Continue').click()
    }
    else if (options === '0'){
        cy.get('input#steps-vat-vat-vatz-field').click()
        cy.contains('Continue').click()
    }
    else if (options === '20'){
        cy.get('input#steps-vat-vat-vat-field').click()
        cy.contains('Continue').click()
    }
    else {
        cy.get('input#steps-vat-vat-vate-field').click()
        cy.contains('Continue').click()
    }   
})
Cypress.Commands.add('exciseCode', (excode) => {
    cy.contains('Which class of excise is applicable to your trade?')
    cy.get(`#steps-excise-additional-code-${excode}-field`).check()
    cy.contains('Continue').click()
})
//Document Codes
Cypress.Commands.add('docCode',(dcode)=>{
    cy.contains('Do you have any of the following documents?')  
    for (let [key,value] of Object.entries(dcode)) {
        cy.get(`#steps-document-code-document-code-${key}-${value}-field.govuk-radios__input`).check()
        //#steps-document-code-document-code-uk-c990-field.govuk-radios__input
    }
   
})







