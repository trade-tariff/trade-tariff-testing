const commonPage = require('./commonPage');

class HomePage {
  elements = {
    plcyRmbrStngsRadioBtn: () => cy.get('#cookies_policy_remember_settings_true'),
    plcyUsgRadioBtn: () => cy.get('#cookies_policy_usage_false'),
    bnrHeader: () => cy.get('.govuk-notification-banner__header'),
    exchangeRateLnk: () => cy.get('a href="/exchange_rates"]'),
    chkSimplfdProcLnk: () => cy.get('a[href="/simplified_procedure_value"]'),
    quotasLnk: () => cy.get('a[href="/quota_search"]'),
    cerificateLicandDocLnk: () => cy.get('a[href="/certificate_search"]'),
    additionalCodeLnk: () => cy.get('a[href="/additional_code_search"]'),
    footNotsLnk: () => cy.get('a[href="/footnote_search"]'),
    chemicalsLnk: () => cy.get('a[href="/chemical_search"]'),
    meursingCodeFinderLnk: () => cy.get('a[href="/xi/meursing_lookup/steps/start"]'),
    privacyFootrLnk: () => cy.get('.govuk-footer__inline-list > li:nth-of-type(1) > .govuk-footer__link'),
    subAcsRqstLink: () => cy.get('a[href="https://www.gov.uk/guidance/hmrc-subject-access-request"]'),
    complaintsLink: () => cy.get('p:nth-of-type(21) > a'),
    addlCodeTbl: () => cy.get('.govuk-table.additional-code-table'),
    commodityTree: () => cy.get('article.tariff'),
    areHidn: () => cy.get('ul[aria-hidden="true"]'),
    comdtyArea: () => cy.get('.govuk-list a[href]'),
    commodityOnHeadList: () => cy.get('.govuk-breadcrumbs__list'),
    sumListData: () => cy.get('.govuk-summary-list'),
    popupInfo: () => cy.get('.info-content'),
    creditChkCode: () => cy.get('.484'),
    popup: () => cy.get('#popup'),
    // conditions: () => cy.get('#measure-'),

  };
  verifyOpenPopup() {
    this.popupInfo().should('be.visible');
  }

  chkPlcyUsgRadioBtn() {
    this.elements.plcyUsgRadioBtn().check();
  }
  chkPlcyRmbrStngsRadioBtn() {
    this.elements.plcyRmbrStngsRadioBtn().check();
  }
  verifyBannerHeadr(txt) {
    this.elements.bnrHeader().contains(txt);
  }
  verifyMeasureType(txt) {
    this.elements.creditChkCode().contains(txt);
  }

  verifyHeadrList(txt) {
    this.elements.commodityOnHeadList().contains(txt);
  }
  verifyAdlCodeDutiesTablData(txt) {
    commonPage.verifyContains(txt);
  }
  // clickConditions(measureCode, txt) {
  //   cy.get(`#measure-${measureCode}`).contains(txt).click();
  // }
  verifyToolLinks(data) {
    this.elements.exchangeRateLnk();
    this.elements.chkSimplfdProcLnk();
    this.elements.quotasLnk();
    this.elements.cerificateLicandDocLnk();
    this.elements.additionalCodeLnk();
    this.elements.footNotsLnk();
    this.elements.chemicalsLnk();
    if (data.ukLink) {
      this.elements.meursingCodeFinderLnk().should('not.exist');
    } else {
      this.elements.quotasLnk().should('not.exist');
      this.elements.exchangeRateLnk().should('not.exist');
    }
  }
  getCookie(name) {
    return cy.getCookie(name);
  }
  verifyFetchCookie(dataCookie, dataPolicy) {
    this.getCookie(dataPolicy).then((cookie) => {
      // cy.getCookie(dataPolicy).then((cookie) => {
      let cookieValue = null;
      if (cookie) {
        cookieValue = cookie.value;
        cookieValue = decodeURIComponent(cookieValue);
        cookieValue = JSON.parse(cookieValue);
      }
      if (dataPolicy == dataCookie.policy1) {
        expect(cookieValue).to.deep.equal(
            dataCookie.expectedPolicy1[0],
        );
      }
      if (dataPolicy == dataCookie.policy2) {
        expect(cookieValue).to.deep.equal(
            dataCookie.expectedPolicy2[0],
        );
      }
    });
  }
  verifyStaticTxt(dataToVerify) {
    for (let i = 0; i < dataToVerify.length; i++) {
      commonPage.verifyContains(dataToVerify[i]);
    }
  }
  clkEleStaticTxt(dataToClk) {
    this.elements.popupInfo().contains(dataToClk).click();
  }
  verifyEleStaticTxt(ele, dataToVerify) {
    if (dataToVerify==('Guidance for completing CDS Data Element 2/3')) {
      this.clkEleStaticTxt(dataToVerify);
    } else {
      commonPage.verifyEleTxtContains(ele, dataToVerify);
    }
  }

