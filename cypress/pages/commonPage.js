
class CommonPage {
  elements = {
    ukBannerTariffTxt: () => cy.get('.govuk-header__content').contains('UK Integrated Online Tariff'),
    xiBannerTariffTxt: () => cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff'),
    ukTariffTxt: () => cy.get('#content').contains('UK Integrated Online Tariff'),
    xiTariffTxt: () => cy.get('#content').contains('Northern Ireland Online Tariff'),
    imageCheck: () => cy.get('.image-guide'),
    webChatLink: () => cy.get('#webchat-link > p > a'),
    closePopupBtn: () => cy.get('.close [href]'),
  };

  loadData(fileName) {
    cy.fixture(fileName).then((searchData) => {
      Cypress.env('testData', searchData);
    });
  }

  getTestData() {
    const data = Cypress.env('testData');
    const testCaseName = Cypress.currentTest.title;
    if (`${data}` != null && `${data}` != 'undefined') {
      return data[testCaseName];
    }
  }

  navigateToBaseUrl(url) {
    cy.visit(url);
    this.elements.ukTariffTxt();
    this.elements.xiTariffTxt();
  }

  goToUrl(urlPathToVisit) {
    cy.visit(urlPathToVisit);
  }

  goToSpecificUrlToCheckPageAccess(urlPathToVisit) {
    cy.visit(urlPathToVisit, {failOnStatusCode: false});
  }

  verifyContains(txtToVerify) {
    cy.contains(txtToVerify);
  }

  verifyTxtAndClk(txtToClk) {
    cy.contains(txtToClk).click();
  }

  imgShudExist() {
    this.elements.imageCheck().should('exist');
  }

  imgShudNotExist() {
    this.elements.imageCheck().should('not.exist');
  }

  verifyUrlShudInclude(urlStrToCheck) {
    cy.url().should('include', `${urlStrToCheck}`);
  }

  verifyUrlShudNotInclude(urlStrToCheck) {
    cy.url().should('not.include', `${urlStrToCheck}`);
  }

  verifyUrlShudMatch(urlStrToCheck) {
    const regexp = new RegExp(urlStrToCheck);
    cy.url().should('match', regexp);
  }

  verifyWebChatShudHaveLink(webChatLink) {
    this.elements.webChatLink().eq(1)
        .should(
            'have.attr',
            'href',
            `${webChatLink}`,
        );
  }

  textShudNotExist(txtToVerify) {
    cy.contains(txtToVerify).should('not.exist');
  }

  verifyPopupCloseBtn() {
    this.elements.closePopupBtn().click();
  }

  verifyShdNotContains(txtToVerify2) {
    cy.should('not.contain', txtToVerify2);
  }
}

module.exports = new CommonPage();

