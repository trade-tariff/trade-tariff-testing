import dayjs from 'dayjs';

const currentMonth = dayjs().format('M');
const currentMonthName = dayjs().format('MMMM');
const currentYear = dayjs().format('YYYY');
const previousYear = `${currentYear}` - 1;
const lastMonth = 12;
const path = '/exchange_rates';


describe('validate /exchange_rates', function() {
  it('returns the latest monthly exchange rates', function() {
    // Visit page
    cy.visit(path);
    cy.contains('UK Integrated Online Tariff');
    // Check correct heading for the right year
    cy.get('h1').contains('Check foreign currency exchange rates');
    // Click through to view online
    cy.get(`a[href="/exchange_rates/view/${currentYear}-${currentMonth}?type=monthly"]`).contains('View online').click();
    // Check new title for monthly rates
    cy.get('h1').contains(`${currentMonthName} ${currentYear} monthly exchange rates`);
    // Check first column heading
    cy.get('table.govuk-table > thead > tr > th').first().contains('Country/territory');
    // Check last column heading
    cy.get('table.govuk-table > thead > tr > th').last().contains('End date');
    cy.get(`a[href="/api/v2/exchange_rates/files/monthly_csv_${currentYear}-${currentMonth}.csv"]`).contains('CSV');
    // and can download CSV
    cy.request(`/api/v2/exchange_rates/files/monthly_csv_${currentYear}-${currentMonth}.csv`).then((response) => {
      assert.equal(response.status, 200);
    });
  });

  it('displays exchange rates for previous years', function() {
    // given I am on the exchange rates page
    cy.visit(path);
    // then I expect to see the current year in the title
    cy.get('h1').contains('Check foreign currency exchange rates');
    // when I click through to the 2023 year
    cy.contains('Rates from previous year');
    cy.get('li[class=\'gem-c-related-navigation__link\'] > a').contains(`${previousYear}`).click();
    // and I see links for last year exchange rates
    cy.get('h2').contains(`Monthly exchange rates for year (${previousYear})`);
    // The secondary title is also updated
    cy.get('.downloads > section > div > h3').contains(`${currentMonthName} ${previousYear} monthly exchange rates`);
    // Click through to download file for dec 2022
    cy.get(`a[href="/api/v2/exchange_rates/files/monthly_csv_${previousYear}-${lastMonth}.csv"]`).contains('CSV');
    cy.request(`/api/v2/exchange_rates/files/monthly_csv_${previousYear}-${lastMonth}.csv`).then((response) => {
      assert.equal(response.status, 200);
    });
  });
});
