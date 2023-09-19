import dayjs from 'dayjs';
import dirpath from 'path';

const currentMonth = dayjs().format('M');
const currentMonthName = dayjs().format('MMMM');
const currentYear = dayjs().format('YYYY');
const previousYear = `${currentYear}` - 1;
const lastMonth = 12;

describe('validate /exchange_rates', function() {
  const path = '/exchange_rates';

  it('returns the latest monthly exchange rates', function() {
    // Visit page
    cy.visit(path);
    cy.contains('UK Integrated Online Tariff');
    // Check correct heading for the right year
    cy.get('h1[class=\'govuk-heading-l\']').contains(`${currentYear} HMRC currency exchange rates`);
    // Click through to view online
    cy.get(`a[href="/exchange_rates/view/${currentYear}-${currentMonth}"]`).contains('View online').click();
    // Check new title for monthly rates
    cy.get('h1[class=\'govuk-heading-l\']').contains(`${currentMonthName} ${currentYear} monthly exchange rates`);
    // Check secondary heading
    cy.get('p[class=\'govuk-body-l\']')
        .contains(`Official ${currentMonthName} ${currentYear} HMRC foreign currency exchange monthly rates`);
    // Check first column heading
    cy.get('table[class=\'govuk-table\'] > thead > tr > th').first().contains('Country/territory');
    // Check last column heading
    cy.get('table[class=\'govuk-table\'] > thead > tr > th').last().contains('End date');
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
    cy.get('h1[class=\'govuk-heading-l\']').contains(`${currentYear} HMRC currency exchange rates`);
    // when I click through to the 2022 year
    cy.contains('Monthly exchange rates by year');
    cy.get('li[class=\'gem-c-related-navigation__link\'] > a').contains(`${previousYear}`).click();
    // and I see links for last year exchange rates
    cy.get('h1[class=\'govuk-heading-l\']').contains(`${previousYear} HMRC currency exchange rates`);
    // The secondary title is also updated
    cy.get('.downloads > section > div > h3').contains(`${currentMonthName} ${previousYear} monthly exchange rates`);
    // Click through to download file for dec 2022
    cy.get(`a[href="/api/v2/exchange_rates/files/monthly_csv_${previousYear}-${lastMonth}.csv"]`).contains('CSV');
    cy.request(`/api/v2/exchange_rates/files/monthly_csv_${previousYear}-${lastMonth}.csv`).then((response) => {
      assert.equal(response.status, 200);
    });
  });

  it('Verify right hand navigation on the monthly exchange rate', function() {
    cy.visit(path + '/2022');
    cy.url().should('include', '/exchange_rates/2022');
    cy.get('.gem-c-related-navigation__main-heading').contains('Related information');
    cy.get('.gem-c-related-navigation__link-list').contains('Average rates');
    cy.get('.gem-c-related-navigation__link-list').contains('Spot rates');
    cy.get('h1[class=\'govuk-heading-l\']').contains(`${previousYear} HMRC currency exchange rates`);
    cy.get('.gem-c-related-navigation__link-list').contains(`${currentYear}`);
  });

  it('No exchange rates for year specified other than 2021, 2022 and 2023', function() {
    cy.visit('exchange_rates/2019', {failOnStatusCode: false});
    cy.contains('UK Integrated Online Tariff');
    cy.contains('There are no exchange rates for the year specified.');
    cy.url().should('include', '/exchange_rates/2019');
  });

  it('Download CSV file in mentioned directory and verify number of records', function() {
    // Visit page
    cy.visit(path);
    // Check correct heading for the right year
    cy.get('h1[class=\'govuk-heading-l\']').contains(`${currentYear} HMRC currency exchange rates`);
    // Click through to view online
    cy.get(`a[href="/exchange_rates/view/${currentYear}-${currentMonth}"]`).contains('View online').click();
    // Check new title for monthly rates
    cy.get('h1[class=\'govuk-heading-l\']').contains(`${currentMonthName} ${currentYear} monthly exchange rates`);

    // download file in the mentioned directory
    const baseURL = Cypress.env('baseUrl');
    const basePath = `${baseURL}/api/v2/exchange_rates/files/monthly_csv`;
    const downloadFilePath = `${basePath}_${currentYear}-${currentMonth}.csv`;
    cy.downloadFile(`${downloadFilePath}`, 'cypress/downloads', 'monthly_csv.csv');

    // new folder absolute path
    // eslint-disable-next-line no-undef
    const dirPath = dirpath.join(__dirname, '/monthly_csv.csv');
    const filePath = dirPath.replace('e2e/UK/FE', 'downloads');
    cy.getDataAndSortToCompare(filePath);
  });
});
