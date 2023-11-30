import commonPage from './commonPage';
import dayjs from 'dayjs';

const currentDate = dayjs().format('DD');
const currentMonth = dayjs().format('MM');
const currentYear = dayjs().format('YYYY');

class DutyCalculatorPage {
  elements = {
    captionTitle: () => 'Calculate import duties',
    goodsImportTitle: () => 'When will the good be imported',
    goodsImportHeading: () => 'When will the goods be imported?',
    destinationCountry: () => 'Which part of the UK are you importing into',
    countryOfOriginTitle: () => 'Which country are the goods dispatched from',
    countryOfOriginHeading: () => 'Which country are the goods coming from',
    noDuty: () => 'There is no import duty to pay',
    importDate: (iValue) => cy.get(`#steps_import_date_import_date_${iValue}i`),
    selectDestination: (destCountry) => cy.get(`#steps-import-destination-import-destination-${destCountry}-field`),
    selectOrigin: (originCountry) => cy.get(`input#steps-country-of-origin-country-of-origin-${originCountry}-field`),
    originList: () => cy.get('#steps-country-of-origin-country-of-origin-field'),
  };

  // duty calc link to click on commodities page to navigate to duty calc app
  clkDutyCalcLnkOnCommoditiesPage() {
    this.elements.clkDutyCalcLnk().click();
  }

  goToDutyCalcURL(country, commodityCode) {
    commonPage.goToUrl(`/duty-calculator/${country}/${commodityCode}/import-date`);
    commonPage.verifyCountryBanner(country);
  }

  verifyPageTitle(titleToVerify) {
    cy.title().should('eq', `${titleToVerify} - Online Tariff Duty calculator`);
  }

  // When will the goods imported?
  verifyWhenWillTheGoodsImportPage() {
    this.elements.captionTitle();
    commonPage.verifyContains(this.elements.goodsImportHeading());
    this.verifyPageTitle(this.elements.goodsImportTitle());
  }

  // When will the goods imported? - enter date and click continue button
  enterDateAndClkContinueBtn(currentBoolVal, date, month, year) {
    if (currentBoolVal == true) {
      this.elements.importDate(3).clear().type(currentDate);
      this.elements.importDate(2).clear().type(currentMonth);
      this.elements.importDate(1).clear().type(currentYear);
    } else {
      this.elements.importDate(3).clear().type(date);
      this.elements.importDate(2).clear().type(month);
      this.elements.importDate(1).clear().type(year);
    }
    commonPage.clkContinueBtn();
  }

  // Which part of the UK are you importing into?
  verifySelectDestinationPage() {
    commonPage.verifyContains(this.elements.destinationCountry()+'?');
    this.verifyPageTitle(this.elements.destinationCountry());
  }

  // Which part of the UK are you importing into? - select destination country and click continue button
  selectDestinationAndClkContinue(destination) {
    this.elements.selectDestination(destination).check();
    commonPage.clkContinueBtn();
  }

  // Which country are the goods coming from?
  verifySelectOriginPage() {
    commonPage.verifyContains(this.elements.countryOfOriginHeading()+'?');
    this.verifyPageTitle(this.elements.countryOfOriginTitle());
  }

  // Which country are the goods coming from? - select origin and click continue button
  selectOriginAndClkContinue(origin) {
    this.elements.selectOrigin(origin).click();
    commonPage.clkContinueBtn();
  }

  selectOriginFromListAndClkContinueBtn(origin) {
    this.verifySelectOriginPage();
    this.elements.originList().click().clear().type(origin);
    commonPage.clkContinueBtn();
  }

  // no duty page
  verifyNoDutyPage() {
    commonPage.verifyContains(this.elements.noDuty());
    this.verifyPageTitle(this.elements.noDuty());
  }

  // click start again button on no duty page etc.
  clkStartAgainBtn() {
    commonPage.elements.govUKBtn().click();
    commonPage.verifyContains(this.elements.goodsImportHeading());
  }

  // Are you authorised under the UK Internal Market Scheme?
  verifyTradeSchemePage() {
    commonPage.verifyContains(this.elements.destinationCountryTxt()+'?');
    this.verifyPageTitle(this.elements.destinationCountryTxt());
  }
}

export default new DutyCalculatorPage();
