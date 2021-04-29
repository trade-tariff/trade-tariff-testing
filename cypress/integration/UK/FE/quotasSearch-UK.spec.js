describe('🇬🇧 💡 | quotasSearch-UK | QuotasSearch using comm codes and quota orders |',function() {
    Cypress.config('baseUrl')

    it('Quotas Search - Commodity Code',function(){
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
    it('Quotas Search - No Input',function(){
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Sorry, there is a problem with the search query. Please specify one or more search criteria.')
    })
    it('Quotas Search - Country list - 🇲🇦  Results',function(){
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        cy.get('.js-quota-country-picker').click()
        cy.wait(500)
        cy.get('input#geographical_area_id').type('Morocco (MA)')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
        cy.get('.govuk-table__row')
            .contains('Morocco (MA)')
    })
    it('Quotas Search - Country list - 🇧🇫  No results',function(){
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        cy.get('.js-quota-country-picker').click()
        cy.wait(500)
        cy.get('input#geographical_area_id').type('Burkina Faso (BF)')
        cy.wait(500)
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('There are no matching results')
    })
    it('Quotas Search - 🇨🇭  Reset to all countries',function(){
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        cy.get('.js-quota-country-picker').click()
        cy.wait(200)
        cy.get('input#geographical_area_id').type('Switzerland (CH)')
        cy.wait(200)
        //reset to all countries
        cy.get('.reset-country-picker').click()
        cy.wait(200)
        cy.get('form#new_search > input[name=\'new_search\']').click()

        cy.contains('Sorry, there is a problem with the search query. Please specify one or more search criteria.')
    })

    it('Quotas Search - Order Number',function(){
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        cy.get('input#order_number')
            .click().clear().type('057140')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
        cy.get('.govuk-table__row').contains('057140')
    })

    it('Quotas Search - Critical state',function(){
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        //Critical State - Yes
        cy.get('select#critical').select('Yes')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
        //Critical State - No
        cy.get('select#critical').select('No')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
    })

    it('Quotas Search - Status',function(){
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        //Blocked
        cy.get('select#status').select('Blocked')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('There are no matching results')
        //Exhausted
        cy.get('select#status').select('Exhausted')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
        //Not blocked
        cy.get('select#status').select('Not blocked')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
        //Not exhausted
        cy.get('select#status').select('Not exhausted')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
    })

    it('Quotas Search - Years',function(){
        cy.visit('/quota_search')
        cy.contains('Search the Quotas')
        //2021
        cy.get('select#years_').select('2021')
        cy.get('select#status').select('Not exhausted')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
        //2020
        cy.get('select#years_').select('2020')
        cy.get('select#status').select('Not exhausted')
        cy.get('form#new_search > input[name=\'new_search\']').click()
        cy.contains('Quota search results')
    })

})