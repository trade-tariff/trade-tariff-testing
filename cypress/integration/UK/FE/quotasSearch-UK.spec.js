describe('🇬🇧 💡 | quotasSearch-UK | QuotasSearch using comm codes and quota orders |', function() {
  it('Quotas Search - Commodity Code', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('input#goods_nomenclature_item_id')
        .click()
        .clear()
        .type('3920000000');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    cy.get('.govuk-table__head')
        .contains('Order number');

    if (cy.get('.search-results').contains('057015')) {
      cy.contains('057015').click();
      cy.get('.tariff-info');
      cy.contains('Quota 057015');
      cy.contains('057015');
      cy.contains('Start and end dates');
      cy.contains('1 January 2022 to 31 December 2022');
      cy.get('.close [href]').click();
    } else {}
  });
  it('Quotas Search - Copy / No Input', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.contains('Search for tariff quotas, including daily updated balances. Enter data into at least one of the criteria below.');
    cy.contains('Enter the 6-digit quota order number');
    cy.contains('Enter a 10-digit commodity code to search for quotas available on that code');
    cy.contains('Select a country to which the quota applies');
    cy.contains('Enter the date for which you would like to return results If you leave this field blank, then today\'s date will be used');
    cy.contains('Sorry, there is a problem with the search query. Please specify one or more search criteria.').should('not.exist');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Sorry, there is a problem with the search query. Please specify one or more search criteria.');
  });
  it('Quotas Search - Country list - 🇲🇦  Results', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('.js-quota-country-picker').click();
    
    cy.get('input#geographical_area_id').type('Morocco (MA)');
    
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    cy.get('.govuk-table__row')
        .contains('Morocco (MA)');
  });
  it('Quotas Search - Country list - 🇧🇫  No results', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('.js-quota-country-picker').click();
    
    cy.get('input#geographical_area_id').type('Burkina Faso (BF)');
    
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('There are no matching results');
  });
  it('Quotas Search - 🇨🇭  Reset to all countries', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('.js-quota-country-picker').click();
    
    cy.get('input#geographical_area_id').type('Switzerland (CH)');
    
    // reset to all countries
    cy.get('.reset-country-picker').click();
    
    cy.get('form#new_search > input[name=\'new_search\']').click();

    cy.contains('Sorry, there is a problem with the search query. Please specify one or more search criteria.');
  });

  it('Quotas Search - Order Number', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    cy.get('input#order_number')
        .click().clear().type('057140');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    cy.get('.govuk-table__row').contains('057140');
    cy.contains('Colombia (CO)');
    cy.contains('01 August 2021');
    cy.contains('31 July 2022');
    cy.contains('Tonne (1000 kg)');
  });

  it('Quotas Search - Critical state', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    // Critical State - Yes
    cy.get('select#critical').select('Yes');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    // Critical State - No
    cy.get('select#critical').select('No');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
  });

  it('Quotas Search - Status', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    // Blocked
    cy.get('select#status').select('Blocked');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('There are no matching results');
    // Exhausted
    cy.get('select#status').select('Exhausted');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    // Not blocked
    cy.get('select#status').select('Not blocked');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
    // Not exhausted
    cy.get('select#status').select('Not exhausted');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');
  });

  it('Quotas Search - by Date', function() {
    cy.visit('/quota_search');
    cy.contains('Search for quotas');
    // Quota expired on 30th June 2021
    cy.get('input#order_number')
        .click().clear().type('058801');
    cy.get('input#day').click().clear().type('30');
    cy.get('input#month').click().clear().type('06');
    cy.get('input#year').click().clear().type('2021');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('Quota search results');

    // Quota results for 1st July 2021
    cy.get('input#day').click().clear().type('01');
    cy.get('input#month').click().clear().type('07');
    cy.get('input#year').click().clear().type('2025');
    cy.get('form#new_search > input[name=\'new_search\']').click();
    cy.contains('There are no matching results');
  });
});
