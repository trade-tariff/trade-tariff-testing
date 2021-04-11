
describe('| dcCountriesList | RoW to GB - Exclude certain countries from the autocompleting country list |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

//QU', 'QR', 'EU', 'QZ', 'QV', 'QW', 'QY', 'QX', 'QP', 'XU', 'IO', 'QS', 'XI', 'QQ', 'ZB', 'ZD', 'ZF', 'ZG', 'ZE', 'ZH', 'ZN', 'ZU', 'GG', 'JE'

let country = ["uk","xi"]
    
    for (let i =0;i<country.length;i++){
        console.log(i)

 it(`Autocomplete excluded countries list - ${country[i]} `,function(){
    //select future date 
    cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1212210000`)
    cy.contains('Trade Tariff Duty Calculator')
    cy.validDate( )
    cy.contains('Continue').click()
    cy.contains('Which part of the UK are you importing into?')
    //select NI as country of destination
    cy.get('#wizard-steps-import-destination-import-destination-uk-field').check()
    cy.contains('Continue').click()
    cy.contains('Which country are the goods dispatched from?')

    let countries = ["European Union","Guernsey"]
    for ( var i=0 ;i<countries.length;i++)
    {

    cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
     .clear().wait(100).type(`${countries[i]}`).wait(200)
    cy.get("[id='wizard-steps-country-of-origin-country-of-origin-field__listbox']")
            .contains('No results found')
    }

})
it(`United Kingdom (Northern Ireland) included in countries list - ${country[i]}`,function(){
    //select future date 
    cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=1212210000`)
    cy.contains('Trade Tariff Duty Calculator')
    cy.validDate( )
    cy.contains('Continue').click()
    cy.contains('Which part of the UK are you importing into?')
    //select NI as country of destination
    cy.get('#wizard-steps-import-destination-import-destination-uk-field').check()
    cy.contains('Continue').click()
    cy.contains('Which country are the goods dispatched from?')
//select United Kingdom as country of Origin 
   
    cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
     .click().clear().wait(500)
     .type('United Kingdom (Northern Ireland)').wait(500)
     cy.get("[id='wizard-steps-country-of-origin-country-of-origin-field__listbox']")
     .contains('United Kingdom (Northern Ireland)')
})
    }
})