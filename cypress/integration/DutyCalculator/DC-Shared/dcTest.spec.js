
describe('🧮 Duty Calculator main page ',function() {

    let country = ["dutycal","dutycalxi"]
    
    for (let i =0;i<country.length;i++){
        let pagetitles = ["UK Global Online Tariff","Northern Ireland Online Tariff"]
        console.log(i)
    Cypress.config('baseUrl', Cypress.config('services')[`${country[i]}`])
    console.log(Cypress.config('baseUrl', Cypress.config('services')[`${country[i]}`]))

    it('🔗 Verify Page links ',function(){
        cy.visit('/0702000007/import-date')
        cy.get('.govuk-header__link')
            .contains('Search or browse the Tariff').click()
        cy.wait(500)
      //  cy.MainPageUK()
        //DC main page
        cy.visit('/1704101000/import-date')
        cy.contains('Trade Tariff Duty Calculator')
        cy.get('.govuk-header__navigation ')
        cy.contains('A-Z').click()
        cy.contains('A–Z of Classified Goods')
        cy.get('.govuk-header ').contains(`${pagetitles[i]}`)
        //DC main page
        cy.visit('/0702000007/import-date')
        cy.contains('Trade Tariff Duty Calculator')
        cy.contains('Tools').click()
        cy.get('.govuk-header ').contains(`${pagetitles[i]}`)
        cy.contains('Tariff tools')

    })
    
}
})
//check text color: #d4351c