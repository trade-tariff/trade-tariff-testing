describe('| dcCommodityCodeLink | Duty Calculation link on commodities',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])
    
    let country = ["uk","xi"] 
    let destination = ["United Kingdom","Northern Ireland"]
    let pagetitles = ["UK Global Online Tariff","Northern Ireland Online Tariff"]
    let commcodes = ["0304829010","0702000007"]
    for (let i =0;i<country.length;i++){

    it(`Duty Calculator link on Commodity page ${country[i]} `,function(){
        cy.visit(`/import-date?referred_service=${country[i]}&commodity_code=${commcodes[i]}`)
        cy.contains(`${pagetitles[i]}`)
        cy.contains('About this commodity code').click()
        cy.get('.govuk-details  .govuk-link').click()
        cy.contains(`Commodity information for ${commcodes[i]}`)
        cy.contains(`${pagetitles[i]}`)
        cy.contains('Use our tariff duty calculator to work out the')
        cy.contains(`duties applicable to the import of commodity ${commcodes[i]} into the ${destination[i]}`)
        cy.get('.govuk-grid-row.import-and-export-boxes .govuk-link').click()
        cy.contains('When will the goods be imported?')

})
    }
    })