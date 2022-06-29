
Cypress.Commands.overwrite('visit', (orig, url, options = {}) => {
    const parentDocument = cy.state("window").parent.document
    const iframe = parentDocument.querySelector(".iframes-container iframe")
    if (false === options.script) {
      if (false !== Cypress.config("chromeWebSecurity")) {
        throw new TypeError("When you disable script you also have to set 'chromeWebSecurity' in your config to 'false'")
      }
      iframe.sandbox = ""
    } else {
      // In case it was added by a visit before, the attribute has to be removed from the iframe
      iframe.removeAttribute("sandbox")
    }
    return orig(url, options);
  })
  
  it.skip('JS disabled test', () => {
    cy.visit('https://staging.trade-tariff.service.gov.uk/commodities/0702000007#import', { script: false })
    cy.get('h1').contains('JavaScript is disabled')
  })