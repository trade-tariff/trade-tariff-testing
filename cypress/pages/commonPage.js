class commonPage {

    elements = {
        ukTariffTxt: () => cy.get('#content').contains('UK Integrated Online Tariff'),
        xiTariffTxt: () => cy.get('#content').contains('Northern Ireland Online Tariff'),
        imageCheck: () => cy.get('.image-guide'),
        webChatLink: () => cy.get('#webchat-link > p > a')
    }

    loadData(fileName) {
        cy.fixture(fileName).then((searchData) => {
            Cypress.env('testData', searchData)
        })
    }

    navigateToBaseUrl(url) {
        cy.visit(url)
        this.elements.ukTariffTxt()
        this.elements.xiTariffTxt()
    }

    goToUrl(urlPathToVisit) {
        cy.visit(urlPathToVisit);
    }

    verifyContains(txtToVerify) {
        cy.contains(txtToVerify)
    }

    verifyTxtAndClk(txtToClk) {
        cy.contains(txtToClk).click()
    }

    imgShudExist() {
        this.elements.imageCheck().should('exist')
    }

    imgShudNotExist() {
        this.elements.imageCheck().should('not.exist')
    }

    verifyUrlShudInclude(urlStrToCheck) {
        cy.url().should('include', `${urlStrToCheck}`)
    }

    verifyUrlShudNotInclude(urlStrToCheck) {
        cy.url().should('not.include', `${urlStrToCheck}`)
    }

    verifyUrlShudMatch(urlStrToCheck) {
        var regexp = new RegExp(urlStrToCheck);
        cy.url().should('match', regexp)
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
        cy.contains(txtToVerify).should('not.exist')
     }

}

module.exports = new commonPage()