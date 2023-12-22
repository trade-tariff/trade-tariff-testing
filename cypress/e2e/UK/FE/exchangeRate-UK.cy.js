import dayjs from 'dayjs';
import dirpath from 'path';
const lastMonth = 12;
const avgRatesMonth = 3;
const avgRatesMonthName = 'March';

describe('validate /exchange_rates', function() {
  const path = '/exchange_rates';
  let latestMonthName;
  let latestYear;
  let now;
  let current;
  let currentMonth = dayjs().format('M');
  let currentMonthName = dayjs().format('MMMM');
  let currentYear = dayjs().format('YYYY');
  let previousYear = `${currentYear}` - 1;
  it('returns the latest monthly exchange rates', function() {
    // Visit page
    cy.visit(path);
    cy.contains('UK Integrated Online Tariff');
    // Check correct heading for the right year
    cy.get('h1').contains('HMRC currency exchange monthly rates');
    cy.get(':nth-child(2) > .gem-c-related-navigation__nav-section > .gem-c-related-navigation__link-list > :nth-child(1) > a')
        .then(($value) => {
          latestYear = $value.text();
          if (latestYear != currentYear) {
            previousYear = currentYear;
            cy.log(previousYear);
            currentYear = latestYear;
          }
          now = dayjs();
          current = now.month(now.month() + 1);
          currentMonth = (current.format('M'));
          cy.log(currentMonth);
          cy.log(`a[href="/exchange_rates/view/${currentYear}-${currentMonth}?type=monthly"]`);
          cy.get('.govuk-heading-s').then(($value) => {
            latestMonthName = $value.text().split(latestYear);
            cy.log(latestMonthName);
            currentMonthName = latestMonthName[0];
            cy.log(currentMonthName);
            cy.get(`a[href="/exchange_rates/view/${currentYear}-${currentMonth}?type=monthly"]`).click();
            // Check new title for monthly rates
            cy.get('h1').contains(`${currentMonthName.trim('')} ${currentYear} monthly exchange rates`);
            // Check secondary heading
            cy.get('p[class=\'govuk-body-l\']')
                .contains(`Official ${currentMonthName.trim('')} ${currentYear} HMRC foreign currency exchange monthly rates`);
            // Check first column heading
            cy.get('table[class=\'govuk-table\'] > thead > tr > th').first().contains('Country/territory');
            // Check last column heading
            cy.get('table[class=\'govuk-table\'] > thead > tr > th').last().contains('End date');
            cy.get(`a[href="/api/v2/exchange_rates/files/monthly_csv_${currentYear}-${currentMonth}.csv"]`).contains('CSV');
            cy.contains('CSV file');
            // and can download CSV
            cy.request(`/api/v2/exchange_rates/files/monthly_csv_${currentYear}-${currentMonth}.csv`).then((response) => {
              assert.equal(response.status, 200);
            });
          });
        });
  });

  it('Download CSV file in mentioned directory and verify number of records', function() {
    // Visit page
    cy.visit(path);
    // Check correct heading for the right year
    cy.get('h1').contains('HMRC currency exchange monthly rates');
    // Click through to view online
    cy.get(`a[href="/exchange_rates/view/${currentYear}-${currentMonth}?type=monthly"]`).contains('View online').click();
    // Check new title for monthly rates
    cy.get('h1').contains(`${currentMonthName.trim('')} ${currentYear} monthly exchange rates`);
    // download file in the mentioned directory
    const baseURL = Cypress.env('baseUrl');
    cy.get('.gem-c-metadata__definition >a').invoke('attr', 'href').then((csvHref) => {
      cy.downloadFile(`${baseURL}${csvHref}`, 'cypress/downloads', 'monthly_csv.csv');
      // new folder absolute path
      // eslint-disable-next-line no-undef
      const dirPath = dirpath.join(__dirname, '/monthly_csv.csv');
      const filePath = dirPath.replace('e2e/UK/FE', 'downloads');
      cy.getDataAndSortToCompare(filePath);
    });
  });

  it('displays exchange rates for previous years', function() {
    currentMonthName = dayjs().format('MMMM');
    currentYear = dayjs().format('YYYY');
    previousYear = `${currentYear}` - 1;
    // given I am on the exchange rates page
    cy.visit(path);
    // then I expect to see the current year in the title
    cy.get('h1').contains('HMRC currency exchange monthly rates');
    // when I click through to the 2022 year
    cy.contains('Monthly exchange rates by year');
    cy.get('li[class=\'gem-c-related-navigation__link\'] > a').contains(`${previousYear}`).click();
    // and I see links for last year exchange rates
    cy.get('h1').contains(`${previousYear} HMRC currency exchange monthly rates`);
    // The secondary title is also updated
    cy.get('.downloads > section > div > h3').contains(`${currentMonthName} ${previousYear} monthly exchange rates`);
    // Click through to download file for dec 2022
    cy.get(`a[href="/api/v2/exchange_rates/files/monthly_csv_${previousYear}-${lastMonth}.csv"]`).contains('CSV');
    cy.request(`/api/v2/exchange_rates/files/monthly_csv_${previousYear}-${lastMonth}.csv`).then((response) => {
      assert.equal(response.status, 200);
    });
  });

  it('Verify right hand navigation on the monthly exchange rate', function() {
    cy.visit(path + `/monthly?year=${previousYear}`);
    cy.url().should(`include`, `/exchange_rates/monthly?year=${previousYear}`);
    cy.get('.gem-c-related-navigation__main-heading').contains('Related information');
    cy.get('.gem-c-related-navigation__link-list').contains('Average rates');
    cy.get('.gem-c-related-navigation__link-list').contains('Spot rates');
    cy.get('h1').contains(`${previousYear} HMRC currency exchange monthly rates`);
    cy.get('.gem-c-related-navigation__link-list').contains(`${currentYear}`);
  });

  it('No exchange rates for year specified other than 2021, 2022 and 2023', function() {
    cy.visit('exchange_rates/2019', {failOnStatusCode: false});
    cy.contains('UK Integrated Online Tariff');
    cy.contains('There are no exchange rates for the type and year specified.');
    cy.url().should('include', '/exchange_rates/2019');
  });

  it('Verify average rates link on the right hand navigation', function() {
    cy.visit(path + '/average');
    cy.url().should('include', '/exchange_rates/average');
    cy.get('.gem-c-related-navigation__link-list').contains('Monthly rates');
    cy.get('h1').contains('HMRC currency exchange average rates');
    cy.contains('Check the official HMRC foreign currency exchange average rates.');
  });

  it('Verify download CSV file on average rates page', function() {
    cy.visit(path + '/average');
    cy.url().should('include', '/exchange_rates/average');
    cy.get('.gem-c-related-navigation__link-list').contains('Monthly rates');
    cy.get('h1').contains('HMRC currency exchange average rates');
    cy.contains('Check the official HMRC foreign currency exchange average rates.');
    cy.get('.attachment-details').contains(`${avgRatesMonthName} ${currentYear} average exchange rates`);
    cy.contains('CSV');
    cy.request(`/api/v2/exchange_rates/files/average_csv_${currentYear}-${avgRatesMonth}.csv`).then((response) => {
      assert.equal(response.status, 200);
    });
  });

  it('Verify spot rates link on the right hand navigation', function() {
    cy.visit(path + '/spot');
    cy.url().should('include', '/exchange_rates/spot');
    cy.get('.gem-c-related-navigation__link-list').contains('Monthly rates');
    cy.get('h1').contains('HMRC currency exchange spot rates');
    cy.contains('Check the official HMRC foreign currency exchange spot rates.');
  });
});
