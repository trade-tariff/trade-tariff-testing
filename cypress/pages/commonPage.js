class CommonPage {
  elements = {
    ukBannerTariff: () => cy.get('.govuk-header__content').contains('UK Integrated Online Tariff'),
    xiBannerTariff: () => cy.get('.govuk-header__content').contains('Northern Ireland Online Tariff'),
    ukTariff: () => cy.get('#content').contains('UK Integrated Online Tariff'),
    xiTariff: () => cy.get('#content').contains('Northern Ireland Online Tariff'),
    imageCheck: () => cy.get('.image-guide'),
    webChatLink: () => cy.get('#webchat-link > p > a'),
    closePopupBtn: () => cy.get('.close [href]'),
    backLnk: () => cy.get('.govuk-back-link'),
    hrefLnk: () => cy.get('#main-content .govuk-link'),
    govUKBtn: () => cy.get('.govuk-button'),
    continueTxt: () => 'Continue',
  };

  loadData(fileName) {
    cy.fixture(fileName).then((testData) => {
      Cypress.env('testData', testData);
    });
  }

  getTestData() {
    const testCaseData = [];
    const data = Cypress.env('testData');
    if (`${data}` != null && `${data}` != 'undefined') {
      const dataKey = Object.keys(data);
      const dataValues = Object.values(data);
      for (const key in dataKey) {
        if (dataKey[key] == this.getTestCaseName()) {
          testCaseData.push(dataValues[key]);
        } else if (dataKey[key] == 'commonData') {
          testCaseData.push(dataValues[key]);
        }
      }
      return Object.assign(testCaseData[0], testCaseData[1]);
    }
  }

  getTestCaseName() {
    return Cypress.currentTest.title;
  }

  goToBaseUrl(url) {
    cy.visit(url);
    this.elements.ukTariff();
    this.elements.xiTariff();
  }

  goToUrl(urlPathToVisit) {
    cy.visit(urlPathToVisit);
  }

  goToSpecificUrlToCheckPageAccess(urlPathToVisit) {
    cy.visit(urlPathToVisit, {failOnStatusCode: false});
  }

  verifyCountryBanner(country) {
    if (country == 'xi') {
      this.elements.xiBannerTariff();
    } else {
      this.elements.ukBannerTariff();
    }
  }

  verifyContains(strToVerify) {
    cy.contains(strToVerify);
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

  verifyPageShudHaveLnk(link) {
    this.elements.hrefLnk().should(
        'have.attr',
        'href',
        `${link}`,
    );
  }

  verifyWebChatShudHaveLnk(webChatLink) {
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

  verifyShudNotContains(txtToVerify2) {
    cy.should('not.contain', txtToVerify2);
  }

  clkBackLnk() {
    this.elements.backLnk().click();
  }

  clkContinueBtn() {
    this.verifyTxtAndClk(this.elements.continueTxt());
  }
}

export default new CommonPage();
