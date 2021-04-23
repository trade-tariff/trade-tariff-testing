//🇻🇳 Vietnam to  🇬🇧 GB 
// Comm code :0702000007 - no Measure Units 

describe('|RoW-GB201-e2e.spec |🍅 - 🇻🇳 Vietnam to 🇬🇧 GB  | 201-e2e.spec | ',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    let country = ["uk","xi"]
    let pagetitles = ["UK Global Online Tariff","Northern Ireland Online Tariff"]
    
    for (let i =0;i<country.length;i++){
        console.log(i)

    it(`e2e RoW to GB - 🇻🇳 Vietnam to 🇬🇧 GB - ${country[i]}`,function(){
        //select future date 
        cy.visit(`${country[i]}/0702000007/import-date`)
        cy.contains(`${pagetitles[i]}`)
        cy.validDate()
        cy.wait(100)
        cy.contains('Which part of the UK are you importing into?')

        //select GB as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-uk-field').check()
        cy.contains('Continue').click()
        cy.wait(100)
        cy.contains('Which country are the goods dispatched from?')

        //select country from list 
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
        .click().clear()
        .type('Vietnam').wait(500)
        cy.contains('Continue').click()
        //Monetary value page 
        cy.contains('What is the customs value of this import?')
        cy.get('input#wizard-steps-customs-value-monetary-value-field').clear().type('5000.50')
        cy.get('input#wizard-steps-customs-value-shipping-cost-field').clear().type('455.7533')
        cy.get('input#wizard-steps-customs-value-insurance-cost-field').clear().type('4545.987654')
        cy.contains('Continue').click()
        
    //Check your answers page 
        cy.contains('Check your answers')
    //  cy.get('.govuk-grid-column-three-quarters')
    //   cy.get('.govuk-summary-list__key')
        cy.contains('Commodity code')
        cy.contains('Date of import')
        cy.contains('Destination')
        cy.contains('Country of dispatch')
        cy.contains('Customs value')
        
//   cy.get('.govuk-summary-list__value')
        cy.get('div:nth-of-type(1) > .govuk-summary-list__value').contains('0702 00 00 07')
        cy.get('div:nth-of-type(2) > .govuk-summary-list__value').contains('31 December 2021')
        cy.get('div:nth-of-type(3) > .govuk-summary-list__value').contains('England, Scotland or Wales (GB)')
        cy.get('div:nth-of-type(4) > .govuk-summary-list__value').contains('Vietnam')
        cy.get('div:nth-of-type(5) > .govuk-summary-list__value').contains('£10,002.24')
 
    //confirm
        cy.get('.govuk-button').click()

        //Final Page - duty page
        cy.contains('Import duty calculation')
        cy.contains('You are importing commodity')
        cy.contains('from Vietnam on 31 December 2021.')
        
     //   cy.contains('0702 00 00 07').click()
     //   cy.contains('Commodity information for 0702000007')
       
     //   cy.get('.govuk-back-link').click()
     //   cy.go(-1)
        //keys
     //   cy.get('.govuk-details > .govuk-details__summary')
        cy.contains('Details of your trade').click()
        cy.get('.govuk-details__text')
        cy.contains('Origin:')
        cy.contains('Commodity:')
        cy.contains('Import date:')
        cy.contains('Valuation of import:')
        //values
        cy.contains('0702 00 00 07')
        cy.contains('Cherry tomatoes')
        cy.contains('31 December 2021')
        cy.contains('£10,002.24')

        //information 
        cy.contains('Details of your trade')
        cy.get('.govuk-table__row')
        cy.contains('Data')
        cy.contains('Calculation')
        cy.contains('Value')
        //first row
        cy.contains('Valuation for import')
        cy.contains('Value of goods + freight + insurance costs')
        cy.get('tr:nth-of-type(1) > td:nth-of-type(3)').contains('£10,002.24')
        //import duty 
        cy.contains('Import duty Tariff preference (UK)')
      
        cy.contains('Duty Total')
        cy.get('tr:nth-of-type(3) > td:nth-of-type(3)').contains('£0.00')
        //Final Page 
        cy.contains('Import duty calculation')
        cy.contains('You are importing commodity 0702 00 00 07 from Vietnam on 31 December 2021.')
        cy.contains('Option 1: Third-country duty')
        cy.contains('Option 2: Tariff preference - Vietnam')

})

}
})
