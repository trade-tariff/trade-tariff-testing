describe('validate /exchange_rates', function() {
  const path = '/exchange_rates';

  it('returns the latest monthly exchange rates', function() {
    // Visit page
    cy.visit(path);

    // Check correct heading for the right year
    cy.get("h1[class='govuk-heading-l']").contains("2023 HMRC currency exchange rates")

    // Click through to view online 
    cy.get('a[href="/exchange_rates/view/2023-9"]').contains('View online').click()

    // Check new title for monthly rates
    cy.get("h1[class='govuk-heading-l']").contains("September 2023 monthly exchange rates")

    // Check secondary heading
    cy.get("p[class='govuk-body-l']").contains("Official September 2023 HMRC foreign currency exchange monthly rates")

    // Check first column heading
    cy.get("table[class='govuk-table'] > thead > tr > th").first().contains("Country/territory")

    // Check last column heading
    cy.get("table[class='govuk-table'] > thead > tr > th").last().contains("End date")

    // and can download CSV
    cy.get('a[href="/api/v2/exchange_rates/files/monthly_csv_2023-9.csv"]').contains('CSV').click()

    // Read downloaded files
    // cy.readFile("downloads/monthly_csv_2023-9.csv").should('contain', 'monthly_csv_2023-9')
  });
  
  it('displays exchange rates for previous years', function() {

    // given I am on the exchange rates page
    cy.visit(path);

    // then I expect to see the current year in the title
    cy.get("h1[class='govuk-heading-l']").contains("2023 HMRC currency exchange rates")

    // when I click through to the 2022 year
    cy.get("li[class='gem-c-related-navigation__link'] > a").contains("HMRC exchange rates for 2022").click();
    
    // and I see links for last year exchange rates
    cy.get("h1[class='govuk-heading-l']").contains("2022 HMRC currency exchange rates")

    // The secondary title is also updated
    cy.get(".downloads > section > div > h3").contains("September 2022 monthly exchange rates");

    // Click through to download file for dec 2022
    cy.get('a[href="/api/v2/exchange_rates/files/monthly_csv_2022-12.csv"]').click()

    // Read downloaded files
    // cy.readFile("downloads/monthly_csv_2023-9.csv").should('contain', 'monthly_csv_2022-12')
  });
});