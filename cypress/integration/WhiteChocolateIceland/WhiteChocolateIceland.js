//Givens
    Given('i am on Trade Tariff main page', () => {
        cy.visit('https://www.gov.uk/trade-tariff')
        cy.get('p#get-started > a[role=\'button\']',{ log: false }).contains('Start now').should('be.visible').click()

    })


//Whens
    When('i enter commodity code 1704903000 in search tariff box', () => {
        cy.get('.js-commodity-picker-select.js-show  input#q').click().type('1704903000')
        cy.wait(3000)
        cy.get('input[name=\'new_search\']').click()
    })
    When('i select Import button',()=>{
        cy.get('a#tab_import').click()
    })
    When('select Iceland from All countries list',()=>{
       cy.get('input#import_search_country').click().clear().wait(1000)
           .type('Iceland').wait(1000)
           .type('{enter}')
        cy.wait(2000)
    })


//Thens
    Then('Commodity information for 1704903000 is displayed',()=>{
        cy.get('.commodity-header.govuk-heading-l').contains('Commodity information for 1704903000').should('be.visible')

    })
    Then('{string} should be shown', (content) => {
        cy.contains(content, {timeout: 10000}).should('be.visible')
    })
    Then('Measures for Iceland should be shown', () => {
        cy.contains('Measures for Iceland').should('be.visible')
        cy.contains('VAT standard rate').be.eq('20.00 %')


    })

