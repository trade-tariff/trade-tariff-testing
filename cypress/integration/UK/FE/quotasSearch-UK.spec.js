describe('🇬🇧 💡 QuotasSearch)',function() {
    Cypress.config('baseUrl')

    it('Quotas search - Commodity Code',function(){
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        cy.get('input#goods_nomenclature_item_id')
            .click()
            .clear()
            .type('3920000000')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
        cy.get('.govuk-table__head')
            .contains('Order number')

            if (cy.get('.quota-results.govuk-table').contains('057015'))
            {
                cy.get('.quota-results.govuk-table')
                    cy.contains('057015').click()
                cy.get('.tariff-info')
                    cy.contains('Order Number')
                    cy.contains('057015')
                    cy.contains('Start date')
                    cy.contains('01/01/2021')
                cy.get('.close [href]').click()
            }
             else{}
    })
    it('Quotas Seach - No Input',function(){
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Sorry, there is a problem with the search query. Please specify one or more search criteria.')

    })


})