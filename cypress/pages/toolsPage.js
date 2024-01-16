import commonPage from '../pages/commonPage';

class ToolsPage {
  elements = {

    chkSimplfy: () => cy.get('a[href="/simplified_procedure_value"]'),
    quotaSrch: () => cy.get('a[href="/quota_search"]'),
    crtfctSrch: () => cy.get('a[href="/certificate_search"]'),
    adnlCodSrch: () => cy.get('a[href="/additional_code_search"]'),
    footNtSrch: () => cy.get('a[href="/footnote_search"]'),
    chmclSrch: () => cy.get('a[href="/chemical_search"]'),
    meursing: () => cy.get('a[href="/meursing_lookup/steps/start"]').should('not.exist'),
    xiChkSimplfy: () => cy.get('a[href="/xi/simplified_procedure_value"]'),
    xiCrtfctSrch: () => cy.get('a[href="/xi/certificate_search"]'),
    xiAdnlCodSrch: () => cy.get('a[href="/xi/additional_code_search"]'),
    xiFootNtSrch: () => cy.get('a[href="/xi/footnote_search"]'),
    xiChmclSrch: () => cy.get('a[href="/xi/chemical_search"]'),
    xiMeursing: () => cy.get('a[href="/xi/meursing_lookup/steps/start"]').should('not.exist'),
    headerTxt: () => cy.get('.govuk-header'),

  };
  verifyLinks(linkTxt) {
    for (let i=0; i<linkTxt.length; i++) {
      commonPage.verifyContains(linkTxt[i]);
    }
  }
  verifyHeader(txt) {
    this.elements.headerTxt().contains(txt);
  }
  verifyTextShudNotExist(txt) {
    for (let i=0; i<txt.length; i++) {
      commonPage.textShudNotExist(txt[i]);
    }
  }
}

module.exports = new ToolsPage();
