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
    quotasPopupTableData: () => cy.get('#popup > div > div > article > table > tbody'),
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

  verifyTableDataNotContains(txt) {
    this.elements.quotasPopupTableData().should('not.contain', txt);
  }

  verifyTableDataNotVisible(txt) {
    this.elements.quotasPopupTableData().contains(txt).should('not.be.visible');
  }

  verifyTableDataNotHave(txt) {
    this.elements.quotasPopupTableData().should('not.have.text', txt);
  }

  verifyTableBalanceDt() {
    this.elements.quotasPopupTableData().contains(`Balance (as of ${todaysDate})`);
  }

  verifyTableDataNumVal() {
    this.elements.quotasPopupTableData().contains(',');
  }

  verifyPreDtUrl(commodity, date) {
    cy.visit(`/commodities/${commodity}?${date}#quotas`);
  }

  verifyViewBalDt() {
    this.elements.quotasPopupTableData().contains(`View balance for ${todaysDate}`);
  }

  verifyPreDt() {
    this.elements.quotasPopupTableData().contains(`Balance (as of ${previousDate})`);
  }

  clickViewBalDt() {
    this.elements.quotasPopupTableData().contains(`View balance for ${todaysDate}`).click();
  }

  verifyFutrDtUrl(commodity) {
    cy.visit(`/commodities/${commodity}?${helpersFtrDtVal}#quotas`);
  }

  verifyFutrDt() {
    this.elements.quotasPopupTableData().contains(`Balance (as of ${futureDate})`);
  }

  verifyTableData(tableTxt) {
    this.elements.quotasPopupTableData().contains(tableTxt);
  }

  verifyStaticDtUrl(commodity, staticDtVal) {
    cy.visit(`/commodities/${commodity}?${helpers.dateToUrl(staticDtVal)}#quotas`);
  }

  verifyStaticDt(staticDate) {
    this.elements.quotasPopupTableData().contains(staticDate);
  }

  prevDt() {
    return helpersPreDtVal;
  }
}


export default new QuotasPopupPage();
