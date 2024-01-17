import dayjs from 'dayjs';
import dirpath from 'path';
import commonPage from './commonPage';

const currentMonth = dayjs().format('M');
const currentMonthName = dayjs().format('MMMM');
const currentYear = dayjs().format('YYYY');
const previousYear = `${currentYear}` - 1;
const lastMonth = 12;
const avgRatesMonth = 3;
const avgRatesMonthName = 'March';

class ExchangeRatesPage {
  elements = {
    previousYearEle: () => cy.get('li[class=\'gem-c-related-navigation__link\'] > a'),
    secondaryTitleEle: () => cy.get('.downloads > section > div > h3'),
    relatedNavEle: () => cy.get('.gem-c-related-navigation__link-list'),
  };

  goToExchangeRates() {
    cy.visit('/exchange_rates');
    commonPage.elements.ukTariff();
  }

  verifyUKTariffBanner() {
    commonPage.elements.ukBannerTariff();
  }

  verifyPreviousYearHeading() {
    commonPage.verifyContains(`${previousYear} HMRC currency exchange monthly rates`);
  }

  verifyNewTitleForMonthlyRates() {
    commonPage.verifyContains(`${currentMonthName} ${currentYear} monthly exchange rates`);
  }

  verifySecondaryHeadingInMonthlyRates() {
    commonPage.verifyContains(`Official ${currentMonthName} ${currentYear} HMRC foreign currency exchange monthly rates`);
  }

  verifyHeading(ratesTxtToVerify) {
    commonPage.verifyContains(`HMRC ${ratesTxtToVerify} currency exchange rates`);
  }

  verifySubHeading(ratesTxtToVerify) {
    commonPage.verifyContains(`Check the official HMRC foreign currency exchange ${ratesTxtToVerify} rates.`);
  }

  verifyViewOnlineLnkAndClk(linkPath, type, verifyTxtAndClk) {
    cy.get(`a[href="${linkPath}${currentYear}-${currentMonth}?type=${type}"]`).contains(`${verifyTxtAndClk}`).click();
  }

  assertCSVDownload(csvLink, currentMonthBoolean, previousYearBoolean, avgRatesMonthBoolean) {
    let year;
    let month;
    if (previousYearBoolean == true) {
      year = previousYear;
      month = lastMonth;
    } else if (avgRatesMonthBoolean == true) {
      year = currentYear;
      month = avgRatesMonth;
    } else if (currentMonthBoolean == true) {
      year = currentYear;
      month = currentMonth;
    }
    cy.request(`${csvLink}${year}-${month}.csv`).then((response) => {
      assert.equal(response.status, 200);
    });
  }

  clkPreviousYearLnk() {
    this.elements.previousYearEle().contains(`${previousYear}`).click();
  }

  verifySecondaryTitle(titleToVerify) {
    if (titleToVerify == 'average') {
      this.elements.secondaryTitleEle().contains(`${avgRatesMonthName} ${currentYear} average exchange rates`);
    } else if (titleToVerify == 'spot') {
      this.elements.secondaryTitleEle().contains(`${avgRatesMonthName} ${currentYear} spot exchange rates`);
    } else {
      this.elements.secondaryTitleEle().contains(`${currentMonthName} ${previousYear} monthly exchange rates`);
    }
  }

  verifyTheSideLnksTxt(txtToVerify) {
    if (txtToVerify == 'Monthly rates') {
      this.elements.relatedNavEle().contains(`${txtToVerify}`);
    } else {
      this.elements.relatedNavEle().contains(`${currentYear}`);
    }
  }

  downloadCSVFileAndCompareFileCountWithTableCount() {
    // download file in the mentioned directory
    const baseURL = Cypress.env('baseUrl');
    cy.get('.gem-c-metadata__definition >a').invoke('attr', 'href').then((csvHref) => {
      cy.downloadFile(`${baseURL}${csvHref}`, 'cypress/downloads', 'monthly_csv.csv');

      // new folder absolute path
      // eslint-disable-next-line no-undef
      const dirPath = dirpath.join(__dirname, '/monthly_csv.csv');
      const filePath = dirPath.replace('pages', 'downloads');
      this.getDataAndSortToCompare(filePath);
    });
  }

  getDataAndSortToCompare(filePath) {
    cy.get('table').find('tr').then((txt1) => txt1.text().split('\n').map((row1) => row1.trim())).then((rowActualData) => {
      const actualData = rowActualData
          .map((row) => row.split('|') // split each row
              .filter(Boolean) // ignore start and end "|"
              .map((col) => col.trim()), // remove whitespace
          )
          .filter((row) => row.length); // remove empty rows
      const actualArrays = []; const size = 6;
      for (let i = 0; i < actualData.length; i += size) {
        actualArrays.push(actualData.slice(i, i + size));
      }
      cy.readFile(`${filePath}`).then((txt2) => txt2.split('\n').map((row2) => row2.trim())).then((rowExpectedData) => {
        const expectedData = rowExpectedData
            .map((row) => row.split('|') // split each row
                .filter(Boolean) // ignore start and end "|"
                .map((col) => col.trim()), // remove whitespace
            )
            .filter((row) => row.length); // remove empty rows
        expect(actualArrays.length).to.equal(expectedData.length);
      });
    });
  }
}

export default new ExchangeRatesPage();
