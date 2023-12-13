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
    srchBanrtogl: () => cy.get('.tariff-search-banner__toggle'),
    srchBanr: () => cy.get('input#tariff-search-banner__q'),
    srchButn: () => cy.get('input[name=\'submit_search\']'),
  };
  chkPlcyUsgRadioBtn() {
    this.elements.plcyUsgRadioBtn().check();
  }
  chkPlcyRmbrStngsRadioBtn() {
    this.elements.plcyRmbrStngsRadioBtn().check();
  }
  verifyBannerHeadr(txt) {
    this.elements.bnrHeader().contains(txt);
  }
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
    for (let i=0; i<dataToVerify.length; i++) {
      commonPage.verifyContains(dataToVerify[i]);
    }
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
  verifyGlbllSrchForCmdty(searchString) {
    this.elements.srchBanrtogl().click();
    this.elements.srchBanr().click();
    this.elements.srchBanr().type(searchString);
    this.elements.srchButn().click();
  }
}
module.exports = new HomePage();
