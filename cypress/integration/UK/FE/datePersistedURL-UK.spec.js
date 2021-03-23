describe('🇬🇧 💡 | datePersistedURL-UK.spec | date change persisted on URL |',function() {
    // Bug : https://transformuk.atlassian.net/browse/HOTT-329
    // select commodity + change date + select country + check date 
    Cypress.config('baseUrl')

    it(' Date persisted on import ', function () {
        cy.visit('/sections')
        cy.contains('UK Global Online Tariff: look up commodity codes, duty and VAT rates')

        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('0702000007')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(300)
        cy.title().should('contains','0702000007')
        
        cy.get('.govuk-main-wrapper')
                    .contains('Commodity information for 0702000007')
            //change date to future date 
        cy.get(".js-show.text > a[role='button']").click()
        cy.get('input#tariff_date_date').click().clear().type('31/03/2022')
        cy.get(".fields > a[role='button']").click()
 
        cy.url().should('include','day=31&month=3&year=2022')

     //   select import tab 
        cy.get('a#tab_import').click()
        cy.get('.govuk-main-wrapper')
                .contains('Import measures and restrictions')
    //select country from drop down list    
        cy.get('input#import_search_country').click().clear().wait(500)
                    .type('Chile').wait(500)
                    .type('{enter}')
    //verify if the date is persisted 
        cy.get('.govuk-table__caption')
                    .contains('Measures for Chile')
        cy.log(cy.url())
        cy.url().should('include','day=31&month=3&year=2022')
            
            })
        
           
    
})