import dayjs from 'dayjs';

const todaysDate = dayjs().format('D MMM YYYY');
const previousDate = dayjs().subtract(1, 'M').format('D MMM YYYY');
const futureDate = dayjs().add(7, 'day').format('D MMM YYYY');
const helpers = {
  dateToUrl: (date) => {
    let parsedDate = null;
    if (date instanceof dayjs) {
      parsedDate = date.toDate();
    } else if (date instanceof Date) {
      parsedDate = date;
    } else {
      parsedDate = new Date(Date.parse(date));
    }
    return `day=${parsedDate.getDate()}&month=${parsedDate.getMonth() + 1}&year=${parsedDate.getFullYear()}`;
  },
};

const helpersPreDtVal = helpers.dateToUrl(previousDate);
const helpersFtrDtVal = helpers.dateToUrl(futureDate);

class QuotasPopupPage {
  elements = {
    panelTxt: () => cy.get('.govuk-tabs__panel'),
    quotasPopup: () => cy.get('#popup'),
    quotasPopupData: () => cy.get('#popup > div > div > article > table > tbody'),
    footNotesTxt: () => cy.get('#popup > div > div > article > p'),
    quotasOrderDetails: () => cy.get('.table-line'),
    quotasPopupTextDtls: () => cy.get('.tariff-info'),
    quotasInnerTextStatDate: () => cy.get('.info-inner'),
  };

  verifyPanelTxt(panelTxt) {
    this.elements.panelTxt().contains(panelTxt);
  }

  verifyTxt(headTxt) {
    this.elements.quotasPopup().contains(headTxt);
  }

  verifyPopupNotContains(txt) {
    this.elements.quotasPopupData().should('not.contain', txt);
  }

  verifyPopupNotVisible(txt) {
    this.elements.quotasPopupData().contains(txt).should('not.be.visible');
  }

  verifyPopupNotHave(txt) {
    this.elements.quotasPopupData().should('not.have.text', txt);
  }

  verifyBalDt() {
    this.elements.quotasPopupData().contains(`Balance (as of ${todaysDate})`);
  }

  verifyNumVal() {
    this.elements.quotasPopupData().contains(',');
  }

  verifyPreDtUrl(commodity, date) {
    cy.visit(`/commodities/${commodity}?${date}#quotas`);
  }

  verifyViewBalDt() {
    this.elements.quotasPopupData().contains(`View balance for ${todaysDate}`);
  }

  verifyPreDt() {
    this.elements.quotasPopupData().contains(`Balance (as of ${previousDate})`);
  }

  clickViewBalDt() {
    this.elements.quotasPopupData().contains(`View balance for ${todaysDate}`).click();
  }

  verifyFutrDtUrl(commodity) {
    cy.visit(`/commodities/${commodity}?${helpersFtrDtVal}#quotas`);
  }

  verifyFutrDt() {
    this.elements.quotasPopupData().contains(`Balance (as of ${futureDate})`);
  }

  verifyPopupContains(tableTxt) {
    this.elements.quotasPopupData().contains(tableTxt);
  }

  verifyStaticDtUrl(commodity, staticDtVal) {
    cy.visit(`/commodities/${commodity}?${helpers.dateToUrl(staticDtVal)}#quotas`);
  }

  verifyStaticDt(staticDate) {
    this.elements.quotasPopupData().contains(staticDate);
  }

  prevDt() {
    return helpersPreDtVal;
  }
}


export default new QuotasPopupPage();
