describe('🧮 🔖 | dcCommCodeinfo | Commodity code information on all pages consistent |',function(){

//check comm code information on every page is rendered correctly 
Cypress.config('baseUrl', Cypress.config('services')['dutycalxi'])
let pages = ['import-date','import-destination','country-of-origin','customs-value','trader-scheme','certificate-of-origin','final-use','planned-processing']

it(`Commodity Information on all pages is consistent`,function(){

    for ( let i = 0;i< pages.length;i++)
    {

    cy.visit(`/0702000007/${pages[i]}`)
    cy.contains('Trade Tariff Duty Calculator')
    //About this commodity code
    cy.get('.govuk-details > .govuk-details__summary')
    cy.contains('About this commodity code').click()
    cy.get('.govuk-details__text')
    cy.contains('Commodity code')
    cy.contains('0702000007')
    cy.contains('Cherry tomatoes')
    
    }

})

})