  verifyConditionsPopupOpenAndClk(measureCode, txtToClk) {
    cy.get(`#measure-${measureCode}`).contains(txtToClk).this.verifyOpenPopup();
  }

  clkFooterLnk() {
    this.elements.privacyFootrLnk().click();
  }
  clkSubAcsLink() {
    this.elements.subAcsRqstLink().click();
  }
  clkComplntLink() {
    this.elements.complaintsLink().click();
  }
  clkDataTreeOpnLnk(txt) {
    this.elements.commodityTree().contains(txt).click();
  }
  clkDataTreeClsLnk(txt) {
    this.elements.commodityTree().contains(txt).click();
  }
  verifyHidden() {
    this.elements.areHidn().should('be.hidden');
  }
  verifyCmdtyArea(txt, cls) {
    if (cls == 0) {
      this.elements.commodityTree().contains(txt).should('not.be.visible');
    } else {
      this.elements.commodityTree().contains(txt);
    }
  }
  verifyNotHaveText(txt) {
    this.elements.commodityTree().should('not.have.text', txt);
  }
  verifyExciseAdditionalCodePopup(exciseCode, dutyAmount) {
    cy.get('table').find('tr').each(($row) => {
      if ($row.text().includes('Additional code: X' + exciseCode)) {
        cy.contains('Additional code: X' + exciseCode);
        cy.verifyExciseMeasureType('X' + exciseCode);
        cy.wrap($row).contains('Conditions').click();
        this.elements.popup().contains('Apply the duty');
        this.elements.popup().contains(dutyAmount);
        cy.verfiyCDSDeclarationForExciseAdditionalCodes('X' + exciseCode);
        this.elements.popup().contains('Taric additional code / national additional code');
        this.elements.popup().contains('X' + exciseCode);
        cy.closePopup();
      }
    });
  }

  // common method for data parameterization
  verifyEleStaticData(testData) {
    const keys = Object.keys(testData);
    console.log(keys);
    let ele;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      switch (commonPage.getTestName()) {
        case 'UK - Shows the correct heading additional code duties table':
        case 'UK - Shows the correct subheading additional code duties table':
        case 'XI - shows the correct heading additional code duties table':
        case 'XI - Shows the correct subheading additional code duties table':
          ele = this.elements.addlCodeTbl();
          break;
        case 'UK - Start heading displays one tier further down':
        case 'XI - Start heading displays one tier further down':
          ele = this.elements.commodityTree();
          break;
        case 'Commodity does not have an end date':
        case 'XI - Commodity does not have an end date':
        case 'XI - Commodity does have an end date':
          ele = this.elements.sumListData();
          break;
        case 'Condition Code 999L - Separated with new text at the bottom':
        case 'Organic control on frog legs':
        case 'Fluorinated gases - multiple condition code groups':
        case 'Waste controls - pair of doc codes paired together':
        case 'Pet food from USA - multiple pairs of doc codes paired together':
        case 'Headings which are declarable / also commodities- fall back option enabled':
        case 'shows the correct threshold requirements on the export tab':
        case 'shows the correct threshold requirements':
        case 'shows credibility checks correctly':

          ele = this.elements.popupInfo();
          break;


        default: this.verifyStaticTxt(testData);
      }
      this.verifyEleStaticTxt(ele, testData[key]);
    }
  }
}
module.exports = new HomePage();
