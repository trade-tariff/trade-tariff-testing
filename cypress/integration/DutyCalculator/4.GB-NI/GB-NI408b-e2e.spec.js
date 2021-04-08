// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - 🚫 Trader Scheme - 🚫  Certified as UK origin
// Comm code :1701141000

describe('| GB-NI408-e2e.spec | GB to NI route 🚐 08 - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - 🚫 Trader Scheme - 🚫  Certified as UK origin |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    let country = ["uk","xi"] 
    for (let i =0;i<country.length;i++){
        console.log(i)

    it(`e2e GB to NI - ${country[i]}`,function(){
        //select future date 
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1701141000`)
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        // check URL 

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

        //select United Kingdom as country of Origin    
        cy.get('input#wizard-steps-country-of-origin-country-of-origin-gb-field').click()
        cy.contains('Continue').click()   
        
        // 🚫 Trader Scheme Registered - Yes 
        cy.contains('Are you registered with the UK Trader Scheme?')
        //Select Yes, I am registered with the UK Trader Scheme
        cy.get("div:nth-of-type(2) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()

        // 🚫 Certified as UK origin
        //Select Yes, valid Certificate of Origin
        cy.get("input#wizard-steps-certificate-of-origin-certificate-of-origin-no-field").check()
        cy.contains('Continue').click()

        //Monetary value page 
        cy.contains('What is the monetary value of this import?')
        cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type('5000.50')
        cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('455.7533')
        cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('4545.987654')
        cy.contains('Continue').click()
        
        //Page 12
        // Measure amount page 
        cy.contains('Enter import quantity')
      //  cy.get('#wizard-steps-measure-amount-dtn-field').clear().type('12.50')
        cy.get('#wizard-steps-measure-amount-dtnr-field').clear().type('230.98')
      //  cy.get('#wizard-steps-measure-amount-tne-field').clear().type('72.56')
      //  cy.get('#wizard-steps-measure-amount-dap-field').clear().type('87.25')
        cy.contains('Continue').click()

        //Check your answers page 
        cy.contains('Check your answers')
      //  cy.get('.govuk-grid-column-three-quarters')
     //   cy.get('.govuk-summary-list__key')
        cy.contains('Commodity code')
        cy.contains('Date of import')
        cy.contains('Destination')
        cy.contains('Country of dispatch')
        cy.contains('Trader scheme')
        cy.contains('Certificate of origin')
        cy.contains('Customs value')
        cy.contains('Import quantity')
     //   cy.get('.govuk-summary-list__value')
        cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('1701 14 10 00')
        cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('31 December 2022')
        cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('Northern Ireland')
        cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('United Kingdom (excluding Northern Ireland)')
        cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('No')
        cy.get('div:nth-of-type(6) > .govuk-summary-list__value').contains('No')
        cy.get('div:nth-of-type(7) > .govuk-summary-list__value').contains('£10002.240954')
      //  cy.contains('12.50 x 100 kg')
        cy.contains('230.98 x 100 kg')
     //   cy.contains('72.56 tonnes')
     //   cy.contains('87.25 x 10,000 kg')
        

     //confirm
     cy.get('.govuk-button').click()

    //Final Page - duty page
     cy.contains('Import duty calculation')
     cy.contains('You are importing commodity')
     cy.contains('from United Kingdom (excluding Northern Ireland) on')
     cy.contains('31 December 2022')
     cy.contains('1701 14 10 00').click()
     cy.contains('Commodity information for 1701141000')
     cy.go(-1)
 //keys
     cy.get('.govuk-details > .govuk-details__summary')
     cy.contains('Details of your trade').click()
     cy.get('.govuk-details__text')
     cy.contains('Origin:')
     cy.contains('Commodity:')
     cy.contains('Import date:')
     cy.contains('Valuation of import:')
 //values
     cy.contains('1701 14 10 00')
     cy.contains('For refining')
     cy.contains('31 December 2022')
     cy.contains('£10,002.24')

 //information 
     cy.contains('See below for the options for paying duties on this import:')
    cy.get('.govuk-table__row')
     cy.contains('Data')
     cy.contains('Calculation')
     cy.contains('Value')
 //first row
     cy.contains('Valuation for import')
     cy.contains('Value of goods + freight + insurance costs')
     cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£10,002.24')
 //import duty 
     cy.contains('Import duty Third-country duty (XI)')
     cy.contains('Import quantity')
     cy.contains('230.98 x 100 kg')
     cy.contains('33.90 EUR / 100 kg std qual * 230.98')
    
 // Exchange Rate 
    cy.request({
        method: 'GET',
        url: `https://dev.trade-tariff.service.gov.uk/api/v2/exchange_rates/`,
    }).then((response) => {
        expect(response.status).to.eq(200)  
     //   console.log(JSON.stringify(response.body)) 
    let exchangerate = response.body.data[49].attributes.rate
    console.log(`${exchangerate}`)
       
    cy.contains(`Please note - the current page uses an exchange rate of ${exchangerate} GBP to EUR.`) 
    cy.log(`${exchangerate}`)
    cy.contains('More about this exchange rate').click()
    cy.contains('The exchange rate used is derived from European Central Bank. The reference rates are usually updated around 15:00 on every working day.')
    
    const formatter = new Intl.NumberFormat('en-UK',{
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
    })


 //   let impvalue = ((230.98*33.90)*exchangerate).toFixed(2)
    let impvalue = ((230.98*33.90)*exchangerate)
    console.log(formatter.format(`${impvalue}`))
    let finimpvalue = formatter.format(`${impvalue}`)
    console.log(`${finimpvalue}`)
    cy.get('tr:nth-of-type(3) > td:nth-of-type(3)').contains(`${finimpvalue}`)
    //Last row 
    cy.contains('Duty Total')
    cy.get('tr:nth-of-type(4) > td:nth-of-type(3)').contains(`${finimpvalue}`)

    })
    //Final Page 
    cy.contains('Import duty calculation')
    cy.contains('Option 1: Third-country duty')
    cy.contains('Option 2: Tariff preference')

    })
    
}
